function checkSpam(str) {
    var lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
   var palabra=prompt("escribe la palabra")
  document.write(checkSpam(palabra))
