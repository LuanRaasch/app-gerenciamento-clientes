import {app, ipcMain} from 'electron'
import PouchDB from 'pouchdb'
import path from 'node:path'
import fs from 'node:fs'
import {Customer, NewCustomer} from '../shared/types/ipc'
import { randomUUID } from 'node:crypto'

/// Determinar caminho base para o banco de dados com base no sistema operacional
let dbPath;
if (process.platform === "darwin") {
    // Caminho para o macos
    dbPath =  path.join(app.getPath("appData"), "devclientes", "my_db")
} else {
    // Caminho para windows
    dbPath =  path.join(app.getPath("userData"), "my_db")
}

// Verificar e criar o diretório se não existir
const dbDir = path.dirname(dbPath)
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, {recursive: true})
}

// Inicializar o db
const db = new PouchDB<Customer>(dbPath)

// Função para adicionar no banco
async function addCustomer(doc: NewCustomer): Promise<PouchDB.Core.Response | void> {
    const id = randomUUID();

    const data: Customer = {
        ...doc,
        _id: id
    }

    return db.put(data)
            .then(response => response)
            .catch(err => console.error("ERRO AO CADASTRAR", err))
}


ipcMain.handle("add-customer", async (event, doc: Customer) => {
    const result = await addCustomer(doc);
    return result;
})