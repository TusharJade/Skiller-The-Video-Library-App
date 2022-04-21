import "./HorizontalVideo.css";
import { useNavigate } from "react-router-dom";

const HorizontalVideo = ({ video }) => {
  const navigate = useNavigate();
  return (
    <div
      className="horizontal-outerbox"
      onClick={() => navigate(`/video/${video._id}`)}
    >
      <img
        className="horizontal-img-box"
        src={video.thumbnailImg}
        alt="error"
      />
      <div className="horizontal-all-detail">
        <div className="horizontal-video-des">
          {video.description.substring(0, 40)}...
        </div>
        <div className="horizontal-creator-name">
          {video.creator} &nbsp;
          {video.premiumCreator ? (
            <i className="fa-solid fa-circle-check horizon-creator"></i>
          ) : null}
        </div>
        <div className="horizontal-card-lastline">
          <div>{video.views} views</div>
          <i className="fa-solid fa-circle horizontal-dot"></i>
          <div>{video.time} ago</div>
        </div>
      </div>
    </div>
  );
};

export { HorizontalVideo };
