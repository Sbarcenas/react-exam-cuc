import styled from "styled-components";
import {Typography} from "antd";
import {CustomButton} from "../views/Home /Styles";
const {Paragraph} = Typography

export const ErrorModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
`

ErrorModal.Text = styled(Paragraph)`
    margin-top: 40px;
`;
ErrorModal.CallToAction = styled(CustomButton).attrs(()=>({type: 'primary'}))``
