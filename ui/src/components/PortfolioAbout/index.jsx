import React from 'react';
import { Row, Col, Typography, Tag, Card } from 'antd';
import * as icons from 'lucide-react';
import './index.less';

const { Title, Paragraph, Text } = Typography;

// A simple helper to render an icon by its string name.
const Icon = ({ name, ...props }) => {
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon {...props} /> : null;
};

const PortfolioAbout = ({ skills, stats }) => {
  return (
    <div id="sobre" className="portfolio-about">
      <div className="about-container">
        <Row gutter={[64, 64]} align="middle">
          <Col xs={24} md={12}>
            <Title level={2}>SOBRE <span className="gradient-text">MIM</span></Title>
            <Paragraph style={{ fontSize: 16, color: '#aaa' }}>
              Focado em criar experiências web imersivas. Utilizo a biblioteca de componentes do Ant Design para garantir acessibilidade e consistência, enquanto personalizo o design através de tokens e CSS para entregar identidade única.
            </Paragraph>
            <Title level={4} className="tech-stack-title">TECH STACK</Title>
            <div className="skills-wrapper">
              {skills.map(skill => (
                <Tag key={skill.name} color={skill.color} icon={<Icon name={skill.icon} size={16} />} className="skill-tag">
                  {skill.name}
                </Tag>
              ))}
            </div>
          </Col>
          <Col xs={24} md={12}>
            <Row gutter={[16, 16]}>
              {stats.map((stat, i) => (
                <Col span={12} key={i}>
                  <Card bordered={false} className="stat-card">
                     <Title level={2}>{stat.val}</Title>
                     <Text type="secondary">{stat.label}</Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PortfolioAbout;
