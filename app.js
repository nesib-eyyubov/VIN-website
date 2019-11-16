document.getElementById('menu-btn').addEventListener('click', () => {
    const MenuStyle = document.getElementById('menu-btn').style;
    if (MenuStyle.color == 'white') {
        MenuStyle.color = 'red';
        document.querySelector('.menu-bar i').className = "fas fa-bars";
    } else {
        MenuStyle.color = 'white';
        document.querySelector('.menu-bar i').className = "fas fa-times";
    }


    let navStyle = document.querySelector('.responsive-navbar').style;
    if (navStyle.display == 'flex') {
        navStyle.display = 'none';

    }
    else {
        navStyle.display = 'flex';
        navStyle.animation = "anime-opening .2s linear";
    }

})


