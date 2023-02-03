import React, { useState } from 'react';
import { Button, Col, Row } from 'antd';
import './Test1.scss'
import { useTranslation as useMyTranslation } from 'react-i18next';

const App: React.FC = () => {

  const [active, setActive] = useState(false);

  const buttons = [
    { name: 'Button 1', id: 1, shape: 'square' },
    { name: 'Button 2', id: 2, shape: 'circle' },
    { name: 'Button 3', id: 3, shape: 'oval' },
    { name: 'Button 4', id: 4, shape: 'trapezoid' },
    { name: 'Button 5', id: 5, shape: 'rectangle' },
    { name: 'Button 6', id: 6, shape: 'parallelogram' }
  ];
  const [currentButtons, setCurrentButtons] = useState(buttons);

  const { t } = useMyTranslation();

  const handleClick = () => {
    setActive(!active);
  };

  const handlePrevClick = () => {
    setCurrentButtons(currentButtons.slice(-1).concat(currentButtons.slice(0, -1)));
  };

  const handleNextClick = () => {
    setCurrentButtons(currentButtons.slice(1).concat(currentButtons.slice(0, 1)));
  };

  const handleHeaderFooterButtonClick = (index: number) => {
    const newHeaderFooterButtons = [...currentButtons];
    const randomIndex = Math.floor(Math.random() * currentButtons.length);
    const temp = newHeaderFooterButtons[index];
    newHeaderFooterButtons[index] = newHeaderFooterButtons[randomIndex];
    newHeaderFooterButtons[randomIndex] = temp;
    setCurrentButtons(newHeaderFooterButtons);
  };

  return (
    <><h1>{t('test1-lang')}</h1>
      <div className='shape'>
        <div className='shape-header'>
          <Row>
            <Col>
              <Button onClick={handleNextClick}>
                <div className="triangle-left" ><span><p>{t('shape')}</p></span></div>
              </Button>
            </Col>
            <Col>
              <Button onClick={handleClick} id='btn-shape'>
                <div className="triangle-up" />
                <div className="triangle-down" />
                <span><p>{t('position')}</p></span>
              </Button>
            </Col>
            <Col>
              <Button onClick={handlePrevClick} id='btn-shape1'>
                <div className="triangle-right" ><span><p>{t('shape')}</p></span></div>
              </Button>
            </Col>
          </Row>
        </div>
        <div className='shape-rd'>
          <Row id='row'>
            {currentButtons.slice(0,3).map((button, index) => (
              <Col id='col1' style={{ transform: `translateX(${active ? '-15px' : '115px'})` }}  key={button.id} >
                <Button onClick={() => handleHeaderFooterButtonClick(index)} key={index}>
                  <div className={button.shape} />
                </Button>
              </Col>
            ))}
            {currentButtons.slice(3,6 ).map((button, index) => (
              <Col id='col2' style={{ transform: `translateX(${active ? '115px' : '-15px'})` }}  key={button.id}>
                <Button onClick={() => handleHeaderFooterButtonClick(index)} key={index}>
                  <div className={button.shape} />
                </Button>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default App;

