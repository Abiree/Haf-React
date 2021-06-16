import React,{useState} from 'react';
import './Table.scss';

const Table = (props) => {
  const data = useState(props.trees[0]);
  console.log(data[0])
  return(
  <div className="Table" data-testid="Table">
   <div className="center">
     <table >
       <tr>
         <th className="wid">Weight :</th>
         <th>{data[0].weight} kg</th>
        </tr>
        <tr>
          <td className="wid">Dimensions :
          </td>
          <td>{data[0].dimension} cm</td>
          </tr>
          </table>
          </div>
  </div>
);
}


export default Table;
