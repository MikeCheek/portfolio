import React, { useContext } from 'react';
import Arrow from '../../atoms/arrow';
import CursorContext from '../../utilities/useCursorContext';
import styles from './index.module.scss';

const Index = () => {
  const { fitElement, unFit } = useContext(CursorContext);
  return (
    <div
      className={styles.arrowWrap}
      onClick={() => window.scroll(0, window.innerHeight)}
      onMouseEnter={(e) => fitElement(e.currentTarget)}
      onMouseOver={(e) => fitElement(e.currentTarget)}
      onMouseLeave={unFit}
      onMouseOut={unFit}
    >
      <div className={styles.arrow1}>
        <Arrow down />
      </div>
      <div className={styles.arrow2}>
        <Arrow color="var(--pink)" down />
      </div>
    </div>
  );
};

export default Index;
