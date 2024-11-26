import { Link } from "react-router-dom";



function NavBar() {
    function toggle() {
        document.getElementById('mobile-menu').classList.toggle('hidden')
    }
    return (
        <nav className="bg-white shadow">
            <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16 flex-wrap">
                    <div className="flex-1 flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <a href="/" className="text-2xl font-bold text-blue-600">EmployeeManagement</a>
                        </div>
                        <div className="block lg:hidden">
                            <button onClick={toggle}
                                className="bg-gray-900 text-white px-3 py-2 rounded-md"
                            >
                                <div className="block w-6 h-1 bg-white mb-1 rounded-md"></div>
                                <div className="block w-6 h-1 bg-white mb-1 rounded-md"></div>
                                <div className="block w-6 h-1 bg-white rounded-md"></div>
                            </button>
                        </div>
                        <div className="hidden lg:block ">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium">Home</Link>
                                <Link to="/add-employee" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium">Add Employee</Link>
                                <Link to="/all-employees" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium">All Employee</Link>
                                <Link to="/admin-page" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium">Admin Page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:hidden" id="mobile-menu">
                <div className="grid md:flex items-center justify-between">
                    <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium">Home</Link>
                    <Link to="/add-employee" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium">Add Employee</Link>
                    <Link to="/all-employees" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium">All Employee</Link>
                    <Link to="/admin-page" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium">Admin Page</Link>
                </div>
            </div>
        </nav>
    );
}
export default NavBar