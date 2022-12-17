import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { dispStudent } from '../../api/asts-api/src/student'
import { dispConductedEvents } from '../../api/asts-api/src/events'
import { getStudent } from '../../Slices/studentSlice'
import { useRouter } from "next/router"



export default function index() {
    const authed = useSelector((state) => state.auth)
    const user = useSelector((state) => state.student)
    const [tableItems, setTableItems] = useState([])
    const router = useRouter()
    // console.log(authed.address)
    const dispatch = useDispatch()
    useEffect(() => {
        dispStudent(user.address)
            .then(res => {
                const state = {
                    name: res.name,
                    address: authed.address,
                    department: res.department,
                    adm_no: res.admn_no,
                    tokens: res.tokens
                }
                dispatch(getStudent(state))
            })
        dispConductedEvents(user.address)
            .then(res => {
                // console.log(res)
                setTableItems(res)
                // setTableItems(res.map((each) => {
                //     // render(){
                //     <>
                //         <td>{each.event_name}</td>
                //         <td>{each.event_id}</td>
                //     </>
                // }
                // render(){
                // console.log(each.event_id)
                // console.log(each.event_name)
                // <>
                //     <td key={each.event_id}> {each.event_name} </td>
                //     <td> {each.event_id} </td>
                //     {/* <td> Dashboard </td> */}
                // </>
                // }
                // }
                // for (let i = 0; i < length; ++i) {
                //     console.log("i")
                //     console.log(res[i].event_id)
                //     const state = {
                //         event_name: res[i].event_name,
                //         even_id: res[i].event_id
                //     }
                //     dispatch(getEvents(state))
                // }
            })

    }, [])

    return (
        <>
            {/* {console.log(tableItems)} */}
            <div className="container-scroller">
                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                        <a className="sidebar-brand brand-logo" href="index.html"><img src="assets/images/logo.svg" alt="logo" /></a>
                        <a className="sidebar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
                    </div>
                    <ul className="nav">
                        <li className="nav-item profile">
                            <div className="profile-desc">
                                <div className="profile-pic">
                                    <div className="count-indicator">
                                        <img className="img-xs rounded-circle " src="assets/images/faces/face15.jpg" alt="" />
                                        <span className="count bg-success" />
                                    </div>
                                    <div className="profile-name">
                                        <h5 className="mb-0 font-weight-normal">{user.name}</h5>
                                        <span>Gold Member</span>
                                    </div>
                                </div>
                                <a href="#" id="profile-dropdown" data-toggle="dropdown"><i className="mdi mdi-dots-vertical" /></a>
                                <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
                                    <a href="#" className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-settings text-primary" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-onepassword  text-info" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-calendar-today text-success" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nav-category">
                            <span className="nav-link">Navigation</span>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" href="index.html">
                                <span className="menu-icon">
                                    <i className="mdi mdi-speedometer" />
                                </span>
                                <span className="menu-title">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                                <span className="menu-icon">
                                    <i className="mdi mdi-laptop" />
                                </span>
                                <span className="menu-title">Basic UI Elements</span>
                                <i className="menu-arrow" />
                            </a>
                            <div className="collapse" id="ui-basic">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" href="pages/forms/basic_elements.html">
                                <span className="menu-icon">
                                    <i className="mdi mdi-playlist-play" />
                                </span>
                                <span className="menu-title">Form Elements</span>
                            </a>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" href="pages/tables/basic-table.html">
                                <span className="menu-icon">
                                    <i className="mdi mdi-table-large" />
                                </span>
                                <span className="menu-title">Tables</span>
                            </a>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" href="pages/charts/chartjs.html">
                                <span className="menu-icon">
                                    <i className="mdi mdi-chart-bar" />
                                </span>
                                <span className="menu-title">Charts</span>
                            </a>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" href="pages/icons/mdi.html">
                                <span className="menu-icon">
                                    <i className="mdi mdi-contacts" />
                                </span>
                                <span className="menu-title">Icons</span>
                            </a>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                                <span className="menu-icon">
                                    <i className="mdi mdi-security" />
                                </span>
                                <span className="menu-title">User Pages</span>
                                <i className="menu-arrow" />
                            </a>
                            <div className="collapse" id="auth">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                                    <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                                    <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                                    <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                                    <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item menu-items">
                            <a className="nav-link" href="http://www.bootstrapdash.com/demo/corona-free/jquery/documentation/documentation.html">
                                <span className="menu-icon">
                                    <i className="mdi mdi-file-document-box" />
                                </span>
                                <span className="menu-title">Documentation</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* partial */}
                <div className="container-fluid page-body-wrapper">
                    {/* partial:partials/_navbar.html */}
                    <nav className="navbar p-0 fixed-top d-flex flex-row">
                        <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                            <a className="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
                        </div>
                        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
                            
                            <ul className="navbar-nav navbar-nav-right">
                                <li className="nav-item dropdown d-none d-lg-block">
                                    <div className="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" onClick={() => router.push('/students/event')}>+ Register New Event</div>
                                    
                                </li>
                            </ul>
                            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                                <span className="mdi mdi-format-line-spacing" />
                            </button>
                        </div>
                    </nav>
                    {/* partial */}
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                
                            </div>
                            
                            <div className="row">
                                <div className="col-sm-4 grid-margin">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>ACADEMIC</h5>
                                            <div className="row">
                                                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                                                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                                                        <h2 className="mb-0">{user.tokens.academic}</h2>
                                                        <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                                                    </div>
                                                    <h6 className="text-muted font-weight-normal">11.38% Since last month</h6>
                                                </div>
                                                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                                    <i className="icon-lg mdi mdi-codepen text-primary ml-auto" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 grid-margin">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>SOCIAL</h5>
                                            <div className="row">
                                                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                                                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                                                        <h2 className="mb-0">{user.tokens.social}</h2>
                                                        <p className="text-success ml-2 mb-0 font-weight-medium">+8.3%</p>
                                                    </div>
                                                    <h6 className="text-muted font-weight-normal"> 9.61% Since last month</h6>
                                                </div>
                                                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                                    <i className="icon-lg mdi mdi-wallet-travel text-danger ml-auto" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 grid-margin">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>SPORTS</h5>
                                            <div className="row">
                                                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                                                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                                                        <h2 className="mb-0">{user.tokens.sports}</h2>
                                                        <p className="text-danger ml-2 mb-0 font-weight-medium">-2.1% </p>
                                                    </div>
                                                    <h6 className="text-muted font-weight-normal">2.27% Since last month</h6>
                                                </div>
                                                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                                                    <i className="icon-lg mdi mdi-monitor text-success ml-auto" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-12 grid-margin">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Upcoming Events</h4>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <div className="form-check form-check-muted m-0">
                                                                    <label className="form-check-label">
                                                                        <input type="checkbox" className="form-check-input" />
                                                                    </label>
                                                                </div>
                                                            </th>
                                                            {/* <th> Client Name </th>
                                                            <th> Order No </th>
                                                            <th> Product Cost </th>
                                                            <th> Project </th> */}
                                                            <th> Event name </th>
                                                            <th> Event ID </th>
                                                            <th> Status </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            tableItems.map(each => {
                                                                return (
                                                                    <tr>
                                                                        <td>
                                                                            <div className="form-check form-check-muted m-0">
                                                                                <label className="form-check-label">
                                                                                    <input type="checkbox" className="form-check-input" />
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td> {each.event_id} </td>
                                                                        <td> {each.event_name} </td>
                                                                        <td>
                                                                            <div className="badge badge-outline-warning">Pending</div>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })

                                                        }

                                                        
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <footer className="footer">
                            <div className="d-sm-flex justify-content-center justify-content-sm-between">
                                <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
                                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a href="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin templates</a> from Bootstrapdash.com</span>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

        </>
    )
}