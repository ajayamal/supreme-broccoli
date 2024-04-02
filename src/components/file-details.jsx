import { toMB, trimFileName } from "../utils/common-func";

export const FileDetails = ({ file }) => {
  return (
    <>
      {file ? (
        <div className="flex flex-col justify-evenly max-w-96 min-w-64 items-start p-4 bg-gray-400 rounded-md m-4">
          <div className="flex flex-row items-center justify-between text-black w-full">
            <div className="font-semibold text-gray-700">name:</div>{" "}
            <div>{file["name"] ? trimFileName(file["name"]) : ""}</div>
          </div>
          <div className="flex flex-row items-center justify-between text-black  w-full">
            <div className="font-semibold text-gray-700">size:</div>{" "}
            <div>{toMB(file["size"])} MB</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
