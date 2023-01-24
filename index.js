function check()
{   
    var fname=document.getElementById('fname').value
    var lname=document.getElementById('lname').value
    var email=document.getElementById('email').value
    var age=document.getElementById('age').value
    if(!fname || !lname|| !email  || !age)
    {
        confirm('plz enter values in the fields')
    }
    else
    {
    if(age>=18 && age<=24)
        window.location.href="registered.html"
    else
        window.location.href="notelegible.html"
    }
}