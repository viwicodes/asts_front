import { useRouter } from "next/router"
import { useSelector, useDispatch } from "react-redux"
import { studentSignin, adminSignin } from '../Slices/loginSlice'

export default function Home() {
  // const count = useSelector((state) => state.auth.address)
  const dispactch = useDispatch()
  const router = useRouter()

  async function studentLogin() {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        // Metamask avalable
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        const state = {
          address: accounts[0]
        }
        dispactch(studentSignin(state))
        router.push('/students')

      } catch (err) {
        console.log(err.message)
      }
    }
    else {
      console.log("Metamask not installed.")
    }
  }

  async function adminLogin() {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        // Metamask avalable
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        const state = {
          address: accounts[0]
        }
        dispactch(adminSignin(state))
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
                        // studentLogin()
                      }} style={{ "padding": "30px" }} className="btn btn-facebook mr-2 col">Student</button>
                      <button onClick={(e) => {
                        e.preventDefault()
                        adminLogin()
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
