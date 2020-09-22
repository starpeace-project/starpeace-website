<template lang='pug'>
no-ssr
  #application-container(v-cloak=true)
    sp-header(:show_header_logo='false')

    #application-body
      .columns
        .column.is-6.is-offset-3
          .banner.not-mobile.is-hidden-mobile
            h1 STAR
            img.starpeace-logo
            h1 PEACE
          .banner.mobile.is-hidden-tablet
            h1 STAR
            img.starpeace-logo
            h1 PEACE
          #demo-card.card
            .card-content
              img(src='~/assets/images/demo1.gif')
          h2#sub-banner Tycoon Supremacy through Capitalistic Cooperation and Competition
          #demo-actions.buttons.is-centered
            a.button.is-primary.is-large.demo(href='https://client.starpeace.io/') Play Now

      #main-body-container.columns
        .column.is-6.is-offset-3
          #main-body-banner
            h2 Master the Economy, Build your Destiny
            h3
              | Get started today! Play STARPEACE, a multiplayer economic simulation and classic city-building game,
              | directly in your browser with a client using the latest HTML5 and WebGL technologies and supported with
              | a modern service-oriented architecture backend.

          #details-card.card
            .card-content
              .columns.is-vcentered.feature
                .column.is-8.has-text-right
                  h3 Massively multi-player persistent world
                  .feature
                    | Choose business acquisitions wisely as you build retail chains, real estate ventures, heavy industry or even farming while competing against hundreds of other players worldwide
                .column.is-4
                  .feature-img-placeholder

              .columns.is-vcentered.feature
                .column.is-4
                  .feature-img-placeholder
                .column.is-8
                  h3 Realistic simulation of city, planetary, and inter-planetary economics
                  | Set up supply chains of warehouses refineries, and factories or trade with other players at negotiated rates for in-demand resources across cities, countries and even planets

              .columns.is-vcentered.feature
                .column.is-8.has-text-right
                  h3 Choose from a handful of different Seals
                  | A Seal is a collection of technologies and patent designs that provides companies with certain strengths and weaknesses, access to different industries and resources, and a distinct building look
                .column.is-4
                  .feature-img-placeholder

              .columns.is-vcentered.feature
                .column.is-4
                  .feature-img-placeholder
                .column.is-8
                  h3 Micro-manage company policy, prices, and strategy
                  | Intuitive interface provides complete control of company and building strategy, as well as ability to view and interact other tycoons' company portfolios and business ventures

              .columns.is-vcentered.feature
                .column.is-8.has-text-right
                  h3 Familiar city-building gameplay mechanics
                  | Overlay maps gives players the ability to highlight the high crime areas, low, middle, upper class residential populations, pollution, and location coverage of specific types of buildings
                .column.is-4
                  .feature-img-placeholder

    sp-footer

</template>

<script lang='coffee'>
import Header from '~/components/header-panel.vue'
import Footer from '~/components/footer-panel.vue'

export default
  components:
    'sp-header': Header
    'sp-footer': Footer
</script>

<style lang='sass' scoped>
$sp-primary: #6ea192
$sp-primary-bg: #395950
$sp-dark-bg: #2a453f

#application-body
  > div
    margin-right: 0

  .column
    &.is-6
      padding-right: 0

.banner
  color: #fff
  margin-bottom: 1.5rem
  text-align: center

  h1
    display: inline-block
    font-size: 6vw

  .starpeace-logo
    background-size: 4.4vw
    height: 4.4vw
    width: 4.4vw

  &.mobile
    h1
      font-size: 12vw

    .starpeace-logo
      background-size: 8.75vw
      height: 8.75vw
      width: 8.75vw

#sub-banner
  color: #fff
  margin-top: 2rem
  text-align: center

#demo-card
  background-color: $sp-primary-bg

  .card-content
    padding: 1rem

    img
      width: 100%

#demo-actions
  margin: 3rem 0

  a
    min-width: 10rem

#main-body-container
  background-color: #eee
  margin-bottom: 2rem
  padding-bottom: 2rem

  #main-body-banner
    margin-bottom: 4rem
    margin-top: 2rem
    text-align: center

    h2
      padding: 0 .5rem

    h3
      padding: 0 1rem

  .feature
    font-size: 1.2rem

  .feature-img-placeholder
    background-color: #ccc
    min-height: 10rem
</style>
