import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import ContentVisibility from '@theme/ContentVisibility';
import styles from '@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css';

// import DocDemo from '@components/global/DocDemo';

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();

  const hidden = frontMatter.hide_table_of_contents;
  // CUSTOM CODE
  const demoUrl = frontMatter.demoUrl;
  const canRender = !hidden && toc.length > 0 && !demoUrl;
  // CUSTOM CODE END

  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;

  return {
    hidden,
    mobile,
    desktop,
  };
}

// CUSTOM CODE
function useDocDemo() {
  const {frontMatter} = useDoc();
  const demoUrl = frontMatter.demoUrl;
  const demoSourceUrl = frontMatter.demoSourceUrl;
  return {
    demoUrl,
    demoSourceUrl,
  };
}
// CUSTOM CODE END

export default function DocItemLayout({children, ...props}) {
  const docTOC = useDocTOC();
  const {metadata} = useDoc();
  // CUSTOM CODE
  const {demoUrl, demoSourceUrl} = useDocDemo();
  // CUSTOM CODE END
  return (
    <>
      <DocVersionBanner />
      <div className="row">
        <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
          <ContentVisibility metadata={metadata} />
          <div className={styles.docItemContainer}>
            <article>
              <DocVersionBadge />
              {docTOC.mobile}
              <DocItemContent>{children}</DocItemContent>
              <DocItemFooter />
            </article>
            <DocItemPaginator />
          </div>
        </div>
        {demoUrl && (
          <div className='col col--4'>
            <div className='doc-demo-wrapper'>
              {/* <DocDemo url={demoUrl} source={demoSourceUrl} /> */}
            </div>
          </div>
        )}
        {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
      </div>
    </>
  );
}
