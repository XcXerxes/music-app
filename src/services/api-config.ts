export interface ApiConfig {
  url: string,
  timeout: number
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: '',
  timeout: 10000
}
