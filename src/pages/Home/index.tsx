/* eslint-disable camelcase */
import { useState } from 'react'
import useSWR from 'swr'
import { Card } from '@components/Card'
import { Profile } from '@components/Profile'
import { api } from '@lib/axios'
import { formatCreatedAt } from '@utils/formatCreatedAt'
import { SearchForm } from './components/SearchForm'
import {
  HomeContainer,
  PostCounter,
  PostsContainer,
  PostsEmpty,
} from './styles'
import { useDebounce } from '@hooks/useDebounce'

export interface Post {
  html_url: string
  number: number
  user: {
    login: string
  }
  title: string
  created_at: string
  body: string
  reactions: {
    total_count: number
  }
}

async function fetchPosts(key: string) {
  const query = key.replace(/^posts\//, '')

  const { data } = await api.get<{ items: Post[] }>(
    `/search/issues?q=${query}%20repo:natasha-m-oliveira/github-blog`,
  )

  return data.items.map((post): Post => {
    const maxLength = 256
    return {
      ...post,
      body: post.body.slice(0, maxLength),
      created_at: formatCreatedAt(post.created_at),
    }
  })
}

export function Home() {
  const [query, setQuery] = useState('')

  const debouncedQuery = useDebounce<string>(query)

  const { data: posts, error } = useSWR(`posts/${debouncedQuery}`, fetchPosts)

  return (
    <div>
      <Profile />

      <HomeContainer>
        <PostCounter>
          <h2>Publicações</h2>
          <span>
            {posts?.length} publica{posts?.length === 1 ? 'ção' : 'ções'}
          </span>
        </PostCounter>
        <SearchForm onChangeValue={setQuery} />

        {posts ? (
          posts.length ? (
            <PostsContainer>
              {posts.map(({ title, body, created_at, number }) => (
                <Card
                  key={number}
                  id={number}
                  title={title}
                  content={body}
                  createdAt={created_at}
                />
              ))}
            </PostsContainer>
          ) : (
            <PostsEmpty>
              <h2>Nenhum post por aqui...</h2>
              <span>Aguarde por novas atualizações</span>
            </PostsEmpty>
          )
        ) : (
          <PostsEmpty>
            <h2>Ocorreu um erro ao buscar pelos posts 😰</h2>
            <span>{error?.message}</span>
          </PostsEmpty>
        )}
      </HomeContainer>
    </div>
  )
}
