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
                
                return data; // Return data is promise.

            } catch (error) {
                console.log(error);
            }
        }

        // Passing world earth id.
        const tomorrow = getTemperature(2487956);
        
        tomorrow.then(data => {
            console.log(data);
        })
        .catch(error => console.log('Error'));
    </script>
</body>

</html>