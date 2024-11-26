import { useState, useEffect } from 'react';

function AdminPage() {
    const apiURL = 'http://localhost:9292/emp-api/'
    const [employees, setEmployees] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const [currentEmp, setCurrentEmp] = useState(null);

    const openForm = (emp) => {
        setCurrentEmp(emp);
        setIsOpen(true);

    };

    const closeForm = () => {
        setCurrentEmp(null);
        setIsOpen(false);
    };
    const urlParams = new URLSearchParams(location.search);
    const error = urlParams.get('error');
    const success = urlParams.get('success');

    function clearQueryParams() {
        // Remove the parameters from the URL
        urlParams.delete('error');
        urlParams.delete('success');

        // Update the URL in the address bar without reloading the page
        history.replaceState(null, '', `${location.pathname}?${urlParams.toString()}`);
    }
    setTimeout(clearQueryParams, 2000);

    useEffect(() => {
        fetch(apiURL + 'view-all')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setEmployees(data);
            })
    }, []);
    return (
        <div className="container mx-auto px-4 py-6 h-[80vh]">
            <p className='text-center text-green-600 font-bold text-3xl'>{success}</p>
            <p className='text-center text-red-600 font-bold text-3xl'>{error}</p>
            <h2 className="text-2xl font-bold mb-4">Manage Employees</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-300">Id</th>
                            <th className="py-2 px-4 border-b border-gray-300">Name</th>
                            <th className="py-2 px-4 border-b border-gray-300">Email</th>
                            <th className="py-2 px-4 border-b border-gray-300">Salary</th>
                            <th className="py-2 px-4 border-b border-gray-300">Position</th>
                            <th className="py-2 px-4 border-b border-gray-300">Department</th>
                            <th colSpan={2} className="py-2 px-4 border-b border-gray-300">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-center">
                        {employees.map((emp) => (
                            <tr key={emp.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b border-gray-300">{emp.id}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{emp.name}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{emp.email}</td>
                                <td className="py-2 px-4 border-b border-gray-300">&#x20B9; {emp.salary}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{emp.position}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{emp.department.departmentName}</td>
                                <td>
                                    <button
                                        onClick={() => openForm(emp)}
                                        className="bg-green-500 text-white px-3 py-2 rounded-lg">Edit</button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            if (window.confirm("This Record Will be Deleted \n Are you sure?")) {
                                                fetch(apiURL + `delete?id=${emp.id}`, {
                                                    method: 'DELETE',
                                                })
                                                    .then(() => {
                                                        window.location.reload();
                                                    })
                                            }
                                        }}
                                        className="bg-red-500 text-white px-3 py-2 rounded-lg">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isOpen && (

                <div className='grid gap-5 items-center justify-center'>
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
                        <div className="max-w-md mx-auto bg-gray-200 shadow-md rounded-lg overflow-hidden p-5">
                            <div className="px-6 py-4">
                                <form
                                    action={apiURL + `admin-update`}
                                    method="get">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                            Id
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="id"
                                            type="number"
                                            name="id"
                                            value={currentEmp.id}
                                            contentEditable="false"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="name"
                                            type="text"
                                            name="name"
                                            // value={emp.name}
                                            placeholder="Enter employee name"
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            name="email"
                                            // value={emp.email}
                                            placeholder="Enter employee email"
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
                                            Salary
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="salary"
                                            type="number"
                                            name="salary"
                                            // value={emp.salary}
                                            placeholder="Enter employee salary"
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position">
                                            Position
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="position"
                                            type="text"
                                            name="position"
                                            // value={emp.position}
                                            placeholder="Enter employee position"
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Department
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="departmentName"
                                            type="text"
                                            name="departmentName"
                                            // value={emp.department.departmentName}
                                            placeholder="Enter employee department"
                                            required
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <button
                                            className="bg-green-500 text-white px-3 py-2 rounded-lg mr-2 hover:bg-blue-700 transition duration-200 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-3 py-2 rounded-lg mr-2 hover:bg-blue-700 transition duration-200 focus:outline-none focus:shadow-outline"
                                            type="reset"
                                        >
                                            Reset
                                        </button>
                                        <button
                                            type="button"
                                            onClick={closeForm}
                                            className="bg-black text-white px-3 py-2 rounded-lg mr-2 hover:bg-blue-700 transition duration-200 focus:outline-none focus:shadow-outline"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AdminPage