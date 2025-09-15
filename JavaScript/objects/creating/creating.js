 

let student = {
 name:"yogesh",
 age:"12",
 mobile:"2342934"
}
 
  for(let key in student){
    console.log(student[key]);
  }
  
 Object.values(student).forEach((ele)=>{
    console.log(ele);
 })
 
 Object.keys(student).forEach((key)=>{
    console.log(student[key]);
 })


  