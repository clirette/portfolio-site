const [aboutLink, workLink, contactLink] = [...document.querySelectorAll('.links')];
const about = document.getElementById('about');
const work = document.getElementById('work');
const contact = document.getElementById('contact');

const scrollToDiv = (e) => {
  // console.log(`${e.target.innerText.toLowerCase()}`);
  const divToScrollTo = document.getElementById(e.target.innerText.toLowerCase());
  const y = divToScrollTo.offsetTop;
  console.log(divToScrollTo);
  window.scrollTo(0, y);
  // window.scrollTo = document.getElementById(`${e.target.innerText.toLowerCase()}`);
}

aboutLink.addEventListener('click', scrollToDiv);
workLink.addEventListener('click', scrollToDiv);
contactLink.addEventListener('click', scrollToDiv);