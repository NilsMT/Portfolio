<template>
    <div id="accueil">
        <h1 id="title">
            <span>Bienvenue</span>
            <span>sur mon</span>
            <span>portfolio</span>
        </h1>

        <div id="navigators">

        </div>

        
    </div>
</template>

<style>

#title {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 5em;
  font-weight: 900;
  text-transform: uppercase;
  position: relative;
  
  padding: 0px;
  margin: 0px;
  height: 100vh;
}

#title span {
    position: absolute;
}

#title span:nth-child(even) {
  transform: skew(60deg, -10deg) scaleY(0.66667);
  color: var(--bg-light);
}

#title span:nth-child(odd) {
  transform: skew(0deg, -10deg) scaleY(1.33333);
  color: var(--bg-dark);
  text-shadow: -2px -2px 0px var(--bg-light);
}

#title span:nth-child(1) {
  left: 30%;
  top: 1em;
}

#title span:nth-child(2) {
  left: calc(30% + 1.25em);
  top: 2em;
}

#title span:nth-child(3) {
  left: calc(30% + 1.25em);
  top: 3em;
}

</style>