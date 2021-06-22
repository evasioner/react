import React, {useEffect, useState } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { Input } from './Input';
import './page.css';
import { Img } from './CircleImg';

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
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3333/api/assets");
            res
                .json()
                .then(res => setAssets(res))
                .catch(err => setErrors(err));
        }

        fetchData();
    }, []);
    return (
      <article>
        <Header user={user} pageName={pageName} />
        <section>
          페이지입니다.
            <Input></Input>
            내자산 <span> {assets.amount}</span>
        <div className="imgBox">
        <Img></Img>
        <Img></Img>
        <Img></Img>
        </div>

    </section>
        <Footer user={user} onLogin={onLogin} onLogout={onLogout}/>
      </article>
    )
};
