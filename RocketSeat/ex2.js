function pares(x, y) {
    if(x > y) {
        let aux = x;
        x = y;
        y = aux;
    }

    while(x <= y) {
        if(x%2 == 0) console.log(x);
        x++;
    };
};

pares(32, 321);