import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Medico from 'App/Models/Medico'
import { StoreValidator, UpdateValidator } from 'App/Validators/Medico'

export default class MedicosController {
  public async index({}: HttpContextContract) {
    const medicos = await Medico.query().orderBy('id')

    return medicos
  }

  public async store({ request }: HttpContextContract) {
    // const data = request.only(['nome', 'CRM', 'CEP', 'fixo', 'cell', 'especialidades'])
    const data = await request.validate(StoreValidator)
    const medico = await Medico.create(data)
    return medico
  }

  public async show({ params, response }: HttpContextContract) {
    const medico = await Medico.find(params.id)
    if (!medico) {
      return response.notFound({ error: { message: 'medico not found' } })
    } else {
      return medico
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const medico = await Medico.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    medico.merge(data)
    await medico.save()

    return medico
  }

  public async destroy({ params }: HttpContextContract) {
    const medico = await Medico.findOrFail(params.id)
    const nome = medico.nome

    await medico.delete()
    return { deleted: `${params.id} - ${nome}` }
  }
}
