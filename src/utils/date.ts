import { format } from "date-fns";

export const formatDateRange = (startDate: string, endDate: string) => {
  const startFormatted = format(new Date(startDate), "d MMM yyyy");
  const endFormatted = format(new Date(endDate), "d MMM yyyy");

  const startSplitted = startFormatted.split(" ");
  const endSplitted = endFormatted.split(" ");

  if (startSplitted[2] !== endSplitted[2]) {
    return `${startFormatted}-${endFormatted}`;
  }

  if (startSplitted[1] !== endSplitted[1]) {
    return `${startSplitted[0]} ${startSplitted[1]}-${endFormatted}`;
  }

  return `${startSplitted[0]}-${endFormatted}`;
};
