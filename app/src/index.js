<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/axios/dist/axios.min.js" id=axios></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"/>
    <title>Document</title>
    <style src= "/src/styles.css"></style>
  </head>

  <body>
    <div class="container mt-4 border border-info rounded">
      <form action="" class="row pt-3" id="form">
        <div class="col-9">
          <input
            type="text"
            id="search-input"
            class="form-control"
            placeholder="Type a city ..."
          />
          <div class="pt-4">
            <h1 class="text-secondary" id="location">London, UK</h1>
            <p id="date" class="text-secondary">Friday 10:47</p>
            <p id="weather" class="text-secondary">Partly Cloudy</p>
          </div>
        </div>
       
        <div class="col-3">
          <input
            type="submit"
            id="submit"
            class="form-control bg-primary text-white"
          />
          <button type="submit" id="search-bar" class="location">Current Location</button>
      </form>
     <div />
      <div class="row">
        <div class="col-6" id="cloud">
          <div>
            <h2>
              <i class="fa-solid fa-cloud-sun"></i>
              <span class="temp" id="temp"> </span
              ><sup class=""
                ><a href="#" id="to-celcius">°C </a>|<span class="text-primary">
                  <a href="#" id="to-fahenreit">°F</a></span
                ></sup
              >
            </h2>
          </div>
        </div>
        <div class="col-6">
          <p class="text-secondary">Precipitation: 20%</p>
          <p class="text-secondary">Humidity: 25%</p>
          <p class="text-secondary">Wind: 11 km/h</p>
        </div>
      </div>
    </div>
    <script
      src="https://kit.fontawesome.com/1a4d51a6f3.js"
      crossorigin="anonymous"
    ></script>
    <script src="/src/index.js"></script>
  </body>
</html>
