import pg from 'pg'
import dotenv from 'dotenv'


export class PostgresModel {
    #pg

    constructor() {
        this.#pg = new pg.Pool({
            connectionString:'postgres://tlfhlzem:12rcU1q9g5JrqNxinnNBJdNIZjJ5_JnF@satao.db.elephantsql.com/tlfhlzem'
            
        })
    }

    async fetch(SQL, ...params) {
        const client = await this.#pg.connect()
        try {
            const { rows } = await client.query(SQL, params.length ? params : null)
            return rows
        } catch(err) {
            console.log(err)
        } finally {
            client.release()
        }
    }
}
