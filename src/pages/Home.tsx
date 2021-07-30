import React from 'react';

import s from './Home.module.scss';

import { posterTheme, workshopName, personName, universityName } from '../utils/parameters';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container">
      <div className={s.home__top}></div>
      <div className={s.home__wrapper}>
        <div className={s.workshop__info}>
          <div className={s.workshop__ion}>
            ion
            <div className={s.border__ion}></div>
          </div>
          <p className={s.poster__theme}>{posterTheme.toUpperCase()}</p>
          <div style={{ display: 'flex', position: 'relative' }}>
            <p className={s.workshop__theme}>{workshopName}</p>
            <div className={s.border__left}></div>
          </div>
          <p className={s.workshop__name}>{personName}</p>
          <p className={s.workshop__university}>{universityName.toUpperCase()}</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
