import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Especialidade from 'App/Models/Especialidade'

export default class EspecialidadesController {
  public async index({}: HttpContextContract) {
    const especialidades = await Especialidade.query().orderBy('escolhas')
    return especialidades
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['escolhas'])
    const especialidade = await Especialidade.create(data)
    return especialidade
  }

  public async show({ params }: HttpContextContract) {
    const especialidade = await Especialidade.findOrFail(params.escolhas)
    return especialidade
  }

  public async destroy({ params }: HttpContextContract) {
    const especialidade = await Especialidade.findOrFail(params.escolhas)
    const expecialidade = especialidade.escolhas
    await especialidade.delete()
    return { deleted: `${expecialidade}` }
  }
}
