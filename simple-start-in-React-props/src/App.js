import logo from './logo.svg';
import './App.css';
import React from 'react'
import Post from './components/Post'
function App() {
  return (
        <div className="App">
            <Post title ="title1" content ="Post 1" ><p>test1</p></Post>
            <Post title ="title2" content ="Post 2" ><p>test2</p></Post>
        </div>

);
}
export default App;
