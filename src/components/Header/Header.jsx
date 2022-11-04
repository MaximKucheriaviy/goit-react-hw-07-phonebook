import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { GrHome } from "react-icons/gr";
import { useEffect, useState } from "react";
import { API } from "service/api";

const HeadderStyled = styled.header`
    height: 80px;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${props => props.theme.primaryColor};
    & .userInfo{
        gap: 32px;

        display: flex;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: white;

        & button{
            border: none;
            background-color: transparent;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            color: white;
        }
    }

    & .navButtons{
        display: flex;
        gap: 32px;
    }

    & .homeIcon{
        width: 23px;
        height: 23px;
        stroke: white;
        & path{
            stroke: white;
        }
    }
`

const StyledLink = styled(NavLink)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: white;
    text-decoration: none;
`

export const Header = ({token, logOut}) => {
    const [userMail, setUserMail] = useState("");

    useEffect(() => {
        const fetchMail = async () =>{
            try{
                const response = await API.getCurrentUser(token);
                setUserMail(response.data.email);
            }
            catch(err){
                console.log(err);
            }
        }
        if(!token){
            setUserMail("");
            return;
        }
        fetchMail();
    }, [token])

    return <HeadderStyled>
        <StyledLink to='/'>
            <GrHome className="homeIcon"/>
        </StyledLink>
        {!token ? 
            <div className="navButtons">
                <StyledLink to="login">Увійти</StyledLink>
                <StyledLink to='signup'>Зареєструватись</StyledLink>
            </div> :
            <div className="userInfo">
                <p>{userMail}</p>
                <button onClick={logOut}>Вийти</button>
            </div>
        }
    </HeadderStyled>
}