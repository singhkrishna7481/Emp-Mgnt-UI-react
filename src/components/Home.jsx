import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Home() {
    const [employees, setEmployees] = useState([]);
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/emp-api/view-all')
            .then(res =>res.json())
            .then(data => {
                setEmployees(data);
            })
    }, []);

    useEffect(() => {
        fetch('http://localhost:9292/emp-api/all-departments')
            .then(res =>res.json())
            .then(data => {
                setDepartments(data);
            })
    }, []);
    return (
        // <div>
        //     <section className="bg-white p-10 text-center shadow-lg">
        //     <h2 className="text-5xl font-bold mb-4">Manage Your Team Effortlessly</h2>
        //     <p className="text-gray-700 mb-6">Our platform helps you streamline employee management tasks, saving you time and resources.</p>
        //     <Link to="/add-employee" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-500 transition duration-300 mx-5">New Employee</Link>
        //     <Link to="#contact" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-500 transition duration-300 mx-5">Update Record</Link>
        //     <Link to="/all-employees" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-500 transition duration-300 mx-5">View All</Link>
        //     <Link to="/admin-page" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-500 transition duration-300 mx-5">Admin</Link>
        // </section>
        // </div>
        <div className="bg-gray-100 ">
            <header
                className="bg-gradient-to-br from-teal-500 via-indigo-500 to-blue-500 py-40 rounded-md shadow-lg grid items-center gap-10 "
            >
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold">Employee Management System</h1>
                    <p className="mt-4 text-xl">Welcome to the Dashboard, manage your employees and more</p>
                </div>
                <div className="text-center">
                <Link to="/add-employee" className="bg-purple-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-500 transition duration-300 mx-5">New Employee</Link>
                    <Link to="/update-record" className="bg-pink-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-500 transition duration-300 mx-5">Update Record</Link>
                    <Link to="/all-employees" className="bg-purple-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-500 transition duration-300 mx-5">View All</Link>
                    <Link to="/admin-page" className="bg-pink-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-500 transition duration-300 mx-5">Admin</Link>
                </div>
            </header>

            {/* Stats Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Employees */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
                            <div className="flex items-center space-x-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhTN2tKS_SktjwSBZCam9leOjCmqq-QMSiw&s" alt="Employees" className="w-16 h-16 object-cover rounded-full" />
                                <div>
                                    <h2 className="text-3xl font-semibold text-blue-600">Total Employees</h2>
                                    <p className="text-4xl font-bold text-gray-800">{employees.length}</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Admins */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
                            <div className="flex items-center space-x-4">
                                <img src="https://static.vecteezy.com/system/resources/previews/020/429/953/non_2x/admin-icon-vector.jpg" alt="Admins" className="w-16 h-16 object-cover rounded-full" />
                                <div>
                                    <h2 className="text-3xl font-semibold text-blue-600">Total Admins</h2>
                                    <p className="text-4xl font-bold text-gray-800">10</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Departments */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
                            <div className="flex items-center space-x-4">
                                <img src="https://anthropology.columbia.edu/sites/default/files/styles/cu_crop/public/content/MORRIS%20CARDS/ADMIN/AM%20DIRECTORY%20ICON%20DEPT%20ADMIN_300.jpg?itok=_MlhZnyw" alt="Departments" className="w-16 h-16 object-cover rounded-full" />
                                <div>
                                    <h2 className="text-3xl font-semibold text-blue-600">Departments</h2>
                                    <p className="text-4xl font-bold text-gray-800">{departments.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}



// function FeaturesSection() {
//     return (
//         <section className="py-20 bg-gray-100">
//             <div className="max-w-7xl mx-auto px-4">
//                 <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     <FeatureCard title="Employee Database" description="Store and manage all employee information in one place." />
//                     <FeatureCard title="Performance Tracking" description="Monitor employee performance and progress." />
//                     <FeatureCard title="Scheduling" description="Create and manage schedules efficiently." />
//                 </div>
//             </div>
//         </section>
//     );
// }



export default Home;