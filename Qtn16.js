let str = "MadaM";
let len = str.length;
let temp = 0;
for(let i=0;i<len/2;i++)
{
    if(str[i]!=str[len-i-1]){
        temp=1;
    }
}
if(temp==0)
{
    console.log("Palindrome");
}
else{
    console.log("Not palindrome");
}

