import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  DetailsContainer,
  NameContainer,
  ProfileAvatar,
  ProfileContainer,
  ProfileContent,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileAvatar>
        <img src="https://github.com/natasha-m-oliveira.png" alt="" />
      </ProfileAvatar>
      <ProfileContent>
        <NameContainer>
          <h1>Cameron Williamson</h1>
          <a href="">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        </NameContainer>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <DetailsContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <p>cameronwll</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} size="lg" />
            <p>Rocketseat</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} size="lg" />
            <p>32 seguidores</p>
          </span>
        </DetailsContainer>
      </ProfileContent>
    </ProfileContainer>
  )
}
