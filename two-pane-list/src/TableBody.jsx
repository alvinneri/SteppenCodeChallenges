import { useState } from "react";

export const TableBody = ({ item, index }) => {

	const [isShow, setIsShow] = useState(false)
	const [selectedIndex, setSelectedIndex] = useState(null);

	const handleClickTitle = (index) => {
		setIsShow(!isShow);
		setSelectedIndex(index);
	}

	const DisplayContent = ({item}) => {
		return item.content.map((content, index) => {
      return <p key={index}>{content}</p>;
    });
	}

  return (
    <>
      <tr>
        <th onClick={() => handleClickTitle(index)}>{item.title}</th>

        <td>
          {isShow && selectedIndex === index
            ? <DisplayContent item={item} />
            : "Click on the title"}
        </td>
      </tr>
    </>
  );
};