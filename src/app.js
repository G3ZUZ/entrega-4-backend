import express from 'express' //Modulo ES
import __dirname from './utils.js'
import handlebars from 'express-handlebars'
import usersRouter from './routers/users.router.js'
import foodsRouter from './routers/foods.router.js'

const app = express()

//configuración de la carpeta public
app.use(express.static(__dirname+'/public'))

//configuracion de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

app.use('/users', usersRouter)
app.use('/foods', foodsRouter)

app.listen(8080, () => console.log('Server Up'))
