import classes from './MainButtons.module.css'
import React, { useState, Fragment } from 'react';
// import { Transition } from "react-transition-group";
import OnClickCards from '../OnClickCards/OnClickCards'
import SubButtons from '../../SubButtons/SubButtons';
import { motion,AnimatePresence } from 'framer-motion';

const MainButtons = (props) => {
    const [onClickMainButtons, setOnClickMainButtons] = useState(false)
    const [hover, sethover] = useState(true);
    const [subHover, setSubHover] = useState(true);
    // const [waistcoatForOnClickcards, setWaistcoatForOnClickcards] = useState(true);
    const [otherIds, setOtherIds] = useState('1');

    // const duration = 200;

    // const defaultStyle = {
    //     transition: `opacity ${duration}ms ease-in-out`,
    //     opacity: 0,
    //     display: "inline-block",
    //     backgroundColor: "white"
    // };

    // const transitionStyles = {
    //     entering: { opacity: 0 },
    //     entered: { opacity: 1 },
    //     exiting: { opacity: 1 },
    //     exited: { opacity: 0 },
    // };
    const handleMainButtonClickHandler = (groupId) => {

        sethover(true)
        // console.log(ids);
        setOnClickMainButtons(!onClickMainButtons)
        props.setonClickingCards(false)
        props.setIds(groupId);
        props.setSubSubButtonId(null)
        if (groupId === '4') {
            handleWaistcoatState(true); // Pass `true` to set `waistcoat` to `true`
          } else {
            handleWaistcoatState(false); // Pass `false` to set `waistcoat` to `false`
          }

    }
   

    const SelectedSubButton = (event) => {
        console.log(event); // name of Sub sub button
        return event;
    }

    // const otherRightSideClickHandler = (groupId) => {
    //     setSubHover(true);
    //     props.setSubSubButtonId(null);
    //     setOnClickMainButtons(!onClickMainButtons);
    //     props.setIds(groupId);
      
    //     if (otherIds === groupId) {
         
    //     } else {
    //       setOtherIds(groupId);
    //     }
    //     props.setSubbuttonId('1');
      
    //     if (groupId === '4') {
    //       handleWaistcoatState(true); 
    //     } else {
    //       handleWaistcoatState(false); 
    //     }
    //   };
      
      const handleWaistcoatState = (newWaistcoatValue) => {
        // Use a callback function with setWaistcoat to update the state immediately
        props.setWaistcoat(newWaistcoatValue);
        console.log(newWaistcoatValue); // Log the updated value
      };
      
    // const otherhandleSubButtonClickHandler = (subGroupId) => {
       
    //     props.setSubbuttonId(subGroupId);
    //     props.setonClickingCards(true);
    //     props.setSubSubButtonId(null)
    // };
    // const otherWaistcoatSubButtonClickHandler = (subGroupId) => {
        
    //     props.setSubbuttonId(subGroupId);
    //     props.setonClickingCards(true);
    //     props.setSubSubButtonId(null)
       

    // };


    return (
        <React.Fragment>

            
                        <motion.div 
                        className={classes['MainButtonSection']}   
                        initial={{opacity:0,x:200}}
                             animate={{opacity:1,x:0}}
                             transition={{type:'spring',duration:1.5}}          
                             whileTap={{backgroundColor:['grey','white']}}          
                        >
                            
                            {/* // !props.onClickingCards && */}
                             <motion.div className={classes['right-Side-Section']}
                             
                             >
                                {props.MainArray.map((group) => (
                                    // <div className={classes['to-fix-button']}>
                                    <motion.button 
                                    // layoutId='s'
                                    // whileHover={{ backgroundColor:'#E9E7E7',}}
                                    whileTap={{scale:[1,0.9,1],}}

                                    // transition={{type:'spring',duration:1}}

                                    key={group.id} type="button"
                                        className={classes["button-button"]}
                                        onClick={() => handleMainButtonClickHandler(group.id)}
                                        style={{
                                            color: group.id === props.ids && hover ? 'black' : '',
                                            backgroundColor: group.id === props.ids && hover ? "#E9E7E7" : '',
                                        }}
                                        // onMouseOver={sethover(!hover)}
                                        onMouseEnter={() => { sethover(false) }}
                                        onMouseLeave={() => { sethover(true) }}
                                    >
                                        {group.name}
                                    </motion.button>
                                    //  </div>
                                ))

                                } </motion.div>
                        </motion.div >
                                <AnimatePresence>
                        <SubButtons
                            onClickingCards={props.onClickingCards}
                            ids={props.ids}
                            setonClickingCards={props.setonClickingCards}
                            setOtherIds={setOtherIds}
                            setDropDown={props.setDropDown}
                            setSubbuttonId={props.setSubbuttonId}
                            setSubgroupName={props.setSubgroupName}
                            MainArray={props.MainArray}
                            subSubButtonId={props.subSubButtonId}
                            subbuttonId={props.subbuttonId}
                            setSubSubButtonId={props.setSubSubButtonId}
                            waistcoatOptions={props.waistcoatOptions}
                            setWaistcoatOptions={props.setWaistcoatOptions}
                            waistcoat={props.waistcoat}
                        ></SubButtons>
                        </AnimatePresence>

                        {/* {!props.onClickingCards &&
                            <div className={classes['MaindivSubButtons']} >
                                {<div className={classes['subButtons']}>
                                    {<h3>{props.MainArray[props.ids - 1].h3}</h3>}
                                    {props.MainArray[props.ids - 1].Suboptions.flatMap((subgroup) => (
                                        <div key={subgroup.id} onClick={() => { handleSubButtonClickHandler(subgroup.id, subgroup.name) }}>
                                            <p key={subgroup.id}>{subgroup.name}</p>
                                            <p>
                                                { props.MainArray[props.ids - 1].Suboptions[props.subbuttonId-1].Suboptions[props.subbuttonId-1].name}
                                            </p>
                                        </div>
                                    ))}
                                </div>}
                             
                            </div>} */}

                        {/* */}
                        {/* {
                        waistcoat 
                        && <div>
                            {<div className={classes['subButtons']}>
                                {props.MainArray[ids - 1].Suboptions1.flatMap((subgroup) => (
                                    <div key={subgroup.id} onClick={() => { handleSubButtonClickHandler2(subgroup.id) }}>
                                        <p key={subgroup.id}>{subgroup.name}</p>
                                        <p>
                                        </p>
                                    </div>
                                ))}
                            </div>}
                        </div>} */}
                        {/* */}
                        {/* <Transition in={!props.onClickingCards} timeout={300}>
                {(state) => (
                    <div className={classes['transition-box']}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    >
                    </div>
                )}
            </Transition> */}

            {/* } */}

            {/* <Transition in={props.onClickingCards} timeout={300}>
                {(state) => (
                    <div className={classes['transition-box']}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    > */}
                        <AnimatePresence>
                        {props.onClickingCards &&
                            <div className={classes['On-Click-Cards']}>
                                <OnClickCards 
                                //  variants={{hidden:{x: -100,opacity:0},
                                //  visible:{x:0,opacity:1}}}
                                //  initial='hidden'
                                //  animate='visible'
                                //  exit='hidden'

                                MainArray={props.MainArray}
                                    ids={props.ids}
                                    subbuttonId={props.subbuttonId}
                                    setSubSubButtonId={props.setSubSubButtonId}
                                    subSubButtonId={props.subSubButtonId}
                                    // subbuttonId2={props.subbuttonId}
                                    SelectedSubButton={SelectedSubButton}

                                    // active={props.active}
                                    // setActive={props.setActive}

                                    mainButtonName={props.MainArray[props.ids - 1].name}
                                    // subButtonName={props.MainArray[props.ids - 1].Suboptions[props.subbuttonId - 1].name}
                                   
                                    // subSubButtonName={}
                                    // waistcoat={waistcoat}
                                    // setWaistcoat={setWaistcoat}
                                    setonClickingCards={props.setonClickingCards}
                                    onClickingCards={props.onClickingCards}
                                    setOnApply={props.setOnApply}
                                    setDropDown={props.setDropDown}
                                    setOtherIds={setOtherIds}
                                    // setLayer={props.setLayer}
                                    // setSecondLayer={props.setSecondLayer}

                                    setSelectedImage={props.setSelectedImage}

                                    // selectedSubsubButtons={selectedSubsubButtons}
                                    // setSelectedSubsubButtons={setSelectedSubsubButtons}

                                    setActiveSubSubButton={props.setActiveSubSubButton}
                                    activeSubSubButton={props.activeSubSubButton}
                                    waistcoatOptions={props.waistcoatOptions}
                                    setWaistcoatOptions={props.setWaistcoatOptions}
                                    setWaistcoat={props.setWaistcoat}
                                    waistcoat={props.waistcoat}
                                    // setWaistcoatForOnClickcards={setWaistcoatForOnClickcards}
                                ></OnClickCards>
                            </div>
                        }
                        </AnimatePresence>
                      
                    {/* </div>
                )}
            </Transition> */}

            {/* <Transition in={props.onClickingCards} timeout={300}>
                {(state) => (
                    <div className={classes['transition-box']}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    >
            <div className={classes['flexColumn']}>
                {props.dropDown && (
                    <div className={classes['other-right-side-container']}>
                        <div className={classes['other-right-side-section']}>
                            {props.MainArray.map((group) => (
                                <div key={group.id} >
                                    <button
                                        className={classes['other-main-buttons']}
                                        style={{ color: group.id === props.ids && hover ? 'black' : '' }}
                                        onClick={() => {otherRightSideClickHandler(group.id, group.name); 
                                           }}
                                        onMouseEnter={() => sethover(false)}
                                        onMouseLeave={() => sethover(true)}
                                    >
                                        {group.name}
                                    </button>
                                   
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div > */}
                    {/* {(props.dropDown && <div className={classes['otherSub-buttons']}>
                        {
                            // otherIds === props.ids && 

                            (
                                <div className="">
                                    {props.MainArray[otherIds - 1].Suboptions.map((subgroup) => (
                                        <div
                                            className={classes['other-sub-buttons']}
                                            key={subgroup.id}
                                            style={{ color: subgroup.id === props.subbuttonId && subHover ? 'black' : '' }}
                                            onMouseEnter={() => setSubHover(false)}
                                            onMouseLeave={() => setSubHover(true)}
                                            onClick={() => otherhandleSubButtonClickHandler(subgroup.id)}
                                        >
                                            <p key={subgroup.id} className={classes['other-Sub-heading']}>
                                                {subgroup.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                    </div>)}
                    {(props.dropDown && props.waistcoatOptions && props.waistcoat &&  <div className={classes['otherSub-buttons']}>
                        {
                            // otherIds === props.ids && 

                            (
                                <div className=""
                                // style={{marginTop:true?'50px':''}}
                                >
                                    {props.MainArray[3].WaistcoatOtions.map((subgroup) => (
                                        <div
                                        // style={{marginTop:true?'100px':''}}
                                            className={classes['other-sub-buttons']}
                                            key={subgroup.id}
                                            style={{ color: subgroup.id === props.subbuttonId && subHover ? 'black' : '' , 
                                            // marginTop:true?'100px':''
                                        }}
                                            onMouseEnter={() => setSubHover(false)}
                                            onMouseLeave={() => setSubHover(true)}
                                            onClick={() => otherWaistcoatSubButtonClickHandler(subgroup.id)}
                                        >
                                            <p key={subgroup.id} className={classes['other-Sub-heading']}>
                                                {subgroup.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                    </div>)} */}
                {/* </div>
            </div>
            </div>
                )}
            </Transition> */}


            {/* </div>
                    )}
                </Transition> */}

        </React.Fragment>

    );
}
export default React.memo(MainButtons);