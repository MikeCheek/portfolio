import {NextApiRequest, NextApiResponse} from "next"
import {firestore} from "../../../../firebase/clientApp"
import {updateDoc, doc, arrayUnion, getDoc} from "firebase/firestore"

type Res = {
  ok?: boolean
  message?: string
  date?: number[]
}

export type Data = {
  date: number[]
}

type BodyReq = {
  page: string
  mbare?: boolean
}

const checkDev = (mbare?: boolean) => {
  return process.env.NODE_ENV === "development" || (mbare && mbare == true)
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Res>) => {
  if (req.method == "POST") {
    const body: BodyReq = req.body
    const page = doc(firestore, checkDev(body.mbare) ? "dev-pages" : "pages", body.page)
    return updateDoc(page, {
      date: arrayUnion(Date.now()),
    })
      .then(() => res.status(200).json({ok: true}))
      .catch(() => res.status(300).json({ok: false, message: "Firestore error"}))
  }
  if (req.method == "GET") {
    const pages = doc(firestore, checkDev() ? "dev-pages" : "pages", "index")
    return getDoc(pages)
      .then((data) => res.status(200).json(data.data() as Data))
      .catch((e) => console.log(e))
  }
  return res.status(405).json({ok: false, message: "Method not allowed"})
}

export default handler

// fetch('/api/route-name', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(objectWithData),
//   })
