import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${location.pathname}${linkUrl}`)}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image"></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
