import React from 'react'
import '../styles/photos.css'

const Photos = () => {
  return (
    <div className="photoscontainer">
      <p className='ph'>OUR ACTIVITES</p><hr className='hr' style={{width:'20%',height:'8px',borderRadius:'15px',marginLeft:'40%',border:'2px solid white',backgroundColor:'black'}} />
      <div className="classroom">
        <h1 className='subh'>Class room Photos</h1>
        <div className="classroom_item">
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
        </div>
      </div>
      <div className="presentation">
        <h1 className='subh'> Presentation Photos</h1>
        <div className="presentation_item">
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
        </div>
      </div>
      <div className="mock">
        <h1 className='subh'>Mock Photos</h1>
        <div className="mock_item">
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
          <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
        </div>
      </div>
      <div className="events">
        <h1 className='subh'>Events Photos</h1>
        <div className="events_item">
        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>
        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="image"/>

        </div>
      </div>
    </div>
  )
}

export default Photos
