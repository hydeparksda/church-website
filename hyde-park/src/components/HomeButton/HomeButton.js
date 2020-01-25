import React from 'react';
import './HomeButton.css'
const HomeButton = props => {
  const {title, position} = props;
  const conditionalStyle = position =='middle' ? 'middle-button': 'side-button'
  return (
    <div className={conditionalStyle}>
      {title.toUpperCase()}
    </div>
  )
}
export default HomeButton;