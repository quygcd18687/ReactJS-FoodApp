import "./rightbar.css";
import { Users } from "../../Data";
import Online from "../online/Online";

export default function Rightbar() {
    // const HomeRightbar = () => {
    return (
        <div className="righrbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="./assets/gift-box.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img src="./assets/ads.jpg" alt="" className="rightbarAds" />
                <h4 className="rightbarTitle">Online friend</h4>
                <ul className="rightbarfriendList">
                    <li className="rightbarFriend">
                        <div className="PrifileImgContainer">
                            <img className="rightbarImgUser" src="assets/person/user01.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightUserName">Thuan Duong</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="PrifileImgContainer">
                            <img className="rightbarImgUser" src="assets/person/user01.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightUserName">Thuan Duong</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="PrifileImgContainer">
                            <img className="rightbarImgUser" src="assets/person/user01.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightUserName">Thuan Duong</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="PrifileImgContainer">
                            <img className="rightbarImgUser" src="assets/person/user01.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightUserName">Thuan Duong</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="PrifileImgContainer">
                            <img className="rightbarImgUser" src="assets/person/user01.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightUserName">Thuan Duong</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="PrifileImgContainer">
                            <img className="rightbarImgUser" src="assets/person/user01.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightUserName">Thuan Duong</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="PrifileImgContainer">
                            <img className="rightbarImgUser" src="assets/person/user01.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightUserName">Thuan Duong</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="PrifileImgContainer">
                            <img className="rightbarImgUser" src="assets/person/user01.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightUserName">Thuan Duong</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="PrifileImgContainer">
                            <img className="rightbarImgUser" src="assets/person/user01.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightUserName">Thuan Duong</span>
                    </li>

                    {/* {Users.map((u) => (
                            <Online key={u.id} user={u} />
                        ))} */}
                </ul>
            </div>
        </div>
    )
}
//     const ProfileRightbar = () => {
//         return (
//             <>
//                 <h4 className="rightbarTitle">User information</h4>
//                 <div className="rightbarInfo">
//                     <div className="rightbarInfoItem">
//                         <span className="rightbarInfoKey">City:</span>
//                         <span className="rightbarInfoValue">New York</span>
//                     </div>
//                     <div className="rightbarInfoItem">
//                         <span className="rightbarInfoKey">From:</span>
//                         <span className="rightbarInfoValue">Madrid</span>
//                     </div>
//                     <div className="rightbarInfoItem">
//                         <span className="rightbarInfoKey">Relationship:</span>
//                         <span className="rightbarInfoValue">Single</span>
//                     </div>
//                 </div>
//                 <h4 className="rightbarTitle">User friends</h4>
//                 <div className="rightbarFollowings">
//                     <div className="rightbarFollowing">
//                         <img
//                             src="assets/person/user01.jpg"
//                             alt=""
//                             className="rightbarFollowingImg"
//                         />
//                         <span className="rightbarFollowingName">John Carter</span>
//                     </div>
//                     <div className="rightbarFollowing">
//                         <img
//                             src="assets/person/user2.jpg"
//                             alt=""
//                             className="rightbarFollowingImg"
//                         />
//                         <span className="rightbarFollowingName">John Carter</span>
//                     </div>
//                     <div className="rightbarFollowing">
//                         <img
//                             src="assets/person/user3.jpg"
//                             alt=""
//                             className="rightbarFollowingImg"
//                         />
//                         <span className="rightbarFollowingName">John Carter</span>
//                     </div>
//                     <div className="rightbarFollowing">
//                         <img
//                             src="assets/person/user4.jpg"
//                             alt=""
//                             className="rightbarFollowingImg"
//                         />
//                         <span className="rightbarFollowingName">John Carter</span>
//                     </div>
//                     <div className="rightbarFollowing">
//                         <img
//                             src="assets/person/user5.jpg"
//                             alt=""
//                             className="rightbarFollowingImg"
//                         />
//                         <span className="rightbarFollowingName">John Carter</span>
//                     </div>
//                     <div className="rightbarFollowing">
//                         <img
//                             src="assets/person/user6.jpg"
//                             alt=""
//                             className="rightbarFollowingImg"
//                         />
//                         <span className="rightbarFollowingName">John Carter</span>
//                     </div>
//                 </div>
//             </>
//         );
//     };
//     return (
//         <div className="rightbar">
//             <div className="rightbarWrapper">
//                 {profile ? <ProfileRightbar /> : <HomeRightbar />}
//             </div>
//         </div>
//     );
// }

