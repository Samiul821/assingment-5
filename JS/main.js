// blog.html
document.getElementById("blog-page").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// Background random color
document
  .getElementById("random-color-btn")
  .addEventListener("click", function () {
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  });

function showCurrentDate() {
  const now = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[now.getDay()];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = months[now.getMonth()];

  const dayNumber = now.getDate();
  const year = now.getFullYear();

  const formattedDate = `${dayName},<br>${monthName} ${dayNumber} ${year}`;

  document.getElementById("current-date").innerHTML = formattedDate;
}

showCurrentDate();

// Task section
// // card 1
document.getElementById("card-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const button = document.getElementById("card-btn");
  const mainNumber = getInnerTextId("main-number");
  const pulsNumber = getInnerTextId("puls-number");
  const mobile = document.getElementById("mobile");
  const convertedMobile = mobile.textContent;
  let now = new Date();
  let n = now.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (mainNumber > 0) {
    const sum = mainNumber - 1;
    setInnerTextByIdandValue("main-number", sum);
    const puls = pulsNumber + 1;
    setInnerTextByIdandValue("puls-number", puls);

    const container = document.getElementById("activity-log");
    const p = document.createElement("p");
    p.innerHTML = `
      You have completed the task ${convertedMobile} at ${n}
      `;
    container.appendChild(p);

    button.disabled = true;
    button.style.backgroundColor = "#e0e0e0";
    button.style.color = "#a0a0a0";
    button.style.cursor = "default";

    alert("Board updated Successfull");
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
    let now = new Date();
    let n = now.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (mainNumber > 0) {
      const sum = mainNumber - 1;
      setInnerTextByIdandValue("main-number", sum);
      const puls = pulsNumber + 1;
      setInnerTextByIdandValue("puls-number", puls);

      const container = document.getElementById("activity-log");
      const p = document.createElement("p");
      p.innerHTML = `
      You have completed the task ${convertedDark} at ${n}
      `;
      container.appendChild(p);

      button.disabled = true;
      button.style.backgroundColor = "#e0e0e0";
      button.style.color = "#a0a0a0";
      button.style.cursor = "default";

      alert("Board updated Successfull");
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
    let now = new Date();
    let n = now.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (mainNumber > 0) {
      const sum = mainNumber - 1;
      setInnerTextByIdandValue("main-number", sum);
      const puls = pulsNumber + 1;
      setInnerTextByIdandValue("puls-number", puls);

      const container = document.getElementById("activity-log");
      const p = document.createElement("p");
      p.innerHTML = `
      You have completed the task ${convertedOptimize} at ${n}
      `;
      container.appendChild(p);

      button.disabled = true;
      button.style.backgroundColor = "#e0e0e0";
      button.style.color = "#a0a0a0";
      button.style.cursor = "default";

      alert("Board updated Successfull");
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
    let now = new Date();
    let n = now.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (mainNumber > 0) {
      const sum = mainNumber - 1;
      setInnerTextByIdandValue("main-number", sum);
      const puls = pulsNumber + 1;
      setInnerTextByIdandValue("puls-number", puls);

      const container = document.getElementById("activity-log");
      const p = document.createElement("p");
      p.innerHTML = `
      You have completed the task ${convertedEmoji} at ${n}
      `;
      container.appendChild(p);

      button.disabled = true;
      button.style.backgroundColor = "#e0e0e0";
      button.style.color = "#a0a0a0";
      button.style.cursor = "default";

      alert("Board updated Successfull");
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
    let now = new Date();
    let n = now.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (mainNumber > 0) {
      const sum = mainNumber - 1;
      setInnerTextByIdandValue("main-number", sum);
      const puls = pulsNumber + 1;
      setInnerTextByIdandValue("puls-number", puls);

      const container = document.getElementById("activity-log");
      const p = document.createElement("p");
      p.innerHTML = `
      You have completed the task ${convertedIntegrate} at ${n}
      `;
      container.appendChild(p);

      button.disabled = true;
      button.style.backgroundColor = "#e0e0e0";
      button.style.color = "#a0a0a0";
      button.style.cursor = "default";

      alert("Board updated Successfull");
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
    let now = new Date();
    let n = now.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (mainNumber > 0) {
      const sum = mainNumber - 1;
      setInnerTextByIdandValue("main-number", sum);
      const puls = pulsNumber + 1;
      setInnerTextByIdandValue("puls-number", puls);

      const container = document.getElementById("activity-log");
      const p = document.createElement("p");
      p.innerHTML = `
      You have completed the task ${convertedImproveJob} at ${n}
      `;
      container.appendChild(p);

      button.disabled = true;
      button.style.backgroundColor = "#e0e0e0";
      button.style.color = "#a0a0a0";
      button.style.cursor = "default";

      alert("Board updated Successfull");
    }
  });

// clear-history
document
  .getElementById("clear-history")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const activityLog = document.getElementById("activity-log");
    while (activityLog.firstChild) {
      activityLog.removeChild(activityLog.firstChild);
    }
  });
