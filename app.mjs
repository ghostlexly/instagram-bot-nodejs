import axios from "axios";
import FormData from "form-data";

const sessionId = "PUT_YOUR_SESSION_ID_HERE";
const XCsrfTokenHeader = "PUT_YOUR_XSRF_TOKEN_HERE";
const instaMediaID = "PUT_THE_MEDIA_OR_POST_ID_HERE";

async function main() {
  let counter = 0;

  while (true) {
    await postComment().catch(console.error);
    counter++;
    console.log(`Commentaire posté ${counter} fois`);
    await sleep(60000);
  }
}

async function postComment() {
  const formData = new FormData();
  formData.append(
    "comment_text",
    `Je participe @julien_${generateRandomNumber(5)}.${generateRandomNumber(5)} @alex_${generateRandomNumber(
      5
    )}.${generateRandomNumber(5)} @adrien_${generateRandomNumber(5)}.${generateRandomNumber(5)}`
  );

  const cookies = Object.entries({
    sessionid: sessionId,
  })
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  await axios
    .post(`https://www.instagram.com/api/v1/web/comments/${instaMediaID}/add/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
        "X-Csrftoken": XCsrfTokenHeader,
        Cookie: cookies,
        ...formData.getHeaders(),
      },
    })
    .then((res) => {
      console.log(res.data);

      if (res.data.status !== "ok") {
        process.exit(1);
      }
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}

function generateRandomNumber(numDigits) {
  const min = Math.pow(10, numDigits - 1);
  const max = Math.pow(10, numDigits) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// call the main function
main();
