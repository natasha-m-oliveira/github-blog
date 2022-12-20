import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-top: 4.5rem;
`

export const PostCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.75rem;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostsContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  gap: 2rem;
`
