<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Section 7: Get Ready for the Future: ES6 / ES2015</title>
        
        <style>
            .box {
                width: 200px;
                padding: 25px 80px;
                text-align: center;
                font-size: 30px;
                margin-top: 30px;
            }
            
            .green { background-color: green; }
            .blue { background-color: dodgerblue; }
            .orange { background-color: orangered; }
            
        </style>
        
    </head>

    <body>
        <h1>Arrays Forloop Continue Break</h1>
        
        <div class="box green"></div>
        <div class="box blue"></div>
        <div class="box orange"></div>

        
        <script>
        	// Foreach
        	var boxes = document.querySelectorAll('.box');
            var boxArray = Array.prototype.slice.call(boxes);
            boxArray.forEach(function(el) {
            	el.style.backgroundColor = "violet";
            });

            // Before enable break and continue code, please disable foreach code.
            // Break
            /*for(var i = 0; i < boxArray.length; i++) {
            	if(boxArray[i].className === 'box blue') {
            		boxArray[i].style.backgroundColor = "yellow";
            		break;
            	}
            }*/
            
            // Continue
            /*for(var i = 0; i < boxArray.length; i++) {
            	if(boxArray[i].className !== 'box blue') {
            		boxArray[i].style.backgroundColor = "violet";
            		continue;
            	}
            }*/
        </script>
    </body>
</html>
