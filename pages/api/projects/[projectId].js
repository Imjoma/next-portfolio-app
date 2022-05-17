import { projects } from "../../../helper/data";

export default function handler(req, res) {
  // designId matches the req.query
  const { projectId } = req.query;
  const project = projects.find(
    (project) => project.id === parseInt(projectId)
  );
  res.status(200).json(project);
}
