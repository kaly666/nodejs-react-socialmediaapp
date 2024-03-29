import './App.css';
import { useState } from 'react';
import Button from './Components/Button/Button';
import SideBar from './Views/SideBar/SideBar';
import Feed from './Views/Feed/Feed';

function App() {
  return (
    <div>
      <body className='AppViews'>
        <SideBar />
        <Feed/>
      </body>
    </div>
  );
}

export default App;
