import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { read, utils } from "xlsx";
import { UploadArea } from "./components/upload-area";
import { FileDetails } from "./components/file-details";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [parsedData, setParsedData] = useState();
  async function parseXl() {
    /* parse */
    if (!selectedFile) return;
    const ab = await selectedFile.arrayBuffer();

    const wb = read(ab);

    /* generate array of objects from first worksheet */
    const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
    const data = utils.sheet_to_json(ws); // generate objects
    setParsedData(data);
  }
  useEffect(() => {
    console.log(selectedFile);
  }, [selectedFile]);
  return (
    <div className="App">
      <div>
        <UploadArea setFile={setSelectedFile} />

        <div className="flex flex-col items-center justify-center p-6">
          {selectedFile ? <FileDetails file={selectedFile} /> : <></>}
          <button
            className={`rounded-md ${
              selectedFile ? `bg-cyan-700` : `bg-gray-300 cursor-not-allowed`
            } p-3 text-white font-semibold`}
            onClick={() => parseXl()}
          >
            {!selectedFile ? "Please upload" : "Ready to Extract"}
          </button>
        </div>
      </div>
      {parsedData ? JSON.stringify(parsedData) : ""}
    </div>
  );
}

export default App;
