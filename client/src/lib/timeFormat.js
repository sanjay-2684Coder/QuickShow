const timeFormat  = (minutes) =>{
  const hours = Math.floor(minutes / 60);
  const minutesReminder = minutes % 60;
  return `${hours}hrs ${minutesReminder}min`
}

export default timeFormat;