<template>
  <div>
    <h1>Games</h1>

    <div style="margin-bottom: 30px;">
      Here are some games I've made, in my free time or at work, to show off my skills with Unity.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <!--<div style="margin-top: 20px;">
      There is more to see on <a target="_blank" href="https://someexternalwebsite.com">some external website</a>
    </div>-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
