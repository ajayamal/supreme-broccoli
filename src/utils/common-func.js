export const toMB = (sizeInBytes) =>
  sizeInBytes ? (sizeInBytes / (1024 * 1024)).toFixed(2) : 0;
export const trimFileName = (initial) => {
  var split = initial.split(".");
  var fileName = split[0];
  var extension = split[1];
  fileName = fileName.substring(0, 10);
  return fileName + "." + extension;
};
