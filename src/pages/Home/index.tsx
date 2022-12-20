import { Card } from '@components/Card'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PostCounter, PostsContainer } from './styles'

export function Home() {
  return (
    <div>
      <Profile />

      <HomeContainer>
        <PostCounter>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </PostCounter>
        <SearchForm />

        <PostsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </PostsContainer>
      </HomeContainer>
    </div>
  )
}
