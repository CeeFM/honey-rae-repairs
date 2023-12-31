import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeDetails } from "../APIManager"

export const EmployeeDetails = () => {
    const {employeeId} = useParams()
    const [employee, updateEmployee] = useState({})

    useEffect(
        () => {
            getEmployeeDetails(employeeId)
                .then((data) => {
                    const singleEmployee = data[0]
                    updateEmployee(singleEmployee)
                })
        },
        [employeeId]
    )

    return <section className="employee">
    <div>
        <header className="employee__header">{employee?.user?.fullName}</header>
    </div>
    <div>Email: {employee?.user?.email}</div>
    <div>Specialty: {employee?.specialty}</div>
    <div>Rate: {employee?.rate}</div>
    <footer className="employee__footer">Currently working on {employee?.employeeTickets?.length} tickets</footer>
    </section>
}