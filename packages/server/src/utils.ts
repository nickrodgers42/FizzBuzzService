import { Response } from "express"
import { IncomingHttpHeaders } from "http"

export const convertHeaders = (
    headers: IncomingHttpHeaders
): Record<string, string> => {
    const convertedHeaders: Record<string, string> = {}
    for (const header in headers) {
        if (headers[header] === undefined) {
            continue
        }
        if (Array.isArray(headers[header])) {
            convertedHeaders[header] = headers[header]!.toString()
        } else {
            convertedHeaders[header] = String(headers[header])
        }
    }
    return convertedHeaders
}

export const setHeaders = (
    headers: Record<string, string>,
    response: Response
) => {
    for (const key in headers) {
        response.set(key, headers[key])
    }
}
