let forms = document.getElementById('form')
let button = document.getElementById('btn')
let test = document.getElementById('test')
let text1 = document.getElementById('text1')
let text2 = document.getElementById('text2')
let text3 = document.getElementById('text3')
let under = document.getElementById('under')
let points = 0
 
let valid = true
function getloan(){
     
     let creditHistory = document.getElementById('credit').value
     let date = document.getElementById('date').value
     let loanCollection = document.getElementById('collection').value
     let accounType = document.getElementById('Account_type').value
     let repaymentPeriod = document.getElementById('repayment').value
     let account = document.getElementById('current').value
     let loans = document.getElementById('loan').value
     let name = document.getElementById('name').value
     let name2 = document.getElementById('name2').value
     
     let aErr =document.getElementById('aErr')
     let bErr = document.getElementById('bErr')
     let cErr = document.getElementById('cErr')
     let dErr = document.getElementById('dErr')
     let eErr = document.getElementById('eErr')
     let fErr = document.getElementById('fErr')
     let gErr = document.getElementById('gErr')
     let hErr = document.getElementById('hErr')
     let jErr = document.getElementById('jErr')
 
     if(name === ""){
         aErr.innerHTML = 'First name can not be blank'
         valid = false
     }else{
         aErr.innerHTML = ""
     }
     
     if(account === ""){
         bErr.innerHTML = 'Field is empty'
          valid = false
     }else{
         bErr.innerHTML = ""
     }
     
     if(loans === ""){
         cErr.innerHTML = 'Field is empty'
          valid = false
     }else{
         cErr.innerHTML = ""
     }
     
     if(creditHistory === ""){
         dErr.innerHTML = 'Choose an option'
          valid = false
     }else{
         dErr.innerHTML = ""
     }
     
     if(date === ""){
         eErr.innerHTML = 'Field is empty'
          valid = false
     }else{
         eErr.innerHTML = ""
     }
     if(name2 === ""){
        fErr.innerHTML = "Last name can not be blanked"
        valid = false
     }else{
        fErr.innerHTML = ""
     }
     if(loanCollection === ""){
        gErr.innerHTML = "Select an option"
        valid = false
     }else{
        gErr.innerHTML = ""
     }if(repaymentPeriod === ""){
        hErr.innerHTML = "Select an option"
        valid = false
     }else{
        hErr.innerHTML = ""
     }if(accounType === ""){
        jErr.innerHTML = "Select an option"
        valid = false
     }else{
        jErr.innerHTML = ""
     }
   
// ** points scoring **//
   
     if(account > loans){
        points  += 10
        console.log(points)
    }else{
        points  -= 10
        console.log(points)
    
    }
   

    if(creditHistory <= 6){
        points  +=10
        console.log(points)
    }else{
        points -= 0
        console.log(points)
    }
    
    
    if(date < 30){
        points  += 5
        console.log(points)
    }else{
        points -= 0
        console.log(points)
    }
    
    
    if(accounType == 1){
        points  += 10
        console.log(points)
    }else if(accounType == 2){
        points  += 5
        console.log(points)
    }
    else{
        points +=0
        console.log(points)   
    }
    
    
    if(loanCollection > 6){
        points  += 10
        console.log(points)
    }else{
        points  -= 0
        console.log(points)
    }
    
    
    if(repaymentPeriod <= 6){
        points  += 5
        console.log(points)
    }else{
        points -= 0
        console.log(points)
        // document.getElementById('text1').innerHTML = "select repayment period"
    }

    if(points > 30 && valid == true){
        document.getElementById('span').innerHTML = "Loan Approved"
     }else if(valid === false){
         document.getElementById('span').innerHTML = ""
     }
    else{
        document.getElementById('span').innerHTML = "Loan Rejected"
    } 
}
   
  




    
    
    