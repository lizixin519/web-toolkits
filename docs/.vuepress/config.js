/*
 * @Author: your name
 * @Date: 2022-03-06 13:57:28
 * @LastEditTime: 2022-03-06 16:41:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /web-toolkit/docs/.vuepress/config.js
 */
module.exports = {
  title: 'web toolkits',
  description: '工具类库',
  themeConfig: {
    sidebar: {
      '/utils/': ['validator', 'test'],
      // fallback
      '/': [''],
    },
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'api', link: '/utils/validator' },
    ],
    displayAllHeaders: true,
    lastUpdated: '最后更新时间',
    activeHeaderLinks: false,
  },
  plugins: ['@vuepress/back-to-top'],
}
