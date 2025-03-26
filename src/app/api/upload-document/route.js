import { NextResponse } from "next/server"
import { db } from "@/utils/dbconnection"

export async function POST(request) {
  try {
    const formData = await request.formData()

    // Extract form data
    const name = formData.get("name")
    const documentNumber = formData.get("documentNumber")
    const expiryDate = formData.get("expiryDate")

    // Handle file uploads
    const files = formData.getAll("documents")
    const fileNames = files.map((file) => file.name)

    console.log("Received form data:", {
      name,
      documentNumber,
      expiryDate,
      fileNames,
    })

    // Insert into database
    await db.query(
      `INSERT INTO "idDocument" (name, document_number, expiry_date, file_names) 
       VALUES ($1, $2, $3, $4)`,
      [name, documentNumber, expiryDate, JSON.stringify(fileNames)],
    )

    return NextResponse.json({
      success: true,
      message: "Document uploaded successfully",
    })
  } catch (error) {
    console.error("Error processing upload:", error)
    return NextResponse.json({ success: false, error: "Failed to process upload" }, { status: 500 })
  }
}

