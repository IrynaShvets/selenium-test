require("chromedriver");
const { Builder, By } = require("selenium-webdriver");

(async function example() {
  let driver = new Builder().forBrowser("chrome").build();

  await driver.get(
    "https://a2zpay247.news/ireland-vs-afghanistan-rain-stopped-play-before-a-ball-was-bowled-no-toss/"
  );

  let element = driver.findElement(By.css("div"));

  let image = await element.findElements(By.css("div>img"));
  for (let e of image) {
    console.log(await e.getAttribute("src"));
  }
  let title = await element.findElements(By.css("div>h2"));
  for (let e of title) {
    console.log(await e.getText());
  }
  let text = await element.findElements(By.css("div>p"));
  for (let e of text) {
    console.log(await e.getText());
  }
})();
