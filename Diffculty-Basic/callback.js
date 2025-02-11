function Add(...a) {                // it call the value from outdide of the declartion part
    let sum = 0;               
    for(let i of a)
    {
        sum+= i;
    }
    console.log(sum);
}

Add(5,6,4,3,2,1);
Add(44,8);
Add(45,51,25);

//output is the sum of all the digit is in the add function block 
