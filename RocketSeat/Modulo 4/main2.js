axios.get('https://api.github.com/users/Plaisteixo-5')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });
