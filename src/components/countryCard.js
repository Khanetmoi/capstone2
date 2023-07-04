import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryCard = ({
  name, area, flagPng, flagAlt, className,population, capital
}) => (
  <Link to={`/country/${name.common}`} key={area} className={className}>
    <div className="frame">
      <img src={flagPng} alt={flagAlt} />
    </div>
    <div>
      <h3>{name.common}</h3>
      <p>{area.toLocaleString().concat(' km²')}</p>
      <p>{population.toLocaleString()} people</p>
      <p>{capital}</p>
    </div>
  </Link>
);

CountryCard.propTypes = {
  // eslint-disable-next-line
  name: PropTypes.object,
  area: PropTypes.number,
  flagPng: PropTypes.string,
  flagAlt: PropTypes.string,
  className: PropTypes.string,
  population: PropTypes.number,
  capital: PropTypes.string,
};

CountryCard.defaultProps = {
  name: '',
  area: 0,
  population: 0,
  flagPng: '',
  flagAlt: '',
  className: '',
  capital: '',
};

export default CountryCard;
