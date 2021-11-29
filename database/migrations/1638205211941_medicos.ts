import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Medicos extends BaseSchema {
  protected tableName = 'medicos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 120)
      table.integer('CRM', 7)
      table.integer('fixo')
      table.integer('celular')
      table.integer('CEP')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
