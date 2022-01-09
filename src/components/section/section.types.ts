import { ReactElement } from "react"

export type SectionProps = {
    title: string,
    children: ReactElement<any, any>,
    reversed?: boolean,
}