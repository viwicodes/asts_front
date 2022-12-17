import { useRouter } from "next/router"
import { useSelector, useDispatch } from "react-redux"
import { admin } from '../Slices/adminSlice'

export default function Home() {
  // const count = useSelector((state) => state.auth.address)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleAdminRegister = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        // Metamask avalable
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        const state = {
          address: accounts[0],
        }
        console.log(state)
        dispatch(admin(state))
        router.push('/admin')
      } catch (err) {
        console.log(err.message)
      }
    }
    else {
      console.log("Metamask not installed.")
    }
  }

  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="row w-100 m-0">
            <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
              <div className="card col-lg-4 mx-auto">
                <div className="card-body px-5 py-5">
                  <form>

                    <div className="d-flex">
                      <button onClick={(e) => {
                        e.preventDefault()
                        router.push('students/signup')
                      }} style={{ "padding": "30px" }} className="btn btn-facebook mr-2 col">Student</button>
                      <button onClick={(e) => {
                        e.preventDefault()
                        handleAdminRegister()
                      }} style={{ "padding": "30px" }} className="btn btn-google col">Admin</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
