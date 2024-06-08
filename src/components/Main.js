import Dpimg from '../assets/ProfDpE.png';
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa";
import { ReactTyped } from 'react-typed';

export default function Main()
{
    return <section id='main' className='main-section w-full overflow-x-hidden'>
        <div className='mainsection-div'>
        <h1 className='mainsection-div-h1' data-aos="fade-right" data-aos-duration="2000" data-aos-once="false" data-aos-offset="200" data-aos-mirror="true">
            Hi,<br/> i'm Mohamed Asan <span className='mainsection-div-h1-span'>A</span>
            <p className='mainsection-div-h1-p' data-aos="zoom-in" data-aos-duration="2000" data-aos-mirror="true">Full stack developer(WPF)</p> 
        </h1>
        <div className='mainsection-div-div'>
           <a href='https://www.linkedin.com/in/mohamed-asan-a-490b8118b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bw28EZx49Qp6%2F8YtpVHaKSg%3D%3D' className='mainsection-div-div-a'  data-aos="fade-left" data-aos-duration="2000" data-aos-once="false" data-aos-offset="200"><FaLinkedin size={40}/></a>
           <a href='#' className='mainsection-div-div-a'  data-aos="fade-left" data-aos-duration="2000" data-aos-once="false" data-aos-offset="200"><AiOutlineGithub size={40}/></a>
        </div>
        </div>
        <img className='h-[450px] md:w-100 h-450' data-aos="fade-left" data-aos-duration="2000" data-aos-once="false" data-aos-offset="200"  data-aos-mirror="true" src={Dpimg}/>
    </section>
}