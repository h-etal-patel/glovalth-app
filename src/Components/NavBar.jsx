
import Link from "next/link"
export default function NavBar(){
    return(
        <>
        <div className="flex justify-between w-auto items-center bg-emerald-400 h-20">
        <Link href="" className="w-10 h-10 p-80">
        <img
        src="glovalthlogo.png"
        alt="logo"
        /></Link>
        <Link href="/">Home</Link>
        <Link href="">Care planning</Link>
        <Link href="">Employee work management</Link>
        <Link href="">Task completion</Link>
        <Link href="">Emergency</Link>
        <Link href="">Document management</Link>
        <Link href="">Medication Activity</Link>
        <Link href="/dm">Document Sync</Link>
        </div>
        </>
    )
}