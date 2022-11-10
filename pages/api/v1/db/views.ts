import {NextApiRequest, NextApiResponse} from "next"
import {firestore} from "../../../../firebase/clientApp"
import {updateDoc, doc, increment} from "firebase/firestore"

type Res = {
  ok: boolean
  message?: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Res>) => {
  switch (req.method) {
    case "POST":
      const body = JSON.parse(req.body)
      const page = doc(firestore, "pages", body.page)
      updateDoc(page, {
        views: increment(1),
      })
        .then(() => res.status(200).json({ok: true}))
        .catch(() => res.status(300).json({ok: false, message: "Firestore error"}))

      break
    default:
      res.status(405).json({ok: false, message: "Method not allowed"})
  }
}

export default handler

// fetch('/api/route-name', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(objectWithData),
//   })
