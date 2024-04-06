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
      `**${parsedDatum["Planned start date"]}**  ${
        parsedDatum["Requesting Group"]
      }:
      \t\t ${parsedDatum["Requesting Group"]} \n
      
      \t${
        parsedDatum["Type"] == "FSC"
          ? parsedDatum["Number_1"]
          : parsedDatum["Number"]
      }:${
        parsedDatum["Type"] == "FSC"
          ? parsedDatum["Description_1"]
          : parsedDatum["Short description"]
      }`
  );
};
