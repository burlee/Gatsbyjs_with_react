import React from 'react'
import './ReadMore.scss'
import ReadMoreImg from '../../../Assets/read more.png'
import ReaMoreImg2 from '../../../Assets/read more copy 2.png'
export default () => {
  return (
    <section className="ReadMore">
      <div className="ReadMoreBox">
        <div className="ReadMoreBtn">
            <img src={ReadMoreImg} alt="ReadMoreImg"/>
        </div>
        <div className="ReadMoreInformation">
            <h3>Overland network</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam reprehenderit distinctio at facilis eveniet excepturi veritatis nostrum sint vero hic.</p>
        </div>
      </div>
      <div className="ReadMoreBox">
        <div className="ReadMoreBtn">
            <img src={ReaMoreImg2} alt="ReadMoreImg"/>
        </div>
        <div className="ReadMoreInformation">
            <h3>Overland network</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam reprehenderit distinctio at facilis eveniet excepturi veritatis nostrum sint vero hic.</p>
        </div>
      </div>
      <div className="ReadMoreBox">
        <div className="ReadMoreBtn">
            <img src={ReaMoreImg2} alt="ReadMoreImg"/>
        </div>
        <div className="ReadMoreInformation">
            <h3>Overland network</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam reprehenderit distinctio at facilis eveniet excepturi veritatis nostrum sint vero hic.</p>
        </div>
      </div>
    </section>
  )
}
