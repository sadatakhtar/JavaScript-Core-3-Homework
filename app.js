window.addEventListener('load', () =>{
    let long;
    let lat;
    let tempDescription = document.querySelector('.temperature-description');
    let tempDegree = document.querySelector('.temperature-degree');
    let timeZone = document.querySelector('.location-timezone');
    let district = document.getElementById('region');
    let countryEl = document.getElementById('country');
    let weatherImage = document.getElementById('weatherIcon');
    let tempSection = document.querySelector('.temperature-degree');
    let tempSpan = document.querySelector('#span');
    let areaEl = document.getElementById('area');
    
    


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
        
            const api = `http://api.weatherstack.com/current?access_key=29176e89ec4d51e256f6f9a141358863&query=
            ${lat}, ${long}`;

            fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data => {
                    const {temperature, weather_descriptions, weather_icons} = data.current;
                    const {timezone_id, region, country, name} = data.location;

                    //set DOM elements from the API
                    tempDegree.textContent = temperature;
                    tempDescription.textContent = weather_descriptions;
                    timeZone.textContent = `${timezone_id}`;
                    district.textContent = region;
                    countryEl.textContent = country;
                    weatherImage.src = weather_icons;
                    areaEl.textContent = name;
                   
                    //FORMULA FOR CELSIUS
                    let celsius = (temperature * (9/5)) + 32;

                    //CHANGE TEMP TO CELSIUS/FARENHEIT
                    tempSection.addEventListener('click', () => {
                        if(tempSpan.textContent === "F"){
                            tempSpan.textContent = "C";
                            tempDegree.textContent = `${temperature}`;
                        }else{ 
                            tempSpan.textContent = "F";
                            tempDegree.textContent = Math.floor(celsius);
                        }
                    });
  
                })
                .catch(err => {
                    console.log('error!!');
                    console.error(err);
                })
        });   

    }
});