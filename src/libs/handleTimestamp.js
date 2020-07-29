export default function (value, hours = false, minutes = false, seconds = false, emptyText = "") {
  if (!value) return emptyText;
  
  const dateObj = new Date(value);
  let year = dateObj.getFullYear();
  let month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  let date = dateObj.getDate().toString().padStart(2, "0");
  
  let time = "";
  if (hours) {
    time += " " + dateObj.getHours().toString().padStart(2, "0");
  }
  if (minutes) {
    time += ":" + dateObj.getMinutes().toString().padStart(2, "0");
  }
  if (seconds) {
    time += ":" + dateObj.getSeconds().toString().padStart(2, "0");
  }
  return `${year}-${month}-${date}${time}`;
}
