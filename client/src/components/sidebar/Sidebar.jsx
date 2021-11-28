import './sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarTop">
                <div className="sidebarTopLeft">
                    <img src="https://i.ibb.co/TR6Qk7G/post1.jpg" alt="" className="sidebarProfilePic" />
                    <div className="sidebarTopLeftUser">
                        <span className="sidebarUsernameTop">kwesidev</span>
                        <span className="sidebarUsername" style={{textTransform: "uppercase"}}>kwesidev</span>
                    </div>
                </div>
                <div className="sidebarTopRight">
                    <button className="sidebarSwitchBtn">Switch</button>
                </div>
            </div>
            <div className="sidebarBottom">
                <table>
                    <thead>
                        <tr className="tableHeadContainer">
                            <th className="tableHead">
                                <span>Suggestions for you</span>
                            </th>
                            <th className="tableHead">
                                <span style={{color: "black"}}>See all</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="sidebarUsers">
                                    <div className="sidebarUsersLeft">
                                        <img src="https://i.ibb.co/TR6Qk7G/post1.jpg" alt="" className="sidebarUsersImg"/>
                                        <div className="sidebarUsersLeftSpans">
                                            <span >Daniel</span>
                                            <span className="span2">Follows You</span>
                                        </div>
                                    </div>
                                    <div className="sidebarUsersRight">
                                        <button className="followBtn">Follow</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="sidebarUsers">
                                    <div className="sidebarUsersLeft">
                                        <img src="https://i.ibb.co/TR6Qk7G/post1.jpg" alt="" className="sidebarUsersImg"/>
                                        <div className="sidebarUsersLeftSpans">
                                            <span >Daniel</span>
                                            <span className="span2">Follows You</span>
                                        </div>
                                    </div>
                                    <div className="sidebarUsersRight">
                                        <button className="followBtn">Follow</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="sidebarUsers">
                                    <div className="sidebarUsersLeft">
                                        <img src="https://i.ibb.co/TR6Qk7G/post1.jpg" alt="" className="sidebarUsersImg"/>
                                        <div className="sidebarUsersLeftSpans">
                                            <span >Daniel</span>
                                            <span className="span2">Follows You</span>
                                        </div>
                                    </div>
                                    <div className="sidebarUsersRight">
                                        <button className="followBtn">Follow</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Sidebar
