import "./SingleVideo.css";

const SingleVideo = ({ item }) => {
  return (
    <div className="single-video-playbox">
      <iframe
        className="single-video-play"
        width="750"
        height="400"
        src={item.videoLink}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="single-page-category"># {item.category}</div>
      <div className="single-video-description">{item.description}</div>
      <div className="single-video-lastline-box">
        <div className="single-video-parent-btn">
          <i class="fa-solid fa-heart single-video-heart"></i>
          <span>&nbsp; Like</span>
        </div>
        <div className="single-video-parent-btn">
          <i class="fa-solid fa-clock add"></i>
          <span> Watch Later</span>
        </div>
        <div className="single-video-parent-btn">
          <i class="fa-solid fa-folder-plus"></i>
          <span> &nbsp;Save</span>
        </div>
        <div className="single-video-parent-btn">
          <i class="fa-solid fa-clipboard"></i>
          <span> &nbsp;Copy Link</span>
        </div>
      </div>
    </div>
  );
};

// onClick={() => navigator.clipboard.writeText(`${item.videoLink}`)}

export { SingleVideo };
