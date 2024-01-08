import React from "react";
import { Link } from 'react-router-dom'
import './MainNavigation.css'


const MainNavigation=()=>{


    return(
     <header>
      <nav>
        <ul>
          <li>
           <Link to='/'>Fetch Config</Link>
          </li>
          <li>
            <Link to='/update'>Update Remark</Link>
          </li>
        </ul>
      </nav>
      </header>
    )
}

export default MainNavigation