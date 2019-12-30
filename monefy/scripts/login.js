function showpass()
{
    var check = document.getElementById("checkbox").checked;
    if(check==true)
    {
        document.getElementById("password").type="text";
    }
    else
    {
        document.getElementById("password").type="password";
    }
}