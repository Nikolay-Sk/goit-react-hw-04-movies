import React, { Component } from "react";
import * as API from "../../services/api";
import styles from "./Cast.module.css";

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    API.Cast(movieId).then((Res) => {
      console.log("Res :", Res);
      this.setState({ cast: Res.data.cast });
    });
  }

  render() {
    const { cast } = this.state;

    return (
      <ul>
        {cast.map((el) => (
          <li className={styles.list} key={el.id}>
            <img
              className={styles.image}
              src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
              alt=""
            />
            <p>{el.name}</p>
            <p>{el.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
