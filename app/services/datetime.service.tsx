import moment from "moment";
import { Alert } from "react-native";

var moments = require("moment");
require("moment/min/locales.min");
moment.locale("km");

export function _formatShortDate(date: any) {
  return moments.unix(date).format("ll");
}
export function _formatDateTime(date: any) {
  return  moment.unix(date).fromNow()
}

