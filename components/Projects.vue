<template>
  <div class="">
    <!-- <h1 class="text-3xl font-bold mb-4">Projects</h1> -->
    <div class="flex justify-between flex-wrap flex-col md:flex-row text-base">
      <ProjectCard class="md:w-5/12 mb-6" src="/poetry-galore.png">
        <template #footer>
          <div>
            <p class="mb-4">Post and read poems.</p>
            <ViewButton to="https://bryokim.github.io/poetry-galore" />
          </div>
        </template>
      </ProjectCard>
  
      <ProjectCard class="md:w-5/12 mb-6" src="/mongoUI.png">
        <template #footer>
          <div>
            <p class="mb-4">User Interface for MongoDB</p>
            <ViewButton to="https://github.com/bryokim/mongoUI" />
          </div>
        </template>
      </ProjectCard>

      <ProjectCard class="md:w-5/12 mb-6" src="/default.png">
        <template #footer>
          <div>
            <p class="mb-4">Tool for checking Python documentation</p>
            <ViewButton to="https://github.com/bryokim/pycheckdoc" />
          </div>
        </template>
      </ProjectCard>
    </div>
  </div>
</template>
