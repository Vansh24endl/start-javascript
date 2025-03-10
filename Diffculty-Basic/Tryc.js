try 
{
  let Age = -5;
  if(Age < 0)
  {
    throw new error("Age can not be negative");
  }
    console.log("Age is valid");'
}catch(error)
{
  console.log("Error", error.msg);
}
