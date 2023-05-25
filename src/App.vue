<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link to="/courses">Cursos</router-link>
  </nav>
  <router-view/>
</template>

