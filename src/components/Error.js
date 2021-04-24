import React from 'react';
import {ErrorModal} from "./styles";
import {useHistory} from 'react-router-dom';

function Error(props) {
    const history = useHistory()
    function goToHome() {
        history.push("/1")
    }
    return (
        <ErrorModal>
            <ErrorModal.CallToAction onClick={goToHome}>
                Home
            </ErrorModal.CallToAction>
            <ErrorModal.Text>
                Parece que no estás en uno de los lugares seguros, por favor regresa al inicio.
            </ErrorModal.Text>
        </ErrorModal>
    );
}

export default Error;
