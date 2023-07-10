import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import Footer from "./Footer";

export class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  static defaultProps = {
    category: 'general',
    country: 'in'
  };

  constructor() {
    super();
    this.state = {
      results: [],
      loading: false
    };
  }

  async componentDidMount() {
    let url = `https://newsdata.io/api/1/news?apikey=pub_259416e53674cf395e1c310e2931b3e095af4&q=${this.props.category}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles)
    this.setState({
      results: parsedData.results,
      loading: false
      
    });
  }

  render() {
    const { results, loading } = this.state;
  
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center" style={{ textTransform: 'uppercase' }}>{this.props.category}</h2>
          <hr />
          {loading ? (
            <Spinner />
          ) : (
            <>
              <div className="row">
                {results.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url} style={{ paddingLeft: '20px', paddingTop: '10px' }}>
                      <NewsItem
                        title={element.title}
                        description={element.description ? element.description.slice(0, 88) : ''}
                        imageUrl={!element.image_url ? 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg' : element.image_url}
                        newsUrl={element.link}
                      />
                    </div>
                  );
                })}
              </div>
              <br />
              <Footer />
            </>
          )}
        </div>
      </>
    );
  }
}  
export default News;
