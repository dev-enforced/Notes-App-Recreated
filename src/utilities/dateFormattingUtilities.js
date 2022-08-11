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
  const newTimeArray = dateFormatter
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
    });
  // Just for checking whether the hour received is 24 or not and rectifying it
  const rectifiedArray = newTimeArray.map((everyDetail, index) => {
    if (everyDetail === "24" && index === 0) {
      return "00";
    } else {
      return everyDetail;
    }
  });
  return rectifiedArray.join(":");
};

export { dateExtractor, timeExtractor };
