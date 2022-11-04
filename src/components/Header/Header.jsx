import { NavLink } from "react-router-dom"
import styled from "styled-components"

const HeadderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .userInfo{
        display: flex;
    }
`

export const Header = () => {
    return <HeadderStyled>
        <NavLink to='/'>Головна</NavLink>
        <div>
            <NavLink>Увійти</NavLink>
            <NavLink to='signup'>Зареєструватись</NavLink>
        </div>
        <div className="userInfo">
            <p>userInfo</p>
            <button>Вийти</button>
        </div>
    </HeadderStyled>
}