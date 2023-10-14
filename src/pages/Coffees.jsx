import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Coffees = ({ coffee, setNewCoffee, newCoffee }) => {
  const { name, supplier, category, photo, chef, taste, details ,_id} = coffee;

    const handleDelete =(_id)=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                      Swal.fire(
                'Deleted!',
                'Your coffee has been deleted.',
                'success'
              )
              const remaining = newCoffee.filter(cof => cof._id ==_id);
              setNewCoffee(remaining)
                }
            })
            }
          })
    }

  return (
    <div >
      <div
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={photo}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Name: {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">Chef: {chef}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
            <button className="btn">View</button>
            <Link to={`/updateCoffee/${_id}`} className="btn">Edit</Link>
            <button onClick={()=>handleDelete(_id)} className="btn bg-red-600 text-white">X</button>
        </div>
      </div>
    </div>
  );
};

export default Coffees;
