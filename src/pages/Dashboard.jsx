import Header from "../components/Layout/Header"
import { motion } from "framer-motion"
import StatCard from "../components/StatCard"
import { ListTodo, SquareCheck, Tickets, Users } from "lucide-react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { JOBS } from "@/constants"
import { Link } from "react-router-dom"

function getDate() {
  return new Date().toLocaleDateString('pt-BR');
}

const Dashboard = () => {

  const currentDate = getDate();

  return (
    <section className="flex-1 overflow-auto relative z-10">
    <Header title="Página Inicial"/>
    <main className="w-full px-6 md:px-12 py-6">
      {/* TOP */}
      <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, width: 0 }}
      transition={{ duration: 0.5 }}
      >
        <StatCard
        name="Total Jobs" icon={Tickets} value="20" color="#14b8a6" />
        <StatCard
        name="Seus jobs" icon={Users} value="12" color="#ec4899" />
        <StatCard
        name="Jobs em aberto" icon={ListTodo} value="2" color="#a855f7" />
        <StatCard
        name="Jobs Finalizados" icon={SquareCheck} value="2050" color="#0ea5e9" />
      </motion.div>

      {/* MIDDLE */}
      <motion.div
       className="border bg-white dark:bg-slate-800 p-6 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, width: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
       >
        <h2 className="text-2xl font-bold mb-4 pb-4 border-b border-slate-200 dark:border-slate-400">Últimos jobs abertos</h2>
        <Table>
          <TableCaption>{`Lista de Jobs Atualizada em ${currentDate}`} </TableCaption>
          <TableHeader>
            <TableHead>Id</TableHead>
            <TableHead>Job</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Responsável</TableHead>
            <TableHead>Prioridade</TableHead>
            
          </TableHeader>
          <TableBody>
            { JOBS.map((job, index) => (
            <TableRow key={index}>
            <TableCell>{job.id}</TableCell>
            <TableCell><Link to={`/tickets/${job.id}`}>{job.name}</Link></TableCell>
            <TableCell>{job.description}</TableCell>
            <TableCell>
              <Link to={`/tickets/${job.responsavel}`} className="flex items-center gap-2">
              <span className="flex justify-start gap-2 items-center">
                <img src={job.urlAvatar} alt={job.responsavel} className="w-10 rounded-full" />
                {job.responsavel}
              </span>
              </Link>
            </TableCell>
            <TableCell ><span className="px-4 py-2 rounded-full bg-amber-300">Há 06 dias</span></TableCell>
           </TableRow>  
            ))}
          </TableBody>
        </Table>
      </motion.div>
      <div>

      </div>
    </main>
    </section>
    
  )
}

export default Dashboard