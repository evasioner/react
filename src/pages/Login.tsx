import React, {useEffect, useState } from 'react';
import { Footer } from '../stories/Footer';
import { Header } from '../stories/Header';
import './login.css';
import {Input} from '../stories/Input';
import { Button } from '../stories/Button';

export interface LoginProps {
  user?: {};
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  pageName?: "";
}

export const Login: React.FC<LoginProps> = ({ user, onLogin, onLogout, onCreateAccount, pageName }) => {
    const [hasError, setErrors] = useState(false);
    const [assets, setAssets] = useState({id:1, amount:1});
    useEffect(() => {
        // async function fetchData() {
        //     const res = await fetch("http://localhost:3333/api/assets");
        //     res
        //         .json()
        //         .then(res => setAssets(res))
        //         .catch(err => setErrors(err));
        // }

        // fetchData();
    }, []);
    return (
      <article>
      {/* <Header user={user} pageName={pageName} /> */}
      <div className="title">
        <h2>SIGNIN</h2>
      </div>
      <div className="input-box">
          <Input></Input>
          <Input></Input>
      </div>
      <div className="btn-box">
        <Button label={'LOGIN'}></Button>
        <Button label={'SIGNUP'}></Button>
      </div>
      <Footer user={user} onLogin={onLogin} onLogout={onLogout}/>
    </article>
    )
};
