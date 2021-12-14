import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Especialidade extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public escolhas:
    | 'Alergologia'
    | 'Angiologia'
    | 'Buco maxilo'
    | 'Cardiologia clínica'
    | 'Cardiologia infantil'
    | 'Cirurgia cabeça e pescoço'
    | 'Cirurgia cardíaca'
    | 'Cirurgia de tórax'
}
