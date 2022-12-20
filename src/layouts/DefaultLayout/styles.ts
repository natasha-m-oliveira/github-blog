import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  > header + * {
    width: 100%;
    max-width: 864px;
    margin: -5.5rem auto 2rem;
    padding: 0 1rem;

    flex: 1;
  }
`
