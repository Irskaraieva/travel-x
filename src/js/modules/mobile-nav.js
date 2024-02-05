function mobileNav() {
    const navMobBtn = document.getElementById('nav-mob-btn');
    const navWrapper = document.querySelector('.mob-nav-wrapper');
    const nav = document.getElementById('mob-nav');
    const mobTwitter = document.querySelector('.mob-socials');


    mobTwitter.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('no-scroll');
            navMobBtn.classList.remove('active');
            navWrapper.classList.remove('mob-nav-wrapper-open');
            nav.classList.remove('mob-nav-active');
        })
    });

    navMobBtn.onclick = (e) => {
        e.stopPropagation();
        document.body.classList.toggle('no-scroll');
        navMobBtn.classList.toggle('active');
        navWrapper.classList.toggle('mob-nav-wrapper-open');
        nav.classList.toggle('mob-nav-active');
        if (document.body.classList.contains('no-scroll')) {
            // nav.style.display = 'flex';
            navWrapper.classList.add('mob-nav-wrapper-open');
        } else {
            // nav.style.display = 'none';
            navWrapper.classList.remove('mob-nav-wrapper-open');
       
        }

    };
}

export default mobileNav;

