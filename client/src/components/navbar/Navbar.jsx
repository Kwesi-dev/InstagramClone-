import './navbar.scss'
import Logo from '../../imgs/instagramLogo.jpg'
import Messanger from '../../imgs/messanger.png'
import SearchIcon from '@mui/icons-material/Search'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import HomeIcon from '@mui/icons-material/Home'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'

const Navbar = ({ active, setActive }) => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <img src={Logo} alt="" className="logo" />
                </div>
                <div className="center">
                    <SearchIcon className="searchIcon"/>
                    <input type="text" placeholder="Search" className="searchInput"/>
                </div>
                <div className="right">
                    <div className="icons">
                        <div className="icon">
                            <HomeIcon/>
                        </div>
                        <div className="icon">
                            <img src={Messanger} alt="" className="mImg"/>
                            <div className="message">2</div>
                        </div>
                        <div className="icon">
                            <AddBoxOutlinedIcon/>
                        </div>
                        <div className="icon">
                            <ExploreOutlinedIcon/>
                        </div>
                        <div className="icon">
                            <FavoriteBorderOutlinedIcon/>
                        </div>
                    </div>
                    <div className="profile" onClick={()=>setActive(!active)}>
                        <img src="https://i.ibb.co/TR6Qk7G/post1.jpg" alt="" className="profilePic" />
                    </div>
                </div>
            </div>
            <div className={ active ? "profileInfoCard active": "profileInfoCard"}>
                <div className="profileInfoCardWrapper">
                    <div className="profileInfoCardItem">
                        <AccountCircleOutlinedIcon  className="cardIcon"/>
                        <span>Profile</span>
                    </div>
                    <div className="profileInfoCardItem">
                        <BookmarkBorderOutlinedIcon className="cardIcon"/>
                        <span>Saved</span>
                    </div>
                    <div className="profileInfoCardItem">
                        <SettingsOutlinedIcon   className="cardIcon"/>
                        <span>Settings</span>
                    </div>
                    <div className="profileInfoCardItem">
                        <AutorenewOutlinedIcon  className="cardIcon"/>
                        <span>Switch Account</span>
                    </div>
                    <div className="profileInfoCardItem logout">
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
