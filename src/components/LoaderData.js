import React from 'react'
import loader from "../assets/loader.png";
export const LoaderData = () => {
  return (
    <>
      <div className='loaderData'>
        <img alt="" src={loader} className="animate__animated animate__fadeIn animate__delay-1s" />
        <h2 className="animate__animated animate__fadeIn animate__delay-3s">Actualization</h2>
      </div>
      <div className='loaderLast'></div>
    </>

  )
}
