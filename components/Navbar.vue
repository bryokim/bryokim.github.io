<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const atTopOfPage = ref(true);

function handleScroll() {
  // when the user scrolls, check the pageYOffset
  if (window.scrollY > 0) {
    // user is scrolled
    if (atTopOfPage.value) atTopOfPage.value = false;
  } else {
    // user is at top of page
    if (!atTopOfPage.value) atTopOfPage.value = true;
  }
}

onBeforeMount(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    class="w-full mb-5 p-5 flex items-center justify-between bg-white dark:bg-gray-900 sticky top-0 z-50"
    :class="atTopOfPage ? '' : 'shadow-2xl border-b dark:border-slate-500'"
  >
    <div class="w-1/2 md:w-1/5 md:ms-10">
      <ULink to="/"><img src="/logo.svg" /></ULink>
    </div>
    <div class="flex justify-end items-center text-base">
      <ULink
        to="/Brian_Kimathi_Resume.pdf"
        target="_blank"
        class="flex items-center me-6 hover:text-sky-600 dark:hover:text-sky-400 hover:underline underline-offset-4"
      >
        <UIcon name="i-bi-file-earmark-pdf-fill" class="me-1" />
        <span class="hidden sm:block">resume</span>
      </ULink>
      <ULink
        to="https://github.com/bryokim"
        target="_blank"
        class="flex items-center me-6 hover:text-sky-600 dark:hover:text-sky-400 hover:underline underline-offset-4"
      >
        <UIcon name="i-bi-github" class="me-1" />
        <span class="hidden sm:block">github</span>
      </ULink>

      <div class="place-content-center">
        <ClientOnly>
          <UButton
            :icon="
              isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
            "
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
          />
          <template #fallback>
            <div class="w-8 h-8"></div>
          </template>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<style>
.logo {
  font-family: "Crymson Pro", "Josefin Sans", sans-serif;
}
</style>
