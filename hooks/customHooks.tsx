import dayjs from "dayjs";

const statusBullet = (status: string, content: string) => {
  // const statuses = [
  //   { status: "Not Started", background: "blue" },
  //   { status: "In Progress", background: "indigo" },
  //   { status: "Pending", background: "yellow" },
  //   { status: "Paused", background: "red" },
  //   { status: "Closed", background: "black" },
  //   { status: "Not Paid", background: "red" },
  //   { status: "Paid", background: "green" },
  // ];

  if (status == "Not Started")
    return (
      <span className="relative inline-block p-1 text-center text-white leading-tight">
        <span
          aria-hidden
          className="absolute inset-0 bg-black opacity-50 rounded"
        ></span>
        <span className="relative">{content}</span>
      </span>
    );
  if (status == "In Progress")
    return (
      <span className="relative inline-block p-1 text-center text-indigo-900 leading-tight">
        <span
          aria-hidden
          className="absolute inset-0 bg-indigo-200 opacity-50 rounded"
        ></span>
        <span className="relative">{content}</span>
      </span>
    );
  if (status == "Pending")
    return (
      <span className="relative inline-block p-1 text-center text-yellow-900 leading-tight">
        <span
          aria-hidden
          className="absolute inset-0 bg-yellow-200 opacity-50 rounded"
        ></span>
        <span className="relative">{content}</span>
      </span>
    );
  if (status == "Paused")
    return (
      <span className="relative inline-block p-1 text-center text-red-900 leading-tight">
        <span
          aria-hidden
          className="absolute inset-0 bg-red-200 opacity-50 rounded"
        ></span>
        <span className="relative">{content}</span>
      </span>
    );
  if (status == "Closed")
    return (
      <span className="relative inline-block p-1 text-center text-green-900 leading-tight">
        <span
          aria-hidden
          className="absolute inset-0 bg-green-200 opacity-50 rounded"
        ></span>
        <span className="relative">{content}</span>
      </span>
    );
};

const currencyHandler = (value: number, currency: string) => {
  const response = new Intl.NumberFormat("en-In", {
    style: "currency",
    currency: currency,
  }).format(value);
  return response;
};

const dateDifferences = (date1: string, date2: string) => {
  const firstConvertedDate = dayjs(date1);
  const secondConvertedDate = dayjs(date2);

  const differences = firstConvertedDate.diff(secondConvertedDate, "day");
  return differences;
};

const truncator = (value: string, numOfChar: number): string =>
  value.substring(value.length - numOfChar);

export { statusBullet, currencyHandler, dateDifferences, truncator };
