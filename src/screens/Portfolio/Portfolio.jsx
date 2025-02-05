import React from 'react'
import BottomNav from '../../components/bottomNav'
import './styles.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'

function Portfolio() {
  return (
    <>
    <div className='box-boss'>
        <div className='container4'>
            <div className="box"><img src={img1}/></div>
            <div className="box"><img src={img2}/></div>
            <div className="box"><img src={img3}/></div>
            <div className="box"><img src={img4}/></div>
            <div className="box"><img src={img5}/></div>
            <div className="box"><img src={img6}/></div>
            <div className="box"><img src={img7}/></div>
            <div className="box"><img src={img8}/></div>
        </div>
    </div>
    <BottomNav/>
    </>
  )
}

export default Portfolio