// pages/Home.js
import React from 'react';
import Sidebar from '../../Components/Sidebar/page';

function Home({ children }) {
  return (
    <Sidebar>      
        {children}           
    </Sidebar>
  );
}

export default Home;
