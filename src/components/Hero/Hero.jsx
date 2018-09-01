import React from 'react'
import './Hero.scss'
import Wrapper from '../Hero/Wrapper/Wrapper'
import Menu from '../Hero/Menu/Menu';
import Inscription from '../Hero/Inscription/Inscription';
import ReadMore from '../Hero/ReadMore/ReadMore';

export default () => {
  return (
    <div className="Hero">
      <Wrapper>
        <Menu/>
        <Inscription/>
        <ReadMore/>
        <button className="ViewDetailsBtn">View details</button>
      </Wrapper>
    </div>
  )
}
