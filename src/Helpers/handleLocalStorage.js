function getLocalStorage(key, noKeyRegistered) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key))
  } else {
    return noKeyRegistered;
  }
}

function setLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item))
}

export { getLocalStorage, setLocalStorage };
