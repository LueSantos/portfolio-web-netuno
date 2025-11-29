import React from 'react';
import { Drawer, Menu } from 'antd';
import './index.less';

const menuItems = ['Inicio', 'Sobre', 'Projetos', 'Contato'];

const PortfolioMobileMenu = ({ isOpen, onClose, onScrollTo }) => {

  const handleMenuClick = (key) => {
    onScrollTo(key.toLowerCase());
    onClose(); // Close menu after clicking
  };

  return (
    <Drawer
      title="MENU"
      placement="right"
      onClose={onClose}
      open={isOpen}
      className="portfolio-mobile-menu"
    >
      <Menu
        theme="dark"
        mode="vertical"
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
