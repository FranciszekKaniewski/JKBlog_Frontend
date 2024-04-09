export const dataConvert = (data:Date) => {

    const dateFormat = new Date(data)

    return dateFormat.toLocaleDateString();
}