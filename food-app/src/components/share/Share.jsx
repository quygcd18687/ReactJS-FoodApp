import "./share.css";
import {PermMedia,LabelOutlined,PinDrop,MusicVideoOutlined} from "@material-ui/icons";

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="./assets/person/user01.jpg" alt="" className="shareProfilePicture" />
                    <input placeholder="What's in your want to share?" className="shareInput" />
                    <hr className="shareHR" />
                </div>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="#EC255A" className="shareIcon"/>
                            <span className="shareOptonText">Video or picture</span>
                        </div>
                        <div className="shareOption">
                            <LabelOutlined htmlColor="#00A19D" className="shareIcon"/>
                            <span className="shareOptonText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <PinDrop htmlColor="#316B83" className="shareIcon"/>
                            <span className="shareOptonText">location</span>
                        </div>
                        <div className="shareOption">
                            <MusicVideoOutlined htmlColor="#4B3869" className="shareIcon"/>
                            <span className="shareOptonText">Music</span>
                        </div>
                    </div>
                    <button className="Post">Post</button>
                </div>
            </div>
        </div>
    )
}
