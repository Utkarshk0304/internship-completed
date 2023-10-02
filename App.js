import Navbar from './Components/Navbar/Navbar';
import React, { useState, Fragment } from 'react';
import './App.css';
import { useInView } from 'react-intersection-observer';
// import HeroSlider from './Components/Carousel/HeroSlider';
import MainButtons from './Components/MainButtons/MainButtons';
import AddToCart from './Components/AddToCart/AddToCart';
// import ApplyAndCancel from './Components/ApplyAndCancel/ApplyAndCancel';
// import UpdateSelectedOption from './store/auth-context';
import Suit from './Components/Suit/Suit';
import { motion } from 'framer-motion';
function App(props) {
  const MainArray = [{
    id: '1',
    name: 'Jacket',
    h3: 'Customize Your Jacket',
    renderImages: [{
      id: '1',
      name: 'rightLeg',
      img: 'rightLeg'
    },
    {
      id: '2',
      name: 'leftLeg',
      img: 'leftLeg'
    },
    {
      id: '3',
      name: 'leftWaistBottom',
      img: 'leftWaistBottom'
    },
    {
      id: '4',
      name: 'leftWaistTop',
      img: 'leftWaistTop'
    },
    {
      id: '5',
      name: 'rightWaistBottom',
      img: 'rightWaistBottom'
    },
    {
      id: '6',
      name: 'rightWaistTop',
      img: 'rightWaistTop'
    },
    {
      id: '7',
      name: 'rightHand',
      img: 'rightHand'
    }, {
      id: '8',
      name: 'rightJacket',
      img: 'rightJacket'
    },
    {
      id: '9',
      name: 'leftHand',
      img: 'leftHand'
    },
    {
      id: '10',
      name: 'leftJacket',
      img: 'leftJacket'
    },
    {
      id: '11',
      name: 'topLeftLapel',
      img: 'topLeftLapel'
    },
    {
      id: '12',
      name: 'leftLapel',
      img: 'leftLapel'
    },
    {
      id: '13',
      name: 'rightTopLapel',
      img: 'rightTopLapel'
    },
    {
      id: '14',
      name: 'rightLapel',
      img: 'rightLapel'
    },
    {
      id: '15',
      name: 'leftTopPocket',
      img: 'leftTopPocket'
    },
    {
      id: '16',
      name: 'bottomLeftPocket',
      img: 'bottomLeftPocket'
    },
    {
      id: '17',
      name: 'pocket',
      img: 'pocket'
    },
    {
      id: '18',
      name: 'rightTopPocket',
      img: 'rightTopPocket'
    },
    {
      id: '19',
      name: 'rightBottomPocket',
      img: 'rightBottomPocket'
    },
    {
      id: '20',
      name: 'baseColoredLayer',
      img: 'baseColoredLayer'
    }, {
      id: '21',
      name: 'MainSuit',
      img: 'Main-suit'
    }
    ],
    // {
    //   id: '20',
    //   name: 'baseColoredLayer',
    //   img: 'baseColoredLayer'
    // }, {
    //   id: '21',
    //   name: 'MainSuit',
    //   img: 'Main-suit'
    // }
    renderImages2: [{


    }]
    ,
    Suboptions: [{
      id: '1',
      name: 'Closure',
      Suboptions: [{
        id: '1',
        name: '1 Button',
        p: 'Ideal for black-tie, elegantly tapered and provides a well-tailored silhouette.',
        img: '1',
        renderLayers: [{
          id: '1',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '2',
        name: '2 Button',
        p: 'The standard 2-button jacket makes for a versatile and modern appeal.',
        img: '2',
        renderLayers: [{
          id: '5',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '6',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '7',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '8',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '3',
        name: '2.5 Button',
        p: '2.5-button jackets feature a 3rd button on the lapel roll, primarily used for aesthetic purposes.',
        img: '3',
        renderLayers: [{
          id: '9',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '10',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '11',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '12',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '4',
        name: '3 Button',
        p: 'For a more formal appeal—remember to button only the top two buttons.',
        img: '4',
        renderLayers: [{
          id: '13',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '14',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '15',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '16',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '5',
        name: '4 Button Double Breasted',
        p: 'Offers a younger, more tailored version of the classic fit.',
        img: '6',
        renderLayers: [{
          id: '17',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '18',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '19',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '20',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '6',
        name: '6 Button Double Breasted',
        p: 'A tailored, modern double-breasted fit with an extra touch of timeless formality.',
        img: '6',
        renderLayers: [{
          id: '21',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '22',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '23',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '24',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '7',
        name: '6 Button Low Double Breasted',
        p: 'A bold 6-button fit with a low-cut closure for a timeless, sporty appeal.',
        img: '6',
        renderLayers: [{
          id: '25',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '26',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '27',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '28',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      }
      ]
    }, {
      id: '2',
      name: 'Lapel',
      Suboptions: [{
        id: '1',
        name: 'Notch',
        p: 'The most standard and versatile lapel works well for any occasion.',
        img: 'LN1',
        renderLayers: [{
          id: '29',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '30',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '31',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '32',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '2',
        name: 'Concave',
        p: 'A slightly widened notch lapel that features a subtle curvature.',
        img: 'LNH3',
        renderLayers: [
          {
            id: '33',
            name: 'topLeftLapel2',
            img: 'topLeftLapel2'
          },
          {
            id: '34',
            name: 'leftLapel2',
            img: 'leftLapel2'
          },
          {
            id: '35',
            name: 'rightTopLapel',
            img: 'rightTopLapel'
          },
          {
            id: '36',
            name: 'rightLapel2',
            img: 'rightLapel2'
          }
        ]
      },
      {
        id: '3',
        name: 'Peak',
        p: 'Peak lapels broaden the shoulders and are more angular with a bold upward peak.',
        img: 'LP2',
        renderLayers: [
          {
            id: '37',
            name: 'topLeftLapel',
            img: 'topLeftLapel'
          },
          {
            id: '38',
            name: 'leftLapel',
            img: 'leftLapel'
          },
          {
            id: '39',
            name: 'rightTopLapel',
            img: 'rightTopLapel'
          },
          {
            id: '40',
            name: 'rightLapel',
            img: 'rightLapel'
          }
        ]
      },
      {
        id: '4',
        name: 'Straight Peak',
        p: 'Provides a sharp, strong aesthetic that broadens the shoulders.',
        img: 'LP4',
        renderLayers: [
          {
            id: '41',
            name: 'topLeftLapel2',
            img: 'topLeftLapel2'
          },
          {
            id: '42',
            name: 'leftLapel2',
            img: 'leftLapel2'
          },
          {
            id: '43',
            name: 'rightTopLapel',
            img: 'rightTopLapel'
          },
          {
            id: '44',
            name: 'rightLapel2',
            img: 'rightLapel2'
          }
        ]
      }

      ]
    }, {
      id: '3',
      name: 'Lapel Width',
      Suboptions: [{
        id: '1',
        name: 'Narrow',
        p: 'Narrow lapels measure in at 7cm and create a sleeker silhouette.',
        img: 'LWN1',
        renderLayers: [
          {
            id: '45',
            name: 'topLeftLapel',
            img: 'topLeftLapel'
          },
          {
            id: '46',
            name: 'darkLapelLeft',
            img: 'darkLapelLeft'
          },
          {
            id: '47',
            name: 'rightTopLapel',
            img: 'rightTopLapel'
          },
          {
            id: '48',
            name: 'darkLapelRight',
            img: 'darkLapelRight'
          }
        ]
      }, {
        id: '2',
        name: 'Standard',
        p: 'Standard Notch lapels measure in at 9.2cm while our standard Peak is 9.8cm and Concave lapel is 11.5cm.',
        img: 'LWS2',
        renderLayers: [
          {
            id: '49',
            name: 'topLeftLapel',
            img: 'topLeftLapel'
          },
          {
            id: '50',
            name: 'leftLapel',
            img: 'leftLapel'
          },
          {
            id: '51',
            name: 'rightTopLapel',
            img: 'rightTopLapel'
          },
          {
            id: '52',
            name: 'rightLapel',
            img: 'rightLapel'
          }
        ]
      },
      {
        id: '3',
        name: 'wide',
        p: 'Our wide notch lapels measure in at 11.5cm while wide peak lapels are 11.8cm.',
        img: 'LWW3',
        renderLayers: [
          {
            id: '53',
            name: 'topLeftLapel2',
            img: 'topLeftLapel2'
          },
          {
            id: '54',
            name: 'leftLapel2',
            img: 'leftLapel2'
          },
          {
            id: '55',
            name: 'rightTopLapel',
            img: 'rightTopLapel'
          },
          {
            id: '56',
            name: 'rightLapel2',
            img: 'rightLapel2'
          }
        ]
      }]
    }, {
      id: '4',
      name: 'Vent',
      Suboptions: [{
        id: '1',
        name: 'Double Vent',
        p: 'A modern, versatile style that allows for natural movement.',
        img: 'VCV2',
        renderLayers: [{
          id: '57',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '58',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '59',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '60',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      }, {
        id: '2',
        name: 'Single Vent',
        p: 'Ideal for more upscale looks providing a clean, symmetrical look.',
        img: 'VNV1',
        renderLayers: [{
          id: '61',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '62',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '63',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '64',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      }, {
        id: '3',
        name: 'No Vent',
        p: 'Generally reserved for eveningwear, for a clean, elegant and traditional appeal.',
        img: 'VSV3',
        renderLayers: [{
          id: '65',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '66',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '67',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '68',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      }]
    }, {
      id: '5',
      name: 'Canvas',
      Suboptions: [{
        id: '1',
        name: 'Full Canvas (4-Layers)',
        p: 'This contouring 4-layer cotton canvas lines the full jacket for added shape, drape & structure.',
        img: 'CFCL2',
        renderLayers: [{
          id: '69',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '70',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '71',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '72',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '2',
        name: 'Full Canvas Light (2-Layers)',
        p: 'This lighter 2-layer cotton canvas lines the full jacket for added shape, drape & structure.',
        img: 'CFCS1',
        renderLayers: [{
          id: '73',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '74',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '75',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '76',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '3',
        name: 'Half Canvas(4-Layers)',
        p: 'This contouring 4-layer cotton canvas lines half the jacket for added shape, drape & structure.',
        img: 'CHCL5',
        renderLayers: [{
          id: '77',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '78',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '79',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '80',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '4',
        name: 'Half Canvas Light (2-Layers)',
        p: 'This lighter 2-layer cotton canvas lines half the jacket for added shape, drape & structure.',
        img: 'CHCS4',
        renderLayers: [{
          id: '81',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '82',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '83',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '84',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '5',
        name: 'Unconstructed',
        p: 'Crafted without canvas, unconstructed jackets offer a sporty, lightweight and comfortable wear.',
        img: 'CUC3',
        renderLayers: [{
          id: '85',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      }]
    }, {
      id: '6',
      name: 'Shoulder',
      Suboptions: [{
        id: '1',
        name: 'Structured',
        p: 'A structured shoulder features strong, defined shoulder line for an elegant and enhanced silhouette.',
        img: 'SNA6',
        renderLayers: [{
          id: '89',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '2',
        name: 'Lightly Padded',
        p: 'A traditional shoulder, lightly padded shoulder for a classic silhouette.',
        img: 'SNP7',
        renderLayers: [{
          id: '93',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '3',
        name: 'Lightly Padded Pleated',
        p: 'This classic lightly padded shoulder features a series of small handmade pleats along the armhole seam.',
        img: 'SP5',
        renderLayers: [{
          id: '97',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '4',
        name: 'Natural',
        p: 'The highly versatile natural shoulder features minimal padding for a balanced finish.',
        img: 'SREG1',
        renderLayers: [{
          id: '101',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '5',
        name: 'Natural Pleated',
        p: 'This natural shoulder offers a softer silhouette & features small handmade pleats along the armhole seam.',
        img: 'SROP2',
        renderLayers: [{
          id: '105',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '6',
        name: 'Natural Shirt',
        p: 'This natural shoulder joins the sleeve head underneath the shoulder seam for a more shirt-like fit.',
        img: 'SS3',
        renderLayers: [{
          id: '109',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '7',
        name: 'Unconstructed',
        p: 'Crafted without padding, an unconstructed shoulder is regarded as the most casual of styles.',
        img: 'SUC4',
        renderLayers: [{
          id: '113',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      }]
    }, {
      id: '7',
      name: 'Amf',
      Suboptions: [{
        id: '1',
        name: 'No',
        p: 'Crafted with traditional stitching, not AMF stitching.',
        img: 'HAMF',
        renderLayers: [{
          id: '117',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '2',
        name: '2mm',
        p: 'Found along the edges of the hem, pockets and lapel to prevent fabric curling.',
        img: 'HAMF6',
        renderLayers: [{
          id: '111',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '3',
        name: '6mm',
        p: 'Found 6mm in, along the edges of the hem, pockets and lapel to prevent fabric curling.',
        img: 'HAMFD',
        renderLayers: [{
          id: '115',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '4',
        name: 'Double AMF',
        p: 'This 2mm double stitched variant is a sign of quality, high-precision tailoring.',
        img: 'HAMFN',
        renderLayers: [{
          id: '119',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      }]
    }, {
      id: '8',
      name: 'Chest Pocket',
      Suboptions: [{
        id: '1',
        name: 'Boat Shape',
        p: 'Named after the Italian word for "little boat", barchetta pockets are subtly curved chest pockets.',
        img: 'CPBS2',
        renderLayers: [{
          id: '123',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '2',
        name: 'Patch',
        p: 'Chest patch pockets offer a more easygoing and practical alternative to more formal options.',
        img: 'CPPA2',
        renderLayers: [{
          id: '127',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '3',
        name: 'Rounded Patch',
        p: 'Chest patch pockets offer a more casual alternative to more formal options—this style is rounded.',
        img: 'CPPP3',
        renderLayers: [{
          id: '131',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '4',
        name: 'Pleat Patch',
        p: 'Both aesthetic and practical, a patch pocket featuring a box or inverted pleat.',
        img: 'CPRP4',
        renderLayers: [{
          id: '135',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      }]
    }, {
      id: '9',
      name: 'Side Pocket',
      Suboptions: [{
        id: '1',
        name: 'Small Flap (4cm)',
        p: 'This style features a small 4cm flap of fabric over a jetted pocket which can be let out or tucked in.',
        img: 'SPF4',
        renderLayers: [{
          id: '139',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '2',
        name: 'Standard Flap (5.5cm)',
        p: 'This style features a standard 5.5cm flap of fabric over a jetted pocket which can be let out or tucked in.',
        img: 'SPF4',
        renderLayers: [{
          id: '143',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '3',
        name: 'Large Flap (7cm)',
        p: 'This style features a large 7cm flap of fabric over a jetted pocket which can be let out or tucked in.',
        img: 'SPF7',
        renderLayers: [{
          id: '147',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '4',
        name: 'Slanted Flap',
        p: 'Slanted flap pockets are a versatile style that feature a flap of fabric over a slanted jetted pocket.',
        img: 'SPJ4',
        renderLayers: [{
          id: '151',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '5',
        name: 'Jetted',
        p: 'Formal and sleek, jetted pockets are defined by a fine trimmed slit cut into the fabric.',
        img: 'SPPA5',
        renderLayers: [{
          id: '155',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '6',
        name: 'Slanted Jetted',
        p: 'These subtly slanted jetted pockets are defined by a fine slit cut into the fabric for a formal appeal.',
        img: 'SPPP6',
        renderLayers: [{
          id: '159',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '7',
        name: 'Patch',
        p: 'A sportier take on the more typical flap pocket, patch pockets offer a more relaxed appeal.',
        img: 'SPRP7',
        renderLayers: [{
          id: '163',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '8',
        name: 'Round Patch',
        p: 'This take on the casual patch pocket features a curved bottom.',
        img: 'SPSF2',
        renderLayers: [{
          id: '167',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '9',
        name: 'Pleat Patch',
        p: 'Both aesthetic and practical, this casual patch pocket features a box or inverted pleat.',
        img: 'SPSJ3',
        renderLayers: [{
          id: '171',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '10',
        name: 'Tulip Patch',
        p: 'Tulip pockets are patch pockets with a prominent curve in the opening for an added touch of flair.',
        img: 'SPTU8',
        renderLayers: [{
          id: '175',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      }]
    }, {
      id: '10',
      name: 'Ticket Pocket',
      Suboptions: [{
        id: '1',
        name: 'No',
        p: 'No ticket pocket.',
        img: 'TPN2',
        renderLayers: [{
          id: '179',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      }]
    }, {
      id: '11',
      name: 'Buttons',
      Suboptions: [{

      }]
    }, {
      id: '12',
      name: 'Sleeve Buttons',
      Suboptions: [{
        id: '1',
        name: '3 kissing buttons',
        p: 'These 3 kissing buttons are slightly overlapping for a sartorial accent.',
        img: 'SB3KB1',
        renderLayers: [{
          id: '183',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '2',
        name: '4 kissing buttons',
        p: 'These 4 kissing buttons are slightly overlapping for a sartorial accent.',
        img: 'SB4KB2',
        renderLayers: [{
          id: '187',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '3',
        name: '5 kissing buttons',
        p: 'These 5 kissing buttons are slightly overlapping for a sartorial accent.',
        img: 'SB5KB4',
        renderLayers: [{
          id: '191',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      }]
    }, {
      id: '13',
      name: 'Buttonhole Lapel',
      Suboptions: [{
        id: '1',
        name: 'Traditional',
        p: 'The traditional lapel buttonhole, or boutonniere, is used today as a way to place flowers on the lapel.',
        img: 'BHFUNC1',
        renderLayers: [{
          id: '195',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '2',
        name: 'Handmade Milanese',
        p: 'This hand-sewn lapel buttonhole is a subtle, yet distinguished, accent with a sartorial history.',
        img: 'BHMIL2',
        renderLayers: [{
          id: '199',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      }]
    }, {
      id: '14',
      name: 'Lining Type',
      Suboptions: [{
        id: '1',
        name: 'Full Lined',
        p: "Features a linking throughout the entirety of a jacket's body and arms.",
        img: 'LFL1',
        renderLayers: [{
          id: '203',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '2',
        name: '1/2 Lined',
        p: "Features a linking throughout the top half of a jacket's interior, including the arms.",
        img: 'LHL2',
        renderLayers: [{
          id: '207',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '3',
        name: 'Butterfly Lining',
        p: 'A hand-stitched finish on unstructured jackets covering only the upper back.',
        img: 'LBF4',
        renderLayers: [{
          id: '211',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '4',
        name: 'Unlined',
        p: 'Unlined jackets feature lining only in the sleeves, with none throughout the body.',
        img: 'LUN3',
        renderLayers: [{
          id: '215',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      }]
    }, {
      id: '15',
      name: 'Sleeve Lining',
      Suboptions: [{

      }]
    }, {
      id: '16',
      name: 'Collar Felt',
      Suboptions: [{

      }]
    }, {
      id: '17',

      name: '+ Add Initial',
      Suboptions: [{
        id: '1',
        name: 'No',
        p: '',
        img: 'Monogram_No',
        renderLayers: [{
          id: '219',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '2',
        name: 'Lining',
        p: '',
        img: 'MOL1',
        renderLayers: [{
          id: '223',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '3',
        name: 'Underside Collar',
        p: '',
        img: 'MOL2',
        renderLayers: [{
          id: '227',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      }]
    }, {
      id: '18',
      bottomMargin: '100',
      name: '+ Add 2nd Initial',
      Suboptions: [{
        id: '1',
        name: 'No',
        p: '',
        img: 'Monogram_No',
        renderLayers: [{
          id: '231',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '2',
        name: 'Lining',
        p: '',
        img: 'MOL1',
        renderLayers: [{
          id: '235',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      },
      {
        id: '3',
        name: 'Underside Collar',
        p: '',
        img: 'MOL2',
        renderLayers: [{
          id: '239',
          name: 'topLeftLapel',
          img: 'topLeftLapel'
        },
        {
          id: '2',
          name: 'leftLapel',
          img: 'leftLapel'
        },
        {
          id: '3',
          name: 'rightTopLapel',
          img: 'rightTopLapel'
        },
        {
          id: '4',
          name: 'rightLapel',
          img: 'rightLapel'
        }]
      }]
    }]
  },
  {
    id: '2',
    name: 'Trousers',
    h3: 'Customize Your Trouser',
    Suboptions: [{
      id: '1',
      name: 'Waistband',
      Suboptions: [{
        id: '1',
        name: 'Standard button',
        p: 'A classic, straightforward waistband with an exposed button.',
        img: 'WBAM1',
        renderLayers: [{
          id: '243',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '2',
        name: 'Standard Elasticated back',
        p: 'Our classic waistband with an elasticated back.',
        img: 'WBAPEBEC11',
        renderLayers: [{
          id: '245',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '3',
        name: 'Standard Hidden button',
        p: 'Our classic waistband with a single hidden button under a squared shaped closure.',
        img: 'WBAPES10',
        renderLayers: [{
          id: '247',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '4',
        name: 'Drawstring elasticated sides',
        p: 'A partially elastic waistband with a drawstring closure',
        img: 'WBBL2',
        renderLayers: [{
          id: '249',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '5',
        name: ' Drawstring fully elasticated',
        p: 'A fully elasticated waistband for a casual appeal.',
        img: 'WBBR3',
        renderLayers: [{
          id: '251',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '6',
        name: 'Extended Peak',
        p: 'A bold sartorial closure with a extended peak and a single exposed button. Found on our Braddon trouser',
        img: 'WBBR5',
        renderLayers: [{
          id: '253',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '7',
        name: 'Extended Straight',
        p: 'A sleek, waistband with a hidden button and single belt loop for securing the extended closure. Found on our Brentwood trouser',
        img: 'WBBR7',
        renderLayers: [{
          id: '255',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '8',
        name: 'Extended Peak Slim',
        p: 'This sartorial waistband features a slim peak closure with two belt loops and exposed button. Found on our Blake trouser',
        img: 'WBFE8',
        renderLayers: [{
          id: '257',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '9',
        name: 'Single Side closure',
        p: 'A clean, featureless front, using instead a buckle closure on the right hip of the waistband. Found on our Fellini trouser',
        img: 'WBGU9',
        renderLayers: [{
          id: '259',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '10',
        name: 'Double Side closure',
        p: 'This military-inspired style features a distinct adjustable buckles on both hips and a full extension across the front.',
        img: 'WBWA6',
        renderLayers: [{
          id: '261',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }
      ]
    }, {
      id: '2',
      name: 'Waistband Height',
      Suboptions: [{
        id: '1',
        name: '3.5cm (Standard)        ',
        p: 'A waistband width of 3.5cm. Found on our Brescia, Vigo & Ames trouser.',
        img: 'WBH1',
        renderLayers: [{
          id: '263',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '2',
        name: '4cm',
        p: 'A waistband width of 4cm. Found on our Brentwood trouser.',
        img: 'WBH2',
        renderLayers: [{
          id: '265',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '3',
        name: '4.5cm',
        p: 'A waistband width of 4.5cm. Found on our Braddon trouser.',
        img: 'WBH3',
        renderLayers: [{
          id: '267',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '4',
        name: '5cm',
        p: 'A waistband width of 5cm. Found on our Fellini & Gurkha trouser.',
        img: 'WBH4',
        renderLayers: [{
          id: '269',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }

      ]
    }, {
      id: '3',
      name: 'Waistband Details',
      Suboptions: [{
        id: '1',
        name: 'Belt Loops',
        p: 'Classic yet versatile, finished for wearing with or without a belt',
        img: 'WBBL1',
        renderLayers: [{
          id: '271',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }, {
        id: '2',
        name: 'Classic Side Adjusters',
        p: 'Features buckles on either hip on the waistband, allowing you to adjust the trousers for a better fit.',
        img: 'WBLSA5',
        renderLayers: [{
          id: '273',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '3',
        name: 'Long Side Adjuster',
        p: 'This variant features buckles on either hip on the waistband, but with extended fabric at the back end for a small style detail.',
        img: 'WBNO3',
        renderLayers: [{
          id: '275',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }, {
        id: '4',
        name: 'Winged Side Adjuster',
        p: 'This "winged" variant features buckles on either hip on the waistband, but with extended, pointed, fabric at the back end for a small style detail.',
        img: 'WBSA2',
        renderLayers: [{
          id: '277',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }, {
        id: '5',
        name: 'None',
        p: 'No side adjusters or belt loops for a clean, minimalist finish',
        img: 'WBWSA6',
        renderLayers: [{
          id: '279',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }]
    }, {
      id: '4',
      name: 'Waistband Construction',
      Suboptions: [{
        id: '1',
        name: 'Traditional',
        p: '',
        img: 'WBCC2',
        renderLayers: [{
          id: '281',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }
        ]
      }, {
        id: '2',
        name: 'Curtain',
        p: '',
        img: 'WBCF3',
        renderLayers: [{
          id: '283',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }, {
        id: '3',
        name: 'Fishtail',
        p: '',
        img: 'WBCT1',
        renderLayers: [{
          id: '285',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '1',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }]
    }, {
      id: '5',
      name: 'Fly',
      Suboptions: [{
        id: '1',
        name: 'Zip',
        p: 'The classic coil zipper is a traditional and practical feature on both casual & formal trousers.',
        img: 'FLB2',
        renderLayers: [{
          id: '287',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }, {
        id: '2',
        name: 'Button',
        p: 'An elevated detail, button flies feature buttons in place of a traditional coil zipper.',
        img: 'FLZ1',
        renderLayers: [{
          id: '289',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }]
    }, {
      id: '6',
      name: 'Pleat',
      Suboptions: [{
        id: '1',
        name: 'None',
        p: 'Non-pleated trousers, known as flat fronted, lie flat against the leg for a neat, versatile appeal.',
        img: 'PLD3',
        renderLayers: [{
          id: '291',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '2',
        name: 'Standard Single Pleat',
        p: 'The standard single pleat opens towards the side seam.',
        img: 'PLNO1',
        renderLayers: [{
          id: '293',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '3',
        name: 'Standard Double Pleat',
        p: 'Double standard pleats opens towards the side seam.',
        img: 'PLRD5',
        renderLayers: [{
          id: '295',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '4',
        name: 'Forward Single Pleat',
        p: 'A single forward pleat opens towards the crotch.',
        img: 'PLRS4',
        renderLayers: [{
          id: '297',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '5',
        name: 'Forward Double Pleat',
        p: 'Double forward pleats opens towards the crotch.',
        img: 'PLS2',
        renderLayers: [{
          id: '299',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]

      }]
    }, {
      id: '7',
      name: 'Hem Finishing',
      Suboptions: [{
        id: '1',
        name: 'Plain',
        p: 'Hemmed trousers feature the bottom fabric folded up inside the pant leg for a clean finish.',
        img: 'HFEC7',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '2',
        name: 'Unfinished',
        p: 'Unfinished hems offer 11 extra centimeters of fabric, allowing you to finish the trousers your way.',
        img: 'HFT5cmB5',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '3',
        name: 'Turn Up 3.5 cm',
        p: 'A 3.5 cm cuff shows more of the sock, grants the illusion of height and adds weight for a nicer drape',
        img: 'HFT35cm6',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '4',
        name: 'Turn Up 4 cm',
        p: '4cm cuffs show more of the sock, grants the illusion of height and adds weight for a nicer drape.',
        img: 'THFP1',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }, {
        id: '5',
        name: 'Turn Up 5 cm',
        p: 'Bold 5cm cuffs show even more sock or ankle, grants the illusion of height & adds weight for a nicer drape.',
        img: 'THFT4cm2',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '6',
        name: 'Turn up 5cm (with button)',
        p: 'The buttoned turn-up features a button for fastening the cuff, a practical and elevated detail.',
        img: 'THFT5cm3',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '7',
        name: 'Elastic Cuff',
        p: 'A fully elastic cuff for a relaxed appeal inspired by classic sweatpants',
        img: 'THFUF4',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]

      }]
    }, {
      id: '8',
      name: 'Side Pocket',
      Suboptions: [{
        id: '1',
        name: 'Slanted',
        p: 'The most common style, slanted pockets are versatile enough for casual and more formal occasions.',
        img: 'FPFM4',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '2',
        name: 'Jetted',
        p: 'Formal & exclusively aesthetic, jetted pockets are defined by a fine trimmed slit cut into the fabric.',
        img: 'FPJ2',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '3',
        name: 'Seam ',
        p: 'The pocket is built into the side seams. They provide a clean, streamlined silhouette.',
        img: 'FPSE3',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '4',
        name: 'Rounded ',
        p: 'Rounded pockets, often found on jeans, are a casual style located toward the front of the trouser.',
        img: 'FPSL1',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }]
    }, {
      id: '9',
      name: 'Back Pocket',
      Suboptions: [{
        id: '1',
        name: 'Jetted with Button',
        p: 'A timeless trouser feature granting a classic, tailored look',
        img: 'BPFWB3',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '2',
        name: 'Jetted No Button',
        p: 'The jetted rear pocket, crafted without buttons, offers a sleek, elegant look ideal for black-tie styles.',
        img: 'BPJ1',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '3',
        name: 'Flap with Button',
        p: 'A sportier take on the rear pocket, providing a more relaxed appeal.',
        img: 'BPJNOB2',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]

      }]
    }, {
      id: '10',
      name: 'Leg Pocket',
      Suboptions: [{
        id: '1',
        name: 'No Leg Pocket',
        p: 'Trouser with no leg pocket.',
        img: 'CAPNO2',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '2',
        name: 'Box Pleat Cargo Pocket',
        p: 'Crafted with an expanding box pleat for added space, lending a touch of functional casual appeal to your look.',
        img: 'CAPO1',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '3',
        name: 'Envelope Cargo Pocket',
        p: 'A classic cargo pocket—lends any look a functional touch of rugged appeal.',
        img: 'CAPO3',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]

      }
      ]
    }, {
      id: '11',
      name: 'Coin Pocket',
      Suboptions: [{
        id: '1',
        name: 'No Coin Pocket',
        p: 'No Coin Pocket',
        img: 'CPWBF02',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '2',
        name: 'Hidden Coin Pocket',
        p: 'A small jetted coin pocket',
        img: 'CPWN01',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '3',
        name: 'Flap Coin Pocket',
        p: 'An external coin pocket with a buttonable flap closure.',
        img: 'CPWNF03',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]

      }]
    }, {
      id: '12',
      name: 'Suspender Buttons      ',
      Suboptions: [{
        id: '1',
        name: 'No',
        p: 'This style is crafted with no interior suspender buttons.',
        img: 'SBN2',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '2',
        name: 'Yes',
        p: 'Made to be worn with suspenders, trousers with interior buttons allow for hidden fastening.',
        img: 'SBY1',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }]
    }, {
      id: '13',
      name: 'Pocket Lining',
      Suboptions: [{
        id: '1',
        name: '8White (PLW1)',
        p: '',
        img: 'LN1',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '2',
        name: 'Black (PLB2)',
        p: '',
        img: 'LN1',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '3',
        name: 'Khaki (PLN3)',
        p: '',
        img: 'LN1',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }]
    }, {
      id: '14',
      name: 'Leg Lining',
      Suboptions: [{
        id: '1',
        name: 'Full ',
        p: '',
        img: 'LLF1',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '2',
        name: 'Half',
        p: '',
        img: 'LLH2',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '3',
        name: 'Unlined',
        p: '',
        img: 'LLU3',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]

      }]
    }, {
      id: '15',
      name: 'Leg Lining Color',
      bottomMargin: '100',
      Suboptions: [{
        id: '1',
        name: 'Stripped',
        p: '',
        img: 'LN1',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '2',
        name: 'Black',
        p: '',
        img: 'LN1',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '3',
        name: 'White ',
        p: '',
        img: 'LN1',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      },
      {
        id: '4',
        name: 'Dark Blue ',
        p: '',
        img: 'LN1',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }, {
        id: '5',
        name: 'Blue',
        p: '',
        img: 'LN1',
        renderLayers: [{
          id: '1',
          name: 'rightLeg',
          img: 'rightLeg'
        }, {
          id: '2',
          name: 'leftLeg',
          img: 'leftLeg'
        }]
      }]
    }]

  }, {
    id: '3',
    name: 'Extra Trousers',
    h3: 'Add an extra trousers',
    Suboptions: [{
      id: '1',
      name: 'Extra Trousers',
      Suboptions: [
        {
          id: '1',
          name: 'No Thanks',
          img: 'ExtraTrousers_No',
          //    renderLayers: [{
          //   id: '1',
          //   name: 'rightLeg',
          //   img: 'rightLeg'
          // }, {
          //   id: '2',
          //   name: 'leftLeg',
          //   img: 'leftLeg'
          // }]
        },
        {
          id: '2',
          name: 'Yes please!',
          img: 'ExtraTrousers_Yes'
        }
      ]
    }]
  }
    , {
    id: '4',
    name: 'Waistcoat',
    h3: 'Add your waistcoat',
    Suboptions: [{
      id: '1',
      name: 'Waistcoat',
      Suboptions: [
        {
          id: '1',
          name: 'No thanks.',
          // waistcoat:'No waistcoat',
          img: 'AdditionalWaistcoat_No',
          renderLayers: [{
            id: '500',
            name: 'rightLeg',
            img: 'rightLeg'
          }, {
            id: '2',
            name: 'leftLeg',
            img: 'leftLeg'
          }]
        },
        {
          id: '2',
          name: 'Yes Please!',
          // waistcoat:'waistcoat',
          img: 'AdditionalWaistcoat_Yes',
          renderLayers: [{
            id: '501',
            name: 'rightLeg',
            img: 'rightLeg'
          }, {
            id: '2',
            name: 'leftLeg',
            img: 'leftLeg'
          }]
        }
      ]
    }],
    WaistcoatOtions: [
      {
        id: '1',
        name: 'Waistcoat',
        Suboptions: [
          {
            id: '1',
            name: 'No thanks.',
            // waistcoat:'No waistcoat',
            img: 'AdditionalWaistcoat_No',
            renderLayers: [{
              id: '500',
              name: 'rightLeg',
              img: 'rightLeg'
            }, {
              id: '2',
              name: 'leftLeg',
              img: 'leftLeg'
            }]
          },
          {
            id: '2',
            name: 'Yes Please!',
            // waistcoat:'waistcoat',
            img: 'AdditionalWaistcoat_Yes',
            renderLayers: [{
              id: '501',
              name: 'rightLeg',
              img: 'rightLeg'
            }, {
              id: '2',
              name: 'leftLeg',
              img: 'leftLeg'
            }]
          }
        ]
      }
      , 
      {
        id: '2',
        name: 'Closure',
        Suboptions: [
          {
            id: '1',
            name: 'Single Breasted 4 Button',
            p: 'This classic single-breasted waistcoat is crafted with 4 buttons.',
            img: 'CDB6BN4',
            renderLayers: [{
              id: '503',
              name: 'rightLeg',
              img: 'rightLeg'
            }, {
              id: '2',
              name: 'leftLeg',
              img: 'leftLeg'
            }]
          },
          {
            id: '2',
            name: 'Single Breasted 5 button',
            p: 'This classic single-breasted waistcoat is crafted with 5 buttons.',
            img: 'CDB8BN5',
            renderLayers: [{
              id: '504',
              name: 'rightLeg',
              img: 'rightLeg'
            }, {
              id: '2',
              name: 'leftLeg',
              img: 'leftLeg'
            }]
          }, {
            id: '3',
            name: 'Single Breasted 6 button',
            p: 'This classic single-breasted waistcoat is crafted with 6 buttons.',
            img: 'CSB4BN1',
            renderLayers: [{
              id: '505',
              name: 'rightLeg',
              img: 'rightLeg'
            }, {
              id: '2',
              name: 'leftLeg',
              img: 'leftLeg'
            }]
          },
          {
            id: '4',
            name: 'Double Breasted 6 Button',
            p: 'An elevated take on the traditional waistcoat, this double-breasted style features a 6-button closure.',
            img: 'CSB5BN2',
            renderLayers: [{
              id: '506',
              name: 'rightLeg',
              img: 'rightLeg'
            }, {
              id: '2',
              name: 'leftLeg',
              img: 'leftLeg'
            }]
          },
          {
            id: '5',
            name: 'Double Breasted 8 Button',
            p: 'A bolder, more elevated take on the traditional waistcoat, this double-breasted style features an 8 button closure.',
            img: 'CSB6BN3',
            renderLayers: [{
              id: '507',
              name: 'rightLeg',
              img: 'rightLeg'
            }, {
              id: '2',
              name: 'leftLeg',
              img: 'leftLeg'
            }]
          }
        ]
      },
      {
        id: '3',
        name: 'Style',
        Suboptions: [
          {
            id: '1',
            name: 'V Shape',
            p: 'A common style for casual layering, without lapels for a clean finish.',
            img: 'STNL2',
            renderLayers: [{
              id: '508',
              name: 'rightLeg',
              img: 'rightLeg'
            }, {
              id: '2',
              name: 'leftLeg',
              img: 'leftLeg'
            }]
          },
          {
            id: '2',
            name: 'Notch Lapel',
            p: 'For a versatile styling accent that add a fuller look to single-breasted waistcoats.',
            img: 'STPL3',
            renderLayers: [{
              id: '509',
              name: 'rightLeg',
              img: 'rightLeg'
            }, {
              id: '2',
              name: 'leftLeg',
              img: 'leftLeg'
            }]
          }, {
            id: '3',
            name: 'Peak Lapel',
            p: 'Classic and refined, peak lapels bring a touch of timeless elegance.',
            img: 'STUU1',
            renderLayers: [{
              id: '510',
              name: 'rightLeg',
              img: 'rightLeg'
            }, {
              id: '2',
              name: 'leftLeg',
              img: 'leftLeg'
            }]
          },
          {
            id: '4',
            name: 'Horse Shoe',
            p: 'A formal pick, featuring a deep, rounded neckline and a collar with no lapel.',
            img: 'STVS1',
            renderLayers: [{
              id: '511',
              name: 'rightLeg',
              img: 'rightLeg'
            }, {
              id: '2',
              name: 'leftLeg',
              img: 'leftLeg'
            }]
          }
        ]
      }, {
        id: '4',
        name: 'Chest Pocket',
        Suboptions: [{
          id: '1',
          name: 'No Pocket',
          p: 'Crafted without pockets for a cleaner, more streamlined look.',
          img: 'C1P2',
          renderLayers: [{
            id: '512',
            name: 'rightLeg',
            img: 'rightLeg'
          }, {
            id: '2',
            name: 'leftLeg',
            img: 'leftLeg'
          }]
        },
        {
          id: '2',
          name: 'Single Pocket',
          p: 'A single small welted chest pocket.',
          img: 'C2P3',
          renderLayers: [{
            id: '513',
            name: 'rightLeg',
            img: 'rightLeg'
          }, {
            id: '2',
            name: 'leftLeg',
            img: 'leftLeg'
          }]
        },
        {
          id: '3',
          name: 'Dual Pockets',
          p: 'These small dual welted chest pockets are featured primarily as aesthetic accents.',
          img: 'CNP1',
          renderLayers: [{
            id: '514',
            name: 'rightLeg',
            img: 'rightLeg'
          }, {
            id: '2',
            name: 'leftLeg',
            img: 'leftLeg'
          }]
        }]
      }, {
        id: '5',
        name: 'Side Pocket',
        Suboptions: [{
          id: '1',
          name: 'Straight Pocket',
          p: 'Straight pockets are a common style featuring a pocket affixed to the inside of a lined garment.',
          img: 'SPJP3',
          renderLayers: [{
            id: '515',
            name: 'rightLeg',
            img: 'rightLeg'
          }, {
            id: '2',
            name: 'leftLeg',
            img: 'leftLeg'
          }]
        },
        {
          id: '2',
          name: 'Jetted Pocket',
          p: 'Formal & exclusively aesthetic, jetted pockets are defined by a fine trimmed slit cut into the fabric.',
          img: 'SPSP2',
          renderLayers: [{
            id: '516',
            name: 'rightLeg',
            img: 'rightLeg'
          }, {
            id: '2',
            name: 'leftLeg',
            img: 'leftLeg'
          }]
        }]
      }, {
        id: '6',
        name: 'Back Style',
        Suboptions: [{
          id: '1',
          name: 'Lining',
          p: 'This more formal style of waistcoat features a silk-lined back and is usually part of a 3-piece suit.',
          img: 'BSF2',
          renderLayers: [{
            id: '517',
            name: 'rightLeg',
            img: 'rightLeg'
          }, {
            id: '2',
            name: 'leftLeg',
            img: 'leftLeg'
          }]
        },
        {
          id: '2',
          name: ' Fabric',
          p: 'This more casual style of waistcoat features a fabric-lined back and is perfect to wear as a separate.',
          img: 'BSL1',
          renderLayers: [{
            id: '518',
            name: 'rightLeg',
            img: 'rightLeg'
          }, {
            id: '2',
            name: 'leftLeg',
            img: 'leftLeg'
          }]
        }]
      }, {
        id: '6',
        name: 'Lining Color',
        img: 'LN1',
        Suboptions: [{

        }]
      }

    ]
  }, {
    id: '5',
    name: 'Size',
    h3: 'Create a Size Passport',
    Suboptions: [{
      id: '1',
      name: 'At Home',
      p: 'Pick your normal size, and make adjustments if desired',
      img: 'LN1',
      Suboptions: [{}]
    },
    {
      id: '2',
      name: 'In-Store',
      p: 'Book an appointment to get measured by a style expert',
      img: 'LN1',
      Suboptions: [{}]
    }]
  }, {
    id: '6',
    name: 'Summary',
    h3: 'Your Summary',
    Suboptions: [{

    }]
  }
  ]


  const [onClickingCards, setonClickingCards] = useState(false);
  const [onApply, setOnApply] = useState(false);
  const [subbuttonId, setSubbuttonId] = useState('1');
  const [subbuttonId2, setSubbuttonId2] = useState('1');
  const [dropDown, setDropDown] = useState(false);
  const [subgroupName, setSubgroupName] = useState('');
  // const [subSubButtonId,setSubSubButtonId]=useState('1');
  const [waistcoatOptions, setWaistcoatOptions] = useState(false);
  const [subSubButtonId, setSubSubButtonId] = useState(null);
  const [ids, setIds] = useState('1');
  const [selectedImage, setSelectedImage] = useState({});
  const [selectedSubSubButton, setSelectedSubSubButton] = useState(null);
  const [waistcoat, setWaistcoat] = useState(false);
  const [isSuitRendered, setIsSuitRendered] = useState(false);
  setTimeout(() => {
    setIsSuitRendered(true);
  }, 1000);
  // const btn1='';
  //  const btn2='';
  //  const btn3='';
  //  const btn4='';
  //  const btn5='';
  //  const btn6='';
  //  const btn7='';
  //  const btn8='';
  //  const btn9='';
  //  const btn10='';
  //  const btn11='';
  //  const btn12='';
  //  const btn13='';
  //  const btn14='';
  //  const btn15='';
  //  const btn16='';
  //  const btn17='';
  //  const btn18='';
  //  const btn19='';
  //  const btn20='';
  //  const btn21='';
  //  const btn22='';
  //  const btn23='';
  //  const btn24='';
  //  const btn25='';
  //  const btn26='';
  //  const btn27='';
  //  const btn28='';
  //  const btn29='';
  //  const btn30='';
  //  const btn31='';
  //  const btn32='';
  const btn1 = [{ img: 'leftLapel2' }];
  const btn2 = [{ img: 'leftLapel2' }];
  const btn3 = [{ img: 'leftLapel2' }];
  const btn4 = [{ img: 'leftLapel2' }];
  const btn5 = [{ img: 'leftLapel2' }];
  const btn6 = [{ img: 'leftLapel2' }];
  const btn7 = [{ img: 'leftLapel2' }];
  const btn8 = [{ img: 'leftLapel2' }];
  const btn9 = [{ img: 'leftLapel2' }];
  const btn10 = [{ img: 'leftLapel2' }];
  const btn11 = [{ img: 'leftLapel2' }];
  const btn12 = [{ img: 'leftLapel2' }];
  const btn13 = [{ img: 'leftLapel2' }];
  const btn14 = [{ img: 'leftLapel2' }];
  const btn15 = [{ img: 'leftLapel2' }];
  const btn16 = [{ img: 'leftLapel2' }];
  const btn17 = [{ img: 'leftLapel2' }];
  const btn18 = [{ img: 'leftLapel2' }];
  const btn19 = [{ img: 'leftLapel2' }];
  const btn20 = [{ img: 'leftLapel2' }];
  const btn21 = [{ img: 'leftLapel2' }];
  const btn22 = [{ img: 'leftLapel2' }];
  const btn23 = [{ img: 'leftLapel2' }];
  const btn24 = [{ img: 'leftLapel2' }];
  const btn25 = [{ img: 'leftLapel2' }];
  const btn26 = [{ img: 'leftLapel2' }];
  const btn27 = [{ img: 'leftLapel2' }];
  const btn28 = [{ img: 'leftLapel2' }];
  const btn29 = [{ img: 'leftLapel2' }];
  const btn30 = [{ img: 'leftLapel2' }];
  const btn31 = [{ img: 'leftLapel2' }];
  const btn32 = [{ img: 'leftLapel2' }];

  const [activeSubSubButton, setActiveSubSubButton] = useState([
    btn1,
    btn2,
    btn3,
    btn4,
    btn5,
    btn6,
    btn7,
    btn8,
    btn9,
    btn10,
    btn11,
    btn12,
    btn13,
    btn14,
    btn15,
    btn16,
    btn17,
    btn18,
    btn19,
    btn20,
    btn21,
    btn22,
    btn23,
    btn24,
    btn25,
    btn26,
    btn27,
    btn28,
    btn29,
    btn30,
    btn31,
    btn32
  ]);
  // const [ref, inView] = useInView({
  //   triggerOnce: true, // Detect only once
  // });
   

  return (
    <React.Fragment>
      <div className='RightSideSection'>
        <Navbar></Navbar>
        <MainButtons
          ids={ids}
          setIds={setIds}
          MainArray={MainArray}
          setonClickingCards={setonClickingCards}
          onClickingCards={onClickingCards}
          setOnApply={setOnApply}
          onApply={onApply}
          subbuttonId={subbuttonId}
          setSubbuttonId={setSubbuttonId}
          subbuttonId2={subbuttonId2}
          setSubbuttonId2={setSubbuttonId2}
          setDropDown={setDropDown}
          dropDown={dropDown}
          setSubgroupName={setSubgroupName}
          subgroupName={subgroupName}

          setSubSubButtonId={setSubSubButtonId}
          subSubButtonId={subSubButtonId}
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
          selectedSubSubButton={selectedSubSubButton}
          setSelectedSubSubButton={setSelectedSubSubButton}

          setActiveSubSubButton={setActiveSubSubButton}
          activeSubSubButton={activeSubSubButton}
          waistcoatOptions={waistcoatOptions}
          setWaistcoatOptions={setWaistcoatOptions}
          setWaistcoat={setWaistcoat}
          waistcoat={waistcoat}

        ></MainButtons>
      </div>

     
        <AddToCart

        ></AddToCart>
      

      {isSuitRendered&&<Suit
       
      // ref={ref}
      //   inView={inView}
        MainArray={MainArray}
        dropDown={dropDown}
        subgroupName={subgroupName}
        ids={ids}
        subbuttonId={subbuttonId}
        subSubButtonId={subSubButtonId}
        setSelectedImage={setSelectedImage}
        selectedSubSubButton={selectedSubSubButton}
        activeSubSubButton={activeSubSubButton}
        setSelectedSubSubButton={setSelectedSubSubButton}
        waistcoat={waistcoat}
        
      ></Suit>}

      {/* {onClickingCards && <div className='OnclickCards'>        
        <ApplyAndCancel         
          setonClickingCards={setonClickingCards}
          onClickingCards={onClickingCards}
          setOnApply={setOnApply}
          subbuttonId={subbuttonId}
          subbuttonId2={subbuttonId2}
        ></ApplyAndCancel>
      </div>} */}


    </React.Fragment>
  )
}

export default App;
