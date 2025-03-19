"use client"
import Link from "next/link"
import { useState } from "react";

export default function DocumentManagement() {
    const [openSection, setOpenSection] = useState("");

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? "" : section);
    };

    return (
        <div className="bg-green-100 p-4">
            <div className="bg-green-300 p-4 rounded-lg shadow-lg">
                {/* ID Document Section */}
                <div className="bg-green-200 mt-4 p-3 rounded-md cursor-pointer" onClick={() => toggleSection("Id Document")}>
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Id Document</span>
                        <span className="transform transition-transform" style={{ transform: openSection === "Id Document" ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
                    </div>
                    {openSection === "Id Document" && (
                        <div className="mt-3 p-3 bg-green-100 rounded-md">
                            <p><strong>Name:</strong> Jon Gial</p>
                            <p><strong>Document Number:</strong> 023454349</p>
                            <p><strong>Valid Until:</strong> 06/07/2030</p>
                            <div className="flex items-center mt-3">
                                <button className="btn btn-success flex items-center">
                                    Docs File <span className="ml-2">⬇️</span>
                                </button>
                                <button className="btn btn-outline ml-2 flex items-center">
                                <Link href="idEdit"> ✏️ Edit</Link>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Medical & Health Records Section */}
                <div className="bg-green-200 mt-2 p-3 rounded-md cursor-pointer" onClick={() => toggleSection("Medical & Health Records")}>
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Medical & Health Records</span>
                        <span className="transform transition-transform" style={{ transform: openSection === "Medical & Health Records" ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
                    </div>
                    {openSection === "Medical & Health Records" && (
                        <div className="mt-3 p-3 bg-green-100 rounded-md">
                            <p><strong>Select Type of Document:</strong></p>
                            <ul className="mt-2 space-y-2">
                                <li className="flex justify-between bg-white p-2 rounded shadow">
                                    Document 1
                                    <button className="btn btn-success">⬇️ Download</button>
                                </li>
                                <li className="flex justify-between bg-white p-2 rounded shadow">
                                    Document 2
                                    <button className="btn btn-success">⬇️ Download</button>
                                </li>
                                <li className="flex justify-between bg-white p-2 rounded shadow">
                                    Document 3
                                    <button className="btn btn-success">⬇️ Download</button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Insurance Related Docs Section */}
                <div className="bg-green-200 mt-2 p-3 rounded-md cursor-pointer" onClick={() => toggleSection("Insurance related docs")}>
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Insurance related docs</span>
                        <span className="transform transition-transform" style={{ transform: openSection === "Insurance related docs" ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
                    </div>
                    {openSection === "Insurance related docs" && (
                        <div className="mt-3 p-3 bg-green-100 rounded-md text-center">
                            <p className="text-pink-600 font-bold text-lg">Insurance Docs.</p>
                            <button className="btn btn-success flex items-center mt-2">
                                Download <span className="ml-2">⬇️</span>
                            </button>
                            <button className="btn btn-outline ml-2 flex items-center mt-2">
                                ✏️ Edit
                            </button>
                        </div>
                    )}
                </div>

                {/* Billing Information Section */}
                <div className="bg-green-200 mt-2 p-3 rounded-md cursor-pointer" onClick={() => toggleSection("Billing information")}>
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Billing information</span>
                        <span className="transform transition-transform" style={{ transform: openSection === "Billing information" ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
                    </div>
                    {openSection === "Billing information" && (
                        <div className="mt-3 p-3 bg-green-100 rounded-md">
                            <p><strong>Select Type of Document:</strong></p>
                            <ul className="mt-2 space-y-2">
                                <li className="flex justify-between bg-white p-2 rounded shadow">
                                    Bill 1
                                    <label>Date</label>
                                    <input className="btn btn-success" id="date" type="date" name="date" />
                                </li>
                                <li className="flex justify-between bg-white p-2 rounded shadow">
                                    Bill 2
                                    <label>Date</label>
                                    <input className="btn btn-success" id="date" type="date" name="date" />
                                </li>
                                <li className="flex justify-between bg-white p-2 rounded shadow">
                                    Bill 3
                                    <label>Date</label>
                                    <input className="btn btn-success" id="date" type="date" name="date" />
                                </li>
                            </ul>

                            <div className="flex items-center mt-3">
                                <button className="btn btn-success flex items-center">
                                    Download <span className="ml-2">⬇️</span>
                                </button>
                                <button className="btn btn-outline ml-2 flex items-center">
                                    <Link href=""> ✏️ Edit</Link>
                                   
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
            <button className="btn btn-success bg-green-200">
            <Link href="/">Home</Link>
            </button>
        </div>
    );
}
