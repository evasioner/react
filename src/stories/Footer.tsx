import React from 'react';
import './footer.css';

export interface FooterProps {
  user?: {};
  onLogin?: () => void;
  onLogout?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ user, onLogin, onLogout }) => (
  <footer className="footer">
    <div className="footer-wrapper">
      <div className="active">
        <a>마이페이지</a>
      </div>
      <div>
        <a>주문</a>
      </div>
      <div>
        <a>충전</a>
      </div>
    </div>
  </footer>
);
