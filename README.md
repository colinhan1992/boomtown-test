Hello,

This is my submission for the BoomTownROI coding assessment. The requirements were as follows:

**NOTE: Jared mentioned on the phone that any language was acceptable to complete the project in so I went and built a simple react app that fulfills the requirements**

### Technical Assessment

Using the GitHub API and PHP, pull top-level details for the BoomTownROI organization at:

https://api.github.com/orgs/boomtownroi

From the top-level organization details result object, complete the following:

1. Output Data:

- Follow all urls containing "api.github.com/orgs/BoomTownROI" in the path, and for responses with a 200 status code, retrieve and display all 'id' keys/values in the response objects. For all non-200 status codes, give some indication of the failed request.

HINT: Devise a way for the end user to make sense of the id values, related to the original resource route used to retrieve the data.

2. Perform Verifications:

- On the top-level BoomTownROI organization details object, verify that the 'updated_at' value is later than the 'created_at' date.- On the top-level details object, compare the 'public_repos' count against the repositories array returned from following the 'repos_url', verifying that the counts match.

HINT: The public repositories resource only returns a default limit of 30 repo objects per request.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Running the code

In the project directory, you can run:

### `npm install`

This will install all project dependencies

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```

```
