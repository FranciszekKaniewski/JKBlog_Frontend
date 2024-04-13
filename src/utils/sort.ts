type sortDirType = 'ASC' | 'DESC'
type ByType = 'DATE' | 'TITLE' | 'CATEGORY'


export const sort = (data:any,type:sortDirType='ASC',by:ByType='DATE') => {
    const x = type === 'ASC' ? 1 : -1
    const y = type === 'DESC' ? 1 : -1

    switch(by){
        case "DATE":
            data.sort((a,b) => a.createTime > b.createTime ? y : x);
            break;
        case "CATEGORY":
            data.sort((a,b) => a.category > b.category ? x : y);
            break;
        case "TITLE":
            data.sort((a,b) => a.title.toUpperCase() > b.title.toUpperCase() ? x : y);
            break;
    }

    return data;
}