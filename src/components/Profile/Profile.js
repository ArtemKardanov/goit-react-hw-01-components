import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ imgURL, name, tag, location, alt, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={imgURL} alt={alt} className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <ul className={styles.stats}>
      {Object.keys(stats).map(item => (
        <li key={item}>
          <span className={styles.label}>{item}</span>
          <span className={styles.quantity}>{stats[item]}</span>
        </li>
      ))}
    </ul>
  </div>
);

Profile.defaultProps = {
  alt: 'user avatar',
};

Profile.propTypes = {
  imgURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Profile;
