import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import './SportHeader.css';

class SportHeader extends Component {
  render() {
    const { title, links } = this.props;

    // Transform URL to Array
    const pathArray = window.location.href.split('/');
    // Get the last URL element
    const lastLevelLocation = pathArray[7];

    return (
      <section className="header">
        <h1 className="header-title">{title}</h1>
        { links.length > 0 ?
          <ul className="header-content-link">
            {links.map(link => (
              <li key={link.url} className="header-container-link">
                <Link
                  to={link.url}
                  data-regex={link.dataRegex}
                  className={`header-link__item ${lastLevelLocation === link.dataRegex ? 'header-link__item-active' : ''}`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          : null
        }
      </section>
    );
  }
}

SportHeader.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array,
};

SportHeader.defaultProps = {
  links: [],
};

export default SportHeader;
