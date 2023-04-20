import React from 'react';
import './figma.css';
import chairimage from './IMAGES/chairimage.png';
import tableimage from './IMAGES/tableimage.png';


const SectionOne = () => {
  return (
    <div className='bannerTwo'>
            <div className='bannerTwoPosition'>

                <div className='content'>
                    <p>Experience culinary excellence at our restaurant. Book your table today and get ready to indulge in a delightful dining experience!!</p>
                </div>

                <div className='chairImage'>
                <img src={chairimage} />
                </div>
            </div>
       
            <div className='tableImage'>
                <img src={tableimage} />
            </div>

    </div>
  )
}

export default SectionOne;