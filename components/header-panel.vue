<template lang='pug'>
#common-header
  .common-logo.not-mobile.is-hidden-mobile(v-show='showHeaderLogo')
    a.logo(href='/')
      h1 STAR
      img.starpeace-logo
      h1 PEACE
  .common-logo.mobile.is-hidden-tablet(v-show='showHeaderLogo')
    a.logo(href='/')
      h1 STAR
      img.starpeace-logo
      h1 PEACE

  .welcome.is-hidden-mobile(:class="{ 'is-hidden-tablet-only': !showHeaderLogo }")
    span Welcome, Visitor!

  .development.is-hidden-mobile.is-hidden-tablet-only
    a.documentation(href='https://docs.starpeace.io') Documentation
    a.community(href='https://docs.starpeace.io/reference/project/') Community
    a.discord(href='https://discord.gg/TF9Bmsj' target='_blank')
      font-awesome-icon(:icon="['fab', 'discord']")
    a.github(href='https://github.com/starpeace-project/starpeace-website' target='_blank')
      font-awesome-icon(:icon="['fab', 'github']")
</template>

<script>
export default {
  props: {
    showHeaderLogo: Boolean
  }
}
</script>

<style lang='sass' scoped>
#common-header
  color: #fff
  font-size: 1.25rem
  grid-column-start: 1
  grid-column-end: 2
  grid-row-start: 1
  grid-row-end: 1
  line-height: 3rem
  padding-top: .25rem
  z-index: 1025

  .common-logo
    float: left

    .starpeace-logo
      filter: brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(7498%) hue-rotate(205deg) brightness(105%) contrast(100%)
      background-size: 2.5rem
      display: inline-block
      height: 2.5rem
      margin: 0 0 .5rem
      width: 2.5rem
      vertical-align: middle

    h1
      display: inline-block
      font-size: 3rem
      line-height: 3rem
      margin: .25rem .25rem .5rem
      vertical-align: middle

      &:not(:first-child)
        margin-left: .5rem

    &.mobile
      padding: 2vw 1vw 1vw
      text-align: center
      width: 100%

      .starpeace-logo
        background-size: 9vw
        height: 9vw
        margin: 0 0 .5rem
        width: 9vw

      h1
        font-size: 11vw

  a
    color: #fff

  .welcome
    float: left
    margin: .25rem 0 0 .5rem

    span
      margin-right: 1rem

  .development
    float: right
    padding-top: .25rem

    a
      display: inline-block
      line-height: 3rem
      margin: 0 1rem
      vertical-align: bottom

      &.discord,
      &.twitter,
      &.github
        font-size: 1.4rem

      &.twitter
        line-height: 2.95rem

      &.discord
        line-height: 2.8rem
</style>
