# Portfolio version 2

Portfolio created as an individual project at Front End Developer education at [KYH](https://kyh.se/utbildningar/front-end-developer/) in Stockholm, Sweden. <br>
Requirements: To create a responsive portfolio that includes an API and is built using React
#

### Home
Uses [react-burger-menu](https://github.com/negomi/react-burger-menu) (Licence MIT) for the navigation bar on small devices.

### About
This section includes a quote that describes my mindset very well, and is animated with [react-typing-effect](https://github.com/lamyfarai/react-typing-effect).
![Demo of about section](./src/Media/readme/demo_about.gif?raw=true "About")

### Portfolio
The portfolio displays my projects and shows short information, techniques, links to live version and GitHub repository and the option to read more about each project (will be added soon). Flip animation made by [Alex Devero](https://codepen.io/alexdevero/pen/pRjNmW)

### Knowledge
Shows code skills, Treehouse achievements and IT related sections from my resume and link to full resume (will be added soon)

#### API
I decided to use the learning platform Treehouse's API to be able to display all the achievements I have there, which is both points within different areas and badges for different courses and skills. Treehouse stores each badge separate though and includes information for each badge about which course it belongs to. I decided to extract and display this information differently so that thebadges are grouped by course.

### Resume
*Will be added soon*

### Theme
A interactive section where the user can choose that theme and color pallet the application should be. Chosen theme is saved to local storage and is otherwise set to default. This also changes the image on the home page.

### Contact
Form to contact med, animated with [YOKO](https://tympanus.net/Development/TextInputEffects/index.html). (Not yet possible to send form, will be added soon)

#
## Upcoming features

#### Portfolio
* Detailed information about each project on separate page, easy to switch between projects and get back to main page. Detailed information about purpose, workflow, result and difficulties and demos.

#### Resume
* Full resume with posibility to filter on jobs, education, extra and type (such as IT)
* Skills and achievements that are displayed in *Knowledge* 
* Languages I speak
* Characteristics
* References
* Posibility to save/print resume

#### Theme
* Posibility to choose own color pallet with color picker
* Posibility to upload own picture to Home page
* Posibility to automatically extract color pallet from uploaded image

#### Contact
* Information in form is sent by email to me
* Confirmation message upon sent message

#

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
