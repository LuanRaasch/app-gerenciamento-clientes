export function Create() {
    async function handleAddCustomer() {

        const doc = {
            name: "Matheus Fraga",
            email: "teste@teste.com",
            phone: "67999999",
            address: "Rua X, centro",
            role: "Frontend",
            status: true,
        }

        const response = await window.api.addCustomer(doc)
        console.log(response);
    }

    return (
        <div>
            <h1>Página novo cliente!!</h1>
            <button onClick={handleAddCustomer}>CADASTRAR</button>
        </div>
    )
}