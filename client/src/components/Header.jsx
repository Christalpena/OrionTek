import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { deleteClient } from "../api";
import { useNavigate } from "react-router-dom";

function Header({id}) {
    const navigate = useNavigate();
    return (
        <header>
            <div>
                <img src="" alt="" />
                <h1>OrionTek</h1>
            </div>
            {!id ? 
                <Button type='submit' variant="contained" color='success'><Link to='/create-client'>Create</Link></Button>
            :
            <Button variant="contained" color='error' onClick={async() => {
                const yes = window.confirm("are u shure")
                if(yes){
                    await deleteClient(id)
                    navigate('/')
                }
            }}>Delete</Button>
            }
        </header>
    );
}
export default Header;
