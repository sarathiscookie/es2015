<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>

    <script>
        async function getTemperature(woeid) {
            try {
                const proxy = 'https://cors-anywhere.herokuapp.com/'; // To void CORS problem
                const url = `https://www.metaweather.com/api/location/${woeid}`;

                const result = await fetch(proxy + url);
                const data = await result.json();
                const tomorrow = data.consolidated_weather[1];
                console.log(`Tomorrow temperature in ${data.title} min temp: ${tomorrow.min_temp} and max temp: ${tomorrow.max_temp}`);

            } catch (error) {
                console.log(error);
            }
        }

        // Passing world earth id.
        getTemperature(44418);
        getTemperature(2487956);
    </script>
</body>

</html>