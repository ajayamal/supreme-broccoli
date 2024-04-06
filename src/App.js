import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { read, utils } from "xlsx";
import { UploadArea } from "./components/upload-area";
import { FileDetails } from "./components/file-details";
import { DocEditor } from "./components/doc-editor";
import { convertJsonToText } from "./utils/common-func";

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

  function reset() {
    setParsedData("");
    setSelectedFile("");
  }

  return (
    <div className="App">
      <div class="bg-animation z-0">
        {/* <div id="stars"></div> */}
        {/* <div id="stars2"></div>
        <div id="stars3"></div> */}
        <div id="stars4"></div>
      </div>
      <div className="relative z-10">
        <div className="p-8 text-3xl font-bold text-gray-400">
          {" "}
          Supreme Broccoli
        </div>
        <div>
          <UploadArea setFile={setSelectedFile} />

          <div className="flex flex-col items-center justify-center p-6">
            {selectedFile ? <FileDetails file={selectedFile} /> : <></>}
            <div className="flex space-x-4">
              {" "}
              <button
                className={`rounded-md ${
                  selectedFile
                    ? `bg-cyan-700`
                    : `bg-gray-300 cursor-not-allowed`
                } p-3 text-white font-semibold`}
                onClick={() => parseXl()}
              >
                {!selectedFile ? "Please upload" : "Ready to Extract"}
              </button>
              <button
                className={`rounded-md ${
                  selectedFile
                    ? `bg-cyan-700`
                    : `bg-gray-300 cursor-not-allowed`
                } p-3 text-white font-semibold`}
                onClick={() => reset()}
              >
                {"Reset"}
              </button>
            </div>
          </div>
        </div>
        {parsedData ? (
          <DocEditor formattedDoc={convertJsonToText(parsedData)} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
