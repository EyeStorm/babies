<template>
  <div
    id="demo"
    :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]"
  >
    <div class="demo">
      <div class="container">
        <a :href="this.$route.meta['link']" target="_blank">
          <h1 v-text="this.$route.name" style="float:left;"/>
        </a>
        <hr style="margin: 50px 0;border: 1px solid #e3e3e3;clear: both">
        <router-view />
      </div>
      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
      />
      <div
        v-if="isOnMobile && !collapsed"
        class="sidebar-overlay"
        @click="collapsed = true"
      />
    </div>
  </div>
</template>

<script>
import * as batlote from './components/batlote/index'
import Start from './components/batlote/Start'
import Styling from './components/Styling'
const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}

export default {
  name: 'App',
  components: { Styling, Start },
  data () {
    return {
      menu: [
        batlote.Menu,
/*        {
          header: true,
          title: 'Getting Started',
          hiddenOnCollapse: true
        },
        {
          href: '/Installation',
          title: 'Installation',
          icon: 'fa fa-download'
        },
        {
          href: '/batlotes',
          title: '1. Biếng ăn tâm lý: nguyên nhân',
          icon: 'fa fa-code'
        },
        {
          href: '/basic-usage',
          title: 'Basic Usage ',
          icon: 'fa fa-code'
        },
        {
          header: true,
          title: 'Usage',
          hiddenOnCollapse: true
        },
        {
          href: '/props',
          title: 'Props',
          icon: 'fa fa-cogs'
        },
        {
          href: '/events',
          title: 'Events',
          icon: 'fa fa-bell'
        },
        {
          href: '/styling',
          title: 'Styling',
          icon: 'fa fa-palette'
        },

        {
          component: separator
        },
        {
          header: true,
          title: 'Example',
          hiddenOnCollapse: true
        },
        {
          href: '/disabled',
          title: 'Disabled page',
          icon: 'fa fa-lock',
          disabled: true
        },
        {
          title: 'Badge',
          icon: 'fa fa-cog',
          badge: {
            text: 'new',
            class: 'vsm--badge_default'
          }
        },
        {
          href: '/page',
          title: 'Dropdown Page',
          icon: 'fa fa-list-ul',
          child: [
            {
              href: '/page/sub-page-1',
              title: 'Sub Page 01',
              icon: 'fa fa-file-alt'
            },
            {
              href: '/page/sub-page-2',
              title: 'Sub Page 02',
              icon: 'fa fa-file-alt'
            }
          ]
        },
        {
          title: 'Multiple Level',
          icon: 'fa fa-list-alt',
          child: [
            {
              title: 'page'
            },
            {
              title: 'Level 2 ',
              child: [
                {
                  title: 'page'
                },
                {
                  title: 'Page'
                }
              ]
            },
            {
              title: 'Page'
            },
            {
              title: 'Another Level 2',
              child: [
                {
                  title: 'Level 3',
                  child: [
                    {
                      title: 'Page'
                    },
                    {
                      title: 'Page'
                    }
                  ]
                }
              ]
            }
          ]
        }
        */
      ],
      collapsed: false,
      themes: [
        {
          name: 'Default theme',
          input: ''
        },
        {
          name: 'White theme',
          input: 'white-theme'
        }
      ],
      selectedTheme: 'white-theme',
      isOnMobile: false
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onToggleCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item, node) {
      console.log('onItemClick')
      // console.log(event)
      // console.log(item)
      // console.log(node)
    },
    onResize () {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true
        this.collapsed = true
      } else {
        this.isOnMobile = false
        this.collapsed = false
      }
    }
  }
}
</script>

<style lang="scss">

/*
@import 'public/css/3apCvHkKCyn.css';
@import 'public/css/4By0GIBba1e.css';
@import 'public/css/kJ7WnVRGu-H.css';
@import 'public/css/pc2FxkxdgYE.css';
@import 'public/css/rCbebgOnCq3.css';
@import 'public/css/ymFE5_08d4Y.css';
*/

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  background-color: #f2f4f7;
  color: #262626;
}

#demo {
  padding-left: 350px;
  transition: 0.3s ease;
}
#demo.collapsed {
  padding-left: 50px;
}
#demo.onmobile {
  padding-left: 50px;
}

.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}

.demo {
  padding: 15px;
}

.container {
  max-width: 900px;
}

pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #fff;
  border-radius: 2px;
  padding: 15px;
  line-height: 1.5;
  overflow: auto;
}
</style>
