### html file

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="index.js" type="module"></script>
</body>
</html>
```

### export file other.js

```
export function getData(){
    console.log("Taiyab husain")
}

export let myName = "index file h"

export function sum(a,b){
 console.log(a+b)
}


export let a = "hello1"
export let b = "hello2"
export let c = "hello3"
export let d = "hello4"
export let e = "hello5"
export let f = "hello6"


const age = 56;
const name = "husain"

export default age;

```

### import index.js

```
import {getData} from "./other.js"

getData();

import { myName } from "./other.js"
console.log(myName)

import { myName as dusraName} from "./other.js"
console.log(dusraName)

import {sum as add} from "./other.js"
add(10,30)

import *as alldata from "./other.js"

console.log(alldata.a,alldata.b,alldata.e)

import otherAge from "./other.js"

console.log(otherAge)


```
