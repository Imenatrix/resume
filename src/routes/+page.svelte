<script lang='ts'>
	import resume from '$lib/resume/portuguese.json'
</script>

<main>
	<h1>{resume.info.name}</h1>
	<hr>
	<div>
		<h2>Contato</h2>
		<p>
			<b>Endereço:</b>
			{`${resume.contact.adress.street}, ${resume.contact.adress.number}, ${resume.contact.adress.district}, ${resume.contact.adress.city}, ${resume.contact.adress.state}`}
		</p>
		<p>
			<b>Telefone:</b>
			{`(${resume.contact.phone.ddd}) ${resume.contact.phone.number.slice(0, 5)}-${resume.contact.phone.number.slice(5)}`}
		</p>
		<p>
			<b>E-mail:</b>
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
	</div>
	<hr>
	<div>
		<h2>Experiências</h2>
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
	</div>
	<hr>
	<div>
		<h2>Escolaridade</h2>
		{#each resume.education as education}
			<div>
				<b>{education.course}</b> <br>
				<i>{`${education.institution} | ${education.start?.year ? education.start.year + ' - ' : ''}${education.end.year}`}</i>
				<p></p>
			</div>
		{/each}
	</div>
	<hr>
	<div>
		<h2>Cursos</h2>
		{#each resume.courses as education}
			<div>
				<b>{education.course}</b> - <i>{`${education.end.year}`}</i>
				<p></p>
			</div>
		{/each}
	</div>
	<hr>
	<div>
		<h2>Premiações</h2>
		{#each resume.prizes as prize}
			<div>
				<b>{prize.prize}</b> - <i>{prize.event}</i>
				<p></p>
			</div>
		{/each}
	</div>
</main>
