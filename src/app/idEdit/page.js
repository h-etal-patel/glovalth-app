import IdEdit from "@/components/IdEdit"
import { db } from "@/utils/dbconnection"
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache"

export default async function Idedit() {
  const { userId } = await auth();
  // Fetch data from database
  let documents = []

  try {
    const result = await db.query(
      `SELECT id, name, document_number, expiry_date, file_name FROM "idDocument" WHERE user_id = $1`,
      [userId]
    );
    
    documents = result.rows
    console.log(documents);
  } catch (error) {
    console.error("Error fetching documents:", error)
  }

  // Create a server action for form submission
  async function handleFormSubmit(formData) {
    "use server"

    try {
      // Extract form data
      const name = formData.get("name")
      const documentNumber = formData.get("documentNumber")
      const expiryDate = formData.get("expiryDate")

      // Get file names from JSON string
      const fileNamesStr = formData.get("fileNames") || "[]"
      const fileNames = JSON.parse(fileNamesStr)

      console.log("Processing form submission:", {
        name,
        documentNumber,
        expiryDate,
        fileNames,
      })

      // Insert data into database
      await db.query(
        `INSERT INTO "idDocument" (name, document_number, expiry_date, file_name) 
         VALUES ($1, $2, $3, $4)`,
        [name, documentNumber, expiryDate, JSON.stringify(fileNames)],
      )

      // Revalidate the page to refresh data
      revalidatePath("/id-edit")

      return { success: true }
    } catch (error) {
      console.error("Error saving document:", error)
      return { success: false, error: "Failed to save document: " + error.message }
    }
  }

  return (
    <div className="container mx-auto py-4">
      <IdEdit handleSubmit={handleFormSubmit} />
    </div>
  )
}

