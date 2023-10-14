import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAdd = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const newCoffe = {name, supplier, category, photo, chef, taste, details};

        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffe)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Add success',
                    text: 'User added a successfully coffee',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
            console.log(data);
        })

    }
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center mt-5">
        Add New Coffee
      </h1>
      <p className="text-center text-gray-400 max-w-[700px] mx-auto mt-4">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <div className="">
        <form onSubmit={handleAdd} className="card-body">
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
                />
              </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn bg-[#D2B48C]">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
