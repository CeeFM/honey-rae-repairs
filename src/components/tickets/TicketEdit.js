import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const TicketEdit = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [ticket, update] = useState({
        description: "",
        emergency: false
    })

    const { ticketId } = useParams()
    const navigate = useNavigate()
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */

        useEffect(
            () => {
                fetch(`http://localhost:8088/serviceTickets/${ticketId}`)
                    .then(response => response.json())
                    .then((data) => {
                        update(data)
                    })
            }, [ticketId]
        )

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticket)
        })

            .then(response => response.json())
            .then(() => {
                navigate("/tickets")
            })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        value={ticket.description}
                        onChange={
                            (event) => {
                                const copy = {...ticket}
                                copy.description = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        checked={ticket.emergency}
                        onChange={
                            (event) => {
                                const copy = {...ticket}
                                copy.emergency = event.target.checked
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>
                Save Edits
            </button>
        </form>
    )
}