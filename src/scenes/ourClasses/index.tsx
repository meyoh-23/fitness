import { ClassType, SelectedPage } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import ClassCard from './ClassCard';

const ourClasses: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: " Embrace the challenge, ignite your passion for lifting, and achieve the results you've always desired. Elevate your strength and vitality with us – join our gym today and discover the incredible benefits of weightlifting",
        image: image1
    },
    {
        name: "Yoga Classes",
        description: "ate-of-the-aOur strt facility offers top-notch equipment and expert trainers ready to guide you through personalized weightlifting programs designed to build strength, sculpt muscles, and boost overall fitness.",
        image: image2
    },
    {
        name: "Ab Core Classes ",
        description: "Whether you're a beginner or a seasoned lifter, our supportive community and motivating atmosphere will inspire you to crush your fitness goals. Ready to take your fitness journey to the next level?",
        image: image3
    },
    {
        name: "Adventure Classes",
        description: "Ready to crush your fitness goals? Our gym offers more than just workouts – it's a community of support, motivation, and achievement. Join us and become the best version of yourself! 🌟",
        image: image4
    },
    {
        name: "Fitness Classes",
        description: "Achieve the body you've always wanted! Our gym is equipped with the latest gear and expert trainers to guide you every step of the way. Your fitness adventure starts now! 🚴‍♂️🏋️‍♀️",
        image: image5
    },
    {
        name: "Training Classes",
        description: "Get ripped and ready! Join our gym today for a powerhouse of workouts and unbeatable fitness classes. Your transformation starts here. 💪 #FitnessGoals",
        image: image6
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section  id="ourclasses" className='w-full bg-primary-100 py-40'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5 }}
                transition={{duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {opacity: 1, x: 0 }
                }}
            >
                <div className='md:w-3/5'>
                    <HText>OUR CLASSES </HText>
                    <p className='py-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure dolorum quas. Aliquid praesentium eaque deleniti enim adipisci vero reiciendis atque natus! Cumque voluptates eius porro doloribus maxime nulla earum.
                    </p>
                </div>
            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap '>
                    {
                        ourClasses.map((item: ClassType, index) => ( 
                            <ClassCard 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                            />
                        ))
                    }
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses;