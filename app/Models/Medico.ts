import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Especialidade from './Especialidade'

export default class Medico extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public CRM: string

  @column()
  public CEP: string

  @column()
  public fixo: string

  @column()
  public celular: string

  @hasMany(() => Especialidade, {})
  public especialidades: HasMany<typeof Especialidade>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
