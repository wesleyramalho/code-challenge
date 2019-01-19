import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Portifolio extends Component {
  render() {
    const { profile } = this.props;
    console.log(profile);
    return (
      <div>
        Portifolio
        <section className="user__info">
          <div className="user__presentation">
            <img src="" alt="User" className="user__photo" />
          </div>
          <h3 className="user__name">{profile.contact.tel}kkk</h3>
        </section>
        <section className="user__history" />
      </div>
    );
  }
}

Portifolio.protoTypes = {
  profile: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    contact: PropTypes.shape({
      tel: PropTypes.string.isRequired,
      cel: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      mail: PropTypes.string.isRequired
    }).isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    ).isRequired,
    experience: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      })
    ).isRequired,
    education: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};
