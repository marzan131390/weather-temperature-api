        //Display information into web page..
        function displayData(data) {
            let temperature = document.getElementById("temperature")
            let temperatureInfo = data.main.temp;
            temperature.innerText = temperatureInfo;
            let weatherForecast = document.getElementById('weather-forecast');
            let forecastInfo = data.weather[0].description;
            weatherForecast.innerText = forecastInfo;
            let weatherImg = document.getElementById("image");
            let imageUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            // let img = document.createElement("img");
            weatherImg.setAttribute("src", imageUrl);
            // weatherImg.appendChild(img);
            // let changeImg = document.getElementById("image");
            // changeImg.innerHTML = img;
            
        }

        //Load All Data From External Server by API...
        function loadDataFromExternalServer() {
            let inputField = document.getElementById("input-field");
            let city = inputField.value;
            let cityName = document.getElementById("city-name");
            cityName.innerText = city;
            let myKey = "bc7772b0ea1f03991a94552720c5a8e3";
            //External Server Link 
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}&units=metric`;
            //External Server load from Fetch API...
            fetch(url)
            .then(response => response.json())
            .then(data => displayData(data));
            inputField.value = "";
        };
        // loadDataFromExternalServer;
        let searchBtn = document.getElementById('search-btn');
        searchBtn.addEventListener("click", loadDataFromExternalServer);