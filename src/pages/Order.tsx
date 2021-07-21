import Input from '@material-ui/core/Input';
import React, {useEffect, useState } from 'react';
import { Footer } from '../stories/Footer';
import { Header } from '../stories/Header';
import './order.css';

export interface OrderProps {
  user?: {};
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  pageName?: "";
}

export const Order: React.FC<OrderProps> = ({ user, onLogin, onLogout, onCreateAccount, pageName }) => {
    const [hasError, setErrors] = useState(false);
    const [assets, setAssets] = useState({id:1, amount:1});
    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch("http://localhost:3333/api/assets");
    //         res
    //             .json()
    //             .then(res => setAssets(res))
    //             .catch(err => setErrors(err));
    //     }
    //
    //     fetchData();
    // }, []);
    return (
      <article>
        <Header user={user} pageName={pageName} />
        <section>
        <div className="headerTxt">
          <span>주문</span>
          <div className="inputBox">
          <input type="text" placeholder="지역을 입력하세요"/>
        </div>
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="">
                <img src="" alt="" />
                <div className="textBox">
                  <span>파스타맛집</span>
                  <h3>5.0(100+)</h3>
                  <p>매콤 파스타,쉬림프 파스타,마스타</p>
                </div>
              </a>
              </li>
              <li>
              <a href="">
                <img src="" alt="" />
                <div className="textBox">
                  <span>파스타맛집</span>
                  <h3>5.0(100+)</h3>
                  <p>매콤 파스타,쉬림프 파스타,마스타</p>
                </div>
              </a>
              </li>
              <li>
              <a href="">
                <img src="" alt="" />
                <div className="textBox">
                  <span>파스타맛집</span>
                  <h3>5.0(100+)</h3>
                  <p>매콤 파스타,쉬림프 파스타,마스타</p>
                </div>
              </a>
              </li>
          </ul>
        </div>
        </section>
        <Footer user={user} onLogin={onLogin} onLogout={onLogout}/>
      </article>
    )
};
