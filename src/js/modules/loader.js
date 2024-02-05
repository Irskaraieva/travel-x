function loader () {
    const loader = document.querySelector('.loader-wrapper');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('loader-hide');
        }, 1000)
    })
}

export default loader;

