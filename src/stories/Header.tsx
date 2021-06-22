import React from 'react';

import { Button } from './Button';
import './header.css';

export interface HeaderProps {
  user?: {};
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  pageName?: ""
}
export const Header: React.FC<HeaderProps> = ({ user, pageName }) => (
  <header>
    <div className="wrapper">
      <div>
      </div>
      <div className="pagename">
        {pageName ? (
          pageName
        ) : '마이페이지'}
      </div>
    </div>
  </header>
);
