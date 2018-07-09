<template lang='haml'>
%no-ssr
  #application-container{'v-cloak':true}
    %sp-header{'v-bind:show_header_logo':'true'}
    #application-body
      .columns
        .column.is-6.is-offset-3
          #privacy-container.card
            .card-content
              %h2 Privacy Policy
              %h3 Your privacy is critically important to us.
              %p
                It is our policy to respect your privacy regarding any information we may collect while operating our
                website. This Privacy Policy applies to https://www.starpeace.io (hereinafter, 'us',
                'we', 'Website', or 'https://www.starpeace.io'). We respect your
                privacy and are committed to protecting personally identifiable information you may provide us through
                the Website.
              %p
                We have adopted this privacy policy ('Privacy Policy') to explain what information may be
                collected on our Website, how we use this information, and under what circumstances we may disclose the
                information to third parties. This Privacy Policy applies only to information we collect through the
                Website and does not apply to our collection of information from other sources.
              %p
                This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general
                rules and policies governing your use of our Website. Depending on your activities when visiting our
                Website, you may be required to agree to additional terms and conditions.
              %h3 Website Visitors
              %p
                Like most website operators, we collects non-personally-identifying information of the sort that web
                browsers and servers typically make available, such as the browser type, language preference, referring
                site, and the date and time of each visitor request. Our purpose in collecting non-personally identifying
                information is to better understand how our visitors use this website. From time to time, we may release
                non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the
                usage of its website.
              %p
                We also collects potentially personally-identifying information like Internet Protocol (IP) addresses
                for logged in users and for users leaving comments on https://www.starpeace.io. We only disclose logged in
                user and commenter IP addresses under the same circumstances that it uses and discloses
                personally-identifying information as described below.
              %h3 Gathering of Personally-Identifying Information
              %p
                Certain visitors to this Website choose to interact with Website in ways that require us to gather
                personally-identifying information. The amount and type of information that Website gathers depends
                on the nature of the interaction.
              %h3 Security
              %p
                The security of your Personal Information is important to us, but remember that no method of
                transmission over the Internet, or method of electronic storage is 100% secure. While we strive
                to use commercially acceptable means to protect your Personal Information, we cannot guarantee
                its absolute security.
              %h3 Advertisements
              %p
                Ads appearing on our website may be delivered to users by advertising partners, who may set cookies.
                These cookies allow the ad server to recognize your computer each time they send you an online
                advertisement to compile information about you or others who use your computer. This information
                allows ad networks to, among other things, deliver targeted advertisements that they believe will
                be of most interest to you. This Privacy Policy covers the use of cookies by Website and does not
                cover the use of cookies by any advertisers.
              %h3 Links To External Sites
              %p
                Our Service may contain links to external sites that are not operated by us. If you click on a third
                party link, you will be directed to that third party's site. We strongly advise you to review the
                Privacy Policy and terms and conditions of every site you visit.
              %p
                We have no control over, and assume no responsibility for the content, privacy policies or practices
                of any third party sites, products or services.
              %h3 Protection of Certain Personally-Identifying Information
              %p.content
                We disclose potentially personally-identifying and personally-identifying information only to our
                employees, contractors and affiliated organizations that
                %ol{type:'i'}
                  %li need to know that information in order to process it on our behalf or to provide website services, and
                  %li that have agreed not to disclose it to others
                Some of those employees, contractors and affiliated organizations may be located outside
                of your home country; by using website, you consent to the transfer of such information to them.
              %p
                We will not rent or sell potentially personally-identifying and personally-identifying information to anyone.
              %p
                Other than to its employees, contractors and affiliated organizations, as described above,
                we disclose potentially personally-identifying and personally-identifying information only
                in response to a subpoena, court order or other governmental request, or when we believes in
                good faith that disclosure is reasonably necessary to protect the property or rights of Website,
                third parties or the public at large.
              %p
                If you are a registered user of https://www.starpeace.io and have supplied your email address, we may
                occasionally send you an email to tell you about new features, solicit your feedback, or just keep
                you up to date with what's going on with our products. We primarily use our website to
                communicate this type of information, so we expect to keep this type of email to a minimum. If you
                send us a request (for example via a support email or via one of our feedback mechanisms), we reserve
                the right to publish it in order to help us clarify or respond to your request or to help us support
                other users.
              %p
                We takes all measures reasonably necessary to protect against the unauthorized access, use, alteration
                or destruction of potentially personally-identifying and personally-identifying information.
              %h3 Aggregated Statistics
              %p
                We may collect statistics about the behavior of visitors to its website. We may display this information
                publicly or provide it to others. However, we does not disclose your personally-identifying information.
              %h3 Cookies
              %p
                To enrich and perfect your online experience, Website uses 'Cookies', similar technologies and services
                provided by others to display personalized content, appropriate advertising and store your preferences
                on your computer.
              %p
                A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's
                browser provides to the website each time the visitor returns. Website uses cookies to help us identify
                and track visitors, their usage of https://www.starpeace.io, and their website access preferences. Website
                visitors who do not wish to have cookies placed on their computers should set their browsers to refuse
                cookies before using Website, with the drawback that certain features of Website may not function properly
                without the aid of cookies.
              %p
                By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and
                agree to our use of cookies.
              %h3 Privacy Policy Changes
              %p
                Although most changes are likely to be minor, we may change its Privacy Policy from time to time,
                and in our sole discretion. We encourages visitors to frequently check this page for any changes to
                its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will
                constitute your acceptance of such change.
              %h3 Credit
              %p
                Some of this policy was created with&nbsp;
                %a{href: 'http://policygen.com', target:'_blank'} policygen.com
    %sp-footer
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
  .columns
    margin-right: 0

    > .column
      padding-right: 0

h3
  margin-top: 2rem

h2
  + h3
    margin-top: .5rem

</style>
