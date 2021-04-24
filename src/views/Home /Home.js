import React, {useEffect, useState} from 'react';
import { Layout, Row, Col} from 'antd';
import {Card, CustomButton, Main} from "./Styles";
import {useParams, useHistory} from 'react-router-dom'
const { Header, Footer } = Layout;


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
    const [pos, setPos] = useState(1)
    const {topicId} = useParams();
    const history = useHistory()

    function back() {
        if(pos > 1) {
            const val = pos - 1
            history.push(`/${val}`)
        }
    }

    function next() {
        if(pos < DATA.length) {
            const val = pos + 1
            history.push(`/${val}`)
            setPos(val)
        }
    }

    function restart() {
        if(pos > 1) history.push('/1');
    }

    useEffect(()=>{
        const relPos = parseInt(topicId)
        if (relPos >= 1 & relPos <= DATA.length) setPos(relPos)
    },[topicId])

    return (
        <Layout>
            <Header>Header</Header>
            <Main align="middle">
                <Row align="middle" justify='center' style={{height: '100%'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col lg={12} sm={24}>
                        <Row justify='center' style={{marginTop:20}}>
                        <CustomButton onClick={restart} type={pos < 2 ? "secondary" : "primary"} size={'Large'} color={'rgba(50, 168, 82, 1)'}>
                            Restart
                        </CustomButton>
                        <CustomButton onClick={back} type={pos <= 1 ? "secondary" : "primary"} size={'Large'} color={'rgba(50, 168, 82, 1)'}>
                            Prev
                        </CustomButton>
                        <CustomButton onClick={next} type={pos === DATA.length ? "secondary" : "primary"} size={'Large'} color={'rgba(50, 168, 82, 1)'}>
                            Next
                        </CustomButton>
                        </Row>
                        <Card>
                            <Card.Title>
                                {DATA[pos-1].title}
                            </Card.Title>
                            <Card.Body>
                                {DATA[pos-1].text}
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
