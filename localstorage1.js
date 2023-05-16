function test()
{
    var NAME = document.getElementById("name").value;
    var EMAIL= document.getElementById("email").value;
    var PHONE = document.getElementById("phone").value;

    //STORING DATA TO LOCAL STORAGE

    var username = localStorage.setItem("NAME",NAME);
    var useremail = localStorage.setItem("EMAIL",EMAIL);
    var username = localStorage.setItem("PHONE",PHONE);
}
