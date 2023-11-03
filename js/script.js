window.onload = () => {
    let navlinks = Array(...document.querySelectorAll('a.nav-link'))
    for (navlink of navlinks){
        navlink.onclick = (e) => {
            let curr = document.querySelector('a.nav-link.active')
            curr.classList.remove('active')
            let icon = curr.nextElementSibling
            icon.remove()

            e.target.parentElement.appendChild(icon)
            e.target.classList.add('active')
            console.log(curr,icon)
        }
    }
    AOS.init({
        easing: 'ease-in-quad',
      });
}