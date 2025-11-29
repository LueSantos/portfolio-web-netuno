import React from 'react';
import { Row, Col, Typography, Card, Form, Input, Button } from 'antd';
import { Send, Linkedin, Github, Mail } from 'lucide-react';
import './index.less';

const { Title } = Typography;
const { TextArea } = Input;

const PortfolioContact = () => {
  return (
    <div id="contato" className="portfolio-contact">
      <div className="contact-container">
        <Card className="tech-card contact-card">
          <Title level={2} className="contact-title">VAMOS <span className="gradient-text">CONVERSAR?</span></Title>
          <Form layout="vertical" size="large">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="name" label={<span className="form-label">Nome</span>} rules={[{ required: true }]}>
                  <Input placeholder="Seu nome" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="email" label={<span className="form-label">Email</span>} rules={[{ required: true, type: 'email' }]}>
                  <Input placeholder="seu@email.com" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="message" label={<span className="form-label">Mensagem</span>} rules={[{ required: true }]}>
              <TextArea rows={4} placeholder="Como posso ajudar?" />
            </Form.Item>
            <Button type="primary" block size="large" htmlType="submit" icon={<Send size={18} />} className="submit-button">
              ENVIAR MENSAGEM
            </Button>
          </Form>
        </Card>
        <div className="social-links">
          <Button type="link" icon={<Linkedin size={24} />} className="social-btn" />
          <Button type="link" icon={<Github size={24} />} className="social-btn" />
          <Button type="link" icon={<Mail size={24} />} className="social-btn" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioContact;
