import { useState, useEffect } from 'react';


function AllEmployees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/emp-api/view-all')
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
            <h2 className="text-2xl font-bold mb-4">Employee List</h2>
            <div className="overflow-x-auto">
                {employees.length ? (
                    <table className="min-w-full bg-white border border-gray-300" >
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-2 px-4 border-b border-gray-300">Id</th>
                                <th className="py-2 px-4 border-b border-gray-300">Name</th>
                                <th className="py-2 px-4 border-b border-gray-300">Email</th>
                                <th className="py-2 px-4 border-b border-gray-300">Salary</th>
                                <th className="py-2 px-4 border-b border-gray-300">Position</th>
                                <th className="py-2 px-4 border-b border-gray-300">Department</th>
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
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>
                        No Record Found
                    </p>
                )
                }
            </div>
        </div>
    )
}
export default AllEmployees
