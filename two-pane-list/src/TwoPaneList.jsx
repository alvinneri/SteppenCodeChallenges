import { TableBody } from "./TableBody";

export const TwoPaneList = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <abbr title="Title">Title</abbr>
          </th>
          <th>
            <abbr title="Contents">Content</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, index) => {
            return <TableBody item={item} index={index} key={index}/>;
          })
        }
      </tbody>
    </table>
  );
}
