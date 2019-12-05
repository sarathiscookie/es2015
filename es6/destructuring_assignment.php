<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
	<script>
		const AVG_TEMPERATURES = {
			today: 77.5,
			tomorrow: 79
		};

		function getTempOfTmrw(avgTemperatures) {
			"use strict";
            
		    const {today: today, tomorrow: tempOfTomorrow} = avgTemperatures; // change this line
		    
		    return tempOfTomorrow;
        }

        console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
	</script>

</body>
</html>