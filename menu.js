let menuIsOpen = false;

const toggleMenu = () => {
  const element = document.getElementsByClassName("navItems")[0]
  if(menuIsOpen === false) {
    element.classList.add("menuOpen")
    menuIsOpen = true;
  } else {
    element.classList.remove("menuOpen")
    menuIsOpen = false;
  }
}