import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Friendlist/Friendlist.module.css';

const FriendListItem = ({ isOnline, avatar, name, id }) => (
  <li className={styles.friendListItem} key={id}>
    <span className={isOnline ? styles.isOnline : styles.isOfline}></span>
    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
