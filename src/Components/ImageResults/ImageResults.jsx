import React, { Component } from 'react';
import './ImageResults.css';
import PropTypes from 'prop-types';
import { IoIosStarOutline } from 'react-icons/io';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';

class ImageResults extends Component {
  render() {
    const { images, videos } = this.props;
    let imagesListContainer, videosListContainer;
    if (images) {
      imagesListContainer = images.map(img => {
        return (
          <div>
            <img key={img.id} src={img.largeImageURL} alt="" />
            <p>
              {img.user}{' '}
              <span className="icons">
                <AiOutlineLike />: {img.likes} <IoIosStarOutline />:{' '}
                {img.favorites} <FaRegComment />: {img.comments}
              </span>{' '}
            </p>
          </div>
        );
      });
    } else {
      imagesListContainer = null;
    }

    if (videos) {
      videosListContainer = videos.map(video => {
        return (
          <div>
            <video
              key={video.id}
              src={video.videos.large.url}
              autoPlay
            />
            <p>
              {video.user}{' '}
              <span className="icons">
                <AiOutlineLike />: {video.likes} <IoIosStarOutline />:{' '}
                {video.favorites} <FaRegComment />: {video.comments}
              </span>{' '}
            </p>
          </div>
        );
      });
    } else {
      videosListContainer = null;
    }
    return (
      <section className="images-list p-2">
        <div className="container-fluid p-0">
          <div class="row">
            <div class="col-12">
              <div className="images-grid">
                {imagesListContainer}
                {videosListContainer}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};
export default ImageResults;
