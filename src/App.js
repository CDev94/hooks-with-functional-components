import React, {  useState } from 'react';
import ResourceList from './components/ResourceList';
import UserList from './components/userList';

import './App.css';

const App = () => {

  const [resource, setResource] = useState('posts');
 
 
    return (
      <div className="App">
      <UserList />

      <button onClick={() => setResource('posts')}>posts</button>
       <button onClick={() => setResource('todos')}>todos</button>
        <ResourceList resource={resource} />
      </div>
    );
  }


export default App;
