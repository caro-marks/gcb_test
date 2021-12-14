import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Especialidades extends BaseSchema {
  protected tableName = 'especialidades'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .enum('escolhas', [
          'Alergologia',
          'Angiologia',
          'Buco maxilo',
          'Cardiologia clínica',
          'Cardiologia infantil',
          'Cirurgia cabeça e pescoço',
          'Cirurgia cardíaca',
          'Cirurgia de tórax',
        ])
        .notNullable()
        .unique()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
