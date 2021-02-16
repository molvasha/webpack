export function changeTab(c, bodyElem, headerElem, activeBodyClass, activeHeaderClass) {
  bodyElem.querySelector('.' + activeBodyClass).classList.toggle(activeBodyClass);
  headerElem.querySelector('.' + activeHeaderClass).classList.toggle(activeHeaderClass);

  bodyElem.children[c].classList.toggle(activeBodyClass);
  headerElem.children[c].classList.toggle(activeHeaderClass);
}