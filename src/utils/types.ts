import { ReactElement } from "react"



export type Project_Entry = {
    Project_Name: string,
    card_description: ReactElement,
    card_tags: Array<string>,
    card_image ?: any
    modal_content ?: ReactElement,
    links ?: link[]
}

type link = {
    label: string,
    url: string
}


