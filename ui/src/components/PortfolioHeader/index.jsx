import React from 'react';
import { Layout, Button, Typography } from 'antd';
import { Cpu, Menu as MenuIcon } from 'lucide-react';
import './index.less';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const menuItems = ['Sobre', 'Contato'];

const PortfolioHeader = ({ scrolled, onScrollTo, onMenuOpen }) => {
  return (
    <AntHeader className={`portfolio-header glass-nav ${!scrolled ? 'nav-transparent' : ''}`}>
      <div className="logo" onClick={() => onScrollTo('inicio')}>
        <Cpu color="#00f3ff" />
        <Text strong className="logo-text">LUCIANA<span className="highlight">.SANTOS</span></Text>
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu">
        {menuItems.map(item => (
          <Button
            key={item}
            type="text"
            className="menu-item"
            onClick={() => onScrollTo(item.toLowerCase())}
          >
            {item}
          </Button>
        ))}
        <Button type="primary" ghost onClick={() => onScrollTo('projetos')}>PROJETOS</Button>
      </div>

      {/* Mobile Trigger */}
      <Button
        type="text"
        icon={<MenuIcon color="#fff" />}
        onClick={onMenuOpen}
        className="mobile-trigger"
      />
    </AntHeader>
  );
};

export default PortfolioHeader;
