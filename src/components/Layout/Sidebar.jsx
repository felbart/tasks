import { FaBars, FaHome, FaTasks } from "react-icons/fa"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div id="sidebar" className="w-[264px] h-screen bg-slate-800 text-white">
        <div className="flex flex-col gap-8 py-4 px-4 border-b-[1px] border-slate-700 relative">
            <div className="flex justify-start items-center gap-2 text-2xl tracking-widest font-bold text-blue-200 text-center uppercase"><FaTasks size={20}/>Tasks</div>
            <span className="bg-blue-300 text-white p-2 rounded-md absolute top-4 -right-1"><FaBars /></span>
        </div>
        <div className="flex flex-col gap-1">
          <ul className="flex flex-col gap-1 justify-start items-start text-lg text-blue-200 text-center w-full px-2">
            <li className="w-full py-2 text-slate-800 dark:text-slate-200 hover:bg-blue-600 dark:hover:bg-blue-600/20 px-2"><Link to='dashboard' className="flex items-center justify-start gap-2"><FaHome />Home</Link></li>
            <li className="w-full py-2 text-slate-800 dark:text-slate-200 hover:bg-blue-600 dark:hover:bg-blue-600/20 px-2"><Link to='tickets' className="flex items-center justify-start gap-2"><FaHome />Jobs</Link></li>
            <li className="w-full py-2 text-slate-800 dark:text-slate-200 hover:bg-blue-600 dark:hover:bg-blue-600/20 px-2"><Link to='profile' className="flex items-center justify-start gap-2"><FaHome />Perfil</Link></li>
            <li className="w-full py-2 text-slate-800 dark:text-slate-200 hover:bg-blue-600 dark:hover:bg-blue-600/20 px-2"><Link to='login' className="flex items-center justify-start gap-2"><FaHome />Login</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar