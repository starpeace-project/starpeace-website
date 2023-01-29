<template lang='pug'>
#application-container(v-cloak)
  client-only
    sp-header(:show-header-logo='showHeaderLogo')

    #application-body.columns
      slot

    sp-footer
</template>

<script>
import Header from '~/components/header-panel';
import Footer from '~/components/footer-panel';

export default {
  components: {
    'sp-header': Header,
    'sp-footer': Footer
  },

  mounted () {
    document?.body?.classList?.add('background-img');
  },

  computed: {
    showHeaderLogo () {
      return this.$route.matched.map((r) => r.components.default.options?.showHeaderLogo || r.components.default.showHeaderLogo)[0] ?? false;
    }
  }
}
</script>

<style lang='sass'>
html
  font-size: 12px
  overflow-y: scroll

body
  box-sizing: border-box
  color: #000
  font-family: 'Open Sans', sans-serif
  font-size: 12px
  margin: 0
  padding: 0
  -webkit-touch-callout: none
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none

.background-img
  background: url('~/assets/images/background.jpg') top center repeat-y
  background-size: 100%
</style>
