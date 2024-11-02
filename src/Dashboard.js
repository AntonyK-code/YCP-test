import { useEffect, useState } from 'react';
import { firestore } from './firebase';

function Dashboard() {
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    firestore.collection('posts').get().then(snapshot => {
      setPostCount(snapshot.size);
    });
  }, []);

  return (
    <div>
      <h2>Engagement Dashboard</h2>
      <p>Total Posts: {postCount}</p>
    </div>
  );
}

export default Dashboard;
