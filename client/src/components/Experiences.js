import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Experience from './Experience';


const Experiences = () => {
  const [experiences,setExperiences]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/experience')
        .then (response =>  {console.log(response.data)
          setExperiences(response.data)} )
    },[])
    
    return (
    <div>
      {experiences.map(experience=><Experience title={experience.title} description={experience.description} img={experience.img} key={experience.id} />)}
     </div>
     
   )
  }
    

  export default Experiences;

  