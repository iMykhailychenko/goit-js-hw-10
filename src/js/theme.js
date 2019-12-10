// switch themes
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// get info from local storage
const getThemeInfo = key => {
  try {
    const themeInfo = localStorage.getItem(key);
    return themeInfo === null ? Theme.LIGHT : themeInfo;
  } catch (err) {
    console.error('Get state error: ', err);
    return Theme.LIGHT;
  }
};

// remove and change class in body
const changeTheme = () => {
  document.body.classList.remove(Theme.LIGHT, Theme.DARK);
  document.body.classList.add(getThemeInfo('theme'));
};

// set correct checkbox position
const setCheckboxPosition = () => {
  const element = document.querySelector('.js-switch-input');
  getThemeInfo('theme') === Theme.DARK
    ? (element.checked = true)
    : (element.checked = false);
};

// click event
// set info to the local storage
const controller = {
  checkbox: document.querySelector('.js-switch-input'),
  lable: document.querySelector('.switch__label'),
  setTheme(theme) {
    localStorage.setItem('theme', theme);
    changeTheme();
  },
  switchThems() {
    this.lable.addEventListener('click', () => {
      this.checkbox.checked
        ? this.setTheme.call(this, Theme.LIGHT)
        : this.setTheme.call(this, Theme.DARK);
    });
  },
};

export { changeTheme, setCheckboxPosition, controller };
