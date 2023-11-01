import { useEffect, useState } from "react"
import "./Employees.css"
import { Employee } from "./Employee"
import { getEmployeeList } from "../APIManager"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
            getEmployeeList()
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })
        },
        []
    )

    return <article className="employees">
        {
            employees.map(employee => <Employee key={`employee--${employee.id}`} id={employee.id} fullName={employee.fullName} email={employee.email} />)
        }
    </article>
}