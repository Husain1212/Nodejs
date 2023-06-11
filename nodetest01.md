### Question 1. Nodejs hum kyu use krte hain? Nodejs ke benefits?

```
Answer - Nodejs ek javascript ki liabrary h jo ki javascript pr based h.Nodejs ko hume data store karwane k liy or data ko import export karne h liy k use karte h.
Nodejs javascript k codes ko server pr run karwati h.or Nodejs carome ka V8 engine kam m leta h jo ki browser m na run ho kr server (carome v8 engine) pr excute hota h or v8 engine baki server(means javascript Engine) se fast h.or isko real time applicaion streaming m use kiya jata h.
```

### Question 2. Nodejs and JavaScipt me kya difference hai?

```
Nodejs javascript ki liabrary h to bahut kuch features node or javascipt m same h. but isme bahut se advance bhi h. jese ki...

001--Node js ko hum bowser k bahar bhi run karwa skte h but
javascript sirf browser pr hi run hoti h,
002-- node js fast or scalable h jo ki jarurat k hisab se iski size badhti jati h.pr javascript fast h pr scalable nhi h.
003 node js m bahut se code bne hote h jinko use kar skte h isme API create kar skte h or javascript m code ko karna hota h or isme API create nhi kar skte h.

```

### Question 3. Module kya hota hai ? Nodejs me module kitni trah se import kr skte hain ?

```
Answer - jab bhi  kisi bhi same code ko ek file se dusri file m bhejne k liy jo code ya feature use karte h use module kehte h.

Nodejs m module ko import k liy

first jo link nhi us file se export karenge or bad m
import variables ya function ka name or jis file se export kar rh h us file ka name:

import {functionName , VariablesName} from './other.js';

kisi bhi variable ya function k name ko change bhi kar skte h or new name se code ko run kar skte h isme koi bhi error nhi aayegi.

import {functionName as NewNAme } from './other.js';
const Module = require('./other.js');

defult se bhi import kar skte h lekin deault export import file m sirf ek bar hi kar skte h or isme variable ya function ko carlibrassage m nhi likhte h.
let age = 67;
export default age
import  age from './other.js';

import * as myalldata from './other.js';
console.log(myalldata.age,myalldata.moduleName.........)
```

### Question 4. Nodjes ke feature ke bare me likho.

```
Nodejs ka feature yhi h ki isko hum browser or server dono jgh use karb skte h.or real time striming k liy use hota h.
```

### Question 5. File System module ka kya use hai ?

```
Answer-- File system module server me file create, read, write, update, delete kar sakte hai.uske liy hum fs code se file m jo karna chahte h wo syntax use kar lenge.

const fs = require("fs");

const data = fs.readFileSync("input.txt", { encoding: "utf-8" });
console.log(data);
```

### Question 6. Encoding kya hoti hai ? UTF-8 encoding ke bare me btayen

```
Encoding kisi bhi langauge k syntax  ko change karne k liy use hoti h agr hum koi language likhte h or usko server pr run karte h to Encoding m kuch formate hote h jinmse ek UTF-8 h jo ki computer langauge m us syntax ko machine langauge m convert karta h.
```

### Question 7. Absolute and Relative path me kya differences hain?

```
Absolute path complete path/address hota kisi bhi file ya folder ka. jis se us data tk phuncha ja sakta hai jis ka path ya ek trh se address hai. absolute path ki help se us data tak pahuncha asan ho jata h.

Relative path means same folder m se koi bhi file hum access karna chahte h to uska path sirf us file ka name hoga na ki pura address hoga.
```

### Question 8. File and Folder me kya differnce hai ?

```
Answer -- File ek trh se data ya information ya collection of symbols ko store karne k liy use karte h.
File kisi bhi type m ho skti h jese text,image,documents etc

Folder ek teh se files ya folder ko store karne k liy use karte h. folder ka koi type nhi hota h isko sirf name se represent karte h jisme wo sabhi files ya folder hongi.
```

### Question 9. Differnce between callback and promise. Explain with example

```
Answer-- Callback -  callback means koi bhi function first() ko baneynge. to first() function m jab koi dusra function call karenge to wo callback process m aayega. mostly hum isko isliy kam m lete h ki jab hum koi kam kar rh to uske sath hum call back ki help se dusra code bhi daal ske or jese hi first() ka code complete hoga to jo callback function use kiya h wo function bhi excute ho jayega. or hume wait nhi karna padega.
or Callback functions ki jarurt hume isliy bhi hoti h kyuki y mostly asynchronous programming m use hote h.
Example:

```

function first(){
second()//callback function
console.log("first function run")
}
function second(){
console.log("callback function")
}
first()

```



Promise - promise hum javascript m use karte h. promise ka mtlb hota h wada iska wada y h ki koi bhi API apn n use ki to wo 2 function call karta h jo ki success() or reject() ka...isme kuch bhi ho wo API chlegi to sucess nhi to reject dono m se ek call hoga. jab bhi success wala call hoga to uske liy hum .then() use kar k value ko handle karenge or reject() wala call hoga to .then() k bad .catch() lga kr error ko handle karneg.
y 2 concept pr chlta h first - "Fullfill"
or second in "Rejected".
```

let prom = new Promise(function(success,reject)){
if(true){
success()
} else{
reject()
}
}
prom.then(function () {
console.log("Hello");
})
.catch(function () {
console.log("Error");
});

```

```

### Question 10. readFile and readFileSync me kya differences hain? Explain with example

```
readfile filesystem k file k data ko read karne k liy use kiya jata h or readfile humesha data ko buffer ki form deta h. y async ko support karti h. kyuki isme function ki help leni hoti h.

const fs = require('fs')
fs.readfile("input.txt",function())

```

```
readfileSync  filesystem k file k data ko read karta hai or readfileSync m Encoding syntax use karte h or encoding m UTF-8 syntax use karte h jo ki sabhi language ko support karta h or jo file m data hoga wohi data read karga or usi form m data dega.
y ek trh se sync ko support karta h.

const fs = require('fs')
const data = fs.readfilesync("filename" , {encoding: "UTF-8"});
console.log(data)

```

### Question 11. writeFile and writeFileSync me kya differences hain? Explain with example

```
writefile : filesystem m jo bhi file ko read krte h usko kisi duri file m writefile filesystem se write kr deta h. or agr jis file m write karna h to us file ka path de denge or file ka name de denge or agr file nhi hogi to wo file new create kar k usme data write kar dega.
```

```
writefileSync: y filesystem m jo data readfilesync kiya usme hum iski help se data daal denge. file ka name or jo bhi data dalna h wo type kar denge or data dusri file m write ho jayega.
```
