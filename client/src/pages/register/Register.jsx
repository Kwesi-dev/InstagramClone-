import './register.scss'
import Logo from '../../imgs/instagramLogo.jpg'
import facebook from '../../imgs/facebook1.png'
import AppStore from '../../imgs/appStore.png'
import GoogleStore from '../../imgs/googlePlay.png'

const Register = () => {
    return (
        <div className="register">
            <div className="wrapper">
            <div className="right">
                    <div className="rightTop">
                        <img className="formLogo" src={Logo} alt=""/>
                        <span className="topInfo">Sign up to see photos and videos from your friends</span>
                        <div className="socialLogin">
                            <img src={facebook} alt="" />
                            <span>Log in with facebook</span>
                        </div>
                        <span className="or">OR</span>
                        <form>
                            <input type="text" placeholder="mobile number or email"/>
                            <input type="text" placeholder="Full name"/>
                            <input type="text" placeholder="Username"/>
                            <input type="password" placeholder="password"/>
                            <button className="loginBtn">Sign up</button>
                        </form>
                        <span className="terms">By signing up, you agree to our Terms, Data Policy and Cookie Policy </span>
                    </div>
                    <div className="signUpBox">
                        <span>Have an account? </span>
                        <span className="signUp">Log in</span>
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

export default Register
