import PropTypes from "prop-types";
import React, { Component } from "react";
import { TimelineLite } from "gsap/all";
import "./styles.scss";

export default class UserStoryContent extends Component {
  constructor(props) {
    super(props);
    // cards, elements tha will be used in the tween
    this.cards = [];
    // the timeline instance
    this.tl = new TimelineLite({ paused: true });
  }
  componentDidMount() {
    this.tl.staggerTo(this.cards, 0.5, { autoAlpha: 1, y: -20 }, 0.1);
    this.tl.play()
  }

  render() {
    this.tl
    .kill()
    .clear()
    .pause(0);

    const { stories } = this.props;
    return (
      
      <div className="user-story-text-container">
        {stories.map(({ name, date, description }, index) => (
          <div
            key={name}
            className="user-story-text-container__content"
            ref={div => (this.cards[index] = div)}
          >
            <h1 className="user-story-text-container__content__name">{name}</h1>
            <span className="user-story-text-container__content__date">
              {date}
            </span>
            <p className="user-story-text-container__content__description">
              {description}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

UserStoryContent.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};
