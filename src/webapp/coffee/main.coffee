###
* main logic
###

$ ->
  # google analytics
  window.dataLayer = window.dataLayer || []
  gtag = () -> dataLayer.push(arguments)
  gtag('js', new Date())
  gtag('config', 'UA-120729341-1')
