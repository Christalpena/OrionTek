import ClientList from "../components/ClientList"
import { ListClients } from "../api"

const Client = ({setId}) => {
    const clients = ListClients()
    setId(0)
    return(
        <>
            <ClientList clients={clients} />
        </>
    )
}


export default Client
