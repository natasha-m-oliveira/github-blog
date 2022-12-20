import logo from '../../assets/logo.png'
import { HeaderContainer, ImageContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <ImageContainer>
        <img src={logo} alt="" />
      </ImageContainer>
    </HeaderContainer>
  )
}
