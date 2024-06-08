import Contactimg from '../assets/Contact1.png';
import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
export default function Contact()
{
    return <section id="contact" className='contactsec'>
        <div className=' flex justify-center py-5 px-10 md:w-1/2' data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" data-aos-offset="200">
           <img className='w-1/2' src={Contactimg}/>
        </div>
        <div className='md:w-1/2 flex flex-col items-center justify-center' data-aos="fade-right" data-aos-duration="1000" data-aos-once="false" data-aos-offset="200">
             <h1 className='text-2xl font-bold pb-2 relative inline-block'>Contact me<span class="absolute left-0 bottom-0 w-20 border-b-4 border-red-950"></span></h1>
             <p className='p-5'>If you want to dicuss more in detail ,please contact me </p>
             <div className='flex p-4'>
                <div>
                   <AiOutlineMail size={30}/> 
                </div>
                <div>
                   <p className='ml-5'><span className='font-bold'> hasan.amjy@gmail.com</span></p>
                </div>
             </div>
             <div className='flex p-4'>
                <div>
                  <AiOutlineMobile size={30}/>
                </div>
                <div>
                  <p className=' ml-5'><span className='font-bold'></span> +91 7538835648</p>
                </div>
             </div>
             
        </div>
    </section>
}
