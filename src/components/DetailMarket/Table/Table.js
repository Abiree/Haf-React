import React,{useState} from 'react';
import './Table.scss';

const Table = (props) => {
  //console.log("table")
  //console.log(props)
  const id=useState(props.idtree);
  const data = useState(props.trees.filter((x) => x.id === Number(id[0])));
 
  return(
  <div className="Table" data-testid="Table">
   <div className="center">
     <table >
       <tr>
         <th className="wid">Weight :</th>
         <th>{data[0][0].weight} kg</th>
        </tr>
        <tr>
          <td className="wid">Dimensions :
          </td>
          <td>{data[0][0].dimension} cm</td>
          </tr>
          </table>
          </div>
  </div>
);
}


export default Table;
