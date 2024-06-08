import ProdErpImg from '../assets/ProductionImg.png';
import  HRMSImg from '../assets/HRMSImg1.jpg';
import  WebErpImg from '../assets/WebERP.jpg';
import { useNavigate } from 'react-router-dom';
import EmpImg from '../assets/Emp.jpg';
import TransportationImg from '../assets/VehicleMainImg.jpg';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Production from './Production';
import Transport from './Transport';
import HRMS from './Hrms';
import ProductionApp from '../ProductionApp';
import { Link } from 'react-router-dom';
export default function Projects()
{ 
  const [isProdVisible, setIsProdVisible] = useState(false);

  const toggleProdVisibility = () => {
    setIsProdVisible(!isProdVisible);
    setIsTransportVisible(isTransportVisible);
    setIshrmsVisible(isHrmsVisible);
    window.location.href="#project";
  };

  const [isHrmsVisible, setIshrmsVisible] = useState(false);

  const toggleHrmsVisibility = () => {
    setIshrmsVisible(!isHrmsVisible);
    setIsTransportVisible(isTransportVisible);
    setIsProdVisible(isProdVisible);
    window.location.href="#project";
  };

  const [isTransportVisible, setIsTransportVisible] = useState(false);
  const toggleTransPortVisibility = () => {
    setIsProdVisible(isProdVisible);
    setIshrmsVisible(isHrmsVisible);
    setIsTransportVisible(!isTransportVisible);
    window.location.href="#project"
  };

    return <section id="project" className='projectSec w-full' >
    
    {!isProdVisible && !isTransportVisible && !isHrmsVisible &&<div className='w-full' data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" data-aos-offset="200">
       <div className='flex flex-col px-10 text-black'>
       <h1 className='text-2xl font-bold pb-2 relative inline-block'>Projects<span class="absolute left-0 bottom-0 w-20 border-b-4 border-red-950"></span></h1>
          <p className='py-5'>These are some of my best projects . I have built these with WPF,.NET framwork and Custom UI's,Check them out</p>
       </div>
    </div>}
    {!isProdVisible && !isTransportVisible &&  !isHrmsVisible &&  <div className='w-full' data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" data-aos-mirror="true" data-aos-offset="200">
        <div className='pt-5'>
            <h3 className='text-xl font-bold pb-2 px-10 relative inline-block'>Company Projects</h3>
        </div>
        <div className='flex flex-col md:flex-row px-10 pt-5 gap-10'>
          <div className='relative shadow-2xl rounded-xl'>
            <img className='proimg h-[250px] w-[500px] rounded-xl' src={ProdErpImg}></img>
            <div className='project-desc relative  text-black'>
                <div className='pt-10'>
                <p className='text-2xl text-center font-bold px-5 py-5'>Production Module</p>
                </div>
                <div>
                  <button className='viewprojectbtn' onClick={toggleProdVisibility}>View Project</button>
                </div>
            </div>
          </div>
          <div className='relative shadow-2xl rounded-xl'>
            <img className='h-[250px] w-[500px] rounded-xl' src={TransportationImg}></img>
            <div className='project-desc relative  text-black'>
                <div className='pt-10'>
                 <p className='text-center text-2xl font-bold px-5 py-5'>Vehicle Maintenance Module</p>
                </div>
                <div>
                  <button className='viewprojectbtn' onClick={toggleTransPortVisibility}>View Project</button>
                </div>
            </div>
          </div>
          <div className='relative shadow-2xl rounded-xl'>
            <img className='h-[250px] w-[500px] rounded-xl' src={HRMSImg}></img>
            <div className='project-desc relative  text-black'>
              <div className='pt-10'>
                <p className='text-center text-2xl font-bold px-5 py-5'>Human Resources Management System</p>
              </div>
                <div>
                  <button className='viewprojectbtn' onClick={toggleHrmsVisibility}>View Project</button>
                </div>
            </div>
          </div>
        </div>


        <div className='pt-10'>
            <h3 className='text-xl font-bold pb-2 px-10 relative inline-block'>Freelance Projects</h3>
        </div>
        <div className='flex flex-col md:flex-row px-10 pt-5 gap-10 p-10'>
          <div className='relative shadow-2xl rounded-xl'>
            <img className='proimg h-[250px] w-[380px] rounded-xl' src={WebErpImg}></img>
            <div className='project-desc relative  text-black'>
                <div className='pt-10'>
                <p className='text-2xl text-center font-bold px-5 py-5'>ERP(Enterprise Resource Planning)</p>
                </div>
                <div>
                  <button className='viewprojectbtn' onClick={toggleProdVisibility}>View Project</button>
                </div>
            </div>
          </div>
        </div>
    </div>}
       {isProdVisible &&
       <>
                 <Production isVisible={isProdVisible}/>
                 <button className='close-btn' onClick={toggleProdVisibility}>Go to Projects</button>
                 </>
                 
                 }

       {isTransportVisible &&
       <>
                 <Transport isVisible={isTransportVisible}/>
                 <button className='close-btn fixed bottom-10 right-4 bg-black flex" text-white w-10 h-10 items-end' onClick={toggleTransPortVisibility}>Go to Projects</button>
                 </>
                 
                 }

      {isHrmsVisible &&
       <>
                 <HRMS isVisible={isHrmsVisible}/>
                 <button className='close-btn fixed bottom-10 right-4 bg-black flex" text-white w-10 h-10 items-end' onClick={toggleHrmsVisibility}>Go to Projects</button>
                 </>
                 
                 }
    </section>
}
