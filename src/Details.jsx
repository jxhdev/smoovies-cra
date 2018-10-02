// @flow

import React, { Component } from 'react';
import Header from './Header';

type Props = {
  show: {
    title: string,
    year: string,
    poster: string,
    description: string,
    trailer: string
  }
};
class Details extends Component<Props, null> {
  componentDidMount() {}
  props: Props;
  render() {
    const { title, year, poster, description, trailer } = this.props.show;
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          <img
            src={`/public/img/posters/${poster}`}
            alt={`Poster for ${title}`}
          />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            title={`Trailer for ${title}`}
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default Details;
