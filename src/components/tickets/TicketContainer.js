import { useState } from "react"
import { TicketList } from "./TicketList"
import { TicketSearch } from "./TicketSearch"

export const TicketContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")
    
    return (
        <>
            <TicketSearch setterFunction={setSearchTerms} example1={100} example2={"foobar"}/>
            <TicketList searchTermState={searchTerms}/> 
        </>
    )
}