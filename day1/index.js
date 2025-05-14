// console.log("5" + 2 + 3);
// console.log(2 + 3 + "4");
// console.log("2"-4)
// console.log("2"*4)
// console.log("8"/4)
// console.log("8"-"4")
// console.log(9/0)
// console.log(0/0)
// console.log("asdasd"-232)
// console.log('A'+2)
// console.log('A'-2)
// console.log("5"==5)
// console.log("5"===5)

var a=[1,2,3,4,5,7,8,9];
for(var i=0;i<a.length;i++){
    setTimeout(()=>{
        console.log(a[i]);
    },2000)
}