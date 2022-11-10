import type {NextApiRequest, NextApiResponse} from "next"
import {projectsList} from "../../../../utilities/info"
import {Project} from "../../../../utilities/info.types"

const handler = (req: NextApiRequest, res: NextApiResponse<Project[]>) => {
  res.status(200).json(projectsList)
}

export default handler
