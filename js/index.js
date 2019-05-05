const [aboutLink, workLink, contactLink] = [...document.querySelectorAll('.links')];
const about = document.getElementById('about');
const work = document.getElementById('work');
const contact = document.getElementById('contact');
const scroll = new SmoothScroll('a[href*="#"]');

const links = [aboutLink, workLink, contactLink];

const switchCurrentLink = (e) => {
  links.forEach(link => link.classList.remove('current'));
  e.target.classList.add('current');
}

aboutLink.addEventListener('click', switchCurrentLink);
workLink.addEventListener('click', switchCurrentLink);
contactLink.addEventListener('click', switchCurrentLink);

aboutLink.addEventListener('touchstart', switchCurrentLink);
workLink.addEventListener('touchstart', switchCurrentLink);
contactLink.addEventListener('touchstart', switchCurrentLink);
