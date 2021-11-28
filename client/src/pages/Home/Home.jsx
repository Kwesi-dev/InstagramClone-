import './home.scss'
import StatusBox from '../../components/statusBox/StaticBox'
import Post from '../../components/post/Post'
import Sidebar from '../../components/sidebar/Sidebar'
const Home = ({ setActive }) => {
    return (
        <div className="home" onClick={()=>setActive(false)}>
            <div className="homeWrapper">
                <div className="left">
                    <StatusBox/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
                <div className="right">
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}

export default Home
