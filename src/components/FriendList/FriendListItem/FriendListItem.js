import React from 'react';
import PropTypes from 'prop-types';
import s from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ id, avatar, name, isOnline = true }) => {
    return (
        <li className={s.item} key={id}>
            <span
                // className={s.status}
                className={isOnline ? `${s.isOnline}` : `${s.isOffline}`}
            ></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
};

export default FriendListItem;
