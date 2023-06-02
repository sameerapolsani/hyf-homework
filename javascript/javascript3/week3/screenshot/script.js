const BASE_URL = "http://crudcrud.com/api/${API_KEY}";
const inputUrl = document.querySelector(".input-url");
const captureScreenshotBtn = document.querySelector(
  ".capture-screenshot-button"
);
const showScreenshotBtn = document.querySelector(".show-screenshots-button");
const savedScreenshotContainer = document.querySelector(
  ".saved-screenshots-container"
);
const capturedScreenshotContainer = document.querySelector(
  ".capture-screenshots-container"
);
// user can enter Url captured screenshot
let screenshotUrlResponse = [];
const sessionId = sessionStorage.getItem("id");

const captureScreenshot = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5ce6df5082msh3a8b649d8520d83p1c0788js",
      "X-RapidAPI-Host": "website-screenshot6.p.rapidapi.com",
    },
  };
  try {
    const RapidAPI_BASE_URL = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${inputUrl.value}`;

    const request = await fetch(`${RapidAPI_BASE_URL}`, options);
    const response = await request.json();

    screenshotUrlResponse = response;
    capturedScreenshotContainer.innerHTML = `<img src="${screenshotUrlResponse.screenshotUrl}" width="50%"/>
                                              <button class="save-button" onclick="saveScreenshot(screenshotUrlResponse, sessionId)" >Save</button>`;
  } catch (error) {
    console.log(error);
  }
};
// save the screenshot
const saveScreenshot = async (screenshotUrlResponse, sessionId) => {
  const body = {
    imgURL: screenshotUrlResponse.screenshotUrl,
    sessionId: sessionId,
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(`${BASE_URL}/screenshots`, requestOptions);
    if (response.status == 201) {
      // 200 (should between 200 and 299)
      alert("save image succcessfully");
    }
  } catch (error) {
    alert("sorry,there was problem");
  }
};
// get all screenshots
const getAllScreenshots = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    console.log(data);
    const images = data.map((screenshot) => {
      return `<img src="${screenshot.imgURL}" width="200" height="200" style="margin: 1rem" />`;
    });
    capturedScreenshotContainer.innerHTML = "";
    savedScreenshotsContainer.innerHTML = images.join("\n");
  } catch (error) {
    console.error(error);
  }
};
const deleteScreenshot = async () => {
  try {
    const response = await fetch(`${BASE_URL}/screenshots`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};

captureScreenshotBtn.addEventListener("click", captureScreenshot);
showScreenshotBtn.addEventListener("click", getAllScreenshots);
