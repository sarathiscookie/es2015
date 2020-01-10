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
        function getTemprature(woeid) {
            const proxy = 'https://cors-anywhere.herokuapp.com/'; // To void CORS problem
            const url = `https://www.metaweather.com/api/location/${woeid}`;

            fetch(proxy + url)
                .then(result => {
                    return result.json();
                })
                .then(data => {
                    const today = data.consolidated_weather[0];
                    console.log(`Templerature in ${data.title} min temp: ${today.min_temp} and max temp: ${today.max_temp}`);
                })
                .catch(error => console.log(error));
        }

        // Passing world earth id.
        getTemprature(44418);
        getTemprature(2487956);
    </script>
</body>

</html>