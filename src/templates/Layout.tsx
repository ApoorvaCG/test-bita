import React from 'react';
import Header from '../components/organisms/Header';
import { LayoutProps } from '../types';

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <section className="layout-container bg-violet-50">
    <Header />
    <main aria-describedby='dashboard contents'>{children}</main>
  </section>
);

export default Layout;