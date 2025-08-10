import { easeInOut, motion } from "motion/react"
import team1 from '../../assets/happy2.jpg'
import team2 from '../../assets/happy12.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className='flex-1'> 
                 <motion.img
                    src={team1}
                    animate={{y:[50,100,50]}}
                    transition={{duration:10, delay:5,repeat:Infinity}}
                    className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
                />
                 <motion.img
                    src={team2}
                    animate={{x:[100,150,100]}}
                    transition={{duration:10,repeat:Infinity}}
                    className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
                />
               </div>
                <div className='flex-1'>
                    <motion.h1 
                    animate={{x:50}}
                    transition={{duration:2,delay:1,ease:easeInOut,repeat:Infinity}}
                    className="text-5xl font-bold">Latest <motion.span
                    animate={{color:['#ecff33','#33ffe3']}}
                        transition={{duration:1.5,repeat:Infinity}}
                    >Job</motion.span> For You</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;