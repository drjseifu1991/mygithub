import React from 'react';
import NextHead from 'next/head';
import PropTypes from 'prop-types';

const defaultTitle = 'MyGithub';
const defaultDescription = 'A nicer look at your GitHub profile. With charts!';
const defaultOGURL = 'https://drj-github.vercel.app/';
const defaultOGImage = 'https://raw.githubusercontent.com/drjseifu1991/mygithub/master/static/og.jpg';

const Head = () => {
  
//   <NextHead>
//     <meta charSet="UTF-8" />
//     <title>{defaultTitle}</title>
//     <meta name="description" content={defaultDescription} />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <link rel="icon" href="/static/favicons/favicon.ico" />
//     <link rel="apple-touch-icon" sizes="120x120" href="/static/favicons/apple-touch-icon.png" />
//     <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
//     <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
//     <link rel="manifest" href="/static/favicons/site.webmanifest" />
//     <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#1A1E22" />
//     <meta name="msapplication-TileColor" content="#1A1E22" />
//     <meta name="theme-color" content="#0070f3" />
//     <meta property="og:url" content={defaultOGURL} />
//     <meta property="og:title" content={defaultTitle} />
//     <meta property="og:description" content={defaultDescription} />
//     <meta name="twitter:site" content={defaultOGURL} />
//     <meta name="twitter:card" content="summary_large_image" />
//     <meta name="twitter:image" content={defaultOGImage} />
//     <meta name="twitter:description" content={defaultDescription} />
//     <meta name="twitter:creator" content={'@seifudereje'} />
//     <meta name="twitter:title" content={defaultTitle} />
//     <meta property="og:image" content={defaultOGImage} />
//     <meta property="og:image:width" content="1200" />
//     <meta property="og:image:height" content="630" />
//   </NextHead>
  return (
    <div>
    </div>
  )
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  ogImage: PropTypes.string,
};

export default Head;
