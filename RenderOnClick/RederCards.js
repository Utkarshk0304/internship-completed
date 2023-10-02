import { motion } from 'framer-motion';
import './RenderCards.css';
import React from 'react';
import _ from 'lodash';
const RenderCards = (props) => {




    const propsId = props.id;
    return (
        <motion.div className={` ${props.subSubButtonId === props.id ? 'ifSelected ' : 'DisplayCards'}`}
        // initial={{x:-100,opacity:0}}
        // animate={{x:0,opacity:1}}
        // transition={{type:'spring'}}
            // style={{
            //     border: props.name === props.activeSubSubButton[0] || props.name === props.activeSubSubButton[1] ||
            //         props.name === props.activeSubSubButton[2] || props.name === props.activeSubSubButton[3] ||
            //         props.name === props.activeSubSubButton[4] || props.name === props.activeSubSubButton[5] ||
            //         props.name === props.activeSubSubButton[6] || props.name === props.activeSubSubButton[7] ||
            //         props.name === props.activeSubSubButton[8] || props.name === props.activeSubSubButton[9] ||
            //         props.name === props.activeSubSubButton[10] || props.name === props.activeSubSubButton[11] ||
            //         props.name === props.activeSubSubButton[12] || props.name === props.activeSubSubButton[13] ||
            //         props.name === props.activeSubSubButton[14] || props.name === props.activeSubSubButton[15] ||
            //         props.name === props.activeSubSubButton[16] || props.name === props.activeSubSubButton[17] ||
            //         props.name === props.activeSubSubButton[18] || props.name === props.activeSubSubButton[19] ||
            //         props.name === props.activeSubSubButton[20] || props.name === props.activeSubSubButton[21] ||
            //         props.name === props.activeSubSubButton[22] || props.name === props.activeSubSubButton[23] ||
            //         props.name === props.activeSubSubButton[24] || props.name === props.activeSubSubButton[25] ||
            //         props.name === props.activeSubSubButton[26] || props.name === props.activeSubSubButton[27] ||
            //         props.name === props.activeSubSubButton[28] || props.name === props.activeSubSubButton[29] ||
            //         props.name === props.activeSubSubButton[30] || props.name === props.activeSubSubButton[31] ||
            //         props.name === props.activeSubSubButton[32] ? '1px solid black' : ''
            // }}

            // onClick={() => {
            //     console.log(props.renderLayers);
                
            //     props.setSubSubButtonId(propsId)
            //     const updatedSubButtonData = [...props.activeSubSubButton];
            //     if (props.ids >= 1 && props.ids <= 2 && props.subbuttonId >= 1 && props.subbuttonId <= 15) {
            //         const index = (props.ids - 1) * 15 + (props.subbuttonId - 1);
            //         updatedSubButtonData[index] = props.name;
            //     }
            //     props.setActiveSubSubButton(updatedSubButtonData) 




                 style={{ 
                    border: _.isEqual(props.renderLayers,props.activeSubSubButton[0] )|| _.isEqual(props.renderLayers,props.activeSubSubButton[1] )||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[2] )|| _.isEqual(props.renderLayers,props.activeSubSubButton[3] )||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[4] )|| _.isEqual(props.renderLayers,props.activeSubSubButton[5] )||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[6] )|| _.isEqual(props.renderLayers,props.activeSubSubButton[7] )||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[8] )|| _.isEqual(props.renderLayers,props.activeSubSubButton[9] )||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[10]) || _.isEqual(props.renderLayers,props.activeSubSubButton[11]) ||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[12]) || _.isEqual(props.renderLayers,props.activeSubSubButton[13]) ||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[14]) || _.isEqual(props.renderLayers,props.activeSubSubButton[15]) ||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[16]) || _.isEqual(props.renderLayers,props.activeSubSubButton[17]) ||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[18]) || _.isEqual(props.renderLayers,props.activeSubSubButton[19]) ||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[20]) || _.isEqual(props.renderLayers,props.activeSubSubButton[21]) ||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[22]) || _.isEqual(props.renderLayers,props.activeSubSubButton[23]) ||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[24]) || _.isEqual(props.renderLayers,props.activeSubSubButton[25]) ||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[26]) || _.isEqual(props.renderLayers,props.activeSubSubButton[27]) ||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[28]) || _.isEqual(props.renderLayers,props.activeSubSubButton[29]) ||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[30]) || _.isEqual(props.renderLayers,props.activeSubSubButton[31]) ||
                        _.isEqual(props.renderLayers,props.activeSubSubButton[32]) ? '1px solid black' : ''
                }}

                onClick={(event) => {
                    props.setSubSubButtonId(propsId)
                    
                    const updatedSubButtonData = [...props.activeSubSubButton]; 

                    if (props.ids >= 1 && props.ids <= 2 && props.subbuttonId >= 1 && props.subbuttonId <= 15) {
                        const index = (props.ids - 1) * 15 + (props.subbuttonId - 1);
                        updatedSubButtonData[index] = props.renderLayers;
                      }
                     if (props.name==='Yes Please!') {
                        props.setWaistcoatOptions(true)
                        // props.setWaistcoatForOnClickcards(false)
                     }
                     if (props.name==='No thanks.') {
                        props.setWaistcoatOptions(false)
                        // props.setWaistcoatForOnClickcards(true)
                     } 
                     
                    //  console.log(props.waiscoat);
                    
                    props.setActiveSubSubButton(updatedSubButtonData) 
            }}>
            <div className='RenderCardsP'>
                {props.name}
                <p className='RenderCardsDescription'>{props.p}</p>
            </div>
            {/* {props.MainMainName === 'Waistcoat' && <img   src={require(`../Images/${props.MainMainName}/${props.mainName}/${props.img}.avif`)} alt='' id='CardsImage'></img>} */}
            <img /*src={props.img}*/ src={require(`../Images/${props.MainMainName}/${props.mainName}/${props.img}.avif`)} alt='' id='CardsImage'>
            </img>
        </motion.div>
    )
}
export default React.memo(RenderCards);



 // if (props.ids === '1' && props.subbuttonId === '1') {
                //     updatedSubButtonData[0] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '2') {
                //     updatedSubButtonData[1] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '3') {
                //     updatedSubButtonData[2] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '4') {
                //     updatedSubButtonData[3] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '5') {
                //     updatedSubButtonData[4] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '6') {
                //     updatedSubButtonData[5] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '7') {
                //     updatedSubButtonData[6] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '8') {
                //     updatedSubButtonData[7] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '9') {
                //     updatedSubButtonData[8] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '10') {
                //     updatedSubButtonData[9] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '11') {
                //     updatedSubButtonData[10] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '12') {
                //     updatedSubButtonData[11] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '13') {
                //     updatedSubButtonData[12] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '14') {
                //     updatedSubButtonData[13] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '15') {
                //     updatedSubButtonData[14] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '16') {
                //     updatedSubButtonData[15] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '17') {
                //     updatedSubButtonData[16] = props.name;
                // }
                // if (props.ids === '1' && props.subbuttonId === '18') {
                //     updatedSubButtonData[17] = props.name;
                // }
                // if (props.ids === '2' && props.subbuttonId === '1') {
                //     updatedSubButtonData[18] = props.name;
                // }
                // if (props.ids === '2' && props.subbuttonId === '2') {
                //     updatedSubButtonData[19] = props.name;
                // }
                // if (props.ids === '2' && props.subbuttonId === '3') {
                //     updatedSubButtonData[20] = props.name;
                // }
                // if (props.ids === '2' && props.subbuttonId === '4') {
                //     updatedSubButtonData[21] = props.name;
                // }
                // if (props.ids === '2' && props.subbuttonId === '5') {
                //     updatedSubButtonData[22] = props.name;
                // }
                // if (props.ids === '2' && props.subbuttonId === '6') {
                //     updatedSubButtonData[23] = props.name;
                // }
                // if (props.ids === '2' && props.subbuttonId === '7') {
                //     updatedSubButtonData[24] = props.name;
                // }
                // if (props.ids === '2' && props.subbuttonId === '8') {
                //     updatedSubButtonData[25] = props.name;
                // }
                // if (props.ids === '2' && props.subbuttonId === '9') {
                //     updatedSubButtonData[26] = props.name;
                // }
                // if (props.ids === '2' && props.subbuttonId === '10') {
                //     updatedSubButtonData[27] = props.name;
                // }
                // if (props.ids === '2' && props.subbuttonId === '11') {
                //     updatedSubButtonData[28] = props.name;
                // }
                // if (props.ids === '2' && props.subbuttonId === '12') {
                //     updatedSubButtonData[29] = props.name;
                // }
                // if (props.ids === '2' && props.subbuttonId === '13') {
                //     updatedSubButtonData[30] = props.name;
                // }
                // if (props.ids === '2' && props.subbuttonId === '14') {
                //     updatedSubButtonData[31] = props.name;
                // }
                // if (props.ids === '2' && props.subbuttonId === '15') {
                //     updatedSubButtonData[32] = props.name;
                // }