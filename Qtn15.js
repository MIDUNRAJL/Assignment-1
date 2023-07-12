let pinCode = "50gf00";
if(pinCode.length == 6 && pinCode[0] == "5")
{
    for(let i=0;i<pinCode.length;i++)
    {
        if(pinCode[i]=="0")
        {
            console.log("Valid");
            break;
        }
    }
}