import '../styles/main.css';
import { Link } from "react-router-dom";
import rocket from '../images/logo2.png'

const Hero = () => {
  return (
    <>
        <section id="hero">
            <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
                <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                    <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"><span className=''>Welcome</span> to Stackers Pool</h1>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">The stackers pool is a WEB 3.0 service providing community anchord on the stacks blockchain</p>
                    <div className="flex justify-center md:justify-between">
                        <Link to="" className="hidden p-2 px-6 pt-2 text-white bg-black rounded-full baseline hover:bg-white hover:text-black md:block">Read More</Link>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img src={rocket} alt="Stackerspool rocket" className=""/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero