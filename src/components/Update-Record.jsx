import { useState } from 'react';

function UpdateRecord() {

    const [emp, setEmpData] = useState(null);
    const [id, setId] = useState(0);
    const [message, setMessage] = useState('');
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


    const getUser = () => {
        if (id === 0) {
            alert('Please enter an employee ID or email.');
            return;
        }
        fetch(`http://localhost:9292/emp-api/find/${id}`)
            .then(response => response.json())
            .then(data => {
                setEmpData(data)
                console.log(emp)
            }
            )
            .catch(() => {
                setMessage(`Employee Not Found`)
                setEmpData(null)
            })
    }

    return (

        emp == null ? (
            <div className="h-[75vh]" >
                <p className='text-center text-green-600 font-bold text-3xl'>{success}</p>
                <p className='text-center text-red-600 font-bold text-3xl'>{error}</p>
                <p className='text-center text-red-600 font-bold text-3xl'>{message}</p>
                <div className='p-5 max-w-md mx-auto bg-gray-200 shadow-md rounded-lg overflow-hidden mt-10'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Id/Email
                        </label>
                        <div className='flex gap-4'>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Enter employee Id or Email"
                                onChange={(e) => { setId(e.target.value); setMessage('') }}
                            />
                            <button onClick={getUser} className='bg-green-600 px-4 py-2 rounded-lg text-white hover:cursor-pointer hover:bg-black' >Find</button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            // console.log('found')
            <div className='grid gap-5 items-center justify-center'>
                <div>
                    <p className=' text-green-600 font-bold text-3xl'>Update {emp.name.split(' ')[0]}&apos;s Record</p>
                    <div className="max-w-md mx-auto bg-gray-200 shadow-md rounded-lg overflow-hidden mt-10">
                        <div className="px-6 py-4">
                            <form
                                action="http://localhost:9292/emp-api/update"
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
                                        value={emp.id}
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
                                        className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-5 transition duration-200"
                                        type="submit"
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
                                        type="reset"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <div className='mb-2 text-center'>

                    <button onClick={() => { setEmpData(null); setMessage(''); setId(0) }} className="bg-pink-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-500 transition duration-300">Find Another Record</button>
                </div>

            </div>



        )

    )
}
export default UpdateRecord