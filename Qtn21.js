let arr = [100, 20, 31, 150, 39, 72]
let b = arr[0];
let c = arr[0];
for(let i=1; i<arr.length;i++){
    if(b<arr[i]){
        b=arr[i];
    }
        else if(c>arr[i]){
            c = arr[i];
        }
    }
        console.log(b);
        console.log(c);
    

