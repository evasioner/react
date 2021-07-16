import React, {useEffect, useState } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { Input } from './Input';
import './page.css';
import { Img } from './CircleImg';
import { Button } from './Button';

export interface PageProps {
  user?: {};
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  pageName?: "";
}

export const Page: React.FC<PageProps> = ({ user, onLogin, onLogout, onCreateAccount, pageName }) => {
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
