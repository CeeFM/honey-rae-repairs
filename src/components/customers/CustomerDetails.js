import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    const {customerId} = useParams()
    const [customer, updateCustomer] = useState({})

    useEffect(
        () => {
            return fetch(`http://localhost:8088/customers?_expand=user&id=${customerId}`)
                .then(response => response.json())
                .then((data) => {
                    const singleCustomer = data[0]
                    updateCustomer(singleCustomer)
                })
        },
        [customerId]
    )

    return <section className="customer">
    <div>
        <header className="customer__header">{customer?.user?.fullName}</header>
    </div>
    <div>Address: {customer.address}</div>
    <div>Phone Number: {customer.phoneNumber}</div>
</section>
}