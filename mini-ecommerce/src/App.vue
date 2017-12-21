<template>
  <main class="phone-viewport">
  <md-toolbar>
    <h1 class="md-title">{{title}}</h1>
  </md-toolbar>

  <div>

    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger>Menu</md-button>

      <md-menu-content>
        <md-menu-item>
            <router-link to="/categorias">Categorias</router-link>
          </md-menu-item>
        <md-menu-item>
            <router-link to="/produtos">Produtos</router-link>
        </md-menu-item>
        <md-menu-item>
            <router-link to="/pessoa">Produtos</router-link>
        </md-menu-item>
      </md-menu-content>
    </md-menu>

  </div>

  <md-row>
    <router-view></router-view>
  </md-row>

  </main>
</template>

<script>
export default {
  name: 'WebschollComponent',
  data () {
    return {
      title: 'Ecommerce Webschool'
    }
  },
  methods: {
   toggleLeftSidenav () {
     this.$refs.leftSidenav.toggle()
   },
   closeLeftSidenav () {
     this.$refs.leftSidenav.close()
   },
   open (ref) {
     console.log('Menu aberto: ' + ref)
   },
   close (ref) {
     console.log('Menu fechado: ' + ref)
   }
 }
}
</script>

<style>
</style>
