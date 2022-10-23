import pop from "../../assets/images/screenshots/pop.png"
import nt from "../../assets/images/screenshots/nt.png"
import wdc from "../../assets/images/screenshots/pop.png"
import pop_mobile from "../../assets/images/screenshots/pop-mobile.jpg"
import nt_mobile from "../../assets/images/screenshots/nt-mobile.jpg"
import wdc_mobile from "../../assets/images/screenshots/wdc-mobile.jpg"

const projectsList = [
  {
    title: "Pop! Funding",
    image: pop,
    image_mobile: pop_mobile,
    description: `A working crowdfunding web application based on Algorand Blockchain where anyone with Algo can create a funding or donate<br/><br/>
    This is the Project Work proposed by Algorand to the attendees of MasterZ 2nd Edition.<br/><br/>
    Doing this Project Work we had the opportunity to test and improve our knowledge of the Algorand blockchain and to learn how to use it in the development of a crowdfunding platform. `,
    href: "https://pop-funding.vercel.app",
    github: "https://github.com/MikeCheek/pop-funding",
  },
  {
    title: "Naturalmente Tecnologici",
    image: nt,
    image_mobile: nt_mobile,
    description: `Website created on the occasion of the Naturalmente Tecnologici event organized by the Syskrack association in Grassano (Matera)<br/><br/>
      During the event there were conferences and workshops on the theme of ethical and sustainable technological development in social and environmental terms.`,
    href: "https://nt.syskrack.org",
    github: "https://github.com/MikeCheek/naturalmente-tecnologici",
    reduce_opacity: true,
  },
  {
    title: "Web Dev Challenge 2022",
    image: wdc,
    image_mobile: wdc_mobile,
    description: `Website created on the occasion of the Web Dev Challenge event organized by JEToP<br/><br/>
                The challenge was to develop in team a landing page on a specific theme`,
    href: "https://wdc.jetop.com",
  },
]

export default projectsList
