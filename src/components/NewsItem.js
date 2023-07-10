import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {title}{" "}
            {/* <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
              <span class="visually-hidden">unread messages</span>
            </span> */}
          </h5>
          <p className="card-text">{description}</p>
          <a
            href={newsUrl}
            target="_blank  "
            className="btn btn-sm btn btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
