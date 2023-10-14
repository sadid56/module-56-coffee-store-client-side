import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Updatecoffe = () => {
    const coffee = useLoaderData()
    const {name, supplier, category, photo, chef, taste, details, _id} = coffee;
    const handleUpdate = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const UpdateCoffee = {name, supplier, category, photo, chef, taste, details};
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Update success',
                    text: 'Updated successfully coffee',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
            console.log(data);
        })
    }
    return ( 
        <div>
            <h1>Coffee name : {name}</h1>
            <div>
            <form onSubmit={handleUpdate} className="card-body">
          <div className="flex items-start gap-7 justify-center">
            <div className="flex-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name:</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee name"
                  className="input input-bordered"
                  required
                  name="name"
                  defaultValue={name}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier:</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee Supplier"
                  className="input input-bordered"
                  required
                  name="supplier"
                  defaultValue={supplier}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category:</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee Category"
                  className="input input-bordered"
                  required
                  name="category"
                  defaultValue={category}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo:</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter photo URL"
                  className="input input-bordered"
                  required
                  name="photo"
                  defaultValue={photo}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chef:</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee chef"
                  className="input input-bordered"
                  required
                  name="chef"
                  defaultValue={chef}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Taste:</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee taste"
                  className="input input-bordered"
                  required
                  name="taste"
                  defaultValue={taste}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details:</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee details"
                  className="input input-bordered"
                  required
                  name="details"
                  defaultValue={details}
                />
              </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn bg-[#D2B48C]">
              Update coffee
            </button>
          </div>
        </form>
            </div>
        </div>
     );
}
 
export default Updatecoffe;