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
        text: "We're gonna do 3 fundamentals exercises."
    },
    {
        title: "First, 10 push-ups",
        text: "Do 10 reps. Remember about full range of motion. Don't rush."
    },
    {
        title: "Next 20 squads",
        text: "Squads are important. Remember to keep your back straight."
    },
    {
        title: "Finally, 15 sit-ups",
        text: "Slightly bend your knees. Remember about full range of motion."
    },
    {
        title: "Great job!",
        text: "You made it, have a nice day and see you next time!"
    }
]

function Home(props) {
    const [pos, setPos] = useState(0)
    function back() {
        if(pos > 0) setPos(pos - 1);
    }

    function next() {
        if(pos < DATA.length) setPos(pos + 1);
    }

    function restart() {
        if(pos > 0) setPos(0);
    }

    return (
        <Layout>
            <Header>Header</Header>
            <Main align="middle">
                <Row align="middle" justify='center' style={{height: '100%'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col lg={12} sm={24}>
                        <Row justify='center' style={{marginTop:20}}>
                        <CustomButton onClick={restart} type={pos < 1 ? "secondary" : "primary"} size={'Large'} color={'rgba(50, 168, 82, 1)'}>
                            Restart
                        </CustomButton>
                        <CustomButton onClick={back} type={pos <= 0 ? "secondary" : "primary"} size={'Large'} color={'rgba(50, 168, 82, 1)'}>
                            Prev
                        </CustomButton>
                        <CustomButton onClick={next} type="primary" size={'Large'} color={'rgba(50, 168, 82, 1)'}>
                            Next
                        </CustomButton>
                        </Row>
                        <Card>
                            <Card.Title>
                                {DATA[pos].title}
                            </Card.Title>
                            <Card.Body>
                                {DATA[pos].text}
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
