import React from "react";
import {signIn, signOut} from "../actions";
import { connect } from "react-redux";
class GoogleAuth extends React.Component{

   

    componentDidMount = (eve)=>{
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:'658695337194-3rf2s6uhm328d7jmht1o6dq1jmpsbc6f.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
               this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onSignInClick = (  )=>{
      this.auth.signIn()
    }

    onSignOutClick = () =>{
        this.auth.signOut()
    }
    onAuthChange = (isSignedIn)=>{
        console.log("at time ", isSignedIn)
        console.log("User ID Now is ", this.auth.currentUser.get().getId())
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
          }else{
            this.props.signOut()
          }
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return(
                <button onClick={this.onSignOutClick} className="ui red google button ">
                    <i className="google icon">

                    </i>
                    Sign Out 
                </button>

            )
        }else{
            return(
                <button onClick={this.onSignInClick} className="ui red google button ">
                <i className="google icon">

                </i>
                Sign In with google 
            </button>
            )
        }
    }
    render(){
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return {isSignedIn : state.authred.isSignedIn }
}
export default connect(mapStateToProps,{
    signIn,
    signOut
})(GoogleAuth);