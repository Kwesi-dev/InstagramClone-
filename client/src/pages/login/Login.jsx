import './login.scss'
import Logo from '../../imgs/instagramLogo.jpg'
import facebook from '../../imgs/facebook.png'
import AppStore from '../../imgs/appStore.png'
import GoogleStore from '../../imgs/googlePlay.png'
import InstagramPic2 from '../../imgs/instagram1.jpg'

const Login = () => {
    return (
        <div className="login">
            <div className="wrapper">
                <div className="left">
                    <img src={InstagramPic2} alt="" className="leftImage" />
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
