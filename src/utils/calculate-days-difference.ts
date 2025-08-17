export function calculateDaysDifference(dateString: string): number {
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - inputDate.getTime();

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}
