const form = document.querySelector("form");
const search = document.querySelector("#search");
const wheather = document.querySelector(".wheather-data");
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

form.addEventListener("submit", (event) => {
  //   console.log(search.value);
  const city = search.value;
  apiData(city);
  event.preventDefault();
});

const apiData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showWheather(data);
};

const showWheather = (data) => {
  console.log(data);
  if (data.cod == "404") {
    wheather.innerHTML = `<h2> City Not Found <h2>`;
    return;
  } else if (data.cod == "200") {
    wheather.innerHTML = `<h2>${data.main.temp} ℃</h2>
    <h4>${data.name},${data.sys.country}</h4>
      <h4>${data.weather[0].description}</h4>`;
    return;
  } else {
    wheather.innerHTML = `<h2>Some error occur</h2>`;
  }
};
