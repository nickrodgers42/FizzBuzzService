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

export const convertQueryParams = (
    urLSearchParams: URLSearchParams
): Record<string, string | Array<String> | null> => {
    const convertedQueryParams: Record<string, string | Array<String> | null> =
        {}
    for (const [key, value] of urLSearchParams.entries()) {
        convertedQueryParams[key] = value
    }
    return convertedQueryParams
}
