import React from 'react';
import Header from '../components/organisms/Header';
import { ILayoutProps } from '../types';

const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <section className="min-h-screen bg-violet-50">
    <Header />
    <main aria-describedby='dashboard contents'>{children}</main>
  </section>
);

export default Layout;