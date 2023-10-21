<template>
    <v-container class="home-container">
        <v-row class="row-height">
            <v-col cols="5" class="ma-auto"><v-img src="../assets/pics/me.jpg" class="img mr-5"></v-img></v-col>
            <v-col cols="7" class="ma-auto">
                <p class="name">Maedeh Yousefi</p>
                <p>I am a Front end develoaper.</p>
                <p>I create beautiful and usefule products and try to help users use websites easily and have an enjoyable
                    experience.</p>
                <v-btn variant="text" icon="mdi-instagram"></v-btn>
                <v-btn variant="text" icon="mdi-linkedin"></v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
//
</script>

<style lang="scss">
.home-container {
    .row-height{
        height: 100%;
    }
    .img {
        border-radius: 50%;
        width: 250px;
        height: 250px;
        border: solid 2px white;
        margin: auto;
    }

    .name {
        font-weight: 900;
        font-size: 60px;
    }
}
</style>