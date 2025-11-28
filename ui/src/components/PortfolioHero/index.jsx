import React from 'react';
import { Row, Col, Typography, Button, Tag } from 'antd';
import { Rocket } from 'lucide-react';
import './index.less';

const { Title, Paragraph } = Typography;

const PortfolioHero = ({ onScrollTo }) => {
  return (
    <div id="inicio" className="portfolio-hero">
      <div className="hero-container">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={12}>
            <Tag color="cyan" className="hero-tag">DESENVOLVEDOR FRONTEND</Tag>
            <Title level={1} className="hero-title">
              CRIANDO O <br/><span className="gradient-text">FUTURO DIGITAL</span>
            </Title>
            <Paragraph className="hero-paragraph">
              Interfaces React de alta performance com a robustez do Ant Design e a agilidade do Netuno.
            </Paragraph>
            <div className="hero-buttons">
              <Button type="primary" size="large" icon={<Rocket size={16} />} onClick={() => onScrollTo('projetos')}>
                VER PROJETOS
              </Button>
              <Button size="large" ghost onClick={() => onScrollTo('contato')}>
                FALE COMIGO
              </Button>
            </div>
          </Col>
          <Col xs={24} md={12} className="hero-svg-container">
            <div className="animate-float">
              <svg viewBox="0 0 400 400" width="100%" className="hero-svg">
                 <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" className="hero-svg-gradient" />
                    <stop offset="100%" className="hero-svg-gradient" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="150" stroke="url(#grad1)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <rect x="150" y="150" width="100" height="100" stroke="#00f3ff" strokeWidth="2" fill="none" transform="rotate(45 200 200)" />
              </svg>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PortfolioHero;
