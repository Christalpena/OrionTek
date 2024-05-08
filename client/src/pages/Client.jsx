import ClientList from "../components/ClientList"
import { ListClients } from "../api"

const Client = () => {
    const clients = ListClients()

    return(
        <section className="clientSection">
            <ClientList clients={clients} />
        </section>
    )
}


export default Client
