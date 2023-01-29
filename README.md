
# starpeace-website

[![Build Status](https://travis-ci.org/starpeace-project/starpeace-website.svg)](https://travis-ci.org/starpeace-project/starpeace-website)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/starpeace-project/starpeace-website.svg)](https://github.com/starpeace-project/starpeace-website/stargazers)
[![Discord](https://img.shields.io/discord/449310464321650703.svg?logo=discord)](https://discord.gg/TF9Bmsj)

Website application for [STARPEACE](https://www.starpeace.io), including client launchpad, game feature information, and interface into gameplay documentation.

## Related Packages

* [starpeace-client-website](https://github.com/starpeace-project/starpeace-client-website) - Client website application for STARPEACE multiplayer economic simulation
* [starpeace-client-website-assets](https://github.com/starpeace-project/starpeace-client-website-assets) - Assets and gameplay resources for starpeace-client-website application
* [starpeace-documentation-website](https://github.com/starpeace-project/starpeace-documentation-website) - Documentation website for STARPEACE multiplayer economic simulation

## Official Documentation

Documentation for client gameplay can be found on the [STARPEACE documentation website](https://docs.starpeace.io).

## Roadmap

Development and gameplay roadmap can be found on the [STARPEACE client website](https://client.starpeace.io/release).

## Security Vulnerabilities

If you discover a security vulnerability within STARPEACE, please send an e-mail to security@starpeace.io or open a [GitHub issue](https://github.com/starpeace-project/starpeace-website/issues). All security vulnerabilities will be promptly addressed.

## Development

Local development can be accomplished in a few commands. The following build-time dependencies must be installed:

* [Node.js](https://nodejs.org/en/) javascript runtime and [npm](https://www.npmjs.com/get-npm) package manager
* [Grunt](https://gruntjs.com/) task manager

Retrieve copy of repository and navigate to root:

```
$ git clone https://github.com/starpeace-project/starpeace-website.git
$ cd starpeace-website
```

Install starpeace-website dependencies:

```
$ npm install
```

Build repository with npm command defined in package.json:

```
$ npm run generate
```

Local development with nuxt and interactive build can be started with a single command:

```
$ npm run dev
```

## Build and Deployment

After building repository, website is compiled into static resources within the ```/dist/``` folder. These resources should be served as static assets from web application and can be cached if desired.

## License

starpeace-website is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
