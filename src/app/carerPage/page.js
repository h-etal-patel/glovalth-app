
export default function carerPage(){
    return(
        <>
        <h1>Personal details</h1>
        <h1>Employee</h1>
        <h1>Personal details</h1>
        <form>
        <label htmlFor="fullName" className="block text-lg font-semibold text-gray-700">Contact information</label>
              <input
                className="w-auto p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="fullName"
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
              />

              <label htmlFor="docNumber" className="block text-lg font-semibold text-gray-700">Personal information</label>
              <input
                className="w-auto p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="docNumber"
                type="text"
                name="documentNumber"
                required
                placeholder="Enter document number"
              />
        </form>
        </>
    );
}