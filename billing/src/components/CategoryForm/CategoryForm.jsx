import "./CategoryForm.css";
import { assets } from "../../assets/assets";

export const CategoryForm = () => {
  return (
    <div class="mx-2 mt2 ">
      {/* <h2 class="text-center">Contact Us</h2> */}
      <div class="row">
        <div class="contaner1">
          <div className="card-body">
            <form class="contact-form">
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img src={assets.logo} width={48} />
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="form-control"
                />
              </div>
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
                <label htmlFor="name" className="form-label">
                  Description
                </label>
                <textarea
                  rows="5"
                  id="Description"
                  name="Description"
                  className="form-control"
                  placeholder="write content here"
                ></textarea>
              </div>
              <div class="mb-3">
                <label htmlFor="bgcolor" className="form-label">
                  Background Colour
                </label>
                <br />
                <input
                  type="color"
                  name="bgcolor"
                  id="bgcolor"
                  placeholder="#ffffff"
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

export default CategoryForm;
