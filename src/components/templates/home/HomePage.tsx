import {useAuth} from "../../../hooks/useAuth";
import {Posts} from "../../organisms/Posts/Posts";
import {Banner} from "../../organisms/Baner/Banner";
import {Separator} from "../../atoms/sepatator/separator";
import {Link} from "react-router-dom";
import {AddPost} from "../../atoms/AddPost/AddPost";
import {ShowGalleryBtn} from "../../atoms/ShowGallery/ShowGalleryBtn.tsx";


export const HomePage = () => {
    //@ts-ignore
    const {auth} = useAuth();

    return (
        <>
            <Banner />
            {auth?.role === 'admin' ?
                <>
                    <Link className='add-link' to={"/wpisy/nowy"}>
                        <AddPost/>
                    </Link>
                    <Link className='add-link' to={"/galeria"}>
                        <ShowGalleryBtn/>
                    </Link>
                </>
                :
                null}
            <Separator text={"Najnowsze wpisy"}/>
            <Posts />
        </>
    )
}