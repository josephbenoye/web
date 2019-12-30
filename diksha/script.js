function code(){
    var id = document.getElementById("code").value;
    var value=id.toUpperCase();
    document.getElementById("link").innerHTML="Here is the link : https://diksha.gov.in/get/dial/"+id;
    document.getElementById("dikshalink").href="https://diksha.gov.in/get/dial/"+value;
}
/*function validate_required(field)
{
    with (field)
    {
        if (value==null||value=="")
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}
function validate_form(thisform)
{
    with (thisform)
    {
        if (validate_required(username)==false)
        {
            username.focus();
            document.getElementById("error").innerHTML="username and password must be filled!";
            return false;
        }
    }
}*/