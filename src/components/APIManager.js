export const getAllCustomers = () => {
    return fetch(`http://localhost:8088/customers?_expand=user`)
        .then(res => res.json())
}

export const getCustomerDetails = (id) => {
    return fetch(`http://localhost:8088/customers?_expand=user&id=${id}`)
        .then(res => res.json())
}

export const getEmployeeDetails = (id) => {
    return fetch(`http://localhost:8088/employees?_expand=user&_embed=employeeTickets&userId=${id}`)
          .then(response => response.json())
}

export const getEmployeeList = () => {
    return fetch(`http://localhost:8088/users?isStaff=true`)
             .then(response => response.json())
}