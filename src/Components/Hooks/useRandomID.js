const useRandomID = (prefix) => {

  function random() {
    return prefix + Math.floor(Math.random() * Date.now())
  }

  return random;
}

export default useRandomID