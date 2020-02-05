import React, { Component } from 'react';
import './Home.css';
import ImageResults from '../ImageResults/ImageResults';
import Axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      amount: 20,
      apiUrl: 'https://pixabay.com/api',
      apiKey: 'Your pixabay API Key',
      images: [],
      videos: [],
      type: 'photo'
    };
  }

  onChangeAmount = (e, index, value) => {
    this.setState({ amount: e.target.value });
  };
  onChangeType = (e, index, value) => {
    this.setState({ type: e.target.value });
  };

  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ images: [], videos: [] });
      } else if (this.state.type === 'photo') {
        Axios.get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=${this.state.type}&per_page=${this.state.amount}&safesearch=true`
        )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      } else {
        Axios.get(
          `${this.state.apiUrl}/${this.state.type}/?key=${this.state.apiKey}&q=${this.state.searchText}&per_page=${this.state.amount}&safesearch=true`
        )
          .then(res => this.setState({ videos: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };

  render() {
    return (
      <div>
        <section className="banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>
                    PixaBay Finder
                  </h1>
                  <h4>Stunning free images & royalty free stock</h4>
                  <p>
                    Over 1 million+ high quality stock images and videos shared
                    by our talented community.
                  </p>
                  <form class="form-inline my-2 my-lg-2">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Search images & videos "
                      style={{ width: '20rem' }}
                      name="searchText"
                      onChange={this.onTextChange}
                    />
                    <select
                      className="custom-select custom-select-md mr-1"
                      name="amount"
                      onChange={this.onChangeAmount}
                      value={this.state.amount}
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="50">50</option>
                    </select>
                    <select
                      className="custom-select custom-select-md mr-1"
                      name="amount"
                      onChange={this.onChangeType}
                      value={this.state.type}
                    >
                      <option value="photo">Photos</option>
                      <option value="videos">Videos</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : (
          <ImageResults videos={this.state.videos} />
        )}
      </div>
    );
  }
}

export default Home;
