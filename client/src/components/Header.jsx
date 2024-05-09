import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function Header() {

  return (
    <header>
        <div>
            <img src="" alt="" />
            <h1>OrionTek</h1>
        </div>
        <Button type='submit' variant="contained" color='success'><Link to='/create-client'>Create</Link></Button>
    </header>
  );
}
export default Header;
