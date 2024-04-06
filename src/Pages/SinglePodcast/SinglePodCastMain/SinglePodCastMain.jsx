import React from 'react'
import './SinglePodCastMain.css'
import SidePodCasts from '../../../Components/SidePodCasts/SidePodCasts'
import SinglePodCast from '../../../Components/SinglePodCast/SinglePodCast'
const SinglePodCastMain = () => {
  return (
    <div className='main-podcast'>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-4'>
            <SidePodCasts/>
        </div>
        <div className='col-lg-8'>
            <SinglePodCast/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SinglePodCastMain