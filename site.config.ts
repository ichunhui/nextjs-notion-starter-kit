import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'e6f903d7155b4f8fb9d9b228a790079b',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '奇奇怪怪',
  domain: 'ichunhui.top',
  author: 'Jimmy',

  // open graph metadata (optional)
  description: 'Personal site of Jimmy',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'ichunhui',
  // linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // pageUrlAdditions: {
  //   '/the-social-audio-revolution': 'c4deaf33cc924ad7a5b9f69c6ae04a01'
  // },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '4802bc007fff4891900ba3f5da1a82b3'
    },
    {
      title: 'Contact',
      pageId: 'd6ac4f95edaf42c4b20c826d53083003'
    }
  ]
})
