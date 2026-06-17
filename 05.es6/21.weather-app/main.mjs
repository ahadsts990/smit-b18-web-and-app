async function get_weather(event) {
    event.preventDefault()
    const cityName = document.querySelector("#cityName").value
    const api_key = "a3f338eb00c448a728f0699e0d07c6a1"

    const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${api_key}&unit=metrics`
    )

    const kelvin = response.data.list[0].main.temp;
    const celsius = kelvin - 273.15;

    document.querySelector(".country").innerText = response.data.city.country
    document.querySelector(".temp").innerText = celsius.toFixed(1) + " °C"

    console.log(response.data.list[0].main)
}
