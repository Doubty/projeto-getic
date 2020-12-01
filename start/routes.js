/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

// AuthController
Route.post('/register', 'AuthController.register');
Route.post('/authenticate', 'AuthController.authenticate');

// SetorController
Route.get('/setores', 'SetorController.getAll');
Route.get('/setores/:id', 'SetorController.get');

Route.group(() => {
  // UserController
  Route.patch('/users/:id', 'UserController.update');
  Route.get('/users/', 'UserController.getAll');
  Route.get('/users/:id', 'UserController.get');
  Route.delete('/users/:id', 'UserController.remove');

  // SetorController
  Route.patch('/setores/:id', 'SetorController.update');
  Route.delete('/setores/:id', 'SetorController.update');
}).middleware(['auth']);
