// basic syntax ===============================================================
// types ======================================================================
// variables ==================================================================
// operators ==================================================================
// descision making ===========================================================
// loops ======================================================================
// functions ==================================================================
// numbers ====================================================================
// strings ====================================================================
// arrays =====================================================================
// tuples =====================================================================
// union ======================================================================
// interfaces =================================================================
// classes ====================================================================
// objects ====================================================================
// namespaces =================================================================
// modules ====================================================================
// ambients ===================================================================

var firstName:string = "Kubaa"
var message:string = "example"

var exampleName:string = 'exampleName'
var example_name = 'example_name'
var example1 = 'example1'

var exampleUndefined:string
var exampleValue = "example string"
var example

var exampleNumber:number = 18

// this is signle line comment

/*
    this is a
    multi-line comment
*/

console.log(firstName + ' - ' + message + ' - ' + exampleNumber + ' - ' + 'example text')

console.log(exampleName + ' - ' + example_name + ' - ' + example1)

class FirstClass {
    greet():void {
        console.log('Hello from FirstClass')
    }
}

var firstClassObject = new FirstClass();

firstClassObject.greet();

// ============================================================================

var gloablVariables = 14

class Numbers {
    numberVariable = 12
    static xlib = 10

    storeNumber():void {
        var localNumber = 16
    }
}

console.log('Global number ' + gloablVariables)
console.log('Class static value ' + Numbers.xlib)
var numbersObject = new Numbers()

console.log('Global class number ' + numbersObject.numberVariable)

var logicValue:boolean = false;
var number1:number = 8
var number2:number = 16
var number3:number

number3 = number1 * 2

console.log(number3 > 16 ? 'yes' : 'no')

// ============================================================================

var typeTestVariable1:number = 16;
var typeTestVariable2:string = 'string test value';

console.log(typeof typeTestVariable1)
console.log(typeof typeTestVariable2)

if (typeof typeTestVariable1 == 'string')
    console.log('type of typeTestVariable1 - number')
else
    console.log('type of typeTestVariable1 - other than number')

// ============================================================================

function displayEmailDetails(id:number, name:string, mail?:string) {
    console.log('id :' + id)
    console.log('name :' + name)

    if (mail != undefined)
        console.log('mail :' + mail)
}

displayEmailDetails(468, 'example email name 1')
displayEmailDetails(422, 'example email name 2', 'example@emial.io')

function exampleCalc(firstNumber:number, secondNumber:number = 240) {
    console.log(firstNumber * secondNumber)
}

exampleCalc(14000, 900000000)

function factorial(inputNumber:number) {
    if (inputNumber <= 0)
        return 1
    else
        return inputNumber * factorial(inputNumber -1)
}

console.log(factorial(10))

function disp(s1:string):void
function disp(n1:number, s1:string):void
function disp(x:any, y?:any):void {
    console.log(x)
    console.log(y)
}

disp("abc")
disp(1, "xyz")

// ==================== N U M B E R S =========================================

console.log('TypeScript Number Properties: ')
console.log('Maximum value that a number variable can hold: ' + Number.MAX_VALUE)
console.log('The least value that a number variable can hold: ' + Number.MIN_VALUE)
console.log('Value of Negative Infinity: ' + Number.NEGATIVE_INFINITY)
console.log('Value of Negative Infinity: ' + Number.POSITIVE_INFINITY)

var month = 0
if (month <= 0 || month > 12) {
    month = Number.NaN
    console.log('Month is ' + month)
} else {
    console.log('Value Accepted..')
}

function employee(id:number, name:string) {
    this.id = id
    this.name = name
}

var emp = new employee(124, 'example test')
employee.prototype.email = 'email@emaile.com'

console.log("Employee 's id : " + emp.id)
console.log("Employee 's name : " + emp.name)
console.log("Employee 's email : " + emp.email)

// ==================== S T R I N G S =========================================

var exampleString = new String('example');

console.log('charAt()')

console.log("str.charAt(0) is:" + exampleString.charAt(0)); 
console.log("str.charAt(1) is:" + exampleString.charAt(1)); 
console.log("str.charAt(2) is:" + exampleString.charAt(2)); 
console.log("str.charAt(3) is:" + exampleString.charAt(3)); 
console.log("str.charAt(4) is:" + exampleString.charAt(4)); 
console.log("str.charAt(5) is:" + exampleString.charAt(5));
console.log("str.charAt(5) is:" + exampleString.charAt(6));

console.log('charCodeAt()')

console.log("str.charCodeAt(0) is:" + exampleString.charCodeAt(0)); 
console.log("str.charCodeAt(1) is:" + exampleString.charCodeAt(1)); 
console.log("str.charCodeAt(2) is:" + exampleString.charCodeAt(2)); 
console.log("str.charCodeAt(3) is:" + exampleString.charCodeAt(3)); 
console.log("str.charCodeAt(4) is:" + exampleString.charCodeAt(4)); 
console.log("str.charCodeAt(5) is:" + exampleString.charCodeAt(5));
console.log("str.charCodeAt(5) is:" + exampleString.charCodeAt(6));

// ==================== A R R A Y S ===========================================
console.log('section - arrays')

var exampleArray:number[];

exampleArray = [111, 211, 311, 411, 511, 611, 711, 811, 911, 101, 112, 122, 133, 143]

console.log(exampleArray[0])
console.log(exampleArray[2])
console.log(exampleArray[4])
console.log(exampleArray[8])

var exampleArray2:number[] = [1, 2, 3, 4]

console.log(exampleArray2[0])
console.log(exampleArray2[3])

var exampleArray3:number[] = new Array(4)

for (let i = 0; i < exampleArray3.length; i++) {
    exampleArray3[i] = i * 2
    console.log(exampleArray3[i])
}

var exampleArray4:string[] = new Array("Mary","Tom","Jack","Jill")

for (let i = 0; i < exampleArray4.length; i++) {
    console.log(exampleArray4[i])
}

var exampleArray5:number[] = [12, 14]
var [x, y] = exampleArray5

console.log(x)
console.log(y)

var j:any
var nums:number[] = [1001, 1002, 1003, 1004]

for(j in nums) {
    console.log(nums[j])
}

// ==================== T U P L E S ===========================================
console.log('section - tuples')

var exampleTuple = [10, 'example tuple']

console.log(exampleTuple[0])
console.log(exampleTuple[1])

var emptyTuple = []

emptyTuple[0] = 112233
emptyTuple[1] = 343434

console.log(emptyTuple[0])
console.log(emptyTuple[1])

var exampleTuple2 = [10, 'hello', 'world', 'typescript']

console.log('Items before push ' + exampleTuple2.length)

exampleTuple2.push(188)

console.log('Items after push ' + exampleTuple2.length)
console.log('Items before pop ' + exampleTuple2.length)
console.log(exampleTuple2.pop() + ' popped from the tuple')
console.log('Items after pop ' + exampleTuple2.length)

// ==================== U N I O N =============================================
console.log('section - union')

var value:string|number

value = 14

console.log('numeric value of val ' + value)

value = 'this is a string'

console.log('string value of ' + value)

function displayUnion(name:string|string[]) {
    if (typeof name == 'string') {
        console.log(name)
    } else {
        var i;

        console.log(typeof name)

        for (let i = 0; i < name.length; i++) {
            console.log(name[i])
        }
    }
}

displayUnion('text')

console.log('Printing names array ... ')

displayUnion(['mark','tomm','mary','john'])

var unionArray:number[]|string[]
var i:number

unionArray = [1,2,4]

console.log('**numeric array**')

for (let i = 0; i < unionArray.length; i++) {
    console.log(unionArray[i])
}

unionArray = ['mumbai', 'pune', 'delhi']

console.log('**string array**')

for (let i = 0; i < unionArray.length; i++) {
    console.log(unionArray[i])
}

// ==================== I N T E R F A C E S ===================================
console.log('section - interfaces')

var person = {
    FirstName: 'Tom',
    LastName: 'Hanks',
    sayHello: () => {return 'Hello'}
}

interface ExampleInterface {
    firstName: string,
    lastName: string,
    sayHi: () => string
}

var customer:ExampleInterface = {
    firstName: 'Exampl',
    lastName: 'Last nm',
    sayHi: ():string => {return 'Hi there'}
}

console.log('Customer Object ')
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

interface RunOptions {
    program: string;
    commandline: string[]|string|(() => string)
}

var options:RunOptions = {
    program: 'test1',
    commandline: 'hello'
}

console.log(options.commandline)

options = {
    program: 'test1',
    commandline: ['hello', 'world']
}

console.log(options.commandline[0])
console.log(options.commandline[1])

options = {
    program: 'test1',
    commandline: () => {return "**hello world**"}
}

var fn:any = options.commandline

console.log(fn())

interface namelist {
    [index:number]:string
}

var list2:namelist = ['john', 'thom']

interface ages {
    [index:string]:number
}

var agelist:ages

agelist['name1'] = 18
agelist['name2'] = 22
agelist['name3'] = 26

// ====================  =============================================