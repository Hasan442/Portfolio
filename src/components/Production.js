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

function Production({isProdVisible}) {
  const [isVisible, setIsVisible] = useState(true); // Set initial visibility state to true

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle visibility state
  };

  

  return (
    <>
      {isVisible && ( // Render the section only if isVisible is true
        <section id='production'>
          {/* <button className='close-btn fixed bottom-10 right-4 bg-black flex" text-white w-10 h-10 items-end' onClick={toggleVisibility}>&#10007;</button> */}
          <div className='w-full flex mt-4'  data-aos="fade-right  overflow-y-auto">
            <div className='flex flex-col p-4 justify-center text-black relative'>
            <h1 className='text-2xl font-bold pb-2 relative inline-block'>Production Module
            <span class="absolute left-0 bottom-0 w-28 border-b-4 border-red-950"></span></h1>
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
              I led the design and development of the production module for an ERP application at [Company Name], utilizing WPF, C#, and the MVVM pattern. This module aimed to optimize production processes, enhance inventory management, and ensure quality control throughout the manufacturing lifecycle.
              </p>
            </div>

            <div className='m-10'>
              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Challenges Faced:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Implementing the MVVM pattern to ensure a clean separation of concerns, enhancing the maintainability and scalability of the application.</span>

              <span className="bullet-points">Designing a flexible and scalable system architecture to accommodate various production workflows and manufacturing processes.</span>

              <span className="bullet-points">Integrating real-time tracking and management of raw materials, work-in-progress, and finished goods into the WPF application.</span> 

              </p>
            </div>

             <div className='m-10'>
              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Key Features:</h1>
              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Master Screens:</h1>
              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">1.Bill of Materials (BOM)</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Developed a comprehensive interface for creating and managing BOMs, listing all components and materials required for production.</span>

              <span className="bullet-points">Implemented functionality to handle version control of BOMs, ensuring users can track changes over time.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">2.BOM Sub Materials</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Designed screens to manage subcomponents within BOMs, including nested BOMs for complex assemblies.</span>

              <span className="bullet-points">Enabled users to add, update, and delete sub-materials, ensuring accurate material tracking.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">3.Machine Equipment Master</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Created a detailed master screen to maintain information about all machinery and equipment used in production.</span>

              <span className="bullet-points">Implemented features to track maintenance schedules, operational status, and usage history of equipment.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">4.Machine Equipment Category Master</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Developed a categorization system for machinery and equipment, facilitating easy management and retrieval.</span>

              <span className="bullet-points">Added functionality to define and update categories, linking equipment to appropriate categories.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">5.Operation Master</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Designed an interface for defining and managing various production operations, including parameters and resource requirements.</span>

              <span className="bullet-points">Implemented features for users to set operation sequences and dependencies, optimizing workflow planning.</span>
               </p>

               <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">6.Shift Master</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Developed a management screen for shift schedules, allowing users to define and manage shifts for production staff.</span>

              <span className="bullet-points">Included functionality for assigning personnel to shifts, tracking shift changes, and ensuring compliance with labor regulations.</span>
               </p>

               <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Transaction Screens:</h1>
              <h1 className='text-xl mt-5 font-bold'>1.Production Orders (BOM)</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Implemented a comprehensive interface for creating and managing production orders from initiation to completion.</span>

              <span className="bullet-points">Added functionality to track order status, prioritize orders, and link orders to specific BOMs and production schedules.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">2.Component Routing Master</h1>
              <p className='mt-5'data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Developed a routing master to define the flow of components through various production stages.</span>

              <span className="bullet-points">Implemented features to map out routing paths, set operation sequences, and manage routing changes.</span>
              </p>


              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">3.Storage Inspection</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Designed screens for conducting storage inspections, ensuring raw materials and finished goods are stored under optimal conditions.</span>

              <span className="bullet-points">Added functionality for scheduling inspections, recording inspection results, and managing storage compliance.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">4.Production Schedule</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Created an interface for planning and scheduling production activities, optimizing resource allocation and timelines.</span>

              <span className="bullet-points">Implemented features for real-time updates to schedules based on order changes, resource availability, and production progress.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">5.Production Generation</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Developed a system for generating production batches and work orders, linking them to production schedules and BOMs.</span>

              <span className="bullet-points">Added functionality to track batch progress, manage batch sizes, and record production outputs.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">6.In-Process Inspection</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Designed screens for conducting inspections during various production stages to ensure quality control.</span>

              <span className="bullet-points">Implemented features for recording inspection data, managing inspection checkpoints, and tracking defect resolutions.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">7.Production Completion Entry</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Created an interface for recording details of completed production tasks and batches, ensuring accurate tracking of production outputs.</span>

              <span className="bullet-points">Added functionality for users to verify completion, update statuses, and record any discrepancies.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">8.Production Final Inspection</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Developed screens for conducting final inspections before products are marked as finished goods.</span>

              <span className="bullet-points">Implemented features to record inspection results, manage quality control documentation, and track final product acceptance.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">9.Production Indent</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Designed an interface for managing material requests specific to production needs, ensuring timely availability of materials.</span>

              <span className="bullet-points">Added functionality for creating, approving, and tracking indents, linking them to production orders and schedules.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">10.General Indent</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Developed a system for handling general material requests outside the production process, ensuring comprehensive material management.</span>

              <span className="bullet-points">Implemented features for requesting, approving, and tracking materials, facilitating efficient resource utilization.</span>
              </p>

              <h1 className='text-xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">11.Materials Issues</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span className="bullet-points">Created a management screen for issuing materials to production tasks, ensuring accurate tracking and utilization.</span>

              <span className="bullet-points">Added functionality for recording material issues, updating inventory levels, and managing material movements.</span>
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
              <span className="bullet-points">"The ERP production module prototype developed by [MOHAMED ASAN A] demonstrates significant potential for streamlining manufacturing operations and improving overall efficiency." - [YUNITCO Pvt/Mr.Abdul Aalik,Smart Zone IT Solutions].</span>
              </p>


              <h1 className='text-2xl mt-5 font-bold' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">My Role and Contributions:</h1>
              <p className='mt-5' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              <span>As the full-stack developer and database designer, my responsibilities included:</span>

              <span className="bullet-points mt-5">Designing the WPF application architecture following the MVVM pattern to ensure separation of concerns and maintainability.</span>

              <span className="bullet-points">Developing the frontend user interface for master and transaction screens using WPF and C# to ensure an intuitive user experience.</span>

              <span className="bullet-points">Implementing core functionalities for each screen, such as production scheduling, inventory management, and quality control, on the backend using C# and WPF.</span>

              <span className="bullet-points">Designing and optimizing the database schema to efficiently store and retrieve production data, raw material information, and quality control metrics.</span>

              <span className="bullet-points">Collaborating with stakeholders to gather requirements, iterate on designs, and conduct user acceptance testing.</span>
              </p>

            </div>

          </div>
          
        </section>
      )}
    </>
  );
}

export default Production;
