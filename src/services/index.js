export const _performDate = (dateString) => {
  // Create a new Date object from the date string.
  const dateObject = new Date(dateString);

  // Get the year, month, day, hours, minutes, and seconds from the Date object.
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();

  // Format the date and time as a string.
  return  `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

}