<template>
    <v-container class="home-container">
        <v-row class="row-height">
            <v-col cols="12" md="5" class="ma-auto"><v-img src="../assets/pics/me.jpg"
                    class="img mr-md-5 mx-auto"></v-img></v-col>
            <v-col cols="12" md="7" class="ma-auto text-md-left text-center">
                <p class="name">Maedeh Yousefi</p>
                <div class="my-md-1 my-5">
                    <p>I am a Front-End developer.</p>
                    <p>I create beautiful and usefule products and try to help users by building products with a delightful
                        user
                        experience.</p>
                </div>
                <v-btn variant="text" href="https://github.com/mahiyou" icon="mdi-github"></v-btn>
                <v-btn variant="text" icon="mdi-linkedin"></v-btn>
                <v-btn variant="text" icon="mdi-gmail"></v-btn>
                <v-btn variant="text" icon="mdi-instagram"></v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
//
</script>

<style lang="scss">
.home-container {
    .row-height {
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

    @media(max-width: 700px) {
        .name {
            font-size: 40px;
        }
    }
}
</style>