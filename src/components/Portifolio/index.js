import React, { Component } from "react";

export default class Portifolio extends Component {
  render() {
    return (
      <div>
        Portifolio
        <section className="user__info">
          <div className="user__presentation">
            <img src="" alt="User" className="user__photo" />
          </div>
          <h3 className="user__name" >Ola></h3>
        </section>
        <section className="user__history" />
      </div>
    );
  }
}
