
const Header = ({ title }) => {
    return (
        
    <header className='bg-white dark:bg-slate-900 p-4 border-b border-slate-300 dark:border-slate-800'>
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className='text-2xl font-bold'>{title}</h1>
        </div>
    </header>  
    );
};

export default Header;