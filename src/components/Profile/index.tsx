import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { api } from '@lib/axios'
import { useEffect, useState } from 'react'
import {
  DetailsContainer,
  NameContainer,
  ProfileAvatar,
  ProfileContainer,
  ProfileContent,
} from './styles'

interface User {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}

export function Profile() {
  const [user, setUser] = useState({} as User)

  async function findMe() {
    const response = await api.get<User>('users/natasha-m-oliveira')
    setUser(response.data)
  }

  useEffect(() => {
    findMe()
  }, [])
  return (
    <ProfileContainer>
      <ProfileAvatar>
        <img src={user?.avatar_url} alt="" />
      </ProfileAvatar>
      <ProfileContent>
        <NameContainer>
          <h1>{user?.name}</h1>
          <a href={user?.html_url}>
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        </NameContainer>

        <p>{user?.bio}</p>

        <DetailsContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <p>{user?.login}</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} size="lg" />
            <p>{user?.company}</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} size="lg" />
            <p>
              {user?.followers} seguidor{user?.followers !== 1 && 'es'}
            </p>
          </span>
        </DetailsContainer>
      </ProfileContent>
    </ProfileContainer>
  )
}
