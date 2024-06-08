import { useEffect } from 'react'; // Import useEffect hook
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS

import React, { useState } from 'react';

function Hrms() {
  const [isVisible, setIsVisible] = useState(true); // Set initial visibility state to true

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle visibility state
    window.location.href="#project";
  };

  

  return (
    <>
      {isVisible && ( // Render the section only if isVisible is true
        <section id='transport'>
          <button className='close-btn fixed bottom-10 right-4 bg-black flex" text-white w-10 h-10 items-end' onClick={toggleVisibility}>&#10007;</button>
          <div className='w-full flex mt-4'  data-aos="fade-right  overflow-y-auto">
            <div className='flex flex-col p-4 justify-center text-black relative'>
            <h1 className='text-2xl font-bold pb-2 relative inline-block'>HRMS(Human Resource Management System)
            <span class="absolute left-0 bottom-0 w-52 border-b-4 border-red-950"></span></h1>
            </div>
          </div>
          <div className='py-5 px-10 md:w-full' data-aos="fade-left" >
            {/* <img src={bimtimg} alt="About Me" />
            <img src={bomsimg} alt="About Me" />
            <img src={maeqmrimg} alt="About Me" />
            <img src={meeqcmrimg} alt="About Me" />
            <img src={opmrimg} alt="About Me" />
            <img src={shmrimg} alt="About Me" />
            <img src={bamrimg} alt="About Me" /> */}
            <div className='m-10'>
              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Overview:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              I am currently developing a comprehensive HRMS desktop application at [Your Company] using WPF, C#, and the MVVM pattern. This module aims to streamline HR processes, task management, and overall workforce efficiency.
              </p>
            </div>

            <div className='m-10'>
              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Challenges Faced:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Designing a scalable system architecture to handle diverse vehicle maintenance workflows within the WPF application.</span>

              <span className="bullet-points">Implementing real-time tracking and management of maintenance activities using MVVM principles.</span>

              <span className="bullet-points">Integrating external APIs and third-party service providers for seamless data exchange within the application.</span> 

              </p>
            </div>

             <div className='m-10'>
              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Key Features in Development:</h1>
              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Master Screens:</h1>
              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">1.Employee Master:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Interface for managing employee details, roles, and employment history.</span>

              <span className="bullet-points">Features to add, update, and delete employee records.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">2.Department Master:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Screens for organizing and managing different departments.</span>

              <span className="bullet-points">Functionality to create, update, and delete department records.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">3.Role Master:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Interface for defining job roles and permissions.</span>

              <span className="bullet-points">Features to assign roles and manage access control.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">4.Leave Type Master:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Screens to handle various leave types (annual, sick, etc.).</span>

              <span className="bullet-points">Functionality to add, update, and delete leave types.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">5.Project Master:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Interface for tracking project details and assigned employees.</span>

              <span className="bullet-points">Features to create, update, and delete project records.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">6.Timesheet:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Detailed interface for employees to log their working hours.</span>

              <span className="bullet-points">Functionality to track hours worked and manage approval workflows.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">7.Task Request:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Interface for employees to request new tasks or assignments.</span>

              <span className="bullet-points">Features to submit, review, and approve task requests.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">8.View Task:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Screens for employees and managers to view assigned tasks.</span>

              <span className="bullet-points">Features to track task progress, update statuses, and provide feedback.</span>
               </p>

    
              <h1 className='text-xl mt-5 font-bold'>9.Permission Management:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Interface for managing user permissions and access controls.</span>

              <span className="bullet-points">Features to assign roles, define access levels, and manage permissions.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">10.Transfer Request:</h1>
              <p className='mt-5'data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Interface for employees to request transfers to different departments or locations.</span>

              <span className="bullet-points">Functionality to submit, review, and process transfer requests.</span>
              </p>


              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">11.Manpower Requisition:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Screens for managers to request additional manpower for projects or departments.</span>

              <span className="bullet-points">Features to submit, approve, and track requisition requests.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">12.Handing Over:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Interface for managing the handover process when employees change roles or leave the company.</span>

              <span className="bullet-points">IFeatures to document and track handover activities.</span>
              </p>





              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Technologies Used:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Framework: WPF (Windows Presentation Foundation.</span>

              <span className="bullet-points">Language: C#</span>

              <span className="bullet-points">Pattern: MVVM (Model-View-ViewModel)</span>

              <span className="bullet-points">Database:MSSQL</span>

              <span className="bullet-points">Tools: Visual Studio, Git</span>
              </p>


              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Current Status</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">The project is in the development stage, with ongoing work on the various master and transaction screens.</span>

              <span className="bullet-points">Initial prototypes have been created and are undergoing testing and iteration.</span>
              </p>


              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">My Role:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span>As the full-stack developer and database designer, my responsibilities included:</span>

              <span className="bullet-points mt-5">Designing the application architecture following the MVVM pattern.</span>

              <span className="bullet-points">Developing both frontend and backend functionalities using WPF and C#.</span>

              <span className="bullet-points">Designing and optimizing the database schema.</span>

              <span className="bullet-points">Collaborating with stakeholders to gather requirements and refine features based on feedback.</span>
              </p>

            </div>

          </div>
          
        </section>
      )}
    </>
  );
}

export default Hrms;
