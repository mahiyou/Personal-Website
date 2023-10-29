<template>
    <v-container class="contact-container">
        <div class="page-title">Get In Touch</div>
        <div class="mb-12">You can contact me easily through the form below:</div>
        <v-form @submit.prevent="onSubmit" v-model="valid">
            <div class="mb-4">
                <v-text-field variant="outlined" class="text my-3" placeholder="Name" v-model="name" :rules="nameRules"
                    required />
            </div>
            <div class="mb-4">
                <v-text-field variant="outlined" class="text my-3" v-model="email" placeholder="Email" :rules="EmailRules"
                    required />
            </div>
            <div class="mb-4">
                <v-textarea class="text my-3" v-model="comment" variant="outlined" :rules="commentRules"
                    placeholder="Message">
                </v-textarea>
            </div>
            <v-btn variant="outlined" height="42px" type="submit" :loading="loading">Send Message</v-btn>
        </v-form>
    </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            loading: false,
            valid: false,
            name: "",
            email: "",
            comment: "",
            nameRules: [
                (value: string) => {
                    if (value) return true;
                    return "You must enter your name.";
                },
                (value: string) => {
                    if (value?.length > 1) return true;
                    return "Name needs to be at least 2 characters.";
                },
            ],
            EmailRules: [
                (value:string) => {
                    if (value) return true;
                    return "You must enter your email.";
                },
                (value:string) => {
                    if ((/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) ) return true;
                    return "Must be a valid e-mail.";
                },
            ],
            commentRules: [
                (value:string) => {
                    if (value) return true;
                    return "You must enter your maessage.";
                },
            ],
        };
    },
    methods: {
        async onSubmit() {
            if (!this.valid || this.loading) {
                return;
            }
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        },
    },
});
</script>
<style lang="scss">
.v-container.contact-container {
    padding: 20px 50px;
    color: #b4b4b5;
    @media(max-width: 1280px) {
        padding: 20px 20px;
    }
}
</style>