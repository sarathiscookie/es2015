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
        	
        	let boxes = document.querySelectorAll('.box');
            let boxArray = Array.from(boxes);

            // Foreach
            /*boxArray.forEach(el => 
                el.style.backgroundColor = 'blue' 
                );*/

            for(const currentElement of boxArray) {
                if(currentElement.className.includes('blue')) {
                    currentElement.textContent = 'I am blue';
                }
                else {
                    currentElement.textContent = 'I am not blue';
                }
            }

            
        </script>
    </body>
</html>
