
export default function Header({authUser}){
    if(authUser){
        return <>
            <p>Auth User id: {authUser.id}</p>
        </>
    } else {
        return <>
            <p>Login</p>
        </>
    }

}