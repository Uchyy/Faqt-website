export function timeAgo(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;

    if (diff < minute) {
        return "Just now";
    }

    if (diff < hour) {
        const minutes = Math.floor(diff / minute);
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    }

    if (diff < day) {
        const hours = Math.floor(diff / hour);
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    }

    if (diff < week) {
        const days = Math.floor(diff / day);
        return `${days} ${days === 1 ? "day" : "days"} ago`;
    }

    if (diff < month) {
        const weeks = Math.floor(diff / week);
        return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
    }

    if (diff < year) {
        const months = Math.floor(diff / month);
        return `${months} ${months === 1 ? "month" : "months"} ago`;
    }

    const years = Math.floor(diff / year);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
}