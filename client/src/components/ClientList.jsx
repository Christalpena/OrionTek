import OutlinedCard from "./Card";

const ClientList = ({ clients }) => {
    return (
        <section>
            {clients.map((client) => (
                <OutlinedCard
                    key={client.id}
                    id={client.id}
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
