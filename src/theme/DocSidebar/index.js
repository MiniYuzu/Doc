/**
 * This file wraps the original DocSidebar so we don't need to modify the original code.
 *
 * Reason for modifying:
 * - Add a logo to the top of the sidebar
 */

import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';

import Logo from '@theme-original/Logo';

export default function DocSidebarWrapper(props) {
  return (
    <>
      <Logo />
      <DocSidebar {...props} />
    </>
  );
}
