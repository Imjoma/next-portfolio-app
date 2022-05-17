import { designs } from "../../../helper/data";

export default function handler(req, res) {
  // designId matches the req.query
  const { designId } = req.query;
  const design = designs.find((design) => design.id === parseInt(designId));
  res.status(200).json(design);
}
