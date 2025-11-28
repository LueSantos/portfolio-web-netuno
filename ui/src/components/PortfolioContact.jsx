import React from 'react';
import { Row, Col, Typography, Card, Form, Input, Button } from 'antd';
import { Send, Linkedin, Github, Mail } from 'lucide-react';

const { Title } = Typography;
const { TextArea } = Input;

const PortfolioContact = () => {
  return (
    <div id="contato" style={{ padding: '100px 0', background: 'linear-gradient(180deg, #050505 0%, #111 100%)' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
        <Card className="tech-card" style={{ padding: 24 }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>VAMOS <span className="gradient-text">CONVERSAR?</span></Title>
          <Form layout="vertical" size="large">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="name" label={<span style={{color: '#888'}}>Nome</span>} rules={[{ required: true }]}>
                  <Input placeholder="Seu nome" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="email" label={<span style={{color: '#888'}}>Email</span>} rules={[{ required: true, type: 'email' }]}>
                  <Input placeholder="seu@email.com" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="message" label={<span style={{color: '#888'}}>Mensagem</span>} rules={[{ required: true }]}>
              <TextArea rows={4} placeholder="Como posso ajudar?" />
            </Form.Item>
            <Button type="primary" block size="large" htmlType="submit" icon={<Send size={18} />} style={{ marginTop: 16 }}>
              ENVIAR MENSAGEM
            </Button>
          </Form>
        </Card>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 48 }}>
          <Button type="link" icon={<Linkedin size={24} />} style={{ color: '#666' }} />
          <Button type="link" icon={<Github size={24} />} style={{ color: '#666' }} />
          <Button type="link" icon={<Mail size={24} />} style={{ color: '#666' }} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioContact;
