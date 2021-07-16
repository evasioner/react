import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import React, {useEffect, useState } from 'react';
import { Footer } from '../stories/Footer';
import { Header } from '../stories/Header';
import './page.css';

export interface PageProps {
  user?: {};
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  pageName?: "";
}

export const Login: React.FC<PageProps> = ({ user, onLogin, onLogout, onCreateAccount, pageName }) => {
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
        <Header user={user} pageName={pageName} />
        <section className="container">
          <div className="input-box">
          <Input></Input>
            <Input></Input>
          </div>
            <div className="btn-box">
            <Button></Button>
              <Button></Button>
            </div>

        </section>
        <Footer user={user} onLogin={onLogin} onLogout={onLogout}/>
      </article>
    )
};
