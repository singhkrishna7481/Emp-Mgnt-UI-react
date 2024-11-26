function AddEmployees() {
    
    // Directly create URLSearchParams and get the message
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
    return (
        <div className="h-[75vh]">
            <p className='text-center text-green-600 font-bold text-3xl'>{success}</p>
            <p className='text-center text-red-600 font-bold text-3xl'>{error}</p>

            <div className="max-w-md mx-auto bg-gray-200 shadow-md rounded-lg overflow-hidden mt-10">
                <div className="px-6 py-4">
                    <h2 className="text-2xl font-bold mb-4">Add New Employee</h2>
                    <form action="http://localhost:9292/emp-api/save" method="post">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                name="name"
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
                                placeholder="Enter employee department"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-5"
                                type="submit"
                            >
                                Add
                            </button>
                            <button
                                className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="reset"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddEmployees