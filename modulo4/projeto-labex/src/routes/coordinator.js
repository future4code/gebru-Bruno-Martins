
export const goHomePage = (navigate) => {
    navigate("/")
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}

export const goTripDetailsPage = (navigate, id) => {
   navigate(`/admin/trips/${id}`)
}

export const goListTripsPage = (navigate) => {
    navigate("/trips/list")
}
 export const goLoginPage = (navigate) => {
     navigate("/login")
 }


export const goApplicationFormPage = (navigate) => {
    navigate("/trips/application")
}

export const goAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
}
