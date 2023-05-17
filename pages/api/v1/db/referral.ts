import {NextApiRequest, NextApiResponse} from "next"
import {firestore} from "@utilities/firebase/clientApp"
import {doc, arrayUnion, setDoc} from "firebase/firestore"

type Res = {
  ok?: boolean
  message?: string
  date?: number[]
}

export type Data = {
  date: number[]
}

type BodyReq = {
  source: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Res>) => {
  if (req.method == "POST") {
    const body: BodyReq = req.body
    const source = doc(firestore, "referral", body.source)
    return setDoc(
      source,
      {
        date: arrayUnion(Date.now()),
      },
      {merge: true}
    )
      .then(() => res.status(200).json({ok: true}))
      .catch(() => res.status(300).json({ok: false, message: "Firestore error"}))
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
