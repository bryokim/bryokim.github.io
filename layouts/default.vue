<template>
  <div
    class="min-h-dvh bg-white dark:bg-gray-900 text-black dark:text-white bg-no-repeat text-xl default-font antialiased"
  >
    <Navbar />

    <UContainer>
      <slot></slot>
    </UContainer>
  </div>
</template>

<style>
.default-font {
  font-family: "Crymson Pro", "Josefin Sans", sans-serif;
}
</style>
