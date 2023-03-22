//check if string contains something except whitespaces or Tabs
//returns Boolean
export function isStringEmpty(str) {
  return /^\s*$/.test(str);
}

//scroll to window`s top
export function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
