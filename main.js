
        let input  = prompt("Enter City ");
        document.querySelector('.userInput').innerHTML = input
        var temp = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=e02f93a3ef06f6d6e0563bf716805611`)
        // var temp = fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${input}&cnt=5&appid=d665c62c18e9b6b7723a986c6f3c83e1`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            console.log(data.main)

            let kel = data.main.temp;
            // let weat = data.weather.main;
            // let max = data.main.temp_max;
            // let min = data.main.temp_min;
            let cel = Math.floor(kel - 273.15);
            let fah = Math.floor(cel * 1.8 + 32);
            console.log(fah);
            document.querySelector('#dT1').innerHTML = fah 
            // document.querySelector('.weather1').innerHTML = fah 
            // document.querySelector('.dayTemp1').innerHTML = fah 
            // document.querySelector('.nightTemp1').innerHTML = fah 

        })
        
        
   