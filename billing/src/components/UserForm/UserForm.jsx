import "./UserForm.css";

const UserForm = () => {
  return (
    <div class="mx-2 mt2 ">
      {/* <h2 class="text-center">Contact Us</h2> */}
      <div class="row">
        <div class="contaner1">
          <div className="card-body">
            <form class="contact-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Category Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="yourname@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="*********"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserForm;
