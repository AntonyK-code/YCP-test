import { useEffect, useState } from 'react';
import { firestore } from './firebase';

function CommunityHub() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const fetchPosts = () => {
    firestore.collection('posts').onSnapshot((snapshot) => {
      const postsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsData);
    });
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    firestore.collection('posts').add({ content: newPost });
    setNewPost('');
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Community Hub</h2>
      <form onSubmit={handlePostSubmit}>
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share something..."
          required
        />
        <button type="submit">Post</button>
      </form>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommunityHub;
