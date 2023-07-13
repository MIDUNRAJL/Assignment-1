let str = "I'm learning javascript basics.";
let c =[];
let b = '';
let i=0;
while(i<str.length){
    b = b+str[i];
    if(str[i]==" " || str[i]==".")
    {
        c.push(b);
        b = '';
    }
    i++;
}
console.log(c);
    