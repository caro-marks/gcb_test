import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Medico from 'App/Models/Medico'

export default class MedicosController {
  public async index({}: HttpContextContract) {
    const medicos = await Medico.query().orderBy('id')

    return medicos
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['name', 'CRM', 'CEP', 'fixo', 'cell'])
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
    const data = request.only(['name', 'CRM', 'CEP', 'fixo', 'cell'])

    medico.merge(data)
    await medico.save()

    return medico
  }

  public async destroy({ params }: HttpContextContract) {
    const medico = await Medico.findOrFail(params.id)
    const name = medico.name

    await medico.delete()
    return { deleted: `${params.id} - ${name}` }
  }
}
