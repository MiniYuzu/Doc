// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * 多 sidebar 自动生成配置：
 * - TCCASidebar 自动生成 docs/TCCA 下的文档菜单
 * - TCCRSidebar 自动生成 docs/TCCR 下的文档菜单
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // 自动生成 sidebar，基于 docs 目录结构
  TCCASidebar: [{type: 'autogenerated', dirName: 'tcca'}],
  TCCRSidebar: [{type: 'autogenerated', dirName: 'tccr'}],

  // But you can create a sidebar manually
  // TCCRSidebar: [
  //   'tccr',
  //   {
  //     type: 'category',
  //     label: '基础',
  //     items: ['tutorial-basics/create-a-document'],
  //   },
  //   {
  //     type: 'category',
  //     label: '扩展',
  //     items: ['tutorial-extras/translate-your-site'],
  //   },
  // ],
  // TCCASidebar: [
  //   {
  //     type: 'category',
  //     label: '配置',
  //     items: ['tutorial-basics/create-a-blog-post', 'tutorial-basics/create-a-page'],
  //   },
  //   {
  //     type: 'category',
  //     label: '数据源',
  //     items: ['tutorial-extras/manage-docs-versions'],
  //   },
  // ],
};

export default sidebars;
