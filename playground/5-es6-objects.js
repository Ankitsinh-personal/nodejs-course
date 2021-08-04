const product = {
        label : 'first label',
        price : 200,
        stock:2,
        salPrice: undefined
}

console.log(product);
const { label:pricelabel, price, rating = 5} = product;
// console.log(label);
console.log(pricelabel);
console.log(price);
console.log(rating);

//destructure the object  data.label  => { label }
const transaction = (type , {label , price}) =>
{
    console.log(type, label, price);
}

transaction('order', product)  //op = order value1 value2
// transaction('order')  op=>  throw error

//if set {}  => tr ansaction('order')  op= order undefine undefine
//if not pass object then it throw error  => we set default value {label ..} => {}
//set null object

//for normal param its value is undefine  but for object defin e {} 