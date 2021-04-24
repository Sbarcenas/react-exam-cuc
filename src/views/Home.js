import React, {useState} from 'react';
import { Button, Layout, Row, Col, Typography} from 'antd';
import styled, {css} from 'styled-components'
const { Header, Footer, Content } = Layout;
const {Title, Paragraph} = Typography;


const Main = styled(Content)`
    height: calc(100vh - 140px);
`

const CustomButton = styled(Button).attrs(()=>({size: 'large'}))`
    margin: 0 15px;
    min-width: 100px;
    ${({type}) => type === 'primary' ? css`
            background: rgba(50, 168, 82);
            border: none;
            &:active{
              background: rgba(50, 168, 82);
            }
    ` : type === 'secondary' ?  css`
            background: rgba(50, 168, 82, .3);
            border: none;
            &:active{
              background: rgba(50, 168, 82, ,7);
            }
    ` :  css`
            background: rgba(50, 168, 82, .3);
            border: 1px solid rgba(50, 168, 82);
    `}
  
`


const Card = styled(Row)`
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

const DATA = [
    {
        title: "Today's workout plan",
        text: "We're gonna do 3 fundamentals exercises"
    },
    {
        title: "Today's workout plan",
        text: "We're gonna do 3 fundamentals exercises"
    },
    {
        title: "Today's workout plan",
        text: "We're gonna do 3 fundamentals exercises"
    },
    {
        title: "Today's workout plan",
        text: "We're gonna do 3 fundamentals exercises"
    },
    {
        title: "Today's workout plan",
        text: "We're gonna do 3 fundamentals exercises"
    }
]

function Home(props) {
    const [pos, setPos] = useState(0)
    return (
        <Layout>
            <Header>Header</Header>
            <Main align="middle">
                <Row align="middle" justify='center' style={{height: '100%'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col lg={12} sm={24}>
                        <Row justify='center' style={{marginTop:20}}>
                        <CustomButton type="secondary" size={'Large'} color={'rgba(50, 168, 82, 1)'}>
                            Restart
                        </CustomButton>
                        <CustomButton type="secondary" size={'Large'} color={'rgba(50, 168, 82, 1)'}>
                            Prev
                        </CustomButton>
                        <CustomButton type="primary" size={'Large'} color={'rgba(50, 168, 82, 1)'}>
                            Next
                        </CustomButton>
                        </Row>
                        <Card>
                            <Card.Title>
                                {DATA[0].title}
                            </Card.Title>
                            <Card.Body>
                                {DATA[0].text}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Main>
            <Footer>Sebastian Bárcenas</Footer>
        </Layout>
    );
}

export default Home;
