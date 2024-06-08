import Resumeimg from '../assets/Resume3.png';
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai"
import Resumedoc from '../assets/mohamedAsanAResume20240401.pdf'

export default function Resume() {
    return (
        <section id="resume" className='resumesec'>
            <div className='px-10 py-20 md:w-1/2 flex justify-center' data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" data-aos-offset="200">
                <img className='w-[300px] h-[400px]' src={Resumeimg} alt="Resume" />
            </div>
            <div className='md:w-1/2 flex' data-aos="fade-right" data-aos-duration="1000" data-aos-once="false" data-aos-offset="200">
                <div className='flex flex-col justify-center text-black'>
                <h1 className='text-2xl font-bold pb-2 relative inline-block'>Resume
                <span class="absolute left-0 bottom-0 w-16 border-b-4 border-red-950"></span></h1>
                    <p className='pb-10 mt-10'>You can view my resume    <a className='downloadbtn shadow-inner' href={Resumedoc} download="mohamedAsanAResume20240401.pdf">Download</a></p>
                </div>
            </div>
        </section>
    );
}
