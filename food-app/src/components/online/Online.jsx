import "./online.css"

export default function Online({ user }) {
  return (
    <div className="onlineCSS">
      <li className="rightbarFriend">
        <div className="PrifileImgContainer">
          <img className="rightbarImgUser" src={user.profilePicture} alt="" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightUserName">{user.username}</span>
      </li>
    </div>

  );
}