import React from 'react';
import { Row, Col, Typography, Card, Tag } from 'antd';
import { Github, ExternalLink, Monitor } from 'lucide-react';

const { Title, Text } = Typography;

const PortfolioProjects = ({ projects }) => {
  return (
    <div id="projetos" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <Title level={2}>MEUS <span className="gradient-text">PROJETOS</span></Title>
          <Text type="secondary">Desenvolvidos com foco em UI/UX e Código Limpo</Text>
        </div>
        <Row gutter={[24, 24]}>
          {projects.map((p, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card 
                hoverable 
                className="tech-card"
                cover={<div style={{ height: 160, background: '#1a1a1a', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Monitor size={48} color="#333" /></div>}
                actions={[
                  <Github key="git" color="#666" />,
                  <ExternalLink key="link" color="#00f3ff" />
                ]}
              >
                <Card.Meta 
                  title={<Text strong style={{ color: '#fff', fontSize: 18 }}>{p.title}</Text>}
                  description={
                    <>
                      <div style={{ minHeight: 40, marginBottom: 16, color: '#888' }}>{p.desc}</div>
                      <div>
                        {p.tags.map(t => <Tag key={t} bordered={false} style={{ background: 'rgba(255,255,255,0.1)', color: '#ccc' }}>{t}</Tag>)}
                      </div>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PortfolioProjects;
