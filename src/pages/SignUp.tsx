import {Input} from '../stories/Input';
import { Button } from '../stories/Button';
import React, {useEffect, useState } from 'react';
import { Footer } from '../stories/Footer';
import { Header } from '../stories/Header';
import './sign-up.css';

export interface SignUpProps {
  user?: {};
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  pageName?: "";
}

export const SignUp: React.FC<SignUpProps> = ({ user, onLogin, onLogout, onCreateAccount, pageName }) => {
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
      {/* <Header user={user} pageName={pageName} /> */}
      <div className="title">
        <h2>SIGNUP</h2>
      </div>
      <div className="input-list">
      <ul>
        <li><input type="text" placeholder="USERNAME" /></li>
        <li><input type="text" placeholder="PASSWORD"/></li>
        <li><input type="text" placeholder="EMAIL"/></li>
        <li><input type="text" placeholder="PHONENO"/></li>
      </ul>
      </div>
      <div className="btn">
        <Button label={'SIGNUP'}></Button>
      </div>
      <Footer user={user} onLogin={onLogin} onLogout={onLogout}/>
    </article>
    )
};
