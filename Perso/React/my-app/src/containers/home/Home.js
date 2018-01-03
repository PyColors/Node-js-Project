import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Translate from 'react-translate-component';
import { apiGet } from '../../utils/apiUtils';

import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      sport: null,
    };
  }

  componentDidMount() {
    this.getSport();
  }

  getSport = () => apiGet(`https://fe-api.smarkets.com/v0/events/popular/${this.props.params.id}`)
      .then((response) => {
        this.setState({
          sport: response,
          isLoading: false,
        });
      }).catch((error) => {
        // Error!!!
        this.setState({ isLoading: false });
      })

  render() {

    const { isLoading, sport } = this.state;

    const childrenWithProps = React.cloneElement(this.props.children, {
      sport: this.state.sport,
    });

    if (isLoading) {
      return <div className="loader" />;
    }

    if (sport === null) {
      return (
        <div>
          <Translate
            content="SPORT_NOT_FOUND"
            className="home__not-found"
          />  
        </div>
      );
    }

    return (
      <section className="sport-container">
        {childrenWithProps}
      </section>
    );
  }
}

Home.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

export default Home;
