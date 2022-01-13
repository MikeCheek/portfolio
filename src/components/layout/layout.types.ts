import { ReactElement } from "react"

export type LayoutProps = {
    children: ReactElement<any, any>,
    isBlocking?: boolean,
    lightMode: boolean,
    changeDarkMode: React.MouseEventHandler<Element>
}