function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }
  document.write(truncate("quiero decir algo acerca de este tema:",20))