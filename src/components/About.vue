<template>
    <v-container class="about-container">
        <div class="page-title">About me</div>
        <v-img src="../assets/pics/me2.jpg" class="img"></v-img>
        <p class="title">Maedeh Yousefi</p>
        <p class="sub-title">Front-End Developer</p>
        <v-divider :thickness="1.5" class="my-5"></v-divider>
        <div class="content">
            Hi, welcome to my personal website.<br />
            I graduated in software engineering with a bachelor’s degree in 2020.<br />
            After graduation I experienced different aspects of IT industry and finally decided to work as a front-end developer.<br />
            My priority in every project is customer convenience in using the user interface, and after that beauty and
            creativity is important.
        </div>
        <v-divider :thickness="1.5" class="my-10"></v-divider>
        <v-row>
            <v-col>
                <v-table>
                    <tbody>
                        <tr>
                            <td class="font-weight-bold pl-0"><v-icon class="mr-2 mb-2">mdi-cake-variant</v-icon>Birthday:</td>
                            <td class="pr-0 text-white font-weight-bold">1998</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold pl-0"><v-icon class="mr-2 mb-2">mdi-email-outline</v-icon>Email:</td>
                            <td class="pr-0 text-white font-weight-bold"><a href="/contact" class="text-white text-decoration-none">you.maede@gmail.com</a></td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold pl-0"><v-icon class="mr-2 mb-2">mdi-github</v-icon>github:</td>
                            <td class="pr-0 text-white font-weight-bold"><a href="https://github.com/mahiyou" class="text-white text-decoration-none">github.com/mahiyou</a></td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
            <v-col>
                <v-table>
                    <tbody>
                        <tr>
                            <td class="font-weight-bol pl-0"><v-icon class="mr-2 mb-2"> mdi-book-open-page-variant-outline</v-icon>Major:</td>
                            <td class="pr-0 text-white font-weight-bold">Software Engineering</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold pl-0"><v-icon class="mr-2 mb-2">mdi-account-school</v-icon>Deegree:</td>
                            <td class="pr-0 text-white font-weight-bold">Bachelor</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold pl-0"><v-icon class="mr-2 mb-2">mdi-laptop</v-icon>Freelance:</td>
                            <td class="pr-0 text-white font-weight-bold">Available</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
        <v-btn variant="outlined" class="mt-10">Download CV</v-btn>
        <v-divider :thickness="1.5" class="my-10"></v-divider>
        <div class="title text-white">Skills</div>
        <v-row>
            <v-col cols="12" md="6" class="pr-md-10">
                <v-row class="mt-5">
                    <v-col>
                        <div class="text-white">Html & Css</div>
                    </v-col>
                    <v-col>
                        <div class="text-right">100%</div>
                    </v-col>
                </v-row>
                <v-progress-linear model-value="100" color="#00FFFF" :height="3"></v-progress-linear>
                <v-row class="mt-5">
                    <v-col>
                        <div class="text-white">Vue</div>
                    </v-col>
                    <v-col>
                        <div class="text-right">70%</div>
                    </v-col>
                </v-row>
                <v-progress-linear model-value="70" color="#7cfefe" :height="3"></v-progress-linear>
                <v-row class="mt-5">
                    <v-col>
                        <div class="text-white">React</div>
                    </v-col>
                    <v-col>
                        <div class="text-right">70%</div>
                    </v-col>
                </v-row>
                <v-progress-linear model-value="70" color="#7cfefe" :height="3"></v-progress-linear>
            </v-col>
            <v-col cols="12" md="6" class="pl-md-10">
                <v-row class="mt-5">
                    <v-col>
                        <div class="text-white">JavaScript</div>
                    </v-col>
                    <v-col>
                        <div class="text-right">60%</div>
                    </v-col>
                </v-row>
                <v-progress-linear model-value="60" :height="3" color="#bdffff"></v-progress-linear>
                <v-row class="mt-5">
                    <v-col>
                        <div class="text-white">Java</div>
                    </v-col>
                    <v-col>
                        <div class="text-right">70%</div>
                    </v-col>
                </v-row>
                <v-progress-linear model-value="70" color="#7cfefe" :height="3"></v-progress-linear>
            </v-col>
        </v-row>
        <div class="title text-white mt-15">Languages</div>
        <v-row>
            <v-col cols="12" md="6" class="pr-md-10">
                <v-row class="mt-5">
                    <v-col>
                        <div class="text-white">English</div>
                    </v-col>
                    <v-col>
                        <div class="text-right">80%</div>
                    </v-col>
                </v-row>
                <v-progress-linear model-value="80" color="#5bffff" :height="3"></v-progress-linear>
            </v-col>
            <v-col cols="12" md="6" class="pl-md-10">
                <v-row class="mt-5">
                    <v-col>
                        <div class="text-white">Farsi</div>
                    </v-col>
                    <v-col>
                        <div class="text-right">100%</div>
                    </v-col>
                </v-row>
                <v-progress-linear model-value="100" :height="3" color="#00FFFF"></v-progress-linear>
            </v-col>
        </v-row>
        <v-divider :thickness="1.5" class="my-15"></v-divider>
        <v-row>
            <v-col cols="12" sm="9" md="6" class="mb-10 pr-md-6 pl-6 pl-md-auto">
                <div class="title text-white mb-10 mt-0">Work Experience</div>
                <v-row class="left-border">
                    <v-col cols="1" class="mr-0 my-auto">
                        <div class="circle"></div>
                    </v-col>
                    <v-col cols="4" class="my-auto pl-0" align="center">
                        <div class="background text-white">2022 - now</div>
                    </v-col>
                    <v-col cols="7" class="my-auto">
                        <div class="text-white font-weight-bold">Dade Negar Jey Company</div> 
                        <div>Front-End Developer</div>
                        <div>(JavaScript, React, Vue, ...)</div>
                        <v-btn variant="outlined" height="24px" width="100px" class="btn-site" href="https://www.jeyserver.com/">website</v-btn>
                    </v-col>
                </v-row>
                <v-row class="left-border">
                    <v-col cols="1" class="mr-0 my-auto">
                        <div class="circle"></div>
                    </v-col>
                    <v-col cols="4" class="my-auto pl-0" align="center">
                        <div class="background text-white">2018 - 2019</div>
                    </v-col>
                    <v-col cols="7" class="my-auto">
                        <div class="text-white font-weight-bold">Hub company</div>
                        <div>Android Developer</div>
                        <div>(Java)</div>
                        <v-btn variant="outlined" height="24px"  width="100px" class="btn-site" href="https://isfahanhub.com/">website</v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="9" md="6" class="pl-6">
                <div class="title text-white mb-10 mt-0">Education</div>
                <v-row class="left-border">
                    <v-col cols="1" class="mr-0 my-auto">
                        <div class="circle"></div>
                    </v-col>
                    <v-col cols="4" class="my-auto pl-0" align="center">
                        <div class="background text-white">2016 - 2020</div>
                    </v-col>
                    <v-col cols="7" class="my-auto">
                        <div class="text-white font-weight-bold">Azad University Of Najafabad</div>
                        <div>Bachelor degree In Software Engineering </div>
                        <v-btn variant="outlined" height="24px" width="100px" class="btn-site">certificate</v-btn>
                    </v-col>
                </v-row>
                <v-row class="left-border">
                    <v-col cols="1" class="mr-0 my-auto">
                        <div class="circle"></div>
                    </v-col>
                    <v-col cols="4" class="my-auto pl-0" align="center">
                        <div class="background text-white">2012 - 2016</div>
                    </v-col>
                    <v-col cols="7" class="my-auto">
                        <div class="text-white font-weight-bold">Farzanagan High School</div>
                        <div class="text-white">(School for Brilliant Talents)</div>
                        <div>Mathematics Diploma</div>
                        <v-btn variant="outlined" height="24px" width="100px" class="btn-site">certificate</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<style lang="scss">
.v-container.about-container {
    padding: 20px 50px;
    line-height: 30px;
    color: #b4b4b5;

    .title {
        font-size: 26px;
        margin-top: 20px;
        color: white;
    }

    .content {
        font-size: 14px;
    }

    .v-table {
        background-color: transparent;
        color: #b4b4b5;

        tr td {
            border: none;
        }
    }

    .circle {
        border: 1px solid #56585c;
        background-color: #34353a;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        margin-left: -22px;
    }

    .left-border {
        border-left: 1px solid #56585c;
    }

    .background {
        background-color: #414247;
        border-radius: 30px;
        padding: 5px;
        font-size: 14px;
    }
    .btn-site{
        font-size: 10px;
    }
    @media(max-width: 700px) {
        padding: 20px 20px;
        color: #7cfefe;
    }
}
</style>