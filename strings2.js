function checkInput()
{
    var firstName = document.getElementById("fname").value;
    alert(firstName);
    var lastName = document.getElementById("lname").value;
    alert(lastName);
    var zipNumb = document.getElementById("zipNum").value;
    alert(zipNumb);

    var allName = firstName + " " + lastName;

    var len = allName.length;
    alert(len);
    var zip = document.getElementById("zipNum").value;
    alert(zip);

    if (len > 20)
    {
        document.getElementById("loginStatus").innerHTML="Invalid Name Length";
    }
    else if ((zip > 0) && (zip < 100000))
    {
        document.getElementById("loginStatus").innerHTML="Valid Length!";
        location.replace("strings3-2-2.html");
    }
    else
    {
        document.getElementById("loginStatus").innerHTML="Invalid Zip Code";
    }
}