import { useState } from "react"

export const ItemList = ({
  items,
  setItems,
  setValue,
  setIsUpdating,
  setUpdateIndex,
}) => {

  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleMouseEnter = (index) => {
    setSelectedIndex(index);
    setShowDelete(true);
    setShowEdit(true);
  };

  const handleMouseLeave = (index) => {
    setSelectedIndex(index);
    setShowDelete(false);
    setShowEdit(false);
  };

  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const DeleteConfirmation = ({ index }) => {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content box">
          <p>Are you sure you want to delete this item?</p>
          <button
            className="button is-danger mx-2"
            onClick={() => handleDelete(index)}
          >
            YES
          </button>
          <button
            className="button is-info mx-2"
            onClick={() => setShowConfirmation(false)}
          >
            NO
          </button>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setShowConfirmation(false)}
        ></button>
      </div>
    );
  };

  const handleDeleteConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleDelete = (_index) => {
    const updateItems = items.filter((item, index) => index !== _index);
    setItems(updateItems);
    setShowConfirmation(false);
  };

  const handleEdit = (item,_index) => {
    setIsUpdating(true);
    setUpdateIndex(_index);
    setValue(item);
  };

  return items.map((item, index) => {
    return (
      <div
        key={index}
        className="box"
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}
      >
        {showDelete && selectedIndex === index && (
          <button
            className="delete"
            onClick={handleDeleteConfirmation}
          ></button>
        )}
        {showEdit && selectedIndex === index && (
          <button
            className="is-small button is-info mx-2"
            onClick={() => handleEdit(item, index)}
          >
            EDIT
          </button>
        )}
        {showConfirmation && <DeleteConfirmation index={index} />}
        <span className="px-2">{item}</span>
      </div>
    );
  });
};
