import './login.scss'
import Logo from '../../imgs/instagramLogo.jpg'
import facebook from '../../imgs/facebook.png'
import AppStore from '../../imgs/appleStore.png'
import GoogleStore from '../../imgs/googlePlayStore.png'
import LoginImage1 from '../../imgs/loginImage1.jpg'
import LoginImage2 from '../../imgs/loginImage2.png'
const Login = () => {
    return (
        <div className="login">
            <div className="wrapper">
                <div className="left">
                    <img src={LoginImage2} alt="" className="leftImage" />
                    <img src={LoginImage1} alt="" className="leftImage2" />
                </div>
                <div className="right">
                    <div className="rightTop">
                        <img className="formLogo" src={Logo} alt=""/>
                        <form>
                            <input type="text" placeholder="username"/>
                            <input type="password" placeholder="password"/>
                            <button className="loginBtn">Log In</button>
                        </form>
                        <span className="or">OR</span>
                        <div className="socialLogin">
                            <img src={facebook} alt="" />
                            <span>Log in with facebook</span>
                        </div>
                        <span className="forgot">Forgot password?</span>
                    </div>
                    <div className="signUpBox">
                        <span>Don't have an account? </span>
                        <span className="signUp">Sign up</span>
                    </div>
                    <div className="rightBottom">
                        <span>Get the app.</span>
                        <div className="rBImages">
                            <img src={AppStore} alt="" className="appImage"/>
                            <img src={GoogleStore} alt="" className="appImage"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
