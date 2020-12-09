import React from 'react';
import Profile from '../profile/Profile';
import Statistics from '../statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import user from '../../json/user.json';
import statisticalData from '../../json/statistical-data.json';
import friends from '../../json/friends.json';
import transactions from '../../json/transactions.json';

export default function App() {
    return (
        <div>
            <h2>Task 1</h2>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <br />
            <h2>Task 2</h2>
            <Statistics title="Upload stats" stats={statisticalData} />
            <Statistics stats={statisticalData} />
            <br />
            <h2>Task 3</h2>
            <FriendList friends={friends} />
            <br />
            <h2>Task 4</h2>
            <TransactionHistory items={transactions} />
        </div>
    );
}
