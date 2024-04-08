import React from "react";
import Podcathero from "../../Components/Podcathero/Podcathero";
import PodCasts from "./PodCasts/PodCasts";
import Path from "../../Components/Path/Path";


const PodCast = () => {
  const path = {
    topic : "التحالفات الاستراتيجية: القادة السياسيون وتوازن القوى",
    home : "بيت",
    newpage : "بودكاست"
  }
  return (
    <div>
      <Path route={path}/>
      <Podcathero/>
      <PodCasts/>
      <PodCasts/>
    </div>
  );
};

export default PodCast;
