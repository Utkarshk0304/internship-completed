import classes from './OnClickCards.module.css'
import RenderCards from '../RenderOnClick/RederCards';
import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
// import ApplyAndCancel from '../ApplyAndCancel/ApplyAndCancel';
const OnClickCards = (props) => {
    // const [active, setActive] = useState('1');

    const GoToPrevPage = () => {

        props.setonClickingCards(false);
        props.setDropDown(false);
        props.setOtherIds(null)
    
            // props.setWaistcoat(false)
        
        
    }   
    // const subsubButtonClickHandler=(subsubgroupId)=>{
    //     props.setSubSubButtonId(subsubgroupId) 
    // }
    return (
        <motion.div className={classes['optionCards']}
        initial={{opacity:1,x:400}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:300,transition:{duration:0.1}}}
        transition={{type:'tween',duration:0.4}}
        key={props.ids}
        >

            {/* // props.onClickingCards &&  */}
            <div 
            
                onClick={GoToPrevPage}
            >
                <motion.svg 
                initial={{rotate:360}}
                animate={{rotate:0,transition:{duration:0.5}}}
                whileTap={{rotate:180}}
                transition={{type:'tween',duration:0.2}}
                xmlns="http://www.w3.org/2000/svg" className={classes['goBackSvg']} width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                    <path
                    
                     d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    //   onClick={GoToPrevPage}
                    />
                </motion.svg>
            </div>
            <p className={classes['ButtonNames']}>
                { !props.waistcoat &&   props.MainArray[props.ids - 1].Suboptions[props.subbuttonId - 1].name}
                {   props.waistcoat && props.MainArray[props.ids - 1].WaistcoatOtions[props.subbuttonId - 1].name }
            </p>
            {  !props.waistcoat && props.MainArray[props.ids - 1].Suboptions[props.subbuttonId - 1].Suboptions.flatMap((subgroup) =>
            ( 
                <RenderCards
    //             variants={{hidden:{opacity:0,scale:0.5},
    //             visible:{opacity:1,scale:[0.8,1.3,1]}}}
                
    // exit={{opacity:1,scale:1}}  
    // transition={{type:'spring'}}
                    // onClick={()=>subsubButtonClickHandler(subgroup)}
                    ids={props.ids}
                    subbuttonId={props.subbuttonId}
                    setSubSubButtonId={props.setSubSubButtonId}
                    subSubButtonId={props.subSubButtonId}
                    MainMainName={props.MainArray[props.ids - 1].name}
                    mainName={props.MainArray[props.ids - 1].Suboptions[props.subbuttonId - 1].name}
                    key={subgroup.id}
                    id={subgroup.id}
                    name={subgroup.name}
                    renderLayers={subgroup.renderLayers}
                    p={subgroup.p}
                    img={subgroup.img}
                    mainButtonName={props.mainButtonName}
                    // subButtonName={props.subButtonName}

                    // waistcoat={props.waistcoat}
                    // setWaistcoat={props.setWaistcoat}
                    // setLayer={props.setLayer}
                    // setSecondLayer={props.setSecondLayer}

                    setSelectedImage={props.setSelectedImage}                    
                    // isSelected={
                    //     props.selectedSubsubButtons[props.subbuttonId] === props.subSubButtonId
                    //   } 
                    setActiveSubSubButton={props.setActiveSubSubButton}
                    activeSubSubButton={props.activeSubSubButton}
                    waistcoatOptions={props.waistcoatOptions}
                    setWaistcoatOptions={props.setWaistcoatOptions}
                    // setWaistcoatForOnClickcards={props.setWaistcoatForOnClickcards}
                >
                </RenderCards>
            )
            )}
            { 
            // props.waistcoatOptions && 
             props.waistcoat &&
                props.MainArray[3].WaistcoatOtions[props.subbuttonId - 1].Suboptions.flatMap((subgroup) =>
                (
                    <RenderCards
                    ids={props.ids}
                    subbuttonId={props.subbuttonId}
                    setSubSubButtonId={props.setSubSubButtonId}
                    subSubButtonId={props.subSubButtonId}
                    MainMainName={props.MainArray[props.ids - 1].name}
                    mainName={props.MainArray[props.ids - 1].WaistcoatOtions[props.subbuttonId - 1].name}
                    key={subgroup.id}
                    id={subgroup.id}
                    name={subgroup.name}
                    renderLayers={subgroup.renderLayers}
                    p={subgroup.p}
                    img={subgroup.img}
                    mainButtonName={props.mainButtonName}
                    subButtonName={props.subButtonName}
                    setSelectedImage={props.setSelectedImage}                    
                    setActiveSubSubButton={props.setActiveSubSubButton}
                    activeSubSubButton={props.activeSubSubButton}
                    waistcoatOptions={props.waistcoatOptions}
                    setWaistcoatOptions={props.setWaistcoatOptions}
                >
                </RenderCards>))
            }
            {/* { 
            props.waistcoat &&
                props.MainArray[props.ids - 1].Suboptions1[props.subbuttonId2 - 1].Suboptions.flatMap((subgroup2) =>
                (
                    <RenderCards
                    MainMainName={props.MainArray[props.ids - 1].name}
                    mainName={props.MainArray[props.ids - 1].Suboptions[props.subbuttonId2 - 1].name}
                    mainName2nd={props.MainArray[props.ids - 1].Suboptions1[0].name}
                    key={subgroup2.id}
                    id2={subgroup2.id}
                    name2={subgroup2.name}
                    p={subgroup2.p}
                    img={subgroup2.img}
                    active={props.active}
                    setActive={props.setActive}
                    SelectedSubButton={props.SelectedSubButton}
                    mainButtonName={props.mainButtonName}
                    subButtonName={props.subButtonName}
                    waistcoat={props.waistcoat}
                    setWaistcoat={props.setWaistcoat}>

                    </RenderCards>
                )
            )} */}

            {/* {props.onClickingCards && 
            <div 
            className={classes['OnclickCards']}
            >

                <ApplyAndCancel
                    setonClickingCards={props.setonClickingCards}
                    onClickingCards={props.onClickingCards}
                    setOnApply={props.setOnApply}
                    subbuttonId={props.subbuttonId}
                    subbuttonId2={props.subbuttonId2}
                ></ApplyAndCancel>
             </div>
            } */}
        </motion.div>
    )
}
export default React.memo(OnClickCards);