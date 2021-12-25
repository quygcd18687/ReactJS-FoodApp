import "./sidebar.css";
import {HomeOutlined, LiveTvOutlined, PeopleOutlineOutlined,BookmarkBorderOutlined} from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ui className="sidebarList">
                    <li className="sidebarListItems">
                        <HomeOutlined className="feedbarIcon"/>
                        <span className="feedItemText">Recommend for you</span>
                    </li>
                    <li className="sidebarListItems">
                        <PeopleOutlineOutlined className="feedbarIcon"/>
                        <span className="feedItemText">Folowing</span>
                    </li>
                    <li className="sidebarListItems">
                        <LiveTvOutlined className="feedbarIcon"/>
                        <span className="feedItemText">LIVE</span>
                    </li>
                    <li className="sidebarListItems">
                        <BookmarkBorderOutlined className="feedbarIcon"/>
                        <span className="feedItemText">Saved</span>
                    </li>
                </ui>
                <button className="sidebarButton">More</button>
                <hr className="sidebarHR"/>
                <ui className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="./assets/person/user02.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Annabel</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/user03.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Mailu Cue</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/user04.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jack</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/user05.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Natalya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/user05.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Natalya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/user05.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Natalya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/user05.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Natalya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/user05.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Natalya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/user05.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Natalya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/user05.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Natalya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/user05.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Natalya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/user05.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Natalya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/user05.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Natalya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/user05.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Natalya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/user05.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Natalya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/person/user05.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Natalya</span>
                    </li>
                </ui>
            </div>
        </div>
    )
}
