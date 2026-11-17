export const useTheme = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwitcher = document.querySelector('[data-theme-switcher]');

  const themeTargetDataset = themeTarget.dataset;

  const theme = localStorage.getItem('theme') || 'dark';
  themeTargetDataset.theme = theme;

  themeSwitcher.checked = theme === 'dark';

  themeSwitcher.addEventListener('change', () => {
    if (themeTargetDataset.theme === 'light') {
      themeTargetDataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      themeTargetDataset.theme = 'light';
      localStorage.setItem('theme', 'light');
    }
  });
};
