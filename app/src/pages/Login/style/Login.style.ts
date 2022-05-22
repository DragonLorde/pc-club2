import styled from 'styled-components'
import back from '../../../sourse/img/login-reg.png'

const LoginContainer = styled.div`
    z-index: 1;
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: url(${back});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export default LoginContainer

