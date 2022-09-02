import { createStore, produce } from "solid-js/store"

interface IUser {
  email: string,
  password: string,
}

interface IStore {
  isLoggedIn: boolean,
  user: IUser,
  token: string,
}

const initStoreState: IStore = {
  isLoggedIn: false,
  user: {
    email: "",
    password: "",
  },
  token: "",
}

const [store, setStore] = createStore<IStore>(
  (localStorage.user_store)
    ? JSON.parse(localStorage.user_store)
    : initStoreState
)

function Login(data: { user: IUser, token: string }) {
  setStore(
    produce<IStore>(
      store => {
        store.user = data.user
        store.token = data.token
        store.isLoggedIn = true
      }
    )
  )
  localStorage.user_store = JSON.stringify(store)
}

function Logout() {
  setStore(initStoreState)
  localStorage.user_store = JSON.stringify(initStoreState)
}

export default {
  store,
  Login,
  Logout,
}