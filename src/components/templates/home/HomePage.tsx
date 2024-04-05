import {useAuth} from "../../../hooks/useAuth";


export const HomePage = () => {
    const {auth} = useAuth();

    return (
        <>
            <h1>Witaj na stronie głównej {auth.name} twoja rola to {auth.role} </h1>
            <h2>Blog dla wyszystkich!</h2>
            {auth.role != null ? <h2>Dla zalogowanych</h2>:null}
            {auth.role === 'admin' ? <h2>Toajne ADMIN</h2>:null}
        </>
    )
}