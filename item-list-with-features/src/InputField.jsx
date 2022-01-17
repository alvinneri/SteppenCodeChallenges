import React from "react";

export const InputField = ({ items, setItems, value, setValue , isUpdating, updateIndex ,setIsUpdating}) => {


  const handleSubmit = () => {
    if (!value) {
      return;
    }

		if(!isUpdating){
 			setItems((items) => [...items, value]);
		}else{
			const _items = [...items];
			_items[updateIndex] = value;
			setItems(_items);
			setIsUpdating(false);
		}
   
		setValue('')
  };

  return (
    <div className="control m-1">
      <input
        className="input"
        type="text"
        placeholder="Insert item"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button className="button is-success  my-2" onClick={() => handleSubmit()}>
        SUBMIT
      </button>
    </div>
  );
};
