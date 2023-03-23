const publicKey = "701bd02e8a69aae4dced97f6895bf32d";
const hash = "0a39f1c7bfeb29fd8678ecfbe9e710d5";
const apiUrl = 
  `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`

export default function CallApi(){

    fetch (apiUrl)
    .then((response) => response.json())
    .then((response) => {

      const personajes = response.data.results;
      for (const personaje in personajes){
        const {name, id, thumbnail} = personajes[personaje];
        const imgURL = (`${thumbnail.path}.${thumbnail.extension}<br/>`)
        return{imgURL,name,id}
      }
    })
    .catch(error => console.log(error));}

