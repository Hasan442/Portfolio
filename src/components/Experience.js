import { useEffect } from 'react'; // Import useEffect hook
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS

import React, { useState,useRef } from 'react';

function Experience({isProdVisible}) {
  

  

  return (// Render the section only if isVisible is true
        <section id='experience' className='experiencesec' >
          <div className='experiencesec-div' data-aos="fade-right  overflow-y-auto">
            <div className='experiencesec-div-div'>
            <h1 className='experiencesec-div-div-h1'>Experience
            <span className='experiencesec-div-div-h1-span'></span></h1>
            </div>
          </div>
          <div className='py-5 px-10 md:w-full' data-aos="fade-left" >
            <div className='m-5'>
              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">1.Software Developer</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                  Smart Zone IT Solutions| [Nov, 2021] to [Present]
              </p>
            </div>
            <div className='m-10'>
              <h1 className='text-2xl mt-5 font-medium'>Description:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              As a junior software developer at Smart Zone IT Solutions for 
the past two years, I have honed my skills and contributed to a 
wide range of software development projects. My responsibilities 
and achievements include:

<span className="bullet-points">Developing, enhancing, and maintaining desktop 
applications using C#, WPF, and .NET Framework. </span>

<span className="bullet-points">Proficiently implementing the Model-View-View Model 
(MVVM) design pattern and creating modern user 
interfaces with Windows Presentation Foundation (WPF). </span>

<span className="bullet-points">Efficiently integrating Microsoft SQL Server (MSSQL) for 
data management, including database schemas, queries, 
and data access layers. </span>

<span className="bullet-points">Solving technical issues, optimizing code, and 
troubleshooting software problems to ensure reliability and 
efficiency.</span>

<span className="bullet-points">Utilizing version control systems, such as Git, for code 
management and collaboration. This included managing 
code versioning, tracking changes, and facilitating seamless 
teamwork and code integration.</span>

This experience showcases my growth as a software 
developer and my proficiency in a wide array of technologies, 
particularly C#, WPF, MVVM, MSSQL, and .NET Framework, 
and my ability to work effectively within a team to deliver 
successful software solutions.
I am eager to leverage this experience in my future endeavors 
to drive innovation and excellence in software development.
              </p>
            </div>
          </div>



          <div className='py-5 px-10 md:w-full' data-aos="fade-left" >
            <div className='m-5'>
              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">2.Freelance .NET Web Developer</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                 UniKorn Pvt | [Dec, 2023] to [Present]
              </p>
            </div>
            <div className='m-10'>
              <h1 className='text-2xl mt-5 font-medium'>Description:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">

<span className="bullet-points">Crafting dynamic ERP web applications using ASP.NET 
MVC, C#, and SQL Server.</span>

<span className="bullet-points">Collaborating closely with clients to understand intricate 
business requirements and deliver tailored solutions.
</span>

<span className="bullet-points"> Implementing organized and efficient back-end logic to 
ensure optimal functionality. </span>

<span className="bullet-points">Effectively troubleshooting technical issues to maintain the 
reliability and performance of the software.</span>
              </p>
            </div>
          </div>
          
        </section>
    );
}

export default Experience;
