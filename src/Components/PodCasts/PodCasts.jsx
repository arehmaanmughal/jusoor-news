import React from 'react'
import PodCastSideBar from '../PodCastSideBar/PodCastSideBar'
import AuthorPodCast from '../AuthorPodCast/AuthorPodCast'
import './PodCasts.css'
const PodCasts = () => {
  return (
    <div className='podcasts'>
        <div className='container'>
        <div className='row'>
            <div className='col-md-5'>
                <PodCastSideBar/>
            </div>
            <div className='col-md-7'>
                <AuthorPodCast/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PodCasts