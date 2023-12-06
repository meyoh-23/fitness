import AnchorLink from 'react-anchor-link-smooth-scroll';
import {  SelectedPage } from './types';
import { motion } from 'framer-motion';

const childVariant = {
    hidden: {opacity: 0, scale: 0.9},
    visible: { opacity: 1, scale: 1}
}

type Props = {
    title: string;
    icon: JSX.Element;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
} 

const BenefitCard = ({title, description, icon, setSelectedPage}: Props) => {
  return (
    <motion.div 
    variants={childVariant}
    className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'>
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-gray-100 p-4'>
                {icon}
            </div>
        </div>
        <h1 className='font-bold'>{title}</h1>
        <p className='my-3 '>{description}</p>
        <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={()=>setSelectedPage(SelectedPage.ContacUs)}
            href={`#${SelectedPage.ContacUs}`}
        >
            <p>Learn More</p>
        </AnchorLink>
    </motion.div>
  )
}

export default BenefitCard;