import styled from "styled-components";

export const StyledMain = styled.main`
    & .userForm{
        width: 414px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 187px;
        
        & input{
            display: block;
            width: 100%;
            height: 62px;
            margin-top: 24px;
            border-radius: 100px;
            border: none;
            background-color: white;
        }

        & label{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            margin-top: 40px;
            padding-left: 16px;

            display: flex;
            align-items: flex-end;
            text-align: center;
        }
        & button{
            padding: 16px 32px;
            display: block;
            margin-left: auto;
            margin-right: auto;

            background: rgba(101, 91, 86, 0.21);
            border-radius: 100px;
            border: none;


            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 30px;
            text-align: center;

            color: #F5F5F5;
        }

        & .errorMesage{
            height: 18px;
            margin-top: 22px;
            margin-bottom: 22px;

            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            text-align: center;
            color: #FF0707;
        }
    }
`