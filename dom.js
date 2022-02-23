const  ham = document.querySelector('.ham')
const nav = document.querySelector('.linksnav')
const getlink = document.querySelector('form')
const input = document.querySelector('input')
const result = document.querySelector('.result')
const resultforres = document.querySelector('.resultforres')

ham.addEventListener('click', ()=>{

  ham.classList.toggle('active');
  nav.classList.toggle('show')

})



const update = async(link)=>{
  const short_link = await short(link)
  return short_link;

  
}





input.addEventListener('keyup', e=>{
  e.preventDefault();
 
  if (getlink.link.value.includes('.com')){
    input.style.border ='3px solid green'

    

  }else{
    input.style.border = '3px solid red';
    

  }

  

})
getlink.addEventListener('submit',e=>{
  e.preventDefault();


   
  const link=getlink.link.value.trim();
  getlink.reset();
  update(link)
  .then(data=> updateUI(data))
  .catch(err=> console.log(err))
 
  
 
  const updateUI = async(data) =>{

    console.log(data)
    if(data.ok === true){
      // result.style.display='block'
      
      const shortt = data.result;
      
     
      // const orgin=`${shortt.original_link}`;
      // original.textContent+=orgin;

      // const newlink = `${shortt.short_link}`
      // shortlink.textContent+=newlink;
      

    
    
   
  
      const html=`
      <div class="resultflex">
  
      <div class="mainlink">
       <p> ${shortt.original_link}</p>
      </div>
      <div class="shortlink">
      <a href="${shortt.original_link}" target="_blank" class="shorttt">${shortt.short_link}</a>
      <button class="copy">${copy}</button>
      </div>
      </div>
    
      `
    //   const link = document.querySelector('.shorttt')
    // console.log(link.textContent)
    //   link.setAttribute("href",`${shortt.short_link}`)
      

      
      result.innerHTML+=html;
      resultforres.innerHTML+=html
  // console.log(shortt.short_link)

  
  
  
  }else{
    
    alert(data.error)
    
  }
   
  
}
  
  

})



const button = document.querySelector('.copy')
const shortlink = document.querySelector('.shorttt')


  button.addEventListener('click',()=>{
    button.textContent = 'Copied!';
    button.style.background = 'hsl(257, 27%, 26%)';
    console.log('success')
 
    navigator.clipboard.writeText(shortt.original_link).then(()=>{
   
  })
  })

//   navigator.clipboard.writeText(copied).then(() => {
//     button.textContent = 'Copied!';
//     button.style.background = 'hsl(257, 27%, 26%)';
//   });
// });
// console.log("Success")


