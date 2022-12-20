import styled from 'styled-components'
import cover from '@assets/cover.svg'

export const HeaderContainer = styled.header`
  background: url(${cover});
  background-size: cover;
  background-repeat: no-repeat;

  min-height: 18rem;

  display: flex;
  justify-content: center;
  padding: 4rem;
`

export const ImageContainer = styled.div`
  width: 9rem;

  img {
    display: block;
    max-width: 100%;
  }
`
