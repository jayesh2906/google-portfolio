import React from "react";

const ProjectVideos = () => {
  return (
    <div>
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6904281486057373696"
        height="780"
        width="504"
        frameBorder="0"
        allowFullScreen=""
        title="Embedded post"
      ></iframe>

      <iframe
        width="100%"
        height="100%"
        src="http://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6904281486057373696"
        title="YouTube video player"
        frameBorder="0"
        loading="lazy"
        fetchpriority="high"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"
      ></iframe>
    </div>
  );
};

export default ProjectVideos;
