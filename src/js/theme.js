const refs = {
   body: document.querySelector('body'),
   checkbox: document.querySelector('#theme-switch-toggle'),
};
 


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.checkbox.addEventListener('change', setClassList);
refs.checkbox.addEventListener('change', clickCheckbox);


function setClassList(e) {
  const check = refs.checkbox.checked;

  if (check) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

function clickCheckbox(e) {
   const check = refs.checkbox.checked;
   if (check) {
      localStorage.setItem('theme', Theme.DARK);
   } else {
      localStorage.removeItem('theme')
      localStorage.setItem('theme', Theme.LIGHT);
   }
}

const themeInLocal = localStorage.getItem('theme');


if (themeInLocal === Theme.DARK) {
   refs.body.classList.add(Theme.DARK);
  refs.checkbox.checked = true;
} else {
   refs.body.classList.add(Theme.LIGHT)
}

