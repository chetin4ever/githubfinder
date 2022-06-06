import { createContext, useReducer, useState } from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([])
  // const [loding, setLoding] = useState(true)

  const initialState = {
    users: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  // fetch users for testing purpose
  const fetchUsers = async () => {
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    const data = await response.json()
    console.log(data)
    dispatch({ type: "GET_USERS", payload: data })
  }
  // search users
  const searchUsers = async (text) => {
    // console.log(text)
    setLoading()
    const params = new URLSearchParams({
      q: text,
    })
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    // console.log(response)
    const { items } = await response.json()
    dispatch({ type: "GET_USERS", payload: items })
  }
  // clear user - serach result
  const clearUsers = () => {
    dispatch({ type: "CLEAR_USER" })
  }
  // set loading
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" })
    console.log("setloding")
  }
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loding: state.lodaing,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
export default GithubContext
