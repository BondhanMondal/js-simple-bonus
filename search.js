const products = [
    {name: 'iphone14', price: 70000},
    {name: 'samsung galaxy 14', price: 60000},
    {name: 'dell laptop', price: 50000},
    {name: 'lenovo laptop yoga', price: 55000},
    {name: 'asus afsus 14', price: 35000},
    {name: 'smart watch samsung', price: 7000},
    {name: 'apple watch', price: 20000},
    {name: 'plus one phone 4', price: 27000}
];

function searchProducts(products, searchtext){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchtext)){
            result.push(product);

            // console.log(product.name);

        }
    }
    return result;
}

const matched = searchProducts(products, 'phone');
console.log(matched);