import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import UserInfoTitle from "../UserInfoTitle/loadable";
import UserInfoText from "../UserInfoText/loadable";
import SkillsChart from "../SkillsChart/loadable";
import UserStoryTitle from "../UserStoryTitle/loadable";
import UserStoryContent from "../UserStoryContent/loadable";
export default class Portifolio extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="portifolio">
        <section className="portifolio__user-info">
          <div className="user-presentation">
            <div className="user-presentation__photo-container" />
            <h1 className="user-presentation__name">{profile.name}</h1>
            <h1 className="user-presentation__profession">
              {profile.profession}
            </h1>
          </div>
          <hr className="line-separation" />
          <div className="user-presentation">
            <UserInfoTitle title="Profile" />
            <UserInfoText text={[profile.description]} />
            <UserInfoTitle title="Contact" />
            <UserInfoText text={[profile.contact.tel, profile.contact.cel]} />
            <UserInfoText text={[profile.contact.address]} />
            <UserInfoText
              text={[profile.contact.website, profile.contact.mail]}
            />
            <UserInfoTitle title="Skills" />
            <SkillsChart skills={profile.skills} />
          </div>
        </section>
        <section className="portifolio__user-story">
          <UserStoryTitle title="work experience" />
          <UserStoryContent stories={profile.experience} />
          <UserStoryTitle title="education" />
          <UserStoryContent stories={profile.education} />
        </section>
      </div>
    );
  }
}

Portifolio.propTypes = {
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
