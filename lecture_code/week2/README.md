# Week 2: React Native Intro

## About me

Dennis Gann (d.gann@unsw.edu.au)

- Software Engineer @ Canva
- Ex-Atlassian iOS Engineer - Jira Native Apps
- UNSW Software Engineering Alum
- COMP4511 Guest Lecturer 20T3 & 21T3, Ex-CSE Tutor

## About these lectures

- Wednesday 11am-1pm
- Practical 'live coding' - feel free to follow along
- Start (if any) & end state pushed to Gitlab repo (https://gitlab.cse.unsw.edu.au/COMP4511/22T3)
- Ask questions & engage
- Let me know what you want to see/explore

## Today's aims

- React native & expo intro ✅
- Setting up development environment ✅
- Running app on phone and/or simulator/emulator ✅
- Simple one page app ✅
- Native (core) components ✅
- Basic styling with stylesheets ✅

## React

- Open source JS library used to create UIs
- Build encapsulated & reusable **components**, then compose them to build complex UIs
- Declarative - design views for each state in application and React will efficiently update when data changes

## React Native

- Build native apps for iOS/iPadOS and Android with components
- JSX --> Native UI through **bridge**, which enables asynchronous communication between RN JS runtime and native environment/elements
- Good performance since multi-threaded unlike other JS frameworks (WebView)
- Many apps built in React Native https://reactnative.dev/showcase

![](https://reactnative.dev/docs/assets/diagram_ios-android-views.svg)

<table>
  <thead>
    <tr>
      <th>React Native UI Component</th>
      <th>Android View</th>
      <th>iOS View</th>
      <th>Web Analog</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>&lt;View&gt;</code></td>
      <td><code>&lt;ViewGroup&gt;</code></td>
      <td><code>&lt;UIView&gt;</code></td>
      <td>A non-scrollling <code>&lt;div&gt;</code></td>
      <td>
        A container that supports layout with flexbox, style, some
        touch handling, and accessibility controls
      </td>
    </tr>
    <tr>
      <td><code>&lt;Text&gt;</code></td>
      <td><code>&lt;TextView&gt;</code></td>
      <td><code>&lt;UITextView&gt;</code></td>
      <td><code>&lt;p&gt;</code></td>
      <td>
        Displays, styles, and nests strings of text and even handles
        touch events
      </td>
    </tr>
    <tr>
      <td><code>&lt;Image&gt;</code></td>
      <td><code>&lt;ImageView&gt;</code></td>
      <td><code>&lt;UIImageView&gt;</code></td>
      <td><code>&lt;img&gt;</code></td>
      <td>Displays different types of images</td>
    </tr>
    <tr>
      <td><code>&lt;ScrollView&gt;</code></td>
      <td><code>&lt;ScrollView&gt;</code></td>
      <td><code>&lt;UIScrollView&gt;</code></td>
      <td><code>&lt;div&gt;</code></td>
      <td>
        A generic scrolling container that can contain multiple
        components and views
      </td>
    </tr>
    <tr>
      <td><code>&lt;TextInput&gt;</code></td>
      <td><code>&lt;EditText&gt;</code></td>
      <td><code>&lt;UITextField&gt;</code></td>
      <td><code>&lt;input type="text"&gt;</code></td>
      <td>Allows the user to enter text</td>
    </tr>
  </tbody>
</table>

## Expo

- Tooling for RN to help develop, build, deploy & quickly iterate
- No need for Xcode (& Apple Developer account) or Android Studio
- We'll use the CLI and Client
- Some limitations: Not all native APIs available yet, can't add native bridge modules, ...
- Solution: `expo eject` - ejecting from managed workflow

# Let's get setup & coding!

Requirements:

- Node.js LTS release (https://nodejs.org/en/)
- Git (https://git-scm.com/)
- Code Editor (VS Code recommended)
- `git --version && node -v && npm -v`

To get started run: `npx create-expo-app my-app`

## Useful Resources (links)

- Environment setup: https://reactnative.dev/docs/environment-setup
- iOS Simulator: https://docs.expo.io/workflow/ios-simulator/
- Android Studio Emulator: https://docs.expo.io/workflow/android-studio-emulator/
- React Core Components: https://reactnative.dev/docs/components-and-apis
- React fundamentals: https://reactnative.dev/docs/intro-react
- Tutorial:
  1. First steps: https://docs.expo.dev/tutorial/planning/
  2. Styling text: https://docs.expo.dev/tutorial/text/
  3. Adding an image https://docs.expo.dev/tutorial/image/
  4. Creating a button https://docs.expo.dev/tutorial/button/
