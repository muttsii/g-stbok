function submitForm(){
    console.log("debug");
    //debugger; 

    const namn = document.forms["guestbook"]["namn"].value;
    const epost = document.forms["guestbook"]["epost"].value;
    const telefon = document.forms["guestbook"]["telefon"].value;
    const meddelande = document.forms["guestbook"]["meddelande"].value;

    console.log(namn);
    console.log(epost);
    console.log(telefon);
    console.log(meddelande);

    //date

    const date = Date.now();
    console.log(date);
    const today = new Date(date);
    console.log(today);

    //posts
    var message = document.getElementById("message").innerHTML;

    message +=`
    ${namn}, (${epost})
    <br>
    ${telefon}
    <br>
    ${meddelande}
    <br>
    ${today.toUTCString()}
    <hr>
    `;

    document.getElementById("message").innerHTML = message;

    return false;
}