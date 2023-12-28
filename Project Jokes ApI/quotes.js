async function fetchData(){


    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const record = await res.json().then(data => {
        const setup = data.setup;
        const punchline = data.punchline;
        console.log(data)
        document.getElementById("setup").innerHTML = setup
        document.getElementById("punchline").innerHTML = punchline

        
        
    })
    
    console.log(record)
}
fetchData();

