import './AddToCart.css'
import { motion } from 'framer-motion'
const AddToCart=(props)=>{



    return(
        <motion.div className="AddtoCartMain" 
        style={{display: props.fitButton ? 'none':''}}
        initial={{opacity:0,y:100}}
                             animate={{opacity:1,y:0}}
                             transition={{type:'spring',duration:1.5}}
        >
            <p className='price_section'>INR 20000</p>
            <motion.button className='ADD'
             whileHover={{scale:1.05,}}
             whileTap={{ scale: 1 }}
             transition={{type:'spring',stiffness:'400',}}>ADD TO CART →</motion.button>
        </motion.div>
    )
}

export default AddToCart