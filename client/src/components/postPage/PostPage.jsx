import './postPage.scss'
import videoIcon from '../../imgs/videoIcon.svg'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'

const PostPage = ({postActive, setPostActive}) => {
    const image=""
    return (
        <div className={postActive ? "postPage" : "postPage close"}>
            <CloseOutlinedIcon className="postPageClose" onClick={()=>setPostActive(false)}/>
            {!image ? (
                <>
                    <div className="postPageWrapper">
                        <div className="postPageTop">
                            <span>create a new post</span>
                        </div>
                        <div className="postPageBottom">
                            <img src={videoIcon} alt="" />
                            <span>Drag photos and videos here</span>
                            <input type="file" id="file" style={{display: "none"}}/>
                            <label htmlFor="file" className="fileSelectBtn">
                                select from computer
                            </label>
                        </div>
                    </div>
                </>
            ) :(    
            <>
                <div className="postPageWrapper second">
                    <div className="postPageTop">
                        <KeyboardBackspaceOutlinedIcon className="backIcon"/>
                        <span>Post</span>
                    </div>
                    <div className="postPageBottom">
                    <img src="" alt="" className="toPostImage"/>
                        <span>write your comment</span>
                        <textarea type="text" className="postComment"/>
                    </div>
                </div>
            </>
            )}
        </div>
    )
}

export default PostPage
