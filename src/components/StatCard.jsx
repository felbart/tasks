import Color from "color";
import { motion } from "framer-motion"

const StatCard = ({name, icon:Icon, value, color}) => {

    const colorbg = Color(color).alpha(0.2).string();
    console.log(color, name, colorbg);
return (
    <motion.div
        className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800"
        whileHover={{ y: -2, boxShadow: "0 5px 12px -10px" }}
        transition={{ type: "spring" }}
    >
        <div className="flex items-center justify-start gap-4 px-4 py-5 sm:p-6">
            <span className={`flex items-center gap-4 justify-start p-3 rounded-xl bg-opacity-10`} style={{backgroundColor: colorbg}}>
                <Icon
                    size={24}
                    color={color}
                />
            </span>
            <span className="flex flex-col">
                <p className="text-slate-400 dark:text-slate-500 text-sm">{name}</p>
                <p className="text-3xl font-bold">{value}</p>
            </span>
        </div>
    </motion.div>
)
}

export default StatCard