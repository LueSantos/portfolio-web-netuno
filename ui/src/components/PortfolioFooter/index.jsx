import React from 'react';
import { Layout } from 'antd';
import './index.less';

const { Footer: AntFooter } = Layout;

const PortfolioFooter = () => {
  return (
    <AntFooter className="portfolio-footer">
      Zaya Netunis ©2025 | Powered by Ant Design & Netuno
    </AntFooter>
  );
};

export default PortfolioFooter;
