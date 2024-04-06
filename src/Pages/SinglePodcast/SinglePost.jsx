import React from 'react'
import Path from '../../Components/Path/Path'
import SinglePodCastMain from './SinglePodCastMain/SinglePodCastMain'


const SinglePost = () => {
  const path = {
    topic : "التحالفات الاستراتيجية: القادة السياسيون وتوازن القوى",
    home : "بيت",
    newpage : "سياسة"
  }
  return (
    <div>
      <Path route={path}/>
      <SinglePodCastMain/>
    </div>
  )
}

export default SinglePost