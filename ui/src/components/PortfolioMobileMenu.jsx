import React from 'react';
import { Drawer, Menu } from 'antd';

const menuItems = ['Inicio', 'Sobre', 'Projetos', 'Contato'];

const PortfolioMobileMenu = ({ isOpen, onClose, onScrollTo }) => {
  
  const handleMenuClick = (key) => {
    onScrollTo(key.toLowerCase());
    onClose(); // Close menu after clicking
  };

  return (
    <Drawer
      title={<span style={{color: '#00f3ff', fontFamily: 'Orbitron'}}>MENU</span>}
      placement="right"
      onClose={onClose}
      open={isOpen}
      styles={{ body: { background: '#111', padding: 0 }, header: { background: '#111', borderBottom: '1px solid #333' } }}
    >
      <Menu
        theme="dark"
        mode="vertical"
        style={{ background: '#111' }}
        items={menuItems.map(item => ({
          key: item,
          label: item,
          onClick: () => handleMenuClick(item)
        }))}
      />
    </Drawer>
  );
};

export default PortfolioMobileMenu;
