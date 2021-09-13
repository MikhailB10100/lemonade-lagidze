import React, { useEffect, useState } from 'react'
import ApplicationsListTable from '@components/ApplicationsListTable'
import { NavLink } from 'react-router-dom'
import AdminService from '@api/admin-service'
import logo from '@assets/logo.png'

interface AdminProps {
  setAuth: Function
}

function Admin({ setAuth }: AdminProps) {
  document.title = 'Admin'

  const [applications, setApplications] = useState([])

  async function logout() {
    try {
      const response = await AdminService.logout()
      if (response) {
        localStorage.removeItem('token')
        setAuth(false)
      }
    } catch (e) {
      console.log(e.response?.data?.message)
    }
  }

  const deleteAllApplications = async () => {
    const deleteConfirmation = confirm('Вы точно хотите удалить все заявки?')
    if (deleteConfirmation) {
      const response = await AdminService.deleteAllApplications()
      if (response) setApplications([])
    }
  }

  useEffect(() => {
    const getApplicationsDataList = async () => {
      const response = await AdminService.getAllApplications()
      const applicationsDataList = response.data.applications
      if (applicationsDataList) setApplications(applicationsDataList)
    }
    getApplicationsDataList()
  }, [])

  return (
    <div className="admin">
      <aside className="admin__aside">
        <NavLink to="/">
          <img src={logo} alt="логотип компании" />
        </NavLink>

        <button onClick={() => logout()}>Выйти</button>
      </aside>
      <div className="admin__body">
        <div className="admin__controller">
          <button
            className="delete-all-button admin__delete-all-applications-btn"
            onClick={deleteAllApplications}
          >
            Удалить все заявки
          </button>
        </div>

        <div className="admin__tables">
          <ApplicationsListTable
            applications={applications}
            setApplications={setApplications}
          />
        </div>
      </div>
    </div>
  )
}

export default Admin
