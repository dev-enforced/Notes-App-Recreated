import { dateFormatter } from "constants";
const dateExtractor = (creationDetailsGiven) => {
  return dateFormatter
    .formatToParts(new Date(creationDetailsGiven))
    .filter(({ type }) => type === "day" || type === "month" || type === "year")
    .map(({ type, value }) => {
      switch (type) {
        default:
          return value;
      }
    })
    .join(" ");
};

const timeExtractor = (creationDetailsGiven) => {
  return dateFormatter
    .formatToParts(new Date(creationDetailsGiven))
    .filter(
      ({ type }) => type === "hour" || type === "minute" || type === "second"
    )
    .map(({ type, value }) => {
      switch (type) {
        case "hour":
        case "minute":
        case "second":
          return value;
        default:
          return "";
      }
    })
    .join(":");
};

export { dateExtractor, timeExtractor };
