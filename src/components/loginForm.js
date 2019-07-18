import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { async } from "q";

class FormPage extends React.Component{
 
  componentDidMount(){
    /* this.fetcData() */
  }

fetchData = async () => {
   const response = await fetch()
}
  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value,

    });
  }

  handleClick = e => {
    console.log({
      name: e.target.name,
      value: e.target.value,

    });
  }
   
   render(){
    return (

    <MDBContainer>
      
      <MDBRow>
      <MDBCol md="3"></MDBCol>
        <MDBCol md="6">
        <div className="divfondo">
          <div className="contenedor1">
          <form>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                onChange={this.handleChange}
                name = "usuario"
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                onChange={this.handleChange}
                name = "contraseña"
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn onClick={this.handleClick}>Login</MDBBtn>
            </div>
          </form>
          </div>
          </div>
      
          </MDBCol>
          <MDBCol md="3"></MDBCol>
      </MDBRow>
     
    </MDBContainer>
  
  );
};
};
export default FormPage;

/*http://brazzers3x.com/movies/real-wife-stories-brazzers-jasmine-james-skyler-mckay-danny-d-keiran-lee-the-dinner-invitation-5-7-2016
http://brazzers3x.com/movies/pornstars-like-it-big-brazzers-sofia-cucci-danny-d-she-wants-big-cock-and-she-wants-it-now-12-9-2015
*/