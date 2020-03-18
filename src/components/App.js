import React from 'react';
import user from './Profile/user.json';
import statisticalData from './Statistics/statistical-data.json';
import friends from './Friendlist/friends.json';
import transactions from './TransactionHistory/transactions.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Friendlist from './Friendlist/Friendlist';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => (
  <>
    <Profile
      imgURL={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <Friendlist friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
