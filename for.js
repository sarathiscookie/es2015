/**
 * Created by php on 11-Jan-18.
 */
console.log('Print all numbers b/w -10 and 19');

for (var i = -10; i <= 19; i++)
{
    console.log(i);
}
console.log('Print all even numbers b/w 10 and 40');

for (var i = 10; i <= 40; i += 2)
{
    console.log(i);
}

console.log('Print all odd numbers b/w 300 and 333');

for (var i = 300; i < 333; i++)
{
    if(i % 2 == 1){
        console.log(i);
    }

}

console.log('Print all numbers divisible by 5 and 3 b/w 5 and 50');

for (var i = 5; i <= 50; i++)
{
    if(i % 5 == 0 && i % 3 == 0)
    {
        console.log(i);
    }
}

