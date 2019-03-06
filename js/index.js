const [aboutLink, workLink, contactLink] = [...document.querySelectorAll('.links')];
const about = document.getElementById('about');
const work = document.getElementById('work');
const contact = document.getElementById('contact');

const links = [aboutLink, workLink, contactLink];

const scrollToDiv = (e) => {
  links.forEach(link => link.classList.remove('current'));
  e.target.classList.add('current');
  const divToScrollTo = document.getElementById(e.target.innerText.toLowerCase());
  const y = divToScrollTo.offsetTop;
  window.scrollTo(0, y);
}

aboutLink.addEventListener('click', scrollToDiv);
workLink.addEventListener('click', scrollToDiv);
contactLink.addEventListener('click', scrollToDiv);