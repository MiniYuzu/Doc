/**
 * This file wraps the original Main so we don't need to modify the original code.
 *
 * Reason for modifying:
 * - Moved the navbar to the top of the page. Originally, the navbar would be placed along the top of the entire site, but we want it to be placed along the top of the docs page only.
 */

import React from 'react';
import Main from '@theme-original/DocRoot/Layout/Main';
import Navbar from '@theme/Navbar';

export default function MainWrapper(props) {
  return (
    <div>
      <div className="content-navbar">
        <Navbar />
      </div>
      <Main {...props} />
    </div>
  );
}
