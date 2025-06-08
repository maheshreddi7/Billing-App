import ItemForm from "../../components/ItemForm/ItemForm";
import ItemList from "../../components/ItemList/ItemList";
import "./Manageitems.css";

const Manageitems = () => {
  return (
    <div className="items-container text-light">
      <div className="left-column">
        <ItemForm />
      </div>
      <div className="right-column">
        <ItemList />
      </div>
    </div>
  );
};

export default Manageitems;
