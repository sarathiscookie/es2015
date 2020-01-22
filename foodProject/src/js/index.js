import axios from 'axios';

async function getResult(query) {
    try {
        const result = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`); // Response is json response. Not need to use .json().
        console.log(result.data.recipes);

        // OR 
        /*const result = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
        const jsonResult = await result.json();
        console.log(jsonResult);*/
    }
    catch(error) {
        console.log(error);
    }
    
}

getResult('pizza');
