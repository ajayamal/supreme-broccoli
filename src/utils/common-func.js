export const toMB = (sizeInBytes) =>
  sizeInBytes ? (sizeInBytes / (1024 * 1024)).toFixed(2) : 0;
export const trimFileName = (initial) => {
  var split = initial.split(".");
  var fileName = split[0];
  var extension = split[1];
  fileName = fileName.substring(0, 10);
  return fileName + "." + extension;
};

export const convertJsonToText = (parsedData) => {
  console.log(parsedData);
  return parsedData.map(
    (parsedDatum) =>
      `I'm **${parsedDatum["First Name"]}**  ${parsedDatum["Last Name"]}`
  );
};
