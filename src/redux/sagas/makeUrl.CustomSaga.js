const makeUrlFunction = (array, querySelector) => {
  let urlString = `?`;
  if (querySelector === "and") {
    array.forEach(chip => {
      urlString += `${chip}=true&and=true&`;
    });
    urlString = urlString.slice(0, -10);
  } else if (querySelector === "or") {
    array.forEach(chip => {
      urlString += `${chip}=true&or=true&`;
    });
    urlString = urlString.slice(0, -9);
  } else {
    array.forEach(chip => {
      urlString += `${chip}=true&`;
    });
    urlString = urlString.slice(0, -1);
  }

  return urlString;

};

export default makeUrlFunction;

