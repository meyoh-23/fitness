import ActionButton from '@/shared/ActionButton';
import BenefitCard from '@/shared/BenefitCard';
import HText from '@/shared/HText';
import {BenefitType, SelectedPage } from '@/shared/types';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import BenefitsPageGraphics from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6'/>,
        title: "State of the Art Facility",
        description: " It houses cardio machines like treadmills, ellipticals, and stationary bikes, often featuring advanced functionalities like interactive screens and personalized workout programs. "
    },
    {
        icon: <UserGroupIcon className='h-6 w-6'/>,
        title: "100's of Diverse Classes",
        description: " . Some may include specialized equipment for activities like cross-training, yoga, or HIIT workouts, ensuring a comprehensive and diverse fitness experience for users. "
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6'/>,
        title: "Experts And Pro Trainers",
        description: " Weightlifting sections boast an array of free weights, dumbbells, barbells, and weight machines targeting different muscle groups. Additionally, gyms often offer functional training area. "
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2}
    },

}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {

  return (
    <section
    id='benefits'
    className='mx-auto min-h-full w-5/6 py-20'
    >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div className='md:my-5 md:w-3/5'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5}}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {opacity: 1, x: 0 }
            }}
            >
                <HText
                children="MORE THAN JUST A GYM"
                />
                <p className='my-5 text-sm'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quas dolor voluptatum vitae quam aspernatur consequatur eius facere veniam cumque? Inventore dolores modi quod debitis pariatur quibusdam illo quam commodi?
                </p>
            </motion.div>
            {/* BENEFITS */}
            <motion.div 
            className='md:flex items-center justify-between gap-8 mt-5'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((benefit) => ( 
                    <BenefitCard
                    key={benefit.title}
                    icon={benefit.icon}
                    description={benefit.description}
                    title={benefit.title}
                    setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* graphis and description */}
            <div className='mt-16 items-center justify-between gap-28md:mt-28 md:flex'>
                {/* GRPAHICS */}
                <img 
                src={BenefitsPageGraphics}
                alt="benefits-page-graphics" 
                className='mx-auto'
                />
                {/* DESCRIPTION */}
                <div>
                    {/* TITTLE */}
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:content-abstractwaves'>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5}}
                                variants={container}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className='text-primary-500 '> FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* DESC */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5}}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: {opacity: 1, x: 0 }
                        }}
                    >
                        <p className='my-5'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius sequi, illo ad quidem perferendis aut. Pariatur, consequatur! Similique in repellat itaque?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis maxime vero odit esse? Dolor dolores cupiditate nesciunt modi placeat ut totam corporis magnam, sunt tempore aspernatur quis voluptas nemo.
                        </p>
                        <p className='my-5'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum pariatur doloremque aperiam soluta, laudantium voluptatem necessitatibus neque odio eveniet ex cumque corporis amet, optio dignissimos error? Quae reiciendis ea nisi.
                        </p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className='relative mt-16'>
                        <div className='before:absolute before:right-40 before:content-sparkles'>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits;