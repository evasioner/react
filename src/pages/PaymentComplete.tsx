import Input from '@material-ui/core/Input';
import React, {useEffect, useState } from 'react';
import { Footer } from '../stories/Footer';
import { Header } from '../stories/Header';
import './payment-complete.css';

export interface PaymentCompleteProps {
  user?: {};
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  pageName?: "";
}

export const PaymentComplete: React.FC<PaymentCompleteProps> = ({ user, onLogin, onLogout, onCreateAccount, pageName }) => {
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
          페이지입니다.
            <Input></Input>
            {/*내자산 <span> {assets.amount}</span>*/}
        </section>
        <Footer user={user} onLogin={onLogin} onLogout={onLogout}/>
      </article>
    )
};
