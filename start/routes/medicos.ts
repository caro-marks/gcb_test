import Route from '@ioc:Adonis/Core/Route'

Route.resource('/medicos', 'MedicosController')
  .apiOnly()
  .middleware({
    store: ['acl:admin'],
    update: ['acl:admin'],
    destroy: ['acl:admin'],
  })
