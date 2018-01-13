import React from 'react';

const NavItem = ({link}) => (
    link.map( elem =>
          <li key={elem} className="Navigation__item">
          <a href="#" className="Navigation__link">{elem}</a></li> )
);
export default NavItem;
