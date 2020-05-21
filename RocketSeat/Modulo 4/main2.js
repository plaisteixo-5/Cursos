// var minhaPromise = function () {
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET','https://api.github.com/users/plaisteixo-5')
//         xhr.send(null);

//         xhr.onreadystatechange = function() {
//             if(xhr.readyState === 4){
//                 if(xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText))
//                 } else {
//                     reject('erro na requisição')
//                 }
//             }
//         }
//     })
// }

axios.get('https://api.github.com/users/plaisteixo-5')
.then(function(response) {
    console.log(response)
})
.catch(function(erro) {
    console.warn(erro)
});