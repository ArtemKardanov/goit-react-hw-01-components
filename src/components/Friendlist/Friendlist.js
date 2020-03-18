import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friendlist.module.css';
import FriendlistItem from '../FriendListItem/FriendListItem';

const Friendlist = ({ friends = [] }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendlistItem
        id={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

Friendlist.defaultProps = {
  alt: 'user avatar',
};

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Friendlist;
