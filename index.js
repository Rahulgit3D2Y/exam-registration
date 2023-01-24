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
    var state = [ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry"]
    const random = Math.floor(Math.random() * state.length);
    document.getElementById('span-fname').innerText=fname.value
    document.getElementById('span-lname').innerText=lname.value
    document.getElementById('span-email').innerText=email.value
    document.getElementById('span-age').innerText=age.value
    document.getElementById('span-center').innerText=state[random]
}
function notelegible()
{
    document.getElementById("notelegible").style.display="block"
    document.getElementById("exam-form").style.display="none"
    document.getElementById('n-age').innerText=age.value
}