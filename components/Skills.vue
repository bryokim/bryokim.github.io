<template>
  <div class="">
    <h1 class="text-2xl font-bold">
      <span class="text-red-500 me-1">*</span>
      <span> What can Brian do ? </span>
    </h1>
    <div class="mt-4 ms-5 md:w-1/2">
      <UMeter
        icon="i-vscode-icons-file-type-python"
        :value="86"
        label="Python"
        class="mb-5"
      />
      <UMeter
        icon="i-vscode-icons-file-type-light-js"
        :value="85"
        color="yellow"
        label="JavaScript"
        class="mb-5"
      />
      <UMeter
        icon="i-vscode-icons-file-type-typescript"
        :value="75"
        color="blue"
        label="TypeScript"
        class="mb-5"
      />
      <UMeter
        icon="i-vscode-icons-file-type-c"
        :value="50"
        color="sky"
        label="C"
        class="mb-5"
      />
      <UMeter
        icon="i-vscode-icons-file-type-html"
        :value="95"
        color="orange"
        label="HTML"
        class="mb-5"
      />
      <UMeter
        icon="i-vscode-icons-file-type-css"
        :value="85"
        color="indigo"
        label="CSS"
        class="mb-5"
      />
      <UMeter
        icon="i-vscode-icons-file-type-sql"
        :value="86"
        color="violet"
        label="SQL"
        class="mb-5"
      />
    </div>
  </div>
</template>
