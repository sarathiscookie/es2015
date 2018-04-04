/**
 * Created by php on 04-Apr-18.
 */
console.log("************ Normal foreach iteration *************");
var color = ["Green", "Yellow", "Orange", "Red"];
var colorValue = [];
color.forEach(function(color){
    var colorHtml = "Color is : "+color+ "<br/>";
    colorValue.push(colorHtml);
    console.log('********');
    console.log("Color is : "+color);
    console.log('********');
});
document.getElementById('arrayIteration').innerHTML = colorValue;

console.log("************ Foreach iteration using function *************");
function forEachIteration(color)
{
    console.log('********');
    console.log("Foreach iteration using function. Color is : "+color);
    console.log('********');
    var colorHtml = "Foreach iteration using function. Color is : "+color+ "<br/>";
    colorValue.push(colorHtml);
    document.getElementById('arrayIteration').innerHTML = colorValue;
}

color.forEach(forEachIteration);
