import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import s from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.friendList}>
            {friends.map(({ id, name, avatar, isOnline }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    );
};
FileList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default FriendList;
