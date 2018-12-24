import React, {  useState } from 'react';
import ResourceList from './components/ResourceList';
import UserList from './components/userList';

import './App.css';

const App = () => {

  const [resource, setResource] = useState('posts');
 
 
    return (
      <div className="App">
      //  Displays the user profile data
      <UserList />

      // Will trigger the resource pages to change
      <button onClick={() => setResource('posts')}>posts</button>
       <button onClick={() => setResource('todos')}>todos</button>

       // Displays data of resource path when button is clicked   
        <ResourceList resource={resource} />
      </div>
    );
  }


export default App;
