import Profile from './components/profile.js'
import user from './user.json';
import statisticalData from './statistical-data.json';

export default function App() {
  return <div>
     <Profile
  name={user.name}
  avatar={user.avatar}
  tag={user.tag}
  location={user.location}
      stats={user.stats}
    />


    <Statistics title="Upload stats" stats={statisticalData} />;
{/* <Statistics stats={statisticalData} />; */}

  </div>;
}



