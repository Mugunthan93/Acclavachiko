import * as React from 'react';
import Content from './layout/content';
import Footer from './layout/footer';
import Header from './layout/header';
import './style.css';
import './styles/style.scss';

const App = () => {
  return (
    <div className="layout">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
