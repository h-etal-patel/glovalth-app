export default function careerPage(){
return(
    <>
    <h1>Document</h1>
    <form action> 
        <label>Name </label>
        <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        className="border border-gray-300 rounded-lg p-2"
        />
        <br />
         <label>ID </label>
        <input
        type="passport"
        name="name"
        placeholder="Passport or Licence"
        required
        className="border border-gray-300 rounded-lg p-2"
        />
        
    </form>
    </>
);

}