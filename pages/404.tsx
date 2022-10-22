import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Rocket from '../components/rocket';
import styles from '../styles/404.module.scss';

interface Bored {
  activity?: string;
  link?: string;
  type?: string;
  partecipants?: number;
  price?: number;
  key?: string;
  accessibility?: number;
}

const NotFoundPage = (): JSX.Element => {
  const [bored, setBored] = useState<Bored>({});
  const [fetched, setFetched] = useState<boolean>(false);
  const [_error, setError] = useState<boolean>(false);

  const fixData = (data: Bored) => {
    if (data.activity) data.activity = data.activity[0].toLowerCase() + data.activity.substring(1);
    return data;
  };

  const fetchData = () => {
    fetch('https://www.boredapi.com/api/activity')
      .then((response) => response.json())
      .then((data) => {
        setBored(fixData(data));
        setFetched(true);
      })
      .catch((_err) => setError(true));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SEO title={'Not found'} pathname={'/404/'} />
      <Layout>
        <h1 className={styles.heading}>PAGE NOT FOUND</h1>
        <span className={styles.lost}>
          Did you lose your way while navigating?{' '}
          <Link href="/" className="link">
            <a>GO HOME</a>
          </Link>
          <Rocket />
          {fetched && (
            <div className={styles.boredWrap}>
              <p>
                If you are bored try to{' '}
                {bored.link == '' ? (
                  bored.activity
                ) : (
                  <a className="link" target="_blank" rel="noopener noreferrer" href={bored.link}>
                    {bored.activity}
                  </a>
                )}
              </p>
            </div>
          )}
          {process.env.NODE_ENV === 'development' ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
        </span>
      </Layout>
    </>
  );
};

export default NotFoundPage;
