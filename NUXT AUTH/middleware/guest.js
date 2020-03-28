// middleware para que usuarios que iniciaron sesion no vean paginas de registro e login
// si entran a login o register , habiendo un usuario con sesion , los manda a inicio
/* eslint-disable */

//recibe context, pero extraemos store y redirect
export default function ({ store, redirect }) {
    console.log(store.state)
    if (store.state.auth.loggedIn) {
        return redirect('/')
    }
}
