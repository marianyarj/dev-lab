export interface GitHubRepo {
    name: string
    description: string | null
    topics: string[]
    html_url: string | null
    homepage: string | null
    language: string | null
    languages?: LanguagesData
}

export interface LanguagesData {
    [languageName: string]: number
}

export interface SelectedRepo {
    owner: string
    repo: string
    category: 'frontend' | 'backend' | 'fullstack'
}

export type Category = 'frontend' | 'backend' | 'fullstack'