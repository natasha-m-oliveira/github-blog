import useSWR from 'swr'
import { Article } from '@pages/Post/components/Article'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { api } from '@lib/axios'
import { Post as IPost } from '@pages/Home'
import { MouseEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
  ControllersContainer,
  DetailsContainer,
  PostContainer,
  PostContent,
  PostHeader,
} from './styles'
import { formatCreatedAt } from '@utils/formatCreatedAt'

async function fetchPost(key: string): Promise<IPost> {
  const number = key.replace(/^post\//, '')

  const { data } = await api.get<IPost>(
    `/repos/natasha-m-oliveira/github-blog/issues/${number}`,
  )

  return {
    ...data,
    created_at: formatCreatedAt(data.created_at),
  }
}

export function Post() {
  const { id } = useParams()
  const { data: post, error } = useSWR(`post/${id}`, fetchPost)
  const navigate = useNavigate()

  function comeBack(e: MouseEvent) {
    e.preventDefault()
    navigate(-1)
  }

  if (!post || error) {
    return <div className=""></div>
  }

  return (
    <PostContainer>
      <PostHeader>
        <ControllersContainer>
          <a href="" onClick={comeBack}>
            <FontAwesomeIcon icon={faChevronLeft} size="xs" /> VOLTAR
          </a>
          <a href={post.html_url}>
            VER NO GITHUB{' '}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        </ControllersContainer>

        <h1>{post?.title}</h1>

        <DetailsContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <p>{post.user.login}</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} size="lg" />
            <p>{post.created_at}</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} size="lg" />
            <p>
              {post.reactions.total_count} comentário
              {post.reactions.total_count !== 1 && 's'}
            </p>
          </span>
        </DetailsContainer>
      </PostHeader>
      <PostContent>
        <Article content={post.body} />
      </PostContent>
    </PostContainer>
  )
}
