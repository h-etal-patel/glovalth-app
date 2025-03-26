"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function IdEdit({ handleSubmit }) {
  const [selectedFiles, setSelectedFiles] = useState([])
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files))
  }

  // Modified form submission handler
  async function onSubmit(formData) {
    setIsSubmitting(true)
    setMessage("")

    try {
      // Add files to formData - only add file names to avoid Uint8Array issues
      const fileNames = selectedFiles.map((file) => file.name)
      formData.append("fileNames", JSON.stringify(fileNames))

      // Call the server action
      const result = await handleSubmit(formData)
      // console.log(result);

      if (result && result.success) {
        setMessage("Document uploaded successfully!")
        // Reset form
        document.getElementById("documentForm").reset()
        setSelectedFiles([])
        // Refresh the page data
        router.refresh()
      } else {
        setMessage(result?.error || "Failed to upload document")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setMessage("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-green-100 p-4 rounded-lg">
      <h1 className="text-5xl font-semibold text-gray-700 text-center mb-6">Details</h1>

      {message && (
        <div
          className={`p-3 my-3 rounded ${message.includes("success") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {message}
        </div>
      )}

      <form id="documentForm" action={onSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-lg font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="fullName"
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="docNumber" className="block text-lg font-semibold text-gray-700 mb-2">
                Document Number
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="docNumber"
                type="text"
                name="documentNumber"
                required
                placeholder="Enter document number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expiryDate" className="block text-lg font-semibold text-gray-700 mb-2">
                Expiry Date
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="expiryDate"
                type="date"
                name="expiryDate"
                required
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white border-2 border-gray-400 rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-semibold text-center mb-4">Drag and Drop Your Documents</h2>
              <div
                id="dropZone"
                className="h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center text-gray-500 text-lg cursor-pointer"
                onDrop={(event) => {
                  event.preventDefault()
                  setSelectedFiles(Array.from(event.dataTransfer.files))
                }}
                onDragOver={(event) => event.preventDefault()}
              >
                <span>Drag your files here</span>
              </div>
              <div className="mt-4 text-center">
                <input type="file" id="fileInput" className="hidden" multiple onChange={handleFileChange} />
                <button
                  type="button"
                  onClick={() => document.getElementById("fileInput").click()}
                  className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Browse Files
                </button>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-center">Files Selected:</h3>
              <ul className="mt-2 list-disc pl-5 max-h-40 overflow-y-auto">
                {selectedFiles.map((file, index) => (
                  <li key={index} className="text-gray-700">
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`py-2 px-6 mb-6 mr-6 ${isSubmitting ? "bg-gray-400" : "bg-green-500 hover:bg-green-700"} text-white rounded-md transition-colors`}
          >
            {isSubmitting ? "Uploading..." : "Upload Files"}
          </button>
        </div>
      </form>
    </div>
  )
}

