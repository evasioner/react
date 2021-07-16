import React, {useEffect, useState } from 'react';
import { Footer } from '../stories/Footer';
import { Header } from '../stories/Header';
import './payment.css';

export interface PaymentProps {
  user?: {};
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  pageName?: "";
}

export const Payment: React.FC<PaymentProps> = ({ user, onLogin, onLogout, onCreateAccount, pageName }) => {
    const [hasError, setErrors] = useState(false);
    const [assets, setAssets] = useState({id:1, amount:1});
    // useEffect(() => {
        // async function fetchData() {
        //     const res = await fetch("http://localhost:3333/api/assets");
        //     res
        //         .json()
        //         .then(res => setAssets(res))
        //         .catch(err => setErrors(err));
        // }
        //
        // fetchData();
    // }, []);
    return (
      <article>
        <Header user={user} pageName={pageName} />
        <section>
        </section>
        <Footer user={user} onLogin={onLogin} onLogout={onLogout}/>
      </article>
    )
};
