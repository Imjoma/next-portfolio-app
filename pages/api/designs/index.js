import { designs } from "../../../helper/data";

export default function handler(req, res) {
  res.status(200).json(designs);
}
