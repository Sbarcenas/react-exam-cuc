import styled, {css} from "styled-components";
import {Button, Layout, Row, Typography} from "antd";
const { Content } = Layout;
const {Title, Paragraph} = Typography;

export const Main = styled(Content)`
    height: calc(100vh - 140px);
    overflow: hidden;
`

export const CustomButton = styled(Button).attrs(()=>({size: 'large'}))`
    margin: 0 15px;
    min-width: 100px;
    color: white;
    &:hover {
        opacity: 0.8;
        background: rgba(50, 168, 82);
    }

  @media (max-width: 768px) {
    min-width: 80px;
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
    @media (max-width: 475px) {
      padding: 80px 0;  
      height: 300px;
    }
`;

Card.Title = styled(Title)`
  @media (max-width: 475px) {
    text-align: center;
  }
`;

Card.Body = styled(Paragraph)`
  @media (max-width: 475px) {  
    max-width: 350px;
    text-align: center;
  }
`;

