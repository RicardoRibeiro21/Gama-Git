import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    height: 240px;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;
export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;    
`;

export const Input = styled.input`
    height: 1.5rem;
    padding: 0 .5rem; 
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const Button = styled.button`
    border: 1px solid #333;
    border-radius: .25rem ;
    height: 1.8rem;
    margin-left: 1%;
    color: #fff;
    background: #333;

    &:focus {
        cursor: pointer;
    };
    &:active {
        outline: none;
        box-shadow: none;        
    }

`;

export const ErrorMessage = styled.span`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: .5rem;
`
