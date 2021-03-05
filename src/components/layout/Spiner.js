import React from 'react';
// import spiner from './spinner.gif';
import { css } from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';

const override = css`
  display: block;
  margin: auto;
`;
const Spiner = () => (
  <>
    {/* <img
      src={spiner}
      alt='Loading...'
      style={{ width: '200px ', margin: 'auto', display: 'block' }}></img> */}
    <MoonLoader css={override} size={100} color={'#D42C43'} />
  </>
);

export default Spiner;
