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
    const name = true;

    let promiseResult = new Promise( function( resolve, reject) {
        if(name === true) {
            resolve('I am true');
        }
        else {
            reject('I am false');
        }
    });

    console.log(promiseResult);

    promiseResult.then(function(value) {
        console.log(value);
    });

    promiseResult.catch(function(error) {
        console.log('error');
    });
</script>
</body>
</html>