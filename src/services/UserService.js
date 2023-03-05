const baseURL = 'http://localhost:3005/api/users'

export const getAll = async () =>{
    const response = await fetch(baseURL)
    const result = await response.json()

   return result.users;
}

export const getOne = async (id) =>{
    const response = await fetch(`${baseURL}/${id}`)
    const result = await response.json()
    console.log(result)

    const user = result['user']

    const {country, city, street, streetNumber} = user.address
      user.country = country
      user.city = city
      user.street = street
      user.streetNumber = streetNumber

    delete user.address

    return user
}

export const editOne = async (id, firstName, lastName, email, phoneNumber,imageUrl, country, city, street, streetNumber) =>{
    const body = {
        firstName,
        lastName,
        email,
        imageUrl,
        phoneNumber,
    }
    
    const adress = {
        country,
        city,
        street,
        streetNumber,
    }
        
        
        const toSend = `{}`
        console.log(toSend)
    const response = await fetch(`${baseURL}/${id}`, {
        method: "PUT",
        body: toSend,
        
    })
    const result = await response.json()

    console.log(firstName)

    return result
}