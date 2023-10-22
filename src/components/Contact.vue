<template>
    <v-container class="contact-container">
        <div class="page-title">Get In Touch</div>
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
<script>
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
                (value) => {
                    if (value) return true;
                    return "You must enter your name.";
                },
                (value) => {
                    if (value?.length > 1) return true;
                    return "Name needs to be at least 2 characters.";
                },
            ],
            EmailRules: [
                (value) => {
                    if (value) return true;
                    return "You must enter your email.";
                },
                (value) => {
                    if ((/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) ) return true;
                    return "Must be a valid e-mail.";
                },
            ],
            commentRules: [
                (value) => {
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
            // try {
            // const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact-us?ajax=1`, {
            //     method: "POST",
            //     body: JSON.stringify({
            //         name: this.name,
            //         email: this.email,
            //         comment: this.comment,
            //     }),
            // });
            // } catch (e) {
            // } finally {
            //     this.loading = false;
            // }
        },
    },
});
</script>
<style lang="scss">
.v-container.contact-container {
    padding: 40px 50px;
    color: #b4b4b5;
    @media(max-width: 700px) {
        padding: 80px 20px;
    }
}
</style>