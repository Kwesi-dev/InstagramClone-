import './post.scss'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import { useState } from 'react';
const Post = () => {
    const [optionsActive, setOptionsActive] = useState(false)
    // const [cancel, setCancel] = useState(false)
    // console.log(cancel);
    return (
        <div className="post">
            {optionsActive && 
            <>
                <div className="optionsContainer">
                    <div className="option">
                        <span className="red">Report</span>
                    </div>
                    <div className="option">
                    <span className="red">Unfollow</span>
                    </div>
                    <div className="option">
                        <span className="option">Go to post</span>
                    </div>
                    <div className="option">
                        <span className="option">Share to ...</span>
                    </div>
                    <div className="option">
                        <span className="option">Tagged acccouts</span>
                    </div>
                    <div className="option">
                    <span className="option">Embed</span>
                    </div>
                    <div className="option">
                        <span className="option">CopyLink</span>
                    </div>
                    <div className="option last" onClick={()=>setOptionsActive(false)}>
                        <span className="option">Cancel</span>
                    </div>    
                </div>
            </>
            }
            <div className="postHeader">
                <div className="postHeaderLeft">
                    <img src="https://i.ibb.co/VDm3kxP/post2.jpg" alt="" className="profilePic" />
                    <span className="postUsername">Kwesi Afriyie</span>
                </div>
                <div className="postHeaderRight" onClick={()=>setOptionsActive(!optionsActive)}>
                    <MoreHorizIcon/>
                </div>
            </div>
            <img src="https://i.ibb.co/cbQnv6s/logo-white-background-mens-v-neck-t-shirt.jpg" alt="" className="postImage" />
            <div className="postFooter">
                <div className="postFooterTop">
                    <div className="pfooterTopLeft">
                        <FavoriteBorderOutlinedIcon className="pFIcon"/>
                        <img src="https://img.icons8.com/ios/50/000000/topic.png" className="pFIcon" alt=""/>
                        <NearMeOutlinedIcon className="pFIcon"/>
                    </div>
                    <div className="pfooterTopRight">
                        <BookmarkBorderOutlinedIcon className="pFIcon"/>
                    </div>
                </div>
                <div className="postInfo">
                    <span style={{fontSize: "15px"}}>156.8k likes</span>
                    <p style={{marginTop: "20px", fontSize: "15px", marginBottom: "10px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, id, eius enim magnam illum error, quibusdam corporis facilis soluta placeat molestias velit recusandae. Deserunt, aliquid quidem minus atque laborum possimus.</p>
                    <span style={{color: "#8e8e8e", fontSize: "12px"}}>12 hours ago</span>
                </div>
                <div className="comment">
                    <div className="cleft">
                        <SentimentSatisfiedIcon/>
                        <input type="text" placeholder="comment" className="postComment"/>
                    </div>
                    <div className="cRight">
                        <button className="cBtn">Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
