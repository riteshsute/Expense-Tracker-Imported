
product = (a,b) => {
    return(a*b)
}

const add = product(10,20)
console.log(add)

const Student = {
    name: 'harsh',
    age: 20,
    intro() {
        console.log('hi, I am '+ this.name)
    }
}

Student.intro();


const fruits = ['apple', 'oranges' , ' ', 'mango', '' , 'lemon']

console.log(fruits.map(fruit => fruit == '' ? 'Empty string' : fruit))


const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

	let { key1, key3}  = obj1

	

	key1 = 20;

	key3 = 123

	console.log(obj1.key1, obj1.key3)



async function toBePrint(){
    
    console.log('a');

    console.log('b');

    const msg1 = await new Promise((res,rej) => {
        setTimeout(() => (res('c')), 3000)
    })
    console.log(msg1)

    const msg2  = await new Promise((res,rej) =>{
        setTimeout(() => (res('d')), 0)
    })
    console.log(msg2);

    console.log('e');
}

toBePrint()

