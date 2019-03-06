const [aboutLink, workLink, contactLink] = [...document.querySelectorAll('.links')];
const about = document.getElementById('about');
const work = document.getElementById('work');
const contact = document.getElementById('contact');

const scrollToDiv = (e) => {
  const divToScrollTo = document.getElementById(e.target.innerText.toLowerCase());
  const y = divToScrollTo.offsetTop;
  window.scrollTo(0, y);
}

aboutLink.addEventListener('click', scrollToDiv);
workLink.addEventListener('click', scrollToDiv);
contactLink.addEventListener('click', scrollToDiv);