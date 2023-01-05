import styled from 'styled-components'

export const PostContainer = styled.div``

export const PostHeader = styled.div`
  border-radius: 10px;
  padding: 2rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`

export const ControllersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.25rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;
    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme['blue-500']};

    border-bottom: 1px solid transparent;

    transition: border 150ms;
  }

  a:hover {
    border-bottom-color: ${(props) => props.theme['blue-500']};
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  margin-top: 0.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['base-label']};

    p {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 2rem;
`
