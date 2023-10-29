<template>
    <v-navigation-drawer class="nav" color="#494b50" width="350" justify="center">
        <div class="menu-items" justify="center">
            <v-list-item>
                <p class="menu-title">Maedeh Yousefi</p>
                <p class="mb-8">Front-End Developer</p>
            </v-list-item>
            <v-list-item link title="Home" prepend-icon="mdi-home" :to="{ name: 'home' }" active-class="active-class"
                exact></v-list-item>
            <v-list-item link title="About" prepend-icon="mdi-account-tie-woman" :to="{ name: 'about' }"
                active-class="active-class" exact></v-list-item>
            <v-list-item link title="Portfolio" prepend-icon="mdi-arrange-bring-to-front" :to="{ name: 'portfolio' }"
                active-class="active-class" exact></v-list-item>
            <v-list-item link title="Contact" prepend-icon="mdi-email-outline" :to="{ name: 'contact' }"
                active-class="active-class" exact></v-list-item>
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
            <v-list-item link title="Home" prepend-icon="mdi-home" :to="{ name: 'home' }" active-class="active-class"
                exact></v-list-item>
            <v-list-item link title="About" prepend-icon="mdi-account-tie-woman" :to="{ name: 'about' }"
                active-class="active-class" exact></v-list-item>
            <v-list-item link title="Portfolio" prepend-icon="mdi-arrange-bring-to-front" :to="{ name: 'portfolio' }"
                active-class="active-class" exact></v-list-item>
            <v-list-item link title="Contact" prepend-icon="mdi-email-outline" :to="{ name: 'contact' }"
                active-class="active-class" exact></v-list-item>
        </div>
    </v-navigation-drawer>
    <v-app-bar color="#494b50" :elevation="0" class="hidden-lg-and-up" density="compact">
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
.v-navigation-drawer.nav {
    transition-duration: 1s;
}

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

    .active-class {
        color: white;
    }

    .v-list-item__prepend {
        width: 35px;
    }

}

.v-app-bar {
    box-shadow: none;
}
</style>
