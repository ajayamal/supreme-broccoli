export const FileDetails = ({ file }) => {
  return (
    <>
      {file ? (
        <div className="flex flex-col justify-evenly max-w-96 items-start p-4">
          <div className="flex flex-row items-center justify-between text-black w-full">
            <div>name:</div> <div>{file["name"]}</div>
          </div>
          <div className="flex flex-row items-center justify-between text-black  w-full">
            <div>size:</div> <div>{file["size"]}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
