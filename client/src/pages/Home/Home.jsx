import './home.scss'
import StatusBox from '../../components/statusBox/StaticBox'
import Post from '../../components/post/Post'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { fetchUsers } from '../../redux/usersRedux'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/postRedux'

const Home = ({ setActive, postActive, setPostActive, active }) => {    
    const dispatch = useDispatch()
    const posts = useSelector(state=>state.posts).posts
    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])
    console.log(posts)

    useEffect(()=>{
        dispatch(fetchPosts())
    },[dispatch])
    return (
        <div className="home">
            <div className="homeNav">
                <Navbar active={active} setActive={setActive} postActive={postActive} setPostActive={setPostActive}/>
            </div>
            <div className="homeWrapper" onClick={()=>setActive(false)}>
                <div className="left">
                    <StatusBox/>
                    {posts.map((post)=>
                        <Post key={post._id}post={post}/>
                    )}
                </div>
                <div className="right">
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}

export default Home
