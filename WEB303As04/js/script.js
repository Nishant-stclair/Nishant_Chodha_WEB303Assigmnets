/*
    Assignment #4
    {Nishant Chodha}
*/

function calcDistance(lat1, lon1, lat2, lon2) {
    const radiusOfEarth = 6371000;
    const toRadians = degrees => degrees * Math.PI / 180;
    const φ1 = toRadians(lat1);
    const φ2 = toRadians(lat2);
    const Δφ = toRadians(lat2 - lat1);
    const Δλ = toRadians(lon2 - lon1);
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (radiusOfEarth * c);
}

$(function () {
    const storedLocation = JSON.parse(localStorage.getItem("userLocation"));
    navigator.geolocation.getCurrentPosition(position => {
        const currentLat = position.coords.latitude;
        const currentLon = position.coords.longitude;
        $("#locationhere").text(`Your current location: Latitude ${currentLat}, Longitude ${currentLon}`);
        if (storedLocation) {
            const distance = calcDistance(currentLat, currentLon, storedLocation.latitude, storedLocation.longitude);
            $("header").text("Welcome back to the page!");
            $("#distance").text(`You traveled ${distance} meters since your last visit.`);
        } else {
            $("header").text("Welcome to the page for the first time!");
        }
        localStorage.setItem("userLocation", JSON.stringify({ latitude: currentLat, longitude: currentLon }));
    });
});


