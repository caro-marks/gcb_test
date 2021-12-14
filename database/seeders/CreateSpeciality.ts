import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Especialidade from 'App/Models/Especialidade'

export default class CreateSpecialitySeeder extends BaseSeeder {
  public async run() {
    await Especialidade.createMany([
      {
        escolhas: 'Alergologia',
      },
      {
        escolhas: 'Angiologia',
      },
      {
        escolhas: 'Buco maxilo',
      },
      {
        escolhas: 'Cardiologia clínica',
      },
      {
        escolhas: 'Cardiologia infantil',
      },
      {
        escolhas: 'Cirurgia cabeça e pescoço',
      },
      {
        escolhas: 'Cirurgia cardíaca',
      },
      {
        escolhas: 'Cirurgia de tórax',
      },
    ])
  }
}
