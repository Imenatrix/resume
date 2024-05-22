<script lang='ts'>
    import { loadResumes } from '$lib/utils/resume.js'

    const RESUMES_FOLDER = 'src/lib/resume/english'
    const resumes = loadResumes(RESUMES_FOLDER)

    export let data
    const resume = resumes[data.resume]
</script>

<div class="title">
    <h1>{resume.info.name}</h1>
    <hr>
</div>
<div class="resume">
    <aside>
        <section>
            <h2>Contact</h2>
            <p>
                <b>Address:</b>
                {`${resume.contact.address.street}, ${resume.contact.address.number}, ${resume.contact.address.district}, ${resume.contact.address.city}, ${resume.contact.address.state}`}
            </p>
            <p>
                <b>Phone:</b>
                {`(${resume.contact.phone.ddd}) ${resume.contact.phone.number.slice(0, 5)}-${resume.contact.phone.number.slice(5)}`}
            </p>
            <p>
                <b>Email:</b>
                {resume.contact.email}
            </p>
            <p>
                <b>LinkedIn:</b>
                {resume.contact.linkedin}
            </p>
            <p>
                <b>GitHub:</b>
                {resume.contact.github}
            </p>
        </section>
        <section>
            <h2>Main Skills</h2>
            <ul>
                {#each resume.skills as skill}
                    <li>{skill}</li>
                {/each}
            </ul>
        </section>
    </aside>
    <hr>
    <main>
        
        <section>
            <h2>Experiences</h2>
            {#each resume.experience as experience}
                <div>
                    <b>{experience.position}</b> <br>
                    {#if experience.start.month && experience.end.month}
                        <i>{`${experience.company} | ${experience.start.month.toString().padStart(2, '0')}/${experience.start.year} - ${experience.end.month.toString().padStart(2, '0')}/${experience.end.year}`}</i>  
                    {:else}
                        <i>{`${experience.company} | ${experience.start.year} - ${experience.end.year}`}</i>
                    {/if}
                    <p>{experience.description}</p>
                </div>
            {/each}
        </section>
        <section>
            <h2>Education</h2>
            {#each resume.education as education}
                <div>
                    <b>{education.course}</b> <br>
                    <i>{`${education.institution} | ${education.start?.year ? education.start.year + ' - ' : ''}${education.end.year}`}</i>
                    <p></p>
                </div>
            {/each}
        </section>
        <section>
            <h2>Courses</h2>
            {#each resume.courses as education}
                <div>
                    <b>{education.course}</b> - <i>{`${education.end.year}`}</i>
                    <p></p>
                </div>
            {/each}
        </section>
        <section>
            <h2>Awards</h2>
            {#each resume.prizes as prize}
                <div>
                    <b>{prize.prize}</b> - <i>{prize.event}</i>
                    <p></p>
                </div>
            {/each}
        </section>
    </main>
</div>

<style>
    .title {
        margin-left: 1em;
        margin-right: 1em;
    }
    .resume {
        display : flex;
    }
    .resume > * {
        margin : 1em;
    }
    section {
        margin-bottom : 3em;
    }
    ul {
        list-style-type: circle;
    }
</style>
