import WpfImg from '../assets/WPFICON.png';
import csharpImg from '../assets/Csharp.png';
import MVVMImg from '../assets/MVVMICON.png';
import dotnetImg from '../assets/dotnet.jpg';
import sqlImg from '../assets/SQLICON.png';
import VsImg from '../assets/VSICON.jpg';
import TransportationImg from '../assets/Transpt.jpg';

export default function Skills() {
   return <section id="skills" className='skillsec' >
      {/* <div className='w-full' data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" data-aos-offset="200">
       <div className='flex flex-col px-10 py-10'>
       <h1 className='text-2xl font-bold pb-2 relative inline-block'>Skills
          <span class="absolute left-0 bottom-0 w-16 border-b-4 border-red-950"></span></h1>
       </div>
    </div>
       <div className='w-full' data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" data-aos-mirror="true" data-aos-offset="200">
         <h1 className='text-xl font-bold pb-5  pl-10 relative inline-block'>Windows App Development Skills</h1>
         <div className='flex flex-col md:flex-row px-10 gap-10'>
          <div className='relative shadow-2xl rounded-2xl border-2 border-black border-opacity-20'>
             <div className='Skillborder'>
              <h1 className=' border-2 px-2 py-1 '>Programming Language</h1>
              <h3 className='SkillRoundedStyle'>C#</h3>
             </div>
          </div>
          <div className='relative shadow-2xl rounded-2xl border-2 border-black border-opacity-20'>
             <div className='Skillborder'>
              <h1 className=' border-2 px-2 py-1 '>Development Frameworks</h1>
              <h3 className='SkillRoundedStyle'>.NET Framework</h3>
              <h3 className='SkillRoundedStyle'>.NET Core</h3>
             </div>
          </div>
          <div className='relative shadow-2xl rounded-2xl border-2 border-black border-opacity-20'>
             <div className='Skillborder'>
              <h1 className=' border-2 px-2 py-1 '>User Interface Development</h1>
              <h3 className='SkillRoundedStyle'>WPF (Windows Presentation Foundation) with XAML</h3>
             </div>
          </div>
          <div className='relative shadow-2xl rounded-2xl border-2 border-black border-opacity-20'>
             <div className='Skillborder'>
              <h1 className=' border-2 px-2 py-1 '>Data Access</h1>
              <h3 className='SkillRoundedStyle'>ADO.NET</h3>
              <h3 className='SkillRoundedStyle'>Entity Framework</h3>
             </div>
          </div>
          <div className='relative shadow-2xl rounded-2xl border-2 border-black border-opacity-20'>
             <div className='Skillborder'>
              <h1 className=' border-2 px-2 py-1 '>Database Technologies</h1>
              <h3 className='SkillRoundedStyle'>SQL Server</h3>
             </div>
          </div>
          <div className='relative shadow-2xl rounded-2xl border-2 border-black border-opacity-20'>
             <div className='Skillborder'>
              <h1 className=' border-2 px-2 py-1 '>Version Control</h1>
              <h3 className='SkillRoundedStyle'>Git (GitHub)</h3>
             </div>
          </div>
        </div>
        <h1 className='text-xl font-bold pb-5 pt-5 pl-10 relative inline-block'>Web Development Skills</h1>
         <div className='flex  md:flex-row px-10 gap-10'>
             <div className='Skillborder'>
              <h3 className='SkillRoundedStyle'>C#</h3>
             </div>
             <div className='Skillborder'>
              <h3 className='SkillRoundedStyle'>.NET Framework</h3>
              </div>
              <div className='Skillborder'>
              <h3 className='SkillRoundedStyle'>.NET Core</h3>
              </div>
             
             <div className='Skillborder'>
              <h1 className=' border-2 px-2 py-1 '>User Interface Development</h1>
              <h3 className='SkillRoundedStyle'>HTML 5</h3>
              <h3 className='SkillRoundedStyle'>CSS</h3>
              <h3 className='SkillRoundedStyle'>Javascript</h3>
              <h3 className='SkillRoundedStyle'>React Js</h3>
             </div>
             <div className='Skillborder'>
              <h1 className=' border-2 px-2 py-1 '>Data Access</h1>
              <h3 className='SkillRoundedStyle'>ADO.NET</h3>
              <h3 className='SkillRoundedStyle'>Entity Framework</h3>
             </div>
             <div className='Skillborder'>
              <h1 className=' border-2 px-2 py-1 '>Database Technologies</h1>
              <h3 className='SkillRoundedStyle'>SQL Server</h3>
             </div>
             <div className='Skillborder'>
              <h1 className=' border-2 px-2 py-1 '>Version Control</h1>
              <h3 className='SkillRoundedStyle'>Git (GitHub)</h3>
            </div>
        </div>
       </div> */}

      <div className='p-10'>
         <h1 className='text-2xl font-bold pb-2 relative inline-block'>Skills
            <span class="absolute left-0 bottom-0 w-16 border-b-4 border-red-950"></span></h1>
      </div>

      <div className='flex flex-col  justify-center gap-16 w-full pt-5 pb-10'>

            <div className='skillslayout_windows' data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" data-aos-offset="200">
               <h1 className='text-l p-5 font-bold pb-2 relative inline-block'>Windows App Development
                  <span class="absolute left-5 bottom-0 w-[100px] border-b-2 border-red-950"></span></h1>

               <div className='skillslayout_windows_skills'>
                  <div className='SkillRoundedStyle'><h3 className='font-medium'>C#</h3></div>
                  <div className='SkillRoundedStyle'><h3 className='font-medium'>WPF(Windows Presentation Foundation)</h3></div>
                  <div className='SkillRoundedStyle'><h3 className='font-medium'>.NET Framwork/Core</h3></div>
                  <div className='SkillRoundedStyle'><h3 className='font-medium'>MVVM</h3></div>
                  <div className='SkillRoundedStyle'><h3 className=' font-medium'>ADO.NET</h3></div>
                  <div className='SkillRoundedStyle'><h3 className=' font-medium'>Entity Framework</h3></div>
                  <div className='SkillRoundedStyle'><h3 className=' font-medium'>MS SQL Server</h3></div>
               </div>

            </div>
            <div className='skillslayout_web'>
               <h1 className='text-l p-5 font-bold pb-2 relative inline-block'>Web App Development
                  <span class="absolute left-5 bottom-0 w-[100px] border-b-2 border-red-950"></span></h1>

               <div className='skillslayout_web_skills'>
                  <div className='SkillRoundedStyle'><h3 className='font-medium'>C#</h3></div>
                  <div className='SkillRoundedStyle'><h3 className='font-medium'>ASP.NET MVC</h3></div>
                  <div className='SkillRoundedStyle'><h3 className='font-medium'>.NET Framwork/Core</h3></div>
                  <div className='SkillRoundedStyle'><h3 className='font-medium'>HTML 5</h3></div>
                  <div className='SkillRoundedStyle'><h3 className='font-medium'>CSS 3</h3></div>
                  <div className='SkillRoundedStyle'><h3 className='font-medium'>Tailwind CSS </h3></div>
                  <div className='SkillRoundedStyle'><h3 className='font-medium'>Javascript</h3></div>
                  <div className='SkillRoundedStyle'><h3 className='font-medium'>React js</h3></div>
                  <div className='SkillRoundedStyle'><h3 className=' font-medium'>ADO.NET</h3></div>
                  <div className='SkillRoundedStyle'><h3 className=' font-medium'>Entity Framework</h3></div>
                  <div className='SkillRoundedStyle'><h3 className=' font-medium'>MS SQL Server</h3></div>
               </div>
            </div>
      </div>

   </section>
}
