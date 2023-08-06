import React from 'react'
import { Link } from 'react-router-dom';
import '../posts/post.css';


const Post = ({img}) => {
 
    return (
      <div className="post">
       <Link to={'/post/abc'} state={{myUrl:img}}><img
          className="postImg"
          src={img}
          alt=""
        /></Link> 
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
              <Link className="link" to="/posts?cat=Music">
                Music
              </Link>
            </span>
            <span className="postCat">
              <Link className="link" to="/posts?cat=Music">
                Life
              </Link>
            </span>
          </div>
          <span className="postTitle">
            <Link to="/post/abc" className="link" state={{myUrl:img}} style={{color:'black'}} >
              Noumaan Blog Template
            </Link>
          </span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
          fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
          atque, exercitationem quibusdam, reiciendis odio laboriosam?
        </p>
      </div>
    );
  
}

export default Post