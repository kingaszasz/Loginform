var users = [{
        email: 'baratheon@got.com',
        password: 'baratheon'
    },
    {
        email: 'bolton@got.com',
        password: 'bolton'
    },
    {
        email: 'florent@got.com',
        password: 'florent'
    },
    {
        email: 'lennister@got.com',
        password: 'lennister'
    },
    {
        email: 'martell@got.com',
        password: 'martell'
    },
    {
        email: 'redwyne@got.com',
        password: 'redwyne'
    },
    {
        email: 'stark@got.com',
        password: 'stark'
    },
    {
        email: 'umber@got.com',
        password: 'umber'
    },
    {
        email: 'tully@got.com',
        password: 'tully'
    },
    {
        email: 'targaryen@got.com',
        password: 'targaryen'
    }
];



function ellenoriz() {
    var userName = document.querySelector("#user").value;
    var passUser = document.querySelector("#pass").value;
    var belepve = false;
    console.log(userName, passUser);

    if (userName == '' || passUser == '') {
        document.getElementById("error").innerHTML = "Meg kell adnod a felhasználóneved és jelszavad. "
    } else {
        for (var i in users) {
            if (users[i].email == userName && users[i].password == passUser) {
                document.getElementById("success").innerHTML = `Belépve ${users[i].email}`;
                belepve = true;
            }
        }
        if (belepve == false) {
            document.getElementById("success").innerHTML = `Hibás felhasználónév vagy jelszó.`
        }
    }
}