import React from 'react';
import { Link } from 'react-router-dom';
import { SlHome } from "react-icons/sl";
import { SlList } from "react-icons/sl";
import { SlDocs } from "react-icons/sl";

// Change the function names and links
// to fit your portfolio topic.

function navList() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/"><i><SlHome/></i>Home</Link>
        <Link to="/log"><i><SlList/></i>Recipe List</Link>
        <Link to="/topics"><i><SlDocs/></i>Topics</Link>
    </nav>
  );
}

export default navList;
