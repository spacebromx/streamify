![AWS CodeBuild Status](https://codebuild.us-east-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoic3JmZ3MwSFVYRldBQVYxWkhxcnJMSVBvb2VSdXNHWWZQaVlaTERxQnV6cmtPTUk3OTcxMVRHNGZBckx5eVlTVlJYRmZBMlMzMVM4bTU1TnNzTm04VHRvPSIsIml2UGFyYW1ldGVyU3BlYyI6IitGMVFlSHcvaFRYMkwzdEkiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0=&branch=master)

# Streamify

This is a sample project that makes use of several tools and libraries. The main goal of this repo is to mix up all this tooling bundle and create a modern web app. It's more of an exercise rather than a guide.

## Tools and Libraries
Since there are a lot of tools out there, I chose what I have experience with. Probably there's a lot more out there but this stack made sense to me and got the job done.

- React with hooks and the *new* context API
- React Router
- The free [Deezer API](https://developers.deezer.com/api).
-  Fetch API and async/await for data fetching
-  Jest + Enzyme for unit testing
-  Cypress.io for end to end testing
-  yarn for package management
-  ParcelJS for bundling the code
-  ESLint, Prettier and Stylelint to keep the code nice and tidy

## Requirements

 - NodeJs ^12 ([download](https://nodejs.org/en/download/))
 - yarn  ^1.2 ([install](https://classic.yarnpkg.com/en/docs/install/#mac-stable))

## Scripts

There are a few scripts available inside the file `package.json`

### Bundling/Building

 - **yarn run dev**: Will compile the bundle and open a dev server in the port `1234`
 - **yarn run watch**: The same as the dev but with watch/hot reload enabled
 - **yarn run build**: Will create a bundle ready for production with minification and source maps enabled
 - **yarn run server**: Will run the express server to serve the static files and handle the routing
 - **yarn run start**: Will create a production ready bundle and open the express server in port `5000`

### Linting

 - **yarn run lint:js**: Will execute ESLint in all the js/jsx files
 - **yarn run lint:js:fix**: Same as above but will fix the issues that are auto-fixable
 - **yarn run lint:scss**: Will execute Stylelint in all the scss files
 - **yarn run lint:scss:fix**: Same as above but will fix the issues that are auto-fixable

### Testing

- **yarn run test:watch**: Will run Enzyme in watch mode

