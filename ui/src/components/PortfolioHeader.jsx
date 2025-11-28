import React from 'react';
import { Layout, Button, Typography } from 'antd';
import { Cpu, Menu as MenuIcon } from 'lucide-react';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const menuItems = ['Inicio', 'Sobre', 'Projetos', 'Contato'];

const PortfolioHeader = ({ scrolled, onScrollTo, onMenuOpen }) => {
  return (
    <AntHeader className={`glass-nav ${!scrolled ? 'nav-transparent' : ''}`} style={{ padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => onScrollTo('inicio')}>
        <Cpu color="#00f3ff" />
        <Text strong style={{ fontSize: 20, color: '#fff', letterSpacing: 2 }}>DEV<span style={{color: '#00f3ff'}}>.PORTFOLIO</span></Text>
      </div>
      
      {/* Desktop Menu */}
      <div className="desktop-menu" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        {menuItems.map(item => (
          <Button 
            key={item} 
            type="text" 
            className="hidden-mobile"
            style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: 1 }}
            onClick={() => onScrollTo(item.toLowerCase())}
          >
            {item}
          </Button>
        ))}
        <Button type="primary" ghost onClick={() => onScrollTo('projetos')}>DEMO</Button>
      </div>
      
      {/* Mobile Trigger */}
      <Button 
        type="text" 
        icon={<MenuIcon color="#fff" />} 
        onClick={onMenuOpen} 
        style={{ display: 'none' }} // This should be controlled by CSS media queries
        className="mobile-only"
      />
    </AntHeader>
  );
};

export default PortfolioHeader;
