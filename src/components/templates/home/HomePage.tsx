import {useAuth} from "../../../hooks/useAuth";
import {Posts} from "../../organisms/Posts/Posts";
import {Banner} from "../../organisms/Baner/Banner";
import {Separator} from "../../atoms/sepatator/separator";


export const HomePage = () => {
    const {auth} = useAuth();

    return (
        <>
            <Banner />
            <Separator text={"Najnowsze wpisy"}/>
            <Posts />
        </>
    )
}