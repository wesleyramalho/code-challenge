import React, { Component } from "react";
import PropTypes from "prop-types";
import { TimelineLite } from "gsap/all";

import "./styles.scss";

export default class UserInfoText extends Component {
  constructor(props) {
    super(props);
    // cards, elements tha will be used in the tween
    this.cards = [];
    // the timeline instance
    this.tl = new TimelineLite({ paused: true });
  }
  componentDidMount() {
    this.tl.staggerTo(this.cards, 0.5, { autoAlpha: 1, y: -20 }, 0.1);
    this.tl.play(); 
  }

  render() {
    this.tl
      .kill()
      .clear()
      .pause(0);

    const { text } = this.props;
    if (!text.length) return null;
    return (
      <div className="user-content">
        {text.map((textItem, index) => {
          return (
            <h1
              key={textItem}
              className="user-content__text"
              ref={h1 => (this.cards[index] = h1)}
            >
              {textItem}
            </h1>
          );
        })}
      </div>
    );
  }
}

UserInfoText.propTypes = {
  text: PropTypes.array
};
