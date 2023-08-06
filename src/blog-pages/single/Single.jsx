import React from 'react';
import SinglePost from '../../components/singlePost/SinglePost';
import Sidebar from '../../components/sidebar/Sidebar';

const Single = () => {
  return (
    <div className="single" style={{display:'flex'}}>
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default Single