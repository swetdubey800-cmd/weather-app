let btn = document.querySelector(".btn");
let input = document.querySelector(".userinput");
let msg = document.querySelector(".msg-box");
let resetBtn = document.querySelector(".reset-btn");

msg.classList.add("hide");

resetBtn.addEventListener("click", () => {
    input.value = "";              // input clear
    msg.innerText = "";            // msg clear
    msg.classList.add("hide");     // msg hide
});


btn.addEventListener("click", async () => {
    msg.classList.add("hide");
    let city = input.value.trim();

    if (city === "") {
        msg.classList.remove("hide");
        msg.innerText = "❗ Please enter city name";
        return;
    }

    msg.classList.remove("hide");
    msg.innerText = "⏳ Fetching weather...";

    try {
        let response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=eb2a5071d8a3408087592028253012&q=${city}&aqi=no`
        );

        let data = await response.json();

        msg.classList.remove("hide");

        msg.innerText = `
🌍 ${data.location.name}
🌡️ ${data.current.temp_c}°C
☁️ ${data.current.condition.text}
        `;
    } catch (error) {
        msg.innerText = "❌ City not found or network error";
    };



});
