<template>
    <v-navigation-drawer class="nav" color="#494b50" width="350" justify="center">
        <div class="menu-items" justify="center">
            <v-list-item>
                <p class="menu-title">Maedeh Yousefi</p>
                <p class="mb-8">Front-End Developer</p>
            </v-list-item>
            <v-list-item link title="Home" :to="{ name: 'home' }" active-color="white"></v-list-item>
            <v-list-item link title="About" :to="{ name: 'about' }" active-color="white"></v-list-item>
            <v-list-item link title="Portfolio" :to="{ name: 'portfolio' }" active-color="white"></v-list-item>
            <v-list-item link title="Contact" :to="{ name: 'contact' }"></v-list-item>
        </div>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="drawer" class="nav hidden-lg-and-up" color="#494b50" width="300" justify="center"
        temporary>
        <div class="text-right"><v-btn variant="text" icon="mdi-close" @click="drawer = false"></v-btn></div>
        <div class="menu-items" justify="center">
            <v-list-item>
                <p class="menu-title">Maedeh Yousefi</p>
                <p class="mb-8">Front-End Developer</p>
            </v-list-item>
            <v-list-item link title="Home" :to="{ name: 'home' }" active-color="white"></v-list-item>
            <v-list-item link title="About" :to="{ name: 'about' }" active-color="white"></v-list-item>
            <v-list-item link title="Portfolio" :to="{ name: 'portfolio' }" active-color="white"></v-list-item>
            <v-list-item link title="Contact" :to="{ name: 'contact' }"></v-list-item>
        </div>
    </v-navigation-drawer>
    <v-app-bar color="#494b50" :elevation="0" class="hidden-lg-and-up">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            drawer: false,
        }
    }
})
</script>
<style lang="scss">
.nav {
    --v-theme-overlay-multiplier: 0;

    .v-list-item {
        color: #a0a0a2;
        margin-top: 10px;
    }

    .menu-title {
        font-weight: 900;
        font-size: 28px;
        color: white;
    }

    .menu-items {
        margin: auto;
        width: 80%;
        margin-top: 40%;
    }
}

.v-app-bar {
    box-shadow: none;
}
</style>
