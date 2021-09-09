const formatDateTime = (date: string): string => {
    const dateFormatted = new Date(date);
    const year = dateFormatted.getFullYear();
    
    const second = dateFormatted.getSeconds() > 9 
    ? dateFormatted.getSeconds() : `0${dateFormatted.getSeconds()}`;
        
    const minute = dateFormatted.getMinutes() > 9 
    ? dateFormatted.getMinutes() : `0${dateFormatted.getMinutes()}`;

    const hour = dateFormatted.getHours() > 9 
    ? dateFormatted.getHours() : `0${dateFormatted.getHours()}`;

    const day = dateFormatted.getDate() > 9 
    ? dateFormatted.getDate() : `0${dateFormatted.getDate()}`;
    
    const month = dateFormatted.getMonth() + 1 > 9
    ? dateFormatted.getMonth() + 1 : `0${dateFormatted.getMonth() + 1}`; 
 
    return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
 };
 
 export default formatDateTime;