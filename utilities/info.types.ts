import {StaticImageData} from "next/image"

export type SkillsType = {
  link?: string
  name: string
  percentage?: number
}[]

export interface Project {
  title: string
  image: StaticImageData
  image_mobile: StaticImageData
  description: string
  href?: string
  github?: string
  reduce_opacity?: boolean
  video?: string
  technologies?: string[]
  tools?: string[]
  category: string
}
