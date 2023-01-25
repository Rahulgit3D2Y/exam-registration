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
    else if (!/@gmail\.com$/.test(email)) 
    {
        // This is a gmail id.
        alert("enter a valid @gmail.com id")
    }
    else
    {
    if(age>=18 && age<=24)
    {
        registered()
    } 
    else
        notelegible()
    }

}
function registered()
{
    document.getElementById("registered").style.display="block"
    document.getElementById("exam-form").style.display="none"
    var city = [ "Agra","Goa","Assam","Bihar","Gujarat","Jharkhand","Karnataka","Kerala","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Chandigarh","Delhi"]
    const random = Math.floor(Math.random() * city.length);
    document.getElementById('span-fname').innerText=fname.value
    document.getElementById('span-lname').innerText=lname.value
    document.getElementById('span-email').innerText=email.value
    document.getElementById('span-age').innerText=age.value
    document.getElementById('span-center').innerText=city[random]
}
function notelegible()
{
    document.getElementById("notelegible").style.display="block"
    document.getElementById("exam-form").style.display="none"
    document.getElementById('n-age').innerText=age.value
}
function ret()
{
    document.getElementById("exam-form").style.display="block"
    document.getElementById("registered").style.display="none"
}
function nret()
{
    document.getElementById("exam-form").style.display="block"
    document.getElementById("notelegible").style.display="none"
}