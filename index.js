function check()
{   
    var fname=document.getElementById('fname').value
    var lname=document.getElementById('lname').value
    var email=document.getElementById('email').value
    var age=document.getElementById('age').value
    
    if(!fname || !lname  || !age)
    {
        alert('plz enter values in the fields')
        
    }
    if (!/@gmail\.com$/.test(email)) 
    {
        // This is a gmail id.
        alert("enter a @gmail.com id")
    }
    else
    {
    if(age>=18 && age<=24)
        window.location.href="registered.html"
    else
        window.location.href="notelegible.html"
    }
}