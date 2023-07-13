let str = ["HTML", "CSS", "JAVA", "JS"]
let leng = str[0];
for(let i=1; i<str.length;i++){
    leng = leng + ',' + str[i];
}
console.log(leng);