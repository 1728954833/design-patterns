function inherit(sub, sup) {
    sub.prototype.__proto__ = sup.prototype
}

function superClass(name, age) {
    this.name = name
    this.age = age
    this.family = ['father', 'mother']
}
superClass.prototype.n = [1, 2, 3]
superClass.prototype.say = function () {
    console.log(`I am father my name is ${name} <-> my age is ${age}`)
}

function subClass(name, age, hobby) {
    superClass.call(this, name, age)
    this.hobby = hobby
}

subClass.prototype.sayChild = function () {
    console.log(`I am child my name is ${name} <-> my age is ${age} <-> my hobby is ${hobby}`)
}

inherit(subClass, superClass)

const f = new superClass()
const c = new subClass()
f.n.push(4)
console.dir(c, f)


Object.prototype.mix = function (...arguments) {
    arguments.forEach(argument => {
        Object.keys(argument).forEach(key => {
            this[key] = argument[key]
        })
    });
}

const obj = {
    age: 18
}

obj.mix({ name: 'm' })

console.log(obj)