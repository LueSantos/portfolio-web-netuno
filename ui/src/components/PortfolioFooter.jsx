import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const PortfolioFooter = () => {
  return (
    <AntFooter style={{ textAlign: 'center', background: '#000', color: '#444', borderTop: '1px solid #222' }}>
      Zaya Netunis ©2025 | Powered by Ant Design & Netuno
    </AntFooter>
  );
};

export default PortfolioFooter;
