import {NextApiRequest, NextApiResponse} from "next"
import {firestore} from "../../../../firebase/clientApp"
import {updateDoc, doc, increment, addDoc, arrayUnion, serverTimestamp} from "firebase/firestore"

type Res = {
  ok: boolean
  message?: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Res>) => {
  switch (req.method) {
    case "POST":
      const page = doc(firestore, process.env.NODE_ENV === "development" ? "dev-pages" : "pages", req.body.page)
      updateDoc(page, {
        eyes: increment(1),
        date: arrayUnion(Date.now()),
      })
        .then(() => res.status(200).json({ok: true}))
        .catch(() => res.status(300).json({ok: false, message: "Firestore error"}))

      break
    default:
      res.status(405).json({ok: false, message: "Method not allowed"})
      break
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
