import { Link } from "react-router-dom";
import GuardedLink from "./GuardedLink";

import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./MainHeader.module.css";

function MainHeader( {onCreatePost} ) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <div>
        <GuardedLink to="/create-post" className={classes.button}>
          <MdPostAdd size={18}/>
          New Post
        </GuardedLink>
      </div>
    </header>
  );
}

export default MainHeader;