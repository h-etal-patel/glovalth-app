
import Link from "next/link"
export default function NavBar() {
  return (
    <>
      <div className="flex items-center space-x-2 bg-emerald-400 h-20 navbar shadow-sm">
        <div className="flex items-center space-x-4 justify-start ...">
          <div className="w-10 h-10">
            <Link href="" >
            <img
              src="glovalth.png"
              alt="logo" />
              </Link>
          </div>
              <div><Link href="/">Home</Link></div>
              <div> <Link href="">Care planning</Link></div>
              <div><Link href="">Employee work management</Link></div>
              <div><Link href="">Task completion</Link></div>
              <div><Link href="">Emergency</Link></div>
              <div><Link href="/document">Document management</Link></div>
              <div><Link href="">Medication Activity</Link></div>
              <div><Link href="">Document Sync</Link></div>
        </div>
        
        <div className="flex gap-2">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}









{/* 
         */}