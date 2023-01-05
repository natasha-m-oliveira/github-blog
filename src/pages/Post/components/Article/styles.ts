import styled from 'styled-components'

export const ArticleContainer = styled.div`
  overflow: hidden;
  p {
    font-size: 1rem;
  }
  strong {
    font-size: 1rem;
    font-weight: 700;
  }
  a {
    font-size: 1rem;
    color: ${({ theme }) => theme['blue-500']};
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    max-width: 100%;
    object-fit: cover;
  }
  ul {
    margin-left: 1.25rem;
  }
  .line-break {
    white-space: pre-wrap;
  }
`
