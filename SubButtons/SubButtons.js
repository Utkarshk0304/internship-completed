import React, { Fragment } from 'react'
import classes from './SubButtons.module.css'
import { motion,AnimatePresence } from 'framer-motion'
const SubButtons = (props) => {
    // const[scope,animate]=useAnimate();
    // const [selectedSubsubButtons, setSelectedSubsubButtons] = useState({});
    const handleSubButtonClickHandler = (subgroupId, subgroupName) => {
                  
        props.setonClickingCards(true);
        props.setDropDown(true);
        props.setOtherIds(props.ids);
        props.setSubbuttonId(subgroupId);
        props.setSubgroupName(subgroupName)
        props.setSubSubButtonId(null)
    }


    return (
        <React.Fragment>
            <AnimatePresence>
            {
            // !props.onClickingCards &&

                <motion.div className={classes['MaindivSubButtons']}
                initial={{opacity:0,x:-410,}}
                animate={{opacity:1,x:0}}
                // exit={{opacity:1,x:-400}}  
              
                transition={{type:'spring',duration:1.2 }}

               

                key={props.ids}
                            >
                    {<motion.div className={classes['subButtons']}

                    >
                        {<h3>{props.MainArray[props.ids - 1].h3}</h3>}
                        {props.MainArray[props.ids - 1].Suboptions.flatMap((subgroup) => (
                            <motion.div
                            whileHover={{ cursor:'pointer',border:'1px solid rgb(172, 171, 171)'}}
                            transition={{type:'spring',duration:0.3}}

                            key={subgroup.id}
                                style={{marginBottom:subgroup.bottomMargin==='100' ? '100px':''}}
                             onClick={() => { handleSubButtonClickHandler(subgroup.id, subgroup.name) }}>
                                <p key={subgroup.id}>{subgroup.name}</p>
                                <p>
                                    {/* { props.MainArray[props.ids - 1].Suboptions[props.subbuttonId-1].Suboptions[props.subSubButtonId-1].name} */}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>}
                    {
                       props.waistcoatOptions &&   !props.onClickingCards &&
                         <div className={classes['subButtons']}
                        //  style={{marginTop:true?'100px':''}}
                         >
                        {<h3>{props.MainArray[props.ids - 1].h3}</h3>}
                        {props.MainArray[3].WaistcoatOtions.flatMap((subgroup) => (
                            <div key={subgroup.id}
                                style={{marginBottom:subgroup.bottomMargin==='100' ? '100px':''}}
                             onClick={() => { handleSubButtonClickHandler(subgroup.id, subgroup.name) }}>
                                <p key={subgroup.id}>{subgroup.name}</p>
                                <p>
                                    {/* { props.MainArray[ids - 1].Suboptions[props.subbuttonId-1].Suboptions[active-1].name} */}
                                </p>
                            </div>
                        ))}
                    </div>
                    }
                    
                </motion.div>}
                </AnimatePresence>
        </React.Fragment>
    )
}

export default SubButtons
