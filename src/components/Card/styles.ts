import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border-radius: 10px;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    white-space: nowrap;
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`

export const CarContent = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
