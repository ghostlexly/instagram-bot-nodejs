# instagram-bot-nodejs

Publish comments on a instagram post automatically without any access to the instagram API.

## Install

Clone this repository

```
git clone https://github.com/ghostlexly/instagram-bot-nodejs.git
```

Install packages with Yarn.

```
yarn install
```

# Configure your app.mjs file constants

Open the file app.mjs and change the constants at the first lines of the file:

```mjs
const sessionId = "PUT_YOUR_SESSION_ID_HERE";
const XCsrfTokenHeader = "PUT_YOUR_XSRF_TOKEN_HERE";
const instaMediaID = "PUT_THE_MEDIA_OR_POST_ID_HERE";
```

You can get your `sessionId` and your `xCsrfToken` while monitoring the requests on instagram page, on Chrome or Firefox.

You can find the `InstaMediaID` in the url of the POST request when you add a comment on a media.

Example:

```
https://www.instagram.com/api/v1/web/comments/3132832564589512551/add/
```

The `InstaMediaID` for this media is 3132832564589512551.
