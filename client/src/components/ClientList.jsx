import OutlinedCard from "./Card";

const ClientList = ({ clients }) => {
    console.log(clients);
    return (
        <section>
            {clients.map((client) => (
                <OutlinedCard
                    key={client.id} // Asegúrate de incluir un key único para cada elemento del array
                    name={client.name}
                    last_name={client.last_name}
                    email={client.email}
                    phone={client.phone}
                />
            ))}
        </section>
    );
};

export default ClientList;
