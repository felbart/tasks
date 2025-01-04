import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { SIDEBAR_ITEMS } from "../../constants";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from '../../hooks/useTheme';


const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-white dark:bg-slate-900 backdrop-blur-md p-4 flex flex-col border-r border-slate-200 dark:border-slate-800">
        <div className="flex items-center justitfy-between gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:dark:bg-slate-700 hover:bg-slate-100 transition-colors max-w-fit"
          >
            <Menu size={24} />
          </motion.button>
          <AnimatePresence
            initial={false}
          >
            {isSidebarOpen && (
              <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-2xl font-bold">
                Tasks
              </motion.span>
            )
            }
          </AnimatePresence>
        </div>
        <nav className="mt-8 flex-grow">
          <ul className="flex flex-col gap-4">
            {SIDEBAR_ITEMS.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  <motion.div
                    className="flex items-center px-3 py-4 text-sm font-medium rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-slate-700 mb-2"
                  >
                    <item.icon size={20} style={{ color:item.color, minWidth:'20px' }} />
                    <AnimatePresence>
                      {isSidebarOpen && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: 'auto' }}
                          exit={{ opacity: 0, width: 0 }}
                          className={`ml-4 font-semibold text-slate-600 dark:text-slate-400`}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex flex-col gap-4">
        <li className="flex items-center text-sm text-slate-500 dark:text-slate-400 py-2 border-slate-100">
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:dark:bg-slate-700 hover:bg-slate-100 transition-colors max-w-fit"
          >
            {theme === 'light' ?
        (<Sun size={24} onClick={()=> setTheme('dark')}/>) :
        (<Moon size={24} onClick={()=> setTheme('light')}/>)
        }
          </motion.button>
        
        </li>
        <li className="flex items-center text-sm text-slate-500 dark:text-slate-400 py-2">Sobre</li>
        </ul>
      </div>
    </motion.div>
  )

};

export default Sidebar