import { useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import Spinner from "../layout/Spinner"
import UserItem from "./UserItem"

function UserResult() {
  const { users, loding } = useContext(GithubContext)
  // testing puropse only
  //   useEffect(() => {
  //     fetchUsers()
  //   }, [])

  if (!loding) {
    return (
      <div className='grid grid-col-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResult
