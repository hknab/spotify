const convertSecond = (duration) =>{
    let hours = Math.floor(duration / 3600);
    let minute = Math.floor((duration % 3600) / 60);
    let second = Math.floor(duration % 60);

    if(hours < 10) hours = "0" + hours;
    if(minute < 10) minute = "0" + minute;
    if(second < 10) second = "0" + second;

    if(hours === '00')return minute + ":" + second;
    return hours + ":" + minute + ":" + second ;
}
export default convertSecond