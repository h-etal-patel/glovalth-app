"use client"
import { useState } from 'react';
export default function idEdit() {
  const [files, setFiles] = useState([]);

  // Allow file drop
  const allowDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById("dropZone").classList.add("bg-blue-100");
  };

  // Remove highlight when dragging out
  const removeHighlight = (event) => {
    event.preventDefault();
    document.getElementById("dropZone").classList.remove("bg-blue-100");
  };

  // Handle file drop
  const dropFile = (event) => {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById("dropZone").classList.remove("bg-blue-100");

    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      handleFiles(droppedFiles);
    }
  };

  // Handle files selected by the user
  const handleFiles = (droppedFiles) => {
    setFiles((prevFiles) => {
      const newFiles = Array.from(droppedFiles).map((file) => file.name);
      return [...prevFiles, ...newFiles];
    });
  };

  // Handle file input selection (for browsers without drag-and-drop support)
  const fileInputChange = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles.length > 0) {
      handleFiles(selectedFiles);
    }
  };
  return (
    <div className='bg-green-100 '>
     <h1 className="block text-5xl font-semibold text-gray-700 text-center">Details</h1>
     <br />
      <div className='flex '>
        <div className='flex-1 ml-30'>
         
          <form className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-lg font-semibold text-gray-700">Full Name</label>
              <input
                className="w-auto p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="fullName"
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="docNumber" className="block text-lg font-semibold text-gray-700">Document Number</label>
              <input
                className="w-auto p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="docNumber"
                type="text"
                name="documentNumber"
                required
                placeholder="Enter document number"
              />
            </div>
            <div>
              <label htmlFor="expiryDate" className="block text-lg font-semibold text-gray-700">Expiry Date</label>
              <input
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="expiryDate"
                type="text"
                name="expiryDate"
                required
                placeholder="Enter expiry date"
              />
            </div>
          </form>
        </div>
        <div className='flex-2'>
          <div className="flex justify-center items-center">
            <div className="w-1/2  bg-white border-2 border-b-accent mb-10 border-gray-400 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-center mb-4">Drag and Drop Your Documents</h2>

              {/* Drop Zone */}
              <div
                id="dropZone"
                className="h-40 bg-gray-100 border-2 border-gray-300 rounded-lg flex justify-center items-center text-gray-500 text-lg"
                onDrop={dropFile}
                onDragOver={allowDrop}
                onDragLeave={removeHighlight}
              >
                <span>Drag your files here</span>
              </div>

              {/* File Input (Fallback for browsers without drag and drop support) */}
              <div className="mt-4 text-center">
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={fileInputChange}
                  multiple
                />
                <button
                  onClick={() => document.getElementById('fileInput').click()}
                  className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                  Browse Files
                </button>
              </div>

              {/* File List */}
              <h3 className="mt-6 text-lg font-semibold text-center">Files Selected:</h3>
              <ul id="fileList" className="mt-2 list-disc pl-5">
                {files.map((file, index) => (
                  <li key={index}>{file}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button
          className="py-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-700"
          onClick={() => alert('Files uploaded successfully!')}
        >
          Upload Files
        </button>
      </div>
    </div>
  );
}