import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (<>

  <div className="menu">
        <div className="menu_logo">КиноМания</div>
        <div className="menu_items"><Link to="/" className="menu_item">Главная</Link>
      <Link
        to={{
          pathname: "/about",
          state: {
            fromLocation: true,
          },
        }}
        className="menu_item" >
        О проекте
      </Link>
    </div></div>
      
  </>
    
  );
}

export default Navigation;
