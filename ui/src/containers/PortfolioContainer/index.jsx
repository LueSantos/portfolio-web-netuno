import React, { useState, useEffect } from 'react';
import { Layout, ConfigProvider, theme, FloatButton } from 'antd';

// Estilos e Dados
import './index.less';
import { skills, projects, stats } from './data.js';

// Componentes Filhos
import PortfolioHeader from '../../components/PortfolioHeader';
import PortfolioHero from '../../components/PortfolioHero/index.jsx';
import PortfolioAbout from '../../components/PortfolioAbout/index.jsx';
import PortfolioProjects from '../../components/PortfolioProjects';
import PortfolioContact from '../../components/PortfolioContact';
import PortfolioFooter from '../../components/PortfolioFooter';
import PortfolioMobileMenu from '../../components/PortfolioMobileMenu';

const { Content } = Layout;

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito de scroll para o header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para navegar suavemente para uma seção
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#00f3ff',
          colorBgBase: '#050505',
          fontFamily: 'Roboto, sans-serif',
          borderRadius: 4,
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', background: '#050505' }}>
        
        <PortfolioHeader 
          scrolled={scrolled}
          onScrollTo={scrollTo}
          onMenuOpen={() => setMobileMenuOpen(true)}
        />

        <Content>
          <PortfolioHero onScrollTo={scrollTo} />
          <PortfolioAbout skills={skills} stats={stats} />
          <PortfolioProjects projects={projects} />
          <PortfolioContact />
        </Content>

        <PortfolioFooter />

        <PortfolioMobileMenu 
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          onScrollTo={scrollTo}
        />

        <FloatButton.BackTop />
        
      </Layout>
    </ConfigProvider>
  );
};

export default Portfolio;
