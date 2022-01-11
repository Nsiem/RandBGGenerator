import React from "react";
import Banner from './Banner';
import './App.css'
const posts = [
  { id: '1', name: 'This first post is about React' },
  { id: '2', name: 'This next post is about Preact' },
  { id: '3', name: 'We have yet another React post!' },
  { id: '4', name: 'This is the fourth and final post' },
];
function App() {
  return (
    <div>
      <Banner />
      <ul>
          {posts.map((post) => (
              <li key={post.id}>{post.name}</li>
          ))}
       </ul>
    </div>
    
  )
}

export default App;
