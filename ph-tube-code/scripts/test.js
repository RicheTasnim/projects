function getTime(time){
    const hour = parseInt (time/3600);
    let second = time%3600;
    let minute = parseInt (second/60);
    second = second%60;
    return `${hour} hour ${minute} minute ${second} second ago`;
}

console.log(getTime(16278));
