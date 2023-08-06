import React from "react";

const NewsItems = (props) => {
  let { title, description, imageUrl, newsId, author, date, source } = props;
  return (
    <div className="my-3 mx-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span class=" badge rounded-pill bg-danger ">{source}</span>
        </div>

        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small clasName="text-danger">
              By {author} on {new Date(date).toUTCString()}
            </small>
          </p>
          <a href={newsId} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
