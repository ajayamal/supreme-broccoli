import { useRef, useState } from "react";
import { fileFormats } from "../utils/constants";

export const UploadArea = ({ setFile }) => {
  const inputFileRef = useRef(null);
  const [isValidFile, setIsValidFile] = useState(true);
  function overrideEventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  function handleDrop(ev) {
    overrideEventDefaults(ev);
    if (ev.dataTransfer.items) {
      [...ev.dataTransfer.items].forEach((item, i) => {
        setIsValidFile(true);
        if (item.kind === "file" && fileFormats.includes(item.type)) {
          const file = item.getAsFile();
          setFile(file);
        }
      });
    } else {
      [...ev.dataTransfer.files].forEach((file, i) => {
        setFile(file);
      });
    }
  }
  function handleDragOver(ev) {
    overrideEventDefaults(ev);
    if (ev.dataTransfer.items) {
      [...ev.dataTransfer.items].forEach((item, i) => {
        setIsValidFile(fileFormats.includes(item.type));
      });
    } else {
      console.log("Log");
    }
  }
  return (
    <div
      id="drop_zone"
      onDrop={(event) => handleDrop(event)}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={() => setIsValidFile(true)}
      onDragEnd={() => setIsValidFile(true)}
      className={`border-dashed  ${
        isValidFile
          ? `bg-gray-400 border-gray-700`
          : `bg-red-400 border-red-900`
      } max-h-96 min-h-60 text-center flex justify-center items-center border-spacing-2 border-4 m-6 cursor-pointer`}
      onClick={() => {
        inputFileRef.current.click();
      }}
    >
      <input
        type="file"
        ref={inputFileRef}
        className="hidden"
        accept={fileFormats.join(",")}
        onChange={(e) => {
          if (!e.target.files.length) return;
          setFile(e.target.files[0]);
        }}
      />
      <div className="text-lg text-gray-900 font-semibold">
        Click or drag your file here to upload
      </div>
    </div>
  );
};
