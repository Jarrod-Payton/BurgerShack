import { burgerService } from '../services/BurgerService'
import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'

export class BurgerController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurger)
      .post('', this.CreateBurger)
      .delete('/:BurgerId'.this.DeleteBurger)
      .put('/:BurgerId', this.EditBurger)
  }

  async getBurger(req, res, next) {
    const burgers = await burgerService.getBurgers()
    return res.send(burgers)
  }

  async CreateBurger(req, res, next) {
    const BurgerDetails = req.body
    const burger = await burgerService.CreateBurger(BurgerDetails)
    return res.send({ message: 'burger made bruddah', result: burger })
  }

  async EditBurger(req, res, next) {
    const id = req.params.id
    const updatedBurger = req.body
    updatedBurger.id = id
    const burger = await burgerService.EditBurger(id, updatedBurger)
    return res.send({ message: 'ARE YOU HAPPY NOW OR DO YOU WANNA CHANGE ANYTHING ELSE', results: burger })
  }

  async DeleteBurger(req, res, next) {
    return res.send({ message: 'no', results: req.body })
  }
}
