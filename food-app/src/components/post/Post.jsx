import "./post.css";
import { Users } from "../../Data";
import { MoreVert } from "@material-ui/icons";
import { useState } from "react";


export default function Post({ post }) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                            alt="" className="postProfileImg" />
                        <span className="postUserName">
                            {Users.filter((u) => u.id === post?.userId)[0].username}
                        </span>
                        <span className="postTime">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="./assets/heart.png" onClick={likeHandler} alt="" className="heartIcon" />
                        <span className="postheartCouter">{like} people dropped their hearts</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment">{post.comment} comment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
