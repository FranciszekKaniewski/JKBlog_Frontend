export const sort = (data:any,type:string) => {
    switch (type){
        case 'ASC':
            data.sort((a,b) => a.createTime > b.createTime ? -1 : 1);
            break;
        case 'DESC':
            data.sort((a,b) => a.createTime > b.createTime ? 1 : -1);
            break;
        default:
            data.sort((a,b) => a.createTime > b.createTime ? -1 : 1);
    }

    return data;
}