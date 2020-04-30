## FE Technical Test

This techinal test has been implemented using React. In particular this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For the project has been used the following libraries
- React
- Axios ( for http request )
- Material UI ( as components library )
- React testing library and Enzyme ( for unit test )

## Consideration

### Images missing

For this test, I haven't be able to use the products images returned from API.
APi is returning a relative path for image, like `/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/electronics/cta023_tablets/200x310/cta023_2301.jpg` and I couldn't found out what the fullpath url was.
I tried using the API domani `https://demo01-live-api.salmon90.com/` but id didn't work.

So, to not be blocked by this, I used a placeholder image.

## Get started

In the project directory, run the following commands

### `npm install`

Install all the dependencies for the project


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />


### `npm run build`

Builds the app for production to the `build` folder.<br />
The build is minified and the filenames include the hashes.<br />


