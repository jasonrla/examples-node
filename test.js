//changes remotely - part3 I'm in the branch "Test"
function fizzbuzz(){
    for(let i=0; i<100; i++){
        let num=i;
        if(num%3 === 0 & num%5 === 0){
            num = 'fizzbuzz'
        }
        else if(num%3 === 0){
            num = 'fizz'
        }
        else if(num%5 === 0){
            num = 'buzz'
        }
        console.log("num test2 -> ", num)
    }
}

function isAnagram(str1, str2){
    
    for(element of str1){
        if( (str1.length === str2.length) && str2.includes(element)){
            return true
        }
    }
    return false
}

function fibonacciSequence(){
    sequence = [0, 1]

    for(let i=2; i<50; i++){
        const nextSequence = sequence[i-1] + sequence[i-2]
        sequence.push(nextSequence)
    }

    console.log(sequence)
    
}

function poligonArea(sides, base, height=0){
    if(sides == 3) console.log(base * height / 2)
    if(sides == 4 && height == 0) console.log(base*base)
    if(sides == 4 && height != 0) console.log(base*height)
}

const b = 10
const h = 20

function imageAspectRatio(resolution) {
    const [width, height] = resolution.split('*').map(Number);
    const gcd = greatestCommonDivisor(width, height);
    const aspectRatio = `${width / gcd}:${height / gcd}`;
    console.log(aspectRatio);
}

function greatestCommonDivisor(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function reverseArray(array){

    let newArray=[];
    for(let i=array.length-1; i>=0;i--){
        newArray.push(array[i])    
    }
    console.log(newArray)

    const newArray2 = array.reverse()
    console.log(newArray2)
}

function reverseString(str){
    let newStr = '';

    for(let i=str.length-1; i>=0; i--){
        newStr+=str[i]    
    }
    console.log(newStr)
}

function asteriskLadder(val){
    let result='';
    for(let i=0; i<val; i++){
        result+='*'
        console.log(result)
    }
}

function numberPiramid(val){
    let result='';
    for(let i=1; i<=val; i++){
        result=''
        for(let j=0; j<i; j++){
            result+=i.toString()
        }
        console.log(result)
    }
}

function factorial(num){
    let result=1;

    for(let i=1; i<=num; i++){
        result=result*i    
    }
    return result
}

var arr = [2, 3, 4, 5, 6, 2, 2, -9, 7, 8, -9, -2, -3, -4, -8, -9]

function computeClosestToZero(arr){
    let closest = arr[0]
    for(let i=0; i<arr.length; i++){
        if(Math.abs(arr[i]) < Math.abs(closest)){
            closest = arr[i]
        }
    }
    return closest
}

console.log(removeDuplicates(arr))

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

function computeSizeOnDisk(clusterSize, fileSize) {
    let clustersNeeded = Math.ceil(fileSize / clusterSize);
    return clustersNeeded * clusterSize;
}

function isAnagram(wordA, wordB) {
    const sortedWordA = wordA.toLowerCase().split('').sort().join('');
    const sortedWordB = wordB.toLowerCase().split('').sort().join('');

    return sortedWordA === sortedWordB;
}

//console.log(computeClosestToZero(arr))

//console.log(factorial(8))

//numberPiramid(15)

//asteriskLadder(15)

//reverseString('Hi everyone, how are you')

//reverseArray([2,5,7,2,1,1,5,0])

// imageAspectRatio('1920*1080')
// imageAspectRatio('1024*768')
// imageAspectRatio('800*600')

// poligonArea(3,b,h)
// poligonArea(4,b)
// poligonArea(4,b,h)

//fibonacciSequence()

//const bool = isAnagram('amor', 'romanos')
//console.log(bool)

//fizzbuzz()
