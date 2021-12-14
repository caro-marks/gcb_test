import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Medicos extends BaseSchema {
  protected tableName = 'medicos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 120).notNullable()
      table.string('CRM', 7).notNullable().unique()
      table.string('fixo')
      table.string('celular')
      table.string('CEP').notNullable()
      table
        .string('especialidades')
        .references('escolhas')
        .inTable('especialidades')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
