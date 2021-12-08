import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

import NavBar from '../../components/NavBar/NavBar';
import * as postAPI from '../../utilities/posts-api';
import HomePage from '../HomePage/HomePage';
import AllPostsPage from '../AllPostsPage/AllPostsPage';
import CreatePostPage from '../CreatePostPage/CreatePostPage';

export default function App() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    async function getPosts(){
      const posts = await postAPI.getAll();
      setPosts(posts);
    }
    getPosts();
  }, [])

  async function handleAddPost (newPostData) {
    console.log('Post added');
    const newPost = await postAPI.create(newPostData);
    setPosts([...posts.abbrev, newPost])
  }

  return (
    <main className="App">
      <>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/allposts" element={<AllPostsPage posts={posts}/>}/>
          <Route exact path="/create" element={<CreatePostPage handleAddPost={handleAddPost}/>}/>
        </Routes>
      </>
    </main>
  );
}

