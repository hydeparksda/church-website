import React from 'react';
import './HomeButton.css'

const HomeButton = props => {
  const {title} = props;
  return (
    <div className="home-button">
      {title}
    </div>
  )
}

export default HomeButton;