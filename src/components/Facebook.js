import React, {Component} from 'react';
import FacebookLoginBtn from 'react-facebook-login';


export default class LoginFacebook extends Component {
    state ={
        auth: false, //returns that the user is not login
        name : '',
        picture :''
      
      }

      componentClicked =() =>{
          console.log("Facebook component Clicked");
      }

      responseFacebook =(response) =>{
          console.log(response);
          if(response.status !=='unknown'){
          this.setState({
              auth:true,
              name:response.name,
              picture:response.picture.data.url
          });}
      }
      
      render() {
        let FacebookData;
      
        this.state.auth ?
        FacebookData = (
            <div>
                <img src={this.state.picture} />
                <h1>Wellcome {this.state.name}</h1>
            </div>

            ) :
            FacebookData =(
                <FacebookLoginBtn
                    appId="3378653265559661"
                    autoLoad={true}
                    fields="name,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />

            );
            return (
                <>
                {FacebookData}
                </>
            );

      
}}