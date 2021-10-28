import fetch from "node-fetch";
// const fetch = require("node-fetch");
// npm install node-fetch
fetch('https://api.thedogapi.com/v1/breeds')
    .then(r => r.json())
    .then((data) => {
    if(data ){
        
        let breeds = [];
        
        data.map(element => breeds.push(
            {
                id: element.id,
                name: element.name,
                temperament: element.temperament,
                life_span: element.life_span,
                height : element.height.metric,
                weight : element.weight.metric,
                image : {
                    id: element.image.id,
                    width: element.image.width,
                    height: element.image.height,
                    url: element.image.url
                }
            }
        ))

        // const breeds = {
        //     id: data[0].id
        // }
        console.log(breeds);

    } else {
        alert("Ciudad no encontrada");
    }
    });
