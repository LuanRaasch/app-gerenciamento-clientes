import { Link } from 'react-router-dom'

export function Home() {
  async function handleAdd() {
    const response = await window.api.fetchAllCustomers()
    console.log(response)
  }

  async function handleCustomerById() {
    const docId = '1938df70-a2ec-4993-818b-67e735a88b1f'
    const response = await window.api.fetchCustomerById(docId)
    console.log(response)
  }

  async function handleDeleteCustomer() {
    const docId = '1938df70-a2ec-4993-818b-67e735a88b1f'
    const response = await window.api.deleteCustomer(docId)
    console.log(response)
  }

  return (
    <div>
      <h1>Página HOME!!</h1>
      <Link to="/create">Ir para a página create</Link>
      <br></br>
      <button onClick={handleAdd}>BUSCAR USUARIOS</button>
      <br></br>
      <button onClick={handleCustomerById}>BUSCAR USUARIO PELO ID</button>
      <br></br>
      <button onClick={handleDeleteCustomer}>DELETAR CLIENTE</button>
    </div>
  )
}
