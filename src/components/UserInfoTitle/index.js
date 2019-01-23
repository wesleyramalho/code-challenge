import React, { Component } from "react";
import PropTypes from "prop-types";
import { TimelineLite } from "gsap/all";
import "./styles.scss";

export default class UserInfoTitle extends Component {
  constructor(props) {
    super(props);

    this.logoTl = new TimelineLite({ paused: true });
    this.description = null;
  }

  // add instances to the timeline
  componentDidMount() {
    this.logoTl.from(
      this.description,
      0.5,
      { left: 100, autoAlpha: 0 },
      "feature+=0.25"
    );
    this.logoTl.play();
  }

  render() {
    const { title } = this.props;
    return (
      <div ref={div => (this.description = div)} className="user-info">
        <h1 className="user-info__title">{title}</h1>
      </div>
    );
  }
}

UserInfoTitle.propTypes = {
  title: PropTypes.string.isRequired
};
