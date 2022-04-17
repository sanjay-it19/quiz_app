const form=document.querySelector('form')
const correctAnswers=["A","A","B","B"];
const sanjay=document.querySelector('.sanj');
const icon=document.querySelector('.icon');
const submit=document.querySelector('.submit');

let submit_count=0;

form.addEventListener('submit',e =>{
 
  submit_count++;
  
  let score=0;
    e.preventDefault();
 const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
 console.log(userAnswers);

 userAnswers.forEach((answer,index) =>{

    

   if(answer===correctAnswers[index])
   {
    
    
    score+=25;
    

   }  
 });


 console.log(score);


 window.scrollTo(0,0);
 sanjay.setAttribute('style','display:block');


 let i=0;
 const anim=setInterval(()=>{
 
   
   sanjay.querySelector('span').textContent=`${i}%`;
   
   if(i===score)
   {
    clearInterval(anim);
    icon.setAttribute('style','display:block');


   }
   

    i++;
   
  
 },30);
 

 console.log(submit_count);

 if(submit_count>0)
 {
   submit.setAttribute('style','display:none');
 }

});


