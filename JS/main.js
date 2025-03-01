// Background random color
document
  .getElementById("random-color-btn")
  .addEventListener("click", function () {
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  });

// Task section
// card 1
document.getElementById("card-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const button = document.getElementById("card-btn");
  const mainNumber = getInnerTextId("main-number");
  const pulsNumber = getInnerTextId("puls-number");
  const mobile = document.getElementById("mobile");
  const convertedMobile = mobile.textContent;

  if (mainNumber > 0) {
    const sum = mainNumber - 1;
    setInnerTextByIdandValue("main-number", sum);
    const puls = pulsNumber + 1;
    setInnerTextByIdandValue("puls-number", puls);

    const container = document.getElementById("activity-log");
    const p = document.createElement("p");
    p.innerHTML = `
      You have completed the task ${convertedMobile} at 
      `;
    container.appendChild(p);

    button.disabled = true;
    button.style.backgroundColor = "#e0e0e0";
    button.style.color = "#a0a0a0";
    button.style.cursor = "default";
  }
});

// card2
document
  .getElementById("card-btn2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const button = document.getElementById("card-btn2");
    const mainNumber = getInnerTextId("main-number");
    const pulsNumber = getInnerTextId("puls-number");
    const dark = document.getElementById("dark");
    const convertedDark = dark.textContent;

    if (mainNumber > 0) {
      const sum = mainNumber - 1;
      setInnerTextByIdandValue("main-number", sum);
      const puls = pulsNumber + 1;
      setInnerTextByIdandValue("puls-number", puls);

      const container = document.getElementById("activity-log");
      const p = document.createElement("p");
      p.innerHTML = `
      You have completed the task ${convertedDark} at 
      `;
      container.appendChild(p);

      button.disabled = true;
      button.style.backgroundColor = "#e0e0e0";
      button.style.color = "#a0a0a0";
      button.style.cursor = "default";
    }
  });

// card3
document
  .getElementById("card-btn3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const button = document.getElementById("card-btn3");
    const mainNumber = getInnerTextId("main-number");
    const pulsNumber = getInnerTextId("puls-number");
    const optimize = document.getElementById("optimize");
    const convertedOptimize = optimize.textContent;

    if (mainNumber > 0) {
      const sum = mainNumber - 1;
      setInnerTextByIdandValue("main-number", sum);
      const puls = pulsNumber + 1;
      setInnerTextByIdandValue("puls-number", puls);

      const container = document.getElementById("activity-log");
      const p = document.createElement("p");
      p.innerHTML = `
      You have completed the task ${convertedOptimize} at 
      `;
      container.appendChild(p);

      button.disabled = true;
      button.style.backgroundColor = "#e0e0e0";
      button.style.color = "#a0a0a0";
      button.style.cursor = "default";
    }
  });

// card4
document
  .getElementById("card-btn4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const button = document.getElementById("card-btn4");
    const mainNumber = getInnerTextId("main-number");
    const pulsNumber = getInnerTextId("puls-number");
    const emoji = document.getElementById("emoji");
    const convertedEmoji = emoji.textContent;

    if (mainNumber > 0) {
      const sum = mainNumber - 1;
      setInnerTextByIdandValue("main-number", sum);
      const puls = pulsNumber + 1;
      setInnerTextByIdandValue("puls-number", puls);

      const container = document.getElementById("activity-log");
      const p = document.createElement("p");
      p.innerHTML = `
      You have completed the task ${convertedEmoji} at 
      `;
      container.appendChild(p);

      button.disabled = true;
      button.style.backgroundColor = "#e0e0e0";
      button.style.color = "#a0a0a0";
      button.style.cursor = "default";
    }
  });

// card5
document
  .getElementById("card-btn5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const button = document.getElementById("card-btn5");
    const mainNumber = getInnerTextId("main-number");
    const pulsNumber = getInnerTextId("puls-number");
    const integrate = document.getElementById("integrate");
    const convertedIntegrate = integrate.textContent;

    if (mainNumber > 0) {
      const sum = mainNumber - 1;
      setInnerTextByIdandValue("main-number", sum);
      const puls = pulsNumber + 1;
      setInnerTextByIdandValue("puls-number", puls);

      const container = document.getElementById("activity-log");
      const p = document.createElement("p");
      p.innerHTML = `
      You have completed the task ${convertedIntegrate} at 
      `;
      container.appendChild(p);

      button.disabled = true;
      button.style.backgroundColor = "#e0e0e0";
      button.style.color = "#a0a0a0";
      button.style.cursor = "default";
    }
  });
// card6
document
  .getElementById("card-btn6")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const button = document.getElementById("card-btn6");
    const mainNumber = getInnerTextId("main-number");
    const pulsNumber = getInnerTextId("puls-number");
    const improveJob = document.getElementById("improve-job");
    const convertedImproveJob = improveJob.textContent;

    if (mainNumber > 0) {
      const sum = mainNumber - 1;
      setInnerTextByIdandValue("main-number", sum);
      const puls = pulsNumber + 1;
      setInnerTextByIdandValue("puls-number", puls);

      const container = document.getElementById("activity-log");
      const p = document.createElement("p");
      p.innerHTML = `
      You have completed the task ${convertedImproveJob} at 
      `;
      container.appendChild(p);

      button.disabled = true;
      button.style.backgroundColor = "#e0e0e0";
      button.style.color = "#a0a0a0";
      button.style.cursor = "default";
    }
  });
