import styled from 'styled-components'

export const SearchFormContainer = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme['base-input']};
  padding: 1rem;
  border: 1px solid ${(props) => props.theme['base-border']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:not(:disabled):focus {
    border: 1px solid ${(props) => props.theme['blue-500']};
    box-shadow: 0 0 0 1px transparent;
  }
`
