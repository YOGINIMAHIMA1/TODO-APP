import './List.css'
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export const List =({todolist})=>
    {
        return (<ul className="list">
            {
                todolist.map((listItem)=>(
                    <li key={listItem.id}>
                        <span>{listItem.item}</span>
                      <span className="actions"> <CheckCircleIcon/>
                       <DeleteForeverIcon/>
                       </span>
                    </li>
                    ))}
            
        </ul>
        )
    }

    export default List;