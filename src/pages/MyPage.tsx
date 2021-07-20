import Input from '@material-ui/core/Input';
import React, {useEffect, useState } from 'react';
import { Footer } from '../stories/Footer';
import { Header } from '../stories/Header';
import './mypage.css';

export interface MyPageProps {
  user?: {};
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  pageName?: "";
}

export const MyPage: React.FC<MyPageProps> = ({ user, onLogin, onLogout, onCreateAccount, pageName }) => {
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
        <section>
        <div className="headerTxt">
          <span>마이페이지</span>
        </div>
        <div className="imgBox">
          <span>아이디</span>
          <span>닉네임</span>
          <img src="" alt="" />
        </div>
        <div className="textBox">
          <div className="text">
            
            <span>내자산</span>
            <h2>10,000$</h2>
          </div>
        </div>
        <div>
        <table className="table">
          <thead>
            <tr>
              <th>일시</th>
              <th>업체</th>
              <th>거래금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Approved</td>
              <td>John is an interesting boy</td>
            </tr>
            <tr>
              <td>Jamie</td>
              <td>Approved</td>
              <td>Jamie is a kind girl</td>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Denied</td>
              <td>Jill is an alright girl</td>
            </tr>
          </tbody>
        </table>
        </div>
        </section>
        <Footer user={user} onLogin={onLogin} onLogout={onLogout}/>
      </article>
    )
};
