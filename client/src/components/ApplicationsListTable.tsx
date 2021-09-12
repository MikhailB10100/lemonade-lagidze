import React from 'react'
import AdminService from '@api/admin-service'

type Application = {
  name: string
  phone: string
  text: string
  isDone: boolean
  date: number
  id: string
}

interface ApplicationsListTableProps {
  applications: Application[]
  setApplications: Function
}

function ApplicationsListTable({
  applications,
  setApplications,
}: ApplicationsListTableProps) {
  const removeApplicationHandler = async (id: string) => {
    const confirmed = confirm('Удалить заявку?')
    confirmed
      ? AdminService.deleteApplication(id).then((r) => {
          setApplications(applications.filter((item) => item.id != r.data.id))
        })
      : ''
  }

  const changeProcessStatusHandler = async (id: string, status: boolean) => {
    const response = await AdminService.setProcessApplication(id, status)
    const { application } = response.data
    if (application) {
      setApplications([
        ...applications.map((item) => {
          if (item.id === application.id) return application
          return item
        }),
      ])
    }
  }

  const applicationsList = applications.map((item, index) => {
    console.log(item)
    const { name, phone, text, isDone, date, id } = item
    const newDate = new Date(date)
    const days = newDate.getDate()
    const month = newDate.getMonth() + 1
    const year = newDate.getFullYear()
    const hours = newDate.getHours()
    const minutes = newDate.getMinutes()

    const checkValue = (value: number): string | number =>
      value < 10 ? '0' + value : value

    return (
      <tr
        className={`application-row-wrapper${isDone ? ' processed' : ''}`}
        key={`application-row${index}`}
      >
        <td>{index + 1}</td>
        <td>
          {`${checkValue(days)}.${checkValue(month)}.${year}`}
          <br />
          {`${checkValue(hours)}:${checkValue(minutes)}`}
        </td>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{text}</td>
        <td>
          <button
            className="application-row__delete-button"
            onClick={() => removeApplicationHandler(id)}
          >
            Удалить
          </button>
        </td>
        <td>
          <input
            className="application-row__done-button"
            checked={isDone}
            type="checkbox"
            onChange={() => changeProcessStatusHandler(id, isDone)}
          />
        </td>
      </tr>
    )
  })
  return (
    <table className="admin__applications-table">
      <thead>
        <tr>
          <th>№</th>
          <th>Дата</th>
          <th>Компания</th>
          <th>Номер</th>
          <th className="text-column">Текст</th>
          <th>Удалить?</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>{applicationsList}</tbody>
    </table>
  )
}

export default ApplicationsListTable
