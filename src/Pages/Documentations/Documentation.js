import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Documentation.css';
import Header from '../../Header/Header';

export default function DocumentationLayout() {
  return (
    <>
    <Header/>
    <div className="documentation-layout">
      <nav className="sidebar">
        <h2 className="overview-heading"> Overview</h2>
        <ul>
          <li><Link to="quick-start">Quick Start</Link></li>
          <li><Link to="installation">Installation</Link></li>
          <li><Link to="usage">Usage</Link></li>
         {/*add more link*/}
        </ul>
        <h2 className="overview-heading"> Projects</h2>
        <ul>
          <li>
            <Link to="weather">Weather</Link>
          </li>
          <li> <Link to="password-generator">Password Generator</Link></li>
          <li> <Link to="todo-list">TODO List</Link></li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
    </>
  );
}

