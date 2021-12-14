import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    nome: schema.string({ trim: true }, [rules.maxLength(120), rules.alpha()]),
    CRM: schema.string({}, [rules.maxLength(7), rules.regex(new RegExp('^[0-9]+$'))]),
    fixo: schema.string({}, [rules.regex(new RegExp('^[0-9]+$'))]),
    cell: schema.string({}, [rules.mobile()]),
    CEP: schema.string({}, [rules.regex(/^[0-9]+$/)]),
    // especialidades: schema.enumSet(
    //   [
    //     'Alergologia',
    //     'Angiologia',
    //     'Buco maxilo',
    //     'Cardiologia clínca',
    //     'Cardiologia infantil',
    //     'Cirurgia cabeça e pescoço',
    //     'Cirurgia cardíaca',
    //     'Cirurgia de tórax',
    //   ],
    // [rules.minLength(2)]
    // ),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {}
}
