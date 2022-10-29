import { createPortal } from "react-dom";
import styled from "styled-components";
import { MutatingDots } from "react-loader-spinner";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0000007f;
`


export const Loader = ({isLoading}) => {
    const domNode = document.querySelector("#lodater-portal");
    return createPortal(
        <>
            {isLoading && <Overlay>
                <MutatingDots 
                    height="100"
                    width="100"
                    color="#eeff00"
                    secondaryColor= '#001aff'
                    radius='12.5'
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </Overlay>}
        </>,
        domNode
    )
}