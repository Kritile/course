let genderButton = document.querySelectorAll('.gender');
for (let i of genderButton){
    i.addEventListener('click',(e)=>{
        console.log(document.getElementById(e.target.classList[1]).checked)
       if(document.getElementById(e.target.classList[1]).checked){
        document.getElementById(e.target.classList[1]).checked = false
        e.target.classList.remove('active')
       }else{
        document.getElementById(e.target.classList[1]).checked = true
        e.target.classList.add('active') 
       }
       for(let j of document.querySelectorAll('[type="radio"]')){
           if(!j.checked){
            document.querySelector('.'+j.id).classList.remove('active')
                
           }
       }
       
    })
}