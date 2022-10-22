import React from 'react';
import RocketSvg from '../../assets/rocket.svg';
import WindSvg from '../../assets/wind.svg';

import styles from './index.module.scss';

const Index = (): JSX.Element => {
  return (
    <div className={styles.wrap}>
      <div className={styles.rocketWrap}>
        <div className={styles.rocket}>
          <RocketSvg width={'200px'} fill={'var(--orange)'} />
        </div>
      </div>
      <div className={styles.wind}>
        <WindSvg width={'100vw'} height={'200px'} fill={'var(--grey)'} />
      </div>
    </div>
  );
};

export default Index;
