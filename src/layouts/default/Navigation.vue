<template>
    <v-navigation-drawer class="nav" color="#494b50" width="350" justify="center">
        <div class="menu-items" justify="center">
            <v-list-item>
                <p class="menu-title">Maedeh Yousefi</p>
                <p class="mb-8">Front End Developer</p>
            </v-list-item>
            <v-list-item link title="Home" :to="{ name: 'home' }" active-color="white"></v-list-item>
            <v-list-item link title="About" :to="{ name: 'about' }"  active-color="white"></v-list-item>
            <v-list-item link title="Portfolio" :to="{ name: 'portfolio' }"  active-color="white"></v-list-item>
            <v-list-item link title="Contact"></v-list-item>
        </div>
    </v-navigation-drawer>
</template>
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
</style>
