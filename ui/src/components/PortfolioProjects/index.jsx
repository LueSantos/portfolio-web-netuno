import React from 'react';
import { Row, Col, Typography, Card, Tag } from 'antd';
import { Github, ExternalLink, Monitor } from 'lucide-react';
import './index.less';

const { Title, Text } = Typography;

const PortfolioProjects = ({ projects }) => {
  return (
    <div id="projetos" className="portfolio-projects">
      <div className="projects-container">
        <div className="projects-header">
          <Title level={2}>MEUS <span className="gradient-text">PROJETOS</span></Title>
          <Text type="secondary">Desenvolvidos com foco em UI/UX e Código Limpo</Text>
        </div>
        <Row gutter={[24, 24]}>
          {projects.map((p, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card
                hoverable
                className="tech-card"
                cover={
                  <div className="card-cover">
                    <Monitor size={48} color="#333" />
                  </div>
                }
                actions={[
                  <Github key="git" color="#666" />,
                  <ExternalLink key="link" color="#00f3ff" />
                ]}
              >
                <Card.Meta
                  title={<Text strong className="card-title">{p.title}</Text>}
                  description={
                    <>
                      <div className="card-desc">{p.desc}</div>
                      <div>
                        {p.tags.map(t => <Tag key={t} bordered={false} className="project-tag">{t}</Tag>)}
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
