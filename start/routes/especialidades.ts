import Route from '@ioc:Adonis/Core/Route'

Route.resource('/especialidades', 'EspecialidadesController')
  .apiOnly()
  .middleware({
    store: ['acl:admin'],
    destroy: ['acl:admin'],
  })
