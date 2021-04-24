import styled, {css} from "styled-components";
import {Button, Layout, Row, Typography} from "antd";
const { Content } = Layout;
const {Title, Paragraph} = Typography;

export const Main = styled(Content)`
    height: calc(100vh - 140px);
`

export const CustomButton = styled(Button).attrs(()=>({size: 'large'}))`
    margin: 0 15px;
    min-width: 100px;
    color: white;
    &:hover {
        opacity: 0.8;
        background: rgba(50, 168, 82);
    }
    ${({type}) => type === 'primary' ? css`
            background: rgba(50, 168, 82);
            border: none;
            &:focus {
                outline: none;
                box-shadow: 1px 1px 10px rgba(50, 168, 82, .4);
                background: rgba(50, 168, 82);
                color: white;
            }
    ` : type === 'secondary' ?  css`
            background: rgba(50, 168, 82, .3);
            border: none;
              &:focus {
                outline: none;
                border: 1px solid rgba(50, 168, 82);
                background: rgba(50, 168, 82, .3);
                color: white;
              }
    ` :  css`
            background: rgba(50, 168, 82, .3);
            border: 1px solid rgba(50, 168, 82);
    `}
  
`


export const Card = styled(Row)`
    background: white;
    width: 100%;
    height: 450px;
    margin-top: 40px;
    box-shadow: 1px 1px 42px 0px rgba(0,0,0,0.3);
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

Card.Title = styled(Title)`
    
`;

Card.Body = styled(Paragraph)`
    
`;
