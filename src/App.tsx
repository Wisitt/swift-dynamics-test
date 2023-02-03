import React, { useState } from 'react';
import { Layout,Col, Row, Card, Space } from 'antd';
import './App.scss'
import Test1 from './page/Test1';
import Test2 from './page/Test2';
import Test3 from './page/Test3';
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

const { Header, Footer } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',  
  color: '#fff',
  height: 60,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#000',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#000',
};

i18next.use(initReactI18next).init({
    resources: {
      en: {
        translation: {
          "shape":"Move Shape",
          "position":"Move Position",
          "test1-lang":"Layout & Style",
          "lang-en":"EN",
          "lang-th":"TH",
          "card1": "Test1",
          "card2": "Test2",
          "card3": "Test3",
          "card-p1": "Layout & Style",
          "card-p2": "Connect API",
          "card-p3": "From & Table",
        }
      },
      th: {
        translation: {
          "shape":"เลือกรูปแบบ",
          "position":"เปลี่ยนตำแหน่ง",
          "test1-lang":"การจัดการหน้าเว็ป",
          "lang-en":"อังกฤษ",
          "lang-th":"ไทย",
          "card1": "แบบทดสอบที่ 1",
          "card2": "แบบทดสอบที่ 1",
          "card3": "แบบทดสอบที่ 1",
          "card-p1": "การจัดการหน้าเว็ป",
          "card-p2": "การเชื่อมต่อ API",
          "card-p3": "การเชื่อต่อหน้าฟอร์ม",
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
  });


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('');
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className='container'>
      <Layout>
        <Header style={headerStyle}>
        </Header>
        <div className='contentStyle'>
            <div className='dropdown'>
              <select onChange={(event) => handleLanguageChange(event.target.value)}>
                <option value="en">{t('lang-en')}</option>
                <option value="th">{t('lang-th')}</option>
              </select>
            </div>
            <div className='card'>
            <Space direction="horizontal" size="middle" style={{ display: 'flex' }} >
              {currentPage === './page/Test1.tsx' ? (
              <Test1 />
              ) : currentPage === './page/Test2.tsx' ? (
              <Test2 />
              ) : currentPage === './page/Test3.tsx' ? (
              <Test3 />
              ) : (
              <>
              <Row gutter={[8, 16]}>
                <Col xs={16} sm={8} md={8}>
                  <a onClick={() => setCurrentPage('./page/Test1.tsx')}>
                    <Card id='c1' title={t('card1')}>
                      <p>{t('card-p1')}</p>
                    </Card>
                  </a>
                </Col>
                <Col xs={16} sm={8} md={8}>
                  <a onClick={() => setCurrentPage('./page/Test2.tsx')}>
                    <Card id='c2' title={t('card2')}>
                      <p>{t('card-p2')}</p>
                    </Card>
                  </a>
                </Col>
                <Col xs={16} sm={8} md={8}>
                  <a onClick={() => setCurrentPage('./page/Test3.tsx')}>
                    <Card id='c3' title={t('card3')}>
                      <p>{t('card-p3')}</p>
                    </Card>
                  </a>
                </Col>
              </Row>
              </>
            )}
            </Space>
            </div>
        </div>
        <Footer style={footerStyle}></Footer>
      </Layout>
    </div>
  )
}

export default App

