export const dataConvert = (data:Date,time=false) => {

    const dateFormat = new Date(data)
    const date = dateFormat.toLocaleDateString();

    return !time ?
        date :
        `${date} ${dateFormat.getHours()}:${dateFormat.getMinutes()}`
}