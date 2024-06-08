import { useEffect } from 'react'; // Import useEffect hook
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS
import bimtimg from '../assets/bimt.png';
import bomsimg from '../assets/boms.png';
import maeqmrimg from '../assets/maeqmr.png';
import meeqcmrimg from '../assets/meeqcmr.png';
import opmrimg from '../assets/opmr.png';
import shmrimg from '../assets/shmr.png';
import bamrimg from '../assets/Bamr.png';
import Projects from './Projects';

import React, { useState,useRef } from 'react';

function Transport() {
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
            <h1 className='text-2xl font-bold pb-2 relative inline-block'>Vehicle Maintenance Module
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
              I spearheaded the design and development of the vehicle maintenance module for an ERP application at[Smart Zone IT Solutions], leveraging WPF, C#, and adhering to the MVVM pattern. This module aimed to optimize transportation logistics, streamline delivery processes, and improve overall supply chain efficiency.
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
              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Key Features:</h1>
              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Master Screens:</h1>
              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">1.Truck Category Master:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Developed an interface to manage and categorize different types of trucks based on size, capacity, and other attributes.</span>

              <span className="bullet-points">Implemented functionality to add, update, and delete truck categories, facilitating easy management and retrieval.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">2.Truck Maintenance Checklist:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Designed screens to create and manage maintenance checklists for trucks, ensuring all maintenance tasks are tracked.</span>

              <span className="bullet-points">Added features to define checklist items, schedule regular maintenance, and record completion status.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">3.Truck Maintenance Setup:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Created an interface for setting up maintenance schedules and tasks for trucks based on categories and individual truck needs.</span>

              <span className="bullet-points">Implemented functionality to configure maintenance intervals, assign tasks, and track maintenance history.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">4.Driver Master:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Designed screens for managing driver information, including personal details, licenses, and certifications.</span>

              <span className="bullet-points">Implemented functionality to add, update, and delete driver records, ensuring accurate and up-to-date information.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">5.Truck Master</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Developed a comprehensive master screen to maintain detailed information about each truck in the fleet.</span>

              <span className="bullet-points">Included features to track truck specifications, operational status, maintenance records, and availability.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">6.Change Allocated Driver:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Created an interface to reassign drivers to different trucks based on availability and requirements.</span>

              <span className="bullet-points">Implemented features to manage driver allocations, track assignment history, and ensure compliance with regulations.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">7.Change Allocated Driver Location:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Developed screens to update driver locations in real-time, facilitating efficient route and schedule management.</span>

              <span className="bullet-points">Added functionality to track driver movements, manage location changes, and optimize route planning.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">8.Change Allocated Warehouse:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Designed an interface for reassigning trucks and drivers to different warehouses as needed.</span>

              <span className="bullet-points">Implemented features to manage warehouse allocations, track changes, and ensure efficient resource utilization.</span>
               </p>

               <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Transaction Screens:</h1>
              <h1 className='text-xl mt-5 font-bold'>1.Job Request:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Developed a comprehensive interface for creating and managing job requests for vehicle maintenance tasks.</span>

              <span className="bullet-points">Implemented features to track request status, prioritize requests, and assign resources based on availability.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">2.Job Order:</h1>
              <p className='mt-5'data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Created an interface to convert job requests into job orders, detailing the specific tasks and requirements.</span>

              <span className="bullet-points">Implemented functionality to track order progress, manage job details, and link orders to specific trucks and drivers.</span>
              </p>


              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">3.Spare Parts Request:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Designed screens for requesting spare parts needed for truck maintenance and repairs.</span>

              <span className="bullet-points">Added features to create, approve, and track spare parts requests, ensuring timely procurement and availability.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">4.Spare Parts Issue:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Developed an interface to manage the issuance of spare parts for maintenance and repair tasks.</span>

              <span className="bullet-points">Implemented functionality to track parts usage, update inventory levels, and manage part allocations.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">5.Job Order Completion:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Created screens for recording the completion of job orders, ensuring accurate tracking of task statuses.</span>

              <span className="bullet-points">Added functionality to verify completion, update order statuses, and record any discrepancies or issues.</span>
              </p>





              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Technologies Used:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Framework: WPF (Windows Presentation Foundation.</span>

              <span className="bullet-points">Language: C#</span>

              <span className="bullet-points">Pattern: MVVM (Model-View-ViewModel)</span>

              <span className="bullet-points">Database:MSSQL</span>

              <span className="bullet-points">Tools: Visual Studio, Git</span>
              </p>


              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Impact and Results</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Prototype successfully developed and tested in a simulated environment.</span>

              <span className="bullet-points">Anticipated impact includes potential improvements in production efficiency, inventory management, and product quality once deployed.</span>
              </p>

              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Testimonials/Feedback:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">"The ERP vehicle maintenance module prototype developed by [Your Name] showcases promising capabilities for optimizing our vehicle maintenance operations and improving overall efficiency." - [YUNITCO Pvt/Mr.Abdul Aalik,Smart Zone IT Solutions].</span>
              </p>


              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">My Role and Contributions:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span>As the full-stack developer and database designer, my responsibilities included:</span>

              <span className="bullet-points mt-5">Designing the WPF application architecture following the MVVM pattern to ensure separation of concerns and maintainability.</span>

              <span className="bullet-points">Developing the frontend user interface for master and transaction screens using WPF and C# to ensure an intuitive user experience.</span>

              <span className="bullet-points">Implementing core functionalities for each screen, such as job requests, truck maintenance, and spare parts management, on the backend using C# and WPF.</span>

              <span className="bullet-points">Designing and optimizing the database schema to efficiently store and retrieve vehicle maintenance data, truck records, and job order details.</span>

              <span className="bullet-points">Collaborating with stakeholders to gather requirements, iterate on designs, and conduct user acceptance testing.</span>
              </p>

            </div>

          </div>
          
        </section>
      )}
    </>
  );
}

export default Transport;
