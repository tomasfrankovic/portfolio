<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Tomáš Frankovič</strong>, a game developer with 6+ years of experience.<br/>
        I'm a passionate game developer (mostly making mobile games using Unity 3D).<br/>
        I started learning how to code and how to make games in high school and released my first "janky" games in 2017 on Google Play.
      </div>

      <div style="margin-top: 20px;">I've worked on <router-link to="/game-projects">games</router-link> (some of them are my personal projects and some are from gamejams or from work), on <router-link to="/other-projects">other projects</router-link> which are apps from school projecs.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a monk, like my good friend John Rambo did a few years back. You can reach me at <a href="mailto:tomko.franky@gmail.com">tomko.franky@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/frenk.jpg" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
  
}

img {
  border-radius: 50%;
  max-width: 250px;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>