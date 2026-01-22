import {StaticImageData} from "next/image"

export type SkillsType = {
  link?: string
  name: string
  percentage?: number
}[]

export interface Project {
  id: string
  title: string
  image: StaticImageData | StaticImageData[]
  image_mobile: StaticImageData | StaticImageData[]
  description: string
  href?: string
  hrefText?: string
  github?: string
  reduce_opacity?: boolean
  video?: string
  technologies?: string[]
  tools?: string[]
  category: string | string[]
  readme?: string
  readmeLink?: string
}
