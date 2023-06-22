function Api()
{
 return fetch("http://localhost:1337/api/random-games?populate=*")
    .then(data=>{
        return data.json()
    })
}
export {Api}