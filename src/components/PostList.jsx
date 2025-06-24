import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const postsArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsArray);
    });

    return () => unsub();
  }, []);

  return (
    <div>
      <h2>Community Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p><i>Posted by {post.author}</i></p>
          </div>
        ))
      )}
    </div>
  );
}
