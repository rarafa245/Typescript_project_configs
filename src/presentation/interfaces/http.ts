export interface HttpRequest {
    headers?: any
    body?: any
    params?: any
    query?: any
    extras?: any
    method: string
    url: string
  }

export interface HttpResponse {
    statusCode: number
    body: any
  }
