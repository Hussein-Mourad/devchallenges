function formatDate(dateString) {
     const today = new Date(dateString);
     return {
         dayName: today.toLocaleDateString("en-US", { weekday: "short" }),
         dayNum: String(today.getDate()).padStart(2, "0"),
         month: today.toLocaleDateString("en-US", { month: "short" }),
     };
}

export default formatDate
