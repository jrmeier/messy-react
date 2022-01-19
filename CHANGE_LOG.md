# Change Log
## Installation
- Run `npm audit` to check for vulnerabilities.
- run `npm audit fix` to fix the "easy" vulnerabilities.
- search the project for the dependencies, what is `web-vitals`?
- remove web-vitals from the dependencies, its not used anywhere and has issues.
- manually update dependencies to the latest version. (this gets down to 4 vunerabilities)
- update local node version to 16.13.2 (from 12.13.1)
- try to install, fails, lots of audit errors
- google search `npm audit fix` learn I want to avoid resolutions if possible (there might be an easier fix, these sound tricky)
- Google "react script vunerability" and see this [Github issue](https://github.com/facebook/create-react-app/issues/11174)
- move "react-scripts" to `devDependencies` in package.json, instead of `dependencies`
- delete `node_modules/` and `package-lock.json`
- `npm install` installs, no warnings we should be good
- `npm start` works, now to look at the cdoe

## Code
- refactor card js to use hooks and be functional
- notice I'm making a huge amount of requests and the app dies
- look at the code, see that `useEffect` is being call every time the page is re rendered, which triggers another request.
- cleaned up App.js
- improved search query performance
- refactored the api
- tested a api call


