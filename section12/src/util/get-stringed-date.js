export const getStringedDate = (targetData) => {
    let year = targetData.getFullYear();
    let month = targetData.getMonth() + 1;
    let date = targetData.getDate();

    if(month < 10) month = `0${month}`;
    if(date < 10) date = `0${date}`;
    return `${year}-${month}-${date}`;
}


