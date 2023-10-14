// Change dateString format 
export const _performDate = (dateString) => {
  // Create a new Date object from the date string.
  const dateObject = new Date(dateString);

  // Get the year, month, day, hours and minutes from the Date object.
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  // Format the date and time as a string.
  return  `${year}-${month}-${day} ${hours}:${minutes}`;

}