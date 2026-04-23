function checkHeatIndex() {

    let temp = parseFloat(document.getElementById("temp").value);
    let humidity = parseFloat(document.getElementById("humidity").value);

    let heatIndex = temp + (0.33 * humidity) - 4;

    let status = "";

    if (heatIndex <= 27) {
        status = "Comfortable / Cool";
    } else if (heatIndex <= 32) {
        status = "Warm";
    } else if (heatIndex <= 37) {
        status = "Hot";
    } else if (heatIndex <= 41) {
        status = "Very Hot / Caution";
    } else {
        status = "Extreme Heat / Danger";
    }

    document.getElementById("result").innerHTML =
        "Heat Index: " + heatIndex.toFixed(1) + "°C<br>Status: " + status;

    alert("Heat Index: " + heatIndex.toFixed(1) + "°C\nStatus: " + status);
}