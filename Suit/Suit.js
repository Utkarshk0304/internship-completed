import React,{useState,useRef,Fragment,useEffect } from 'react'
import classes from './Suit.module.css'
import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
const Suit = (props) => {
  const updatedSubButtonData = [...props.activeSubSubButton];
  // const trimmedNamesArray = updatedSubButtonData.map((str) => str.replace(/\s+/g, ''));
  const selectedImagesRefs = useRef({ });
  const subButtonId = props.subbuttonId;
  // const [isFullyRendered, setIsFullyRendered] = useState(false);
  const [isSuitRendered, setIsSuitRendered] = useState(false);
  // Use react-intersection-observer to detect if the component is in the viewport
  setTimeout(() => {
    setIsSuitRendered(true);
  }, 3000);
  // const [ref, inView] = useInView(
  //   //{ triggerOnce: true, }
  //   );
// console.log(inView);
// useEffect(() => {
//   if (inView) {
//     setIsFullyRendered(true);
//     setIsLoading(false);
//   }
// }, [inView]);
  // if (!inView) {
  //   return null;

  // }

  const renderSelectedImages = () => {
        // Check if the component is in the viewport
    //  if (isLoading) {
    //   return <div>hello</div>
    //  }  
    
    if (props.subSubButtonId !== null && !props.waistcoat ) {
      const selectedButton =
        props.MainArray[props.ids - 1].Suboptions[subButtonId - 1].Suboptions[
          props.subSubButtonId - 1
        ].renderLayers;
        
      // Update the selected images for the current subButton in refs
      selectedImagesRefs.current[subButtonId] = selectedButton;

      return selectedButton.map((subgroup) => (
        <motion.img
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{type:'tween',duration:1}}
          key={subgroup.id}
          className={classes['img3']}
          src={require(`./22/${subgroup.img}.png`)}
          alt=''
        />
      ));
    }
    if (props.subSubButtonId !== null && props.waistcoat ) {
      const selectedButton =
        props.MainArray[props.ids - 1].WaistcoatOtions[subButtonId - 1].Suboptions[
          props.subSubButtonId - 1
        ].renderLayers;
        
      // Update the selected images for the current subButton in refs
      selectedImagesRefs.current[subButtonId] = selectedButton;

      return selectedButton.map((subgroup) => (
        <motion.img
        // initial={{opacity:0}}
        // animate={{opacity:1}}
        // transition={{type:'tween',duration:1}}
          key={subgroup.id}
          className={classes['img3']}
          src={require(`./22/${subgroup.img}.png`)}
          alt=''
        />
      ));
    }
    return null;
  };

     
  return (<React.Fragment>
    { <div 
    // ref={ref} // Attach the ref to the element you want to observe for visibility changes
    className={classes['container']}
    initial={{opacity:0,x:-200}}
    animate={{opacity:1,x:0}}
    transition={{type:'spring',duration:0.8}}
    // style={{ width: props.dropDown ? '60%' : '' }}
    >
      {  props.MainArray[0].renderImages.map((items) => {
        return (
          <img key={items.id} className={classes['img2']} src={require(`./11/${items.img}.png`)} alt='' ></img>
        )
      })}

        

      { renderSelectedImages()}
      
     
      
       
      { props.activeSubSubButton.map((items)=>
        items.map((items)=>{  return (
          <img
          key={items.id}
          className={classes['img3']}
          src={require(`./22/${items.img}.png`)}
          alt=''
        />
        )})
      
        // console.log(items.img);
      )}



      {/* <img className={classes['Main-suit']} src={MainSuit} alt='error'></img>
      <img className={classes['img2']} src={baseLayer} alt='error'></img>
      <img className={classes['img2']} src={rightLeg11}  style={{zIndex:true ?'10':''}} alt='error'></img>
      <img className={classes['img2']} src={leftLeg11}  style={{zIndex:true ?'10':''}} alt='error'></img>
      <img className={classes['img2']} src={rightHand11} style={{zIndex:true ?'100':''}} alt='error'></img>
      <img className={classes['img2']} src={rightJacket} style={{zIndex:true ?'100':''}} alt='error'></img>
      <img className={classes['img2']} src={leftHand11} style={{zIndex:true ?'100':''}} alt='error'></img>
      <img className={classes['img2']} src={leftJacket} style={{zIndex:true ?'100':''}} alt='error'></img>
      <img className={classes['img3']} src={one} alt='error'></img>
      <img className={classes['img3']} src={two} alt='error'></img>
      <img className={classes['img2']} src={four} alt='error'></img>
      <img className={classes['img2']} src={leftWaistTop} style={{zIndex:true ?'30':''}} alt='error'></img>
      <img className={classes['img2']} src={leftWaistBottom} style={{zIndex:true ?'20':''}} alt='error'></img>
      <img className={classes['img2']} src={rightWaistBottom} style={{zIndex:true ?'40':''}} alt='error'></img>
      <img className={classes['img2']} src={rightWaistTop} style={{zIndex:true ?'50':''}} alt='error'></img>
      <img className={classes['img2']} src={nine} alt='error'></img>
      <img className={classes['img2']} src={topLeftLapel} style={{zIndex:true ?'200':''}} alt='error'></img>
      <img className={classes['img2']} src={leftLapel} style={{zIndex:true ?'200':''}} alt='error'></img>
      <img className={classes['img2']} src={rightTopLapel} style={{zIndex:true ?'200':''}} alt='error'></img>
      <img className={classes['img2']} src={rightLapel} style={{zIndex:true ?'200':''}} alt='error'></img>
      <img className={classes['img2']} src={leftTopPocket} style={{zIndex:true ?'200':''}} alt='error'></img>
      <img className={classes['img2']} src={bottomLeftPocket} style={{zIndex:true ?'200':''}} alt='error'></img>
      <img className={classes['img2']} src={pocket} style={{zIndex:true ?'200':''}} alt='error'></img>
      <img className={classes['img2']} src={rightTopPocket} style={{zIndex:true ?'200':''}} alt='error'></img>
      <img className={classes['img2']} src={rightBottomPocket} style={{zIndex:true ?'200':''}} alt='error'></img>
      <img className={classes['img3']} src={twenty5} alt='error'></img>
      <img className={classes['img3']} src={twenty6} alt='error'></img>
      <img className={classes['img2']} src={baseColoredLayer} style={{zIndex:true ?'250':''}} alt='error'></img>
      <img className={classes['img4']} src={Curves} alt='error'></img> */}

      {/* {props.layer && <img className={classes['img3']} src={largeLapelRight} alt='error'></img>}
      {props.layer && <img className={classes['img3']} src={LargeLapelLeft} alt='error'></img>}

      {props.secondLayer && <img className={classes['img3']} src={rightLeg} alt='error'></img>}
      {props.secondLayer && <img className={classes['img3']} src={leftLeg} alt='error'></img>}

      {props.thirdLayer && <img className={classes['img3']} src={rightHand} alt='error'></img>}
      {props.thirdLayer && <img className={classes['img3']} src={leftHand} alt='error'></img>} */}
      {/* 
       <img className={classes['img3']} src={largeLapelRight} alt='error'></img>
       <img  className={classes['img3']} src={LargeLapelLeft} alt='error'></img> */}
      {/* {console.log(props.demoButton)} */}
    </div>}
    </React.Fragment>
  )
  
}

export default React.memo(Suit)