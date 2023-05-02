import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.render('usuarios', {
        nombre: 'Jesus',
        role: 'user'
    })
})

export default router