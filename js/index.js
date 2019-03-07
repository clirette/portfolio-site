const [aboutLink, workLink, contactLink] = [...document.querySelectorAll('.links')];
const about = document.getElementById('about');
const work = document.getElementById('work');
const contact = document.getElementById('contact');

const links = [aboutLink, workLink, contactLink];

const switchCurrentLink = (e) => {
  e.preventDefault();
  links.forEach(link => link.classList.remove('current'));
  e.target.classList.add('current');
}

aboutLink.addEventListener('click', switchCurrentLink);
workLink.addEventListener('click', switchCurrentLink);
contactLink.addEventListener('click', switchCurrentLink);

const scroll = new SmoothScroll('a[href*="#"]');