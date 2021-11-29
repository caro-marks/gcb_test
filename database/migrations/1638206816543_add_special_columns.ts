import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Medicos extends BaseSchema {
  protected tableName = 'medicos'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table
        .enu('specialities', [
          'Alergologia',
          'Angiologia',
          'Buco maxilo',
          'Cardiologia clínca',
          'Cardiologia infantil',
          'Cirurgia cabeça e pescoço',
          'Cirurgia cardíaca',
          'Cirurgia de tórax',
        ])
        .notNullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('specialities')
    })
  }
}
