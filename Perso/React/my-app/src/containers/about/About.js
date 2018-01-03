import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SportHeader from '../../components/sport-header/SportHeader';

class About extends Component {
  render() {
    const links = [
      {
        title: "About",
        url: `/sport/${this.props.params.id}/about`,
        dataRegex: "about",
      },
      {
        title: "TestAbout",
        url: `/test/${this.props.params.id}/test`,
        dataRegex: "test",
      },
    ];

    const childrenWithProps = React.cloneElement(this.props.children, {
      sport: this.props.sport,
    });

    return (
      <div>
        <SportHeader
          title="About"
          links={links}
        />
        {childrenWithProps}
      </div>
    );
  }
}

About.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired,
};

export default About;
