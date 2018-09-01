import React from 'react'
import './WhatWeOffer.scss'
import ContractImg from '../../Assets/1.png'
import OverlandImg from '../../Assets/2.png'
import StorageImg from '../../Assets/3.png'
import ConsultingImg from '../../Assets/4.png'
import WhatWeOfferHeader from './WhatWeOfferHeader/WhatWeOfferHeader';


const WhatWeOffer = () => {
  return (
    <section className="WhatWeOffer">
      <WhatWeOfferHeader/>
      <div className="WhatWeOfferBox">
        <img src={ContractImg} alt="Contract"/>
        <div>
          <h3>Contrack logistic</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit dolorum reprehenderit numquam consequatur magnam temporibus alias, ea possimus magni laudantium natus culpa dolores minus.</p>
        </div>
      </div>
      <div className="WhatWeOfferBox">
        <img src={OverlandImg} alt="Overland"/>
        <div>
          <h3>Contrack logistic centrum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit dolorum reprehenderit numquam consequatur magnam temporibus alias, ea possimus magni laudantium natus culpa dolores minus.</p>
        </div>
      </div>
      <div className="WhatWeOfferBox">
        <img src={StorageImg} alt="Contract"/>
        <div>
          <h3>Overland and ocean</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit dolorum reprehenderit numquam consequatur magnam temporibus alias, ea possimus magni laudantium natus culpa dolores minus.</p>
        </div>
      </div>
      <div className="WhatWeOfferBox">
        <img src={ConsultingImg} alt="Contract"/>
        <div>
          <h3>Consulting services</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit dolorum reprehenderit numquam consequatur magnam temporibus alias, ea possimus magni laudantium natus culpa dolores minus.</p>
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer
