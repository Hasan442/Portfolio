import { useEffect } from 'react'; // Import useEffect hook
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS
import Aboutimg from '../assets/Aboutme_2.png';
import { Link } from 'react-router-dom';

export default function Aboutme() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: false, // Whether animation should happen only once
      offset: 200 // Offset (in pixels) from the original trigger point
    });

    // Clean up AOS instance when the component unmounts
    return () => {
      AOS.refreshHard(); // Reset AOS animations when the component unmounts
    };
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    
    <section id="about"  className='aboutmesec'>
      <div className='aboutmesec-div' data-aos="fade-left" >
        <img src={Aboutimg} alt="About Me" /> {/* Add alt text for accessibility */}
      </div>
      <div className='aboutmesec-div-div' data-aos="fade-right">
        <div className='aboutmesec-div-div-div'>
          <h1 className='aboutmesec-div-div-div-h1'>About me
          <span className='aboutmesec-div-div-div-h1-span'></span></h1>
          <p className='aboutmesec-div-div-div-p mt-10'>I'm a passionate WPF C# developer with a knack for crafting immersive user experiences. With a keen eye for detail and a dedication to clean, efficient code, I strive to create software that not only meets expectations but exceeds them.</p>
          <p className='aboutmesec-div-div-div-p'>Driven by a love for problem-solving and innovation, I constantly seek new challenges to push my skills further. Whether it's designing intuitive UIs or optimizing performance, I'm committed to delivering solutions that delight users and drive business success.</p>
          <p className='aboutmesec-div-div-div-p'>Let's build something incredible together!</p>
        </div>
      </div>
    </section>
  );
}
