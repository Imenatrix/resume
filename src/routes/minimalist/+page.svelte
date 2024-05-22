<script lang="ts">
    import { loadResumes } from '$lib/utils/resume'
    import { snakeToTitle } from '$lib/utils/strings'

    const PT_RESUMES_FOLDER = 'src/lib/resume/portuguese'
    const EN_RESUMES_FOLDER = 'src/lib/resume/english'

    const portugueseResumes = loadResumes(PT_RESUMES_FOLDER)
    const englishResumes = loadResumes(EN_RESUMES_FOLDER)
</script>

<head>
    <title>Resumes</title>
</head>

<h1>Resumes</h1>

<h2>Portuguese</h2>
<ul>
    {#each Object.keys(portugueseResumes) as resume_name}
        <li>
            <a href="/minimalist/{resume_name}/portuguese">
                {snakeToTitle(resume_name)}
            </a>
        </li>
    {/each}
</ul>

<h2>English</h2>
<ul>
    {#each Object.keys(englishResumes) as resume_name}
        <li>
            <a href="/minimalist/{resume_name}/english">
                {snakeToTitle(resume_name)}
            </a>
        </li>
    {/each}
</ul>