import {AddComment} from "../../molecules/AddComment/AddComment";
import {Comment} from "../../molecules/Comment/Comment";
import {useEffect, useState} from "react";
import {getComments} from "../../../api/posts/comments";
import {CommentType} from "../../../types/posts/comments";
import {useAuth} from "../../../hooks/useAuth";
import {sort} from "../../../utils/sort";
import {Loading} from "../../atoms/Loading/Loading";


export const PostComments = ({id}:{id:string}) => {

    const [comments, setComments] = useState<CommentType[]|null>(null);
    const [canComment, setCanComment] = useState(false);
    //@ts-ignore
    const {auth} = useAuth();


    let ignore = false;
    useEffect(()=> {
        if(!ignore) {
            (async () => {
                const res = await getComments(id);
                const sorted = sort(res.body)
                setComments(sorted);
                if(!res.body.filter((e:any) => e.user.username === auth.username)[0] && auth.role){
                    setCanComment(true);
                }
            })()
        }

        return () => {ignore = true}
    },[auth?.username])

    if(!comments || !auth) return <Loading />

    const remove = (id:string):void => {
        setComments(prevState => (prevState as CommentType[])?.filter((e: CommentType) => e.id != id));
    }
    const add = (comment:CommentType):void => {
        setComments(prevState => [comment, ...(prevState as CommentType[])]);
        setCanComment(false);
    }
    const update = (id: string, content: string) => setComments(prevState => {
        const obj = {...(prevState as CommentType[])?.filter(e => e.id === id)[0],content};
        const pState = prevState?.filter((e) => e.id != id);
        return [obj,...pState]
    });

    const commentElements = comments.map(e => <Comment
            key={e.id}
            id={e.id}
            username={e.user.username}
            name={e.user.name ?? ''}
            surname={e.user.surname ?? ''}
            role={e.user.role}
            createTime={e.createTime}
            content={e.content}
            remove={remove}
            update={update}
        />)

    return(
        <>
            {canComment ? <AddComment id={id} add={add}/> : null}
            {commentElements}
        </>
    )
}