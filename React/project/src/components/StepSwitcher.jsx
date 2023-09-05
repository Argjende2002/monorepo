import React, { useState } from 'react';
import './StepSwitcher.css';
import logo from '../assets/logo.svg'
import RightArrow from '../assets/right-arrow.svg'
import AntiWrinkleTreatement from '../assets/Anti Wrinkle Treatement.gif';
import DermalFillers from '../assets/Dermal Fillers.jpg';
import SecretRF from '../assets/Secret Rf.jpg';
import HArmonyCA from '../assets/HArmonyCA.jpg';
import Profhilo from '../assets/Profhilo.jpg';
import Facials from '../assets/Facials.jpg';
import Sclerotherapy from '../assets/Sclerotherapy.jpg';
import Led from '../assets/Led.jpg';
import FatDissolve from '../assets/Fat disolve.jpg';
import GrowthFactors from '../assets/Growth factor.jpeg';
import SpecialPackageForTimeClinic from '../assets/Special package for time clinik.jpg';
import Consultation from '../assets/Consulation.jpg';

function StepSwitcher() {
  const [step, setStep] = useState(1);
  const [currentCard, setCurrentCard] = useState(1);
  const [selectedService, setSelectedService] = useState('');

  const changeStep = (newStep) => {
    setStep(newStep);
  };

  const switchCard = () => {
    setCurrentCard(currentCard === 1 ? 2 : 1);
    changeStep(currentCard === 1 ? 2 : 1);

  };

  const optionsValue = [
    {
      id: 1,
      name: 'Anti Wrinkle Treatment',
      img: AntiWrinkleTreatement,
    },

    {
      id: 2,
      name: 'Dermal Fillers',
      img: DermalFillers,
    },
    {
      id: 3,
      name: 'Secret RF',
      img: SecretRF,
    },
    {
      id: 4,
      name: 'HArmonyCA',
      img: HArmonyCA,
    },
    {
      id: 5,
      name: 'Profhilo',
      img: Profhilo,
    },
    {
      id: 6,
      name: 'Facials',
      img: Facials,
    },
    {
      id: 7,
      name: 'Sclerotherapy',
      img: Sclerotherapy,
    },
    {
      id: 8,
      name: 'LED',
      img: Led,
    },
    {
      id: 9,
      name: 'Fat Dissolve',
      img: FatDissolve,
    },
    {
      id: 10,
      name: 'Growth Factors',
      img: GrowthFactors,
    },
    {
      id: 11,
      name: 'Special Package for Time clinic',
      img: SpecialPackageForTimeClinic,
    },
    {
      id: 12,
      name: 'Consultation',
      img: Consultation,
    },
    
  ];

  const handleServiceClick = (name) => {
    setSelectedService(name);
    switchCard();
  };

  return (
    <div>
      <div className="header">
        <h3>Choose services</h3>
        <p>step {step}/2</p>
      </div>

      <div className="centered-container">
        {currentCard === 1 && (
          <div>
             <div className="card">
            {/* <div> */}
              {optionsValue.map((item) => (
              <div className="options" onClick={()=>{switchCard()
              handleServiceClick(item.name)}}>
                
                  <div
                    className="content-options"
                    key={item.id}
                    // onClick={() => }
                  >
                   <div className='content-options-left'>
                    <img src={item.img} alt={item.name} />
                      {item.name}
                   </div>
                   <div className='content-options-right'>
                    <img src={RightArrow} alt="right arrow" />
                   </div>
                  </div>
                
              </div>))}
            {/* </div> */}
          </div>
          <div className='card'>
            <p>Not sure about consultation type? Please, call <span>0203 7959063</span></p>
          </div>
          </div>
        )}

        {currentCard === 2 && (
          <div className="Card">
            <div>
              <p>{selectedService}</p> <button onClick={switchCard}>back</button>
            </div>
          </div>
        )}
      </div>

      <footer>
        <div className="footer-content">
          <p>
            Powered by
            <img
              className="logo"
              src={logo}
              alt="logo"
            />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default StepSwitcher;
