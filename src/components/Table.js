import { NoContent } from "./NoContent"
import { NoUsers } from "./NoUsers"
import { OnError } from "./OnError"
import { TableHeadRow } from "./TableHeadRow"
import { TablePagination } from "./TablePagination"
import { TableRow } from "./TableRow"

import { useState } from "react"
import { UserDetails } from "./UserDetauls"
import { UserEdit } from "./UserEdit"
import { getOne } from "../services/UserService"
export const Table = ({users, err, failedToFetch, loading}) => {
    
    const [detailsUser, detailsSelect] = useState(null)
    const [createUser, createSelect] = useState(null)
    const [editUser, editSelect] = useState(null)

    async function onInfoClick(partialUser){
      
      const user = await getOne(partialUser._id)
      
      
      detailsSelect(user)

    }
    async function onCreateClick(partialUser){
      createSelect(partialUser)
    }
    async function onEditClick(partialUser){
      const user = await getOne(partialUser._id)
      editSelect(user)

    }


    return(
        <>

        {detailsUser && <UserDetails user = {detailsUser} setSelect = {detailsSelect}/>}
        {editUser && <UserEdit user = {editUser} setSelect = {editSelect}/>}
        <div className="table-wrapper">


        {loading && <div className="spinner"></div>}
            {!users && <NoUsers />}

        
            {failedToFetch && <NoContent />}
        
            {err && <OnError />}

        
        <table className="table">
          <thead>
                <TableHeadRow />
          </thead>
          <tbody>
                
                {users.map(user => 
                    <TableRow key={user._id} user = {user} setDetails = {onInfoClick} setCreate = {onCreateClick} setEdit = {onEditClick}/>
                )
                }

          </tbody>
        </table>
      </div>
      
      <button className="btn-add btn">Add new user</button>
      
        <TablePagination /> 

      </>
    )
}