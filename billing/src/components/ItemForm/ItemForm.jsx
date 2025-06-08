import { assets } from "../../assets/assets";

const ItemForm = () => {
  return (
    <div
      className="item-form-container"
      style={{
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        backgroundColor: "white",
      }}
    >
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
                    placeholder="Item Name"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label" htmlFor="category">
                    Category
                  </label>
                  <select name="category" id="category" class="form-control">
                    <option value="">--SELECT CAEGORY--</option>
                    <option value="1">CAEGORY 1</option>
                    <option value="2">CAEGORY 2</option>
                  </select>
                </div>
                <div class="mb3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="form-control"
                    placeholder="&#8377;"
                  ></input>
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
                <button type="submit" className="btn btn-primary w-100">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemForm;
