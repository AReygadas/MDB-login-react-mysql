import React from 'react';
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import logo from "../logo.png";

class Home extends React.Component{

    render(){
        return(
            <React.Fragment>
                    <MDBContainer>
                    <MDBRow center style={{ height: "100vh" }}>
                    <MDBCol middle="true" sm="8" className="text-center">
                        <img src={logo} alt="logo" style={{ width: "10rem" }} />
                        <h1>Welcome to Your React App</h1>
                        <MDBBtn href="/login"  color="light-blue"><strong>Inicia!</strong></MDBBtn>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        )
    }
}
export default Home;