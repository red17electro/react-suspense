# React Suspense 🔀

> Improving UX with a faster, more predictable app.

👋 hi there! My name is [Kent C. Dodds](https://kentcdodds.com)! This is a
workshop repo to teach you the fundamentals of React's (EXPERIMENTAL)
[concurrent mode](https://reactjs.org/concurrent). This feature enables React to
make your app faster out of the box and it comes along with a few features that
you can use to improve your app's user experience (most notably the concept of
"Suspense").

<div align="center">
  <a href="https://epicreact.dev">
    <h2>EpicReact.Dev</h2>
    <img
      width="500"
      alt="Learn React from Start to Finish"
      src="https://kentcdodds.com/images/epicreact-promo/er-1.gif"
    />
  </a>
</div>

<hr />

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![AppVeyor Build Status][win-build-badge]][win-build]
[![GPL 3.0 License][license-badge]][license]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## ⚠️ Warning ⚠️

This workshop material deals with **EXPERIMENTAL** features in React. Please do
not copy/paste any of the code you find here into a production application and
expect it to work. Even when the features are released they may not work the
same as demonstrated in this workshop material.

That said, the concepts in this workshop will very likely be applicable when
these features are stable, so enjoy the workshop!

## Pre-Workshop Instructions/Requirements

In order for us to maximize our efforts during the workshop, please complete the
following things to prepare.

- 📺 only necessary if the workshop is remote via Zoom
- 👋 specific to the material for this workshop

- [ ] Setup the project (follow the setup instructions below) (~5 minutes)
- [ ] 📺 Install and setup [Zoom](https://zoom.us) on the computer you will be
      using (~5 minutes)
- [ ] 📺 Watch
      [Use Zoom for KCD Workshops](https://egghead.io/lessons/egghead-use-zoom-for-kcd-workshops)
      (~8 minutes).
- [ ] Watch
      [Setup and Logistics for KCD Workshops](https://egghead.io/lessons/egghead-setup-and-logistics-for-kcd-workshops)
      (~24 minutes). Please do NOT skip this step.
- [ ] Install the React DevTools
      ([Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
      (recommended),
      [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/))
- [ ] Watch Dan Abramov's talk
      [Beyond React 16 | JSConf Iceland 2018](https://www.youtube.com/watch?v=nLF0n9SACd4)
      (33 minutes)
- [ ] Go through my
      [Learn React Hooks Workshop](https://kentcdodds.com/workshops/hooks), or
      have the equivalent basic experience of using hooks. You should be
      experienced with `useState`, `useEffect`, and `useRef`.
- [ ] Go through my
      [Advanced React Hooks Workshop](https://kentcdodds.com/workshops/advanced-react-hooks),
      or have the equivalent experience. You should be experienced with
      `useContext` and `useReducer` (experience with `useMemo` and `useCallback`
      is a bonus).

The more prepared you are for the workshop, the better it will go for you.

## Workshop Outline

Here are the concepts we'll be covering:

- Opting into React Concurrent Mode
- Thinking in Suspense
- The fundamentals of "suspending"
- Structuring `<React.Suspense />` components with fallbacks
- Using `useTransition`
- Refactor an existing async interaction to suspense
- The difference between the three data-fetching approaches:
  - Fetch-on-Render (not using Suspense)
  - Fetch-Then-Render (not using Suspense)
  - Render-as-You-Fetch (using Suspense)
- Using `<React.SuspenseList />` to coordinate multiple suspending components

## System Requirements

- [git][git] v2 or greater
- [NodeJS][node] v10 or greater
- [npm][npm] v6 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```
git clone https://github.com/kentcdodds/react-suspense.git
cd react-suspense
npm run setup --silent
```

This may take a few minutes. **It will ask you for your email.** This is
optional and just automatically adds your email to the links in the project to
make filling out some forms easier If you get any errors, please read through
them and see if you can find out what the problem is. If you can't work it out
on your own then please [file an issue][issue] and provide _all_ the output from
the commands you ran (even if it's a lot).

You may be able to work through the entire workshop in the browser. Go to
[this codesandbox](https://codesandbox.io/s/github/kentcdodds/react-suspense)
and you should be good to go. Note that sometimes people have trouble with
codesandbox not working quite right with tests, but you should be able to work
around that. If you're concerned, then it would probably be better to just set
things up locally.

## Running the app

To get the app up and running (and really see if it worked), run:

```shell
npm start
```

This should start up your browser. If you're familiar, this is a standard
[react-scripts](https://create-react-app.dev/) application.

You can also open
[the deployment of the app on Netlify](https://react-suspense.netlify.app/).

## Running the tests

```shell
npm test
```

This will start [Jest](https://jestjs.io/) in watch mode. Read the output and
play around with it. The tests are there to help you reach the final version,
however _sometimes_ you can accomplish the task and the tests still fail if you
implement things differently than I do in my solution, so don't look to them as
a complete authority.

## Workshop Outline

> React Suspense Workshop 🔀

👋 I'm Kent C. Dodds

- 🏡 Utah
- 👩 👧 👦 👦 👦 🐕
- 🏢 kentcdodds.com
- 🐦/🐙 @kentcdodds
- 🏆 testingjavascript.com
- 🥚 kcd.im/egghead
- 🥋 kcd.im/fem
- 💌 kcd.im/news
- 📝 kcd.im/blog
- 📺 kcd.im/devtips
- 💻 kcd.im/coding
- 📽 kcd.im/youtube
- 🎙 kcd.im/3-mins
- ❓ kcd.im/ama

### Schedule

- 😴 Logistics
- 💪 Simple Data-fetching
- 😴 10 Minutes
- 💪 Render as you fetch
- 💪 useTransition for improved loading states
- 🌮 30 Minutes
- 💪 Cache resources
- 💪 Suspense Image
- 😴 10 Minutes
- 💪 Suspense with a custom hook
- 💪 Coordinate Suspending components with SuspenseList
- ❓ Q&A

### Questions

Please do ask! Interrupt me. If you have an unrelated question, please ask on
[my AMA](https://kcd.im/ama).

### Zoom (for remote workshops)

- Help us make this more human by keeping your video on if possible
- Keep microphone muted unless speaking
- Breakout rooms

### Exercises

- `src/exercise/00.md`: Background, Exercise Instructions, Extra Credit
- `src/exercise/00.js`: Exercise with Emoji helpers
- `src/__tests__/00.js`: Tests
- `src/final/00.js`: Final version
- `src/final/00.extra-0.js`: Final version of extra credit

The purpose of the exercise is **not** for you to work through all the material.
It's intended to get your brain thinking about the right questions to ask me as
_I_ walk through the material.

### Helpful Emoji 🐨 💪 🏁 💰 💯 🦉 📜 💣 👨‍💼 🚨

Each exercise has comments in it to help you get through the exercise. These fun
emoji characters are here to help you.

- **Kody the Koala Bear** 🐨 will tell you when there's something specific you
  should do
- **Matthew the Muscle** 💪 will indicate what you're working with an exercise
- **Chuck the Checkered Flag** 🏁 will indicate that you're working with a final
  version
- **Marty the Money Bag** 💰 will give you specific tips (and sometimes code)
  along the way
- **Hannah the Hundred** 💯 will give you extra challenges you can do if you
  finish the exercises early.
- **Olivia the Owl** 🦉 will give you useful tidbits/best practice notes and a
  link for elaboration and feedback.
- **Dominic the Document** 📜 will give you links to useful documentation
- **Berry the Bomb** 💣 will be hanging around anywhere you need to blow stuff
  up (delete code)
- **Peter the Product Manager** 👨‍💼 helps us know what our users want
- **Alfred the Alert** 🚨 will occasionally show up in the test failures with
  potential explanations for why the tests are failing.

## Disclaimers

1. React Concurrent Mode is experimental
2. I've never shipped Concurrent Mode to production, and you shouldn't either
   (yet)
3. React Suspense is a particularly primitive API and we're still working out
   good abstractions for it
4. I've been informed that the API for suspending _will change_ before the
   stable release (don't worry though, the concepts are solid)
5. I will probably say "I don't know" as a response to your questions sometimes

## Workshop Feedback

Each exercise has an Elaboration and Feedback link. Please fill that out after
the exercise and instruction.

At the end of the workshop, please go to this URL to give overall feedback.
Thank you! https://kcd.im/rs-ws-feedback

## Contributors

Thanks goes to these wonderful people
([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;" alt=""/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/kentcdodds/react-suspense/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/kentcdodds/react-suspense/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kentcdodds/react-suspense/commits?author=kentcdodds" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/Hypnosphi"><img src="https://avatars3.githubusercontent.com/u/6651625?v=4" width="100px;" alt=""/><br /><sub><b>Filipp Riabchun</b></sub></a><br /><a href="https://github.com/kentcdodds/react-suspense/commits?author=Hypnosphi" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/lauchness"><img src="https://avatars0.githubusercontent.com/u/51837850?v=4" width="100px;" alt=""/><br /><sub><b>lauchness</b></sub></a><br /><a href="https://github.com/kentcdodds/react-suspense/commits?author=lauchness" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind welcome!

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[yarn]: https://yarnpkg.com/
[build-badge]: https://img.shields.io/travis/kentcdodds/react-suspense.svg?style=flat-square&logo=travis
[build]: https://travis-ci.org/kentcdodds/react-suspense
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/kentcdodds/react-suspense/blob/master/README.md#license
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/react-suspense/blob/master/CODE_OF_CONDUCT.md
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/kentcdodds/react-suspense/issues/new
[win-build-badge]: https://img.shields.io/appveyor/ci/kentcdodds/react-suspense.svg?style=flat-square&logo=appveyor
[win-build]: https://ci.appveyor.com/project/kentcdodds/react-suspense
<!-- prettier-ignore-end -->
