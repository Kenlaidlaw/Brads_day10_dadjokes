// get required elements from html page
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
// add event lsitener to the button
jokeBtn.addEventListener('click', generateJoke)

generateJoke()  

// fetching the joke like asynchronous method
async function generateJoke(){
    
    const config = {
        headers: {
           'Accept' : 'application/json',
       },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    
    const data = await res.json()

    jokeEl.innerHTML = data.joke

}

// fetching the joke
// function generateJoke(){
    
//         const config = {
//             headers: {
//                'Accept' : 'application/json',
//            },
//         }

//         fetch('https://icanhazdadjoke.com', config)
//         .then(res => res.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke
//         })   
// }



