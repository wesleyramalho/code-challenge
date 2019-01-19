import React, { Component } from "react";
import Portifolio from "./components/Portifolio/loadable";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      error: false,
      loading: true
    };
  }

  //Load info from API after component has been monted
  componentDidMount() {
    fetch("http://www.mocky.io/v2/5a5e38f3330000b0261923a5")
      .then(response => {
        response.json().then(({ profile }) => {
          this.setState({
            profile,
            loading: false,
            error: false
          });
        });
      })
      .catch(error => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  hasLoadedSuccessfully = () => {
    const { loading, error, profile } = this.state;
    if (!loading && !error && profile) return true;
    return false;
  };

  hasErrorWhileLoading = () => {
    const { loading, error } = this.state;
    if (error && !loading) return true;
    return false;
  };

  isLoading = () => {
    const { loading, error } = this.state;
    if (loading && !error) return true;
    return false;
  };

  render() {
    const { profile } = this.state;
    if (this.isLoading()) {
      return <div>Carregando</div>;
    } else if (this.hasErrorWhileLoading()) {
      return <div>erro</div>;
    } else if (this.hasLoadedSuccessfully()) {
      return <Portifolio profile={profile} />;
    }
    return null;
  }
}
