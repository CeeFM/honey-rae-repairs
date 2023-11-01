import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAllCustomers } from "../APIManager"

export const CustomerDetails = () => {
    const {customerId} = useParams()
    const [customer, updateCustomer] = useState({})

    useEffect(
        () => {
            getAllCustomers()
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