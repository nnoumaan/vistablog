import React from "react";
import Header from "../../components/headers/Header";
import MultiPosts from "../../components/multipleposts/MultiPosts";
import Sidebar from "../../components/sidebar/Sidebar";

const MainHome = () => {
 
  return (
    <>
      <Header />
      <div className="home" style={{display:'flex'}}>
        <MultiPosts />
        <Sidebar />
      </div>
    </>
  );
};

export default MainHome;
