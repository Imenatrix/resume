import fs from 'fs'
import path from 'path'
import type Resume from '$lib/entities/resume'

export interface ResumeRepository {
    [key : string] : Resume
}

export function loadResumes(folder : string) : ResumeRepository {
    const files = fs.readdirSync(folder)
    const result : ResumeRepository = {}

    files.forEach(file => {
        if (path.extname(file) == '.json') {
            const filePath = path.join(folder, file)
            const content = fs.readFileSync(filePath, 'utf-8')
            const json = JSON.parse(content)
            const key = path.basename(file, '.json')
            result[key] = json
        }
    })
    return result
}