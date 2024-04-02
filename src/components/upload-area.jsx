import { useRef } from "react";

export const UploadArea = ({ setFile }) => {
  const inputFileRef = useRef(null);
  function overrideEventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  function handleDrop(ev) {
    overrideEventDefaults(ev);
    // Prevent default behavior (Prevent file from being opened)
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          setFile(file);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        setFile(file);
      });
    }
  }
  function handleDragOver(e) {
    overrideEventDefaults(e);
  }
  return (
    <div
      id="drop_zone"
      onDrop={(event) => handleDrop(event)}
      onDragOver={(e) => handleDragOver(e)}
      className="border-dashed border-cyan-700 bg-cyan-400 max-h-96 min-h-60 text-center flex justify-center items-center border-spacing-2 border-4 m-6 cursor-pointer"
      onClick={() => {
        inputFileRef.current.click();
      }}
    >
      <input
        type="file"
        ref={inputFileRef}
        className="hidden"
        onChange={(e) => {
          if (!e.target.files.length) return;
          setFile(e.target.files[0]);
        }}
      />
      <div>Upload your file here</div>
    </div>
  );
};
