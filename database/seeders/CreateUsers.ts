import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'admin@admin.adm',
        password: 'admin',
        role: 'admin',
      },
      {
        email: 'mksalex08@gmail.com',
        password: 'password',
        role: 'normal',
      },
    ])
  }
}
