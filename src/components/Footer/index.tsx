import React from 'react'

import s from './Footer.module.scss';

import { adress, webSite, workshopTime } from '../../utils/parameters';
import posterImg from '../../assets/poster.png';

export default function Footer() {
  return (
    <>
      <div className={s.poster__block}>
        <div className={s.poster__border}></div>
        <div className={s.poster__time}>
          <p>{workshopTime}</p>
          <p>The Forum</p>
        </div>
        <img
          src={posterImg}
          alt='workshop the Ethics of AI'
          className={s.poster__image}
        />
      </div>

      <div className={s.footer}>
        <div className={s.info__block}>
          <p className={s.adress}>{adress}</p>
          <a href={`https://www.${webSite}/`} className={s.website}>
            {webSite.toUpperCase()}
          </a>
        </div>
        <div className={s.zoom__block}>
          <div className={s['zoom__block-plus']}></div>
          <div className={s['zoom__block-minus']}></div>
        </div>
      </div>
    </>
  );
}
