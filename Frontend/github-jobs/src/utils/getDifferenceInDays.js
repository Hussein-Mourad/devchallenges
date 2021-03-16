// Gets the difference in days from now.
export default function getDifferenceInDays(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.round(
      (now.getTime() - date.getTime()) / (1000 * 3600 * 24)
    ).toFixed(0);
    return diff;
}
