const formatJSDate = (date: string): Date => {
    let datetime = date.split(' ');
    let dateStr = datetime[0].split('/');
    let timeStr = datetime[1] ? datetime[1].split(':') : '00:00:00';

   const dateJS = new Date(parseInt(dateStr[2]), parseInt(dateStr[1])-1, parseInt(dateStr[0]), parseInt(timeStr[0]), parseInt(timeStr[1]), parseInt(timeStr[2]));

   return dateJS;
};

export default formatJSDate;