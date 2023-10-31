<template>
    <v-container class="about-container">
        <div class="page-title">About me</div>
        <v-img src="../assets/pics/me2.jpg" class="img"></v-img>
        <p class="title">Maedeh Yousefi</p>
        <p class="sub-title">Front-End Developer</p>
        <v-divider :thickness="2" class="my-5"></v-divider>
        <div>
            Front-end developer with 2+ years of work experience.
            Bachelor degree in software engineering with an android application as final project.
            Has several successfuly closed front-end projects using vue.
            js and react along with the programming team of Dade Negar Jey Ltd.
            Ability to convert any complex graphic design to code with high attention to details.
            Eager to learn new skills through Searching and use them in projects.

        </div>
        <v-divider :thickness="2" class="my-10"></v-divider>
        <v-row>
            <v-col cols="6">
                <v-table>
                    <tbody>
                        <tr>
                            <td class="font-weight-bold pl-0"><v-icon class="mr-2 mb-1">mdi-email-outline</v-icon>Email:
                            </td>
                            <td class="pr-0 font-weight-bold"><a href="/contact"
                                    class="text-white text-decoration-none">me@mahiyou.net</a></td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold pl-0"><v-icon class="mr-2 mb-1">mdi-github</v-icon>Github:</td>
                            <td class="pr-0 font-weight-bold"><a href="https://github.com/mahiyou"
                                    class="text-white text-decoration-none">github.com/mahiyou</a></td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold pl-0"><v-icon class="mr-2 mb-1">mdi-linkedin</v-icon>LinkedIn:</td>
                            <td class="pr-0 font-weight-bold"><a href="linkedin.com/in/mahiyou"
                                    class="text-white text-decoration-none">linkedin.com/in/mahiyou</a></td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
        <v-btn variant="outlined" class="mt-10">Download CV</v-btn>
        <v-divider :thickness="2" class="my-10"></v-divider>
        <v-row>
            <v-col cols="12" class="mb-10 pr-md-6 pl-6 pl-md-auto">
                <div class="title mb-10 mt-0">Work Experience</div>
                <v-row class="left-border">
                    <v-col cols="1" class="mr-0 my-auto">
                        <div class="circle"></div>
                    </v-col>
                    <v-col cols="2" class="my-auto pl-0" align="center">
                        <div class="background">2022 - now</div>
                    </v-col>
                    <v-col cols="4" class="my-auto" align="center">
                        <div class="font-weight-bold">Front-End Developer</div>
                    </v-col>
                    <v-col cols="5" class="my-auto">
                        <div>Dade Negar Jey Company</div>
                    </v-col>
                </v-row>
                <v-row class="left-border">
                    <v-col cols="11" offset="1">
                        <ul>
                            <li>Converted graphic designs to code and developing front end of new sites and new projects.
                            </li>
                            <li>Fixed front-end buges and errors in old projects.</li>
                            <li>Learned several useful frameworks and libraries of front-end</li>
                        </ul>
                        <v-btn variant="outlined" height="27px" width="120px" class="btn-site mt-6"
                            href="https://www.jeyserver.com/">website</v-btn>
                    </v-col>
                </v-row>
                <v-row class="left-border pt-8">
                    <v-col cols="1" class="mr-0 my-auto">
                        <div class="circle"></div>
                    </v-col>
                    <v-col cols="2" class="my-auto pl-0" align="center">
                        <div class="background">2018 - 2019</div>
                    </v-col>
                    <v-col cols="4" class="my-auto" align="center">
                        <div class="font-weight-bold">Android Developer</div>
                    </v-col>
                    <v-col cols="5" class="my-auto">
                        <div>Hub company</div>
                    </v-col>
                </v-row>
                <v-row class="left-border">
                    <v-col cols="11" offset="1">
                        <ul>
                            <li>Designed android aplications with java.</li>
                        </ul>
                        <v-btn variant="outlined" height="27px" width="120px" class="btn-site mt-6"
                            href="https://isfahanhub.com/">website</v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-divider :thickness="2" class="mt-15 mb-10"></v-divider>
            <v-col cols="12" class="pl-6">
                <div class="title mb-10 mt-0">Education</div>
                <v-row class="left-border">
                    <v-col cols="1" class="mr-0 my-auto">
                        <div class="circle"></div>
                    </v-col>
                    <v-col cols="2" class="my-auto pl-0" align="center">
                        <div class="background">2016 - 2020</div>
                    </v-col>
                    <v-col cols="4" class="my-auto">
                        <div class="font-weight-bold">Bachelor degree In Software Engineering </div>
                    </v-col>
                    <v-col cols="5">
                        <div>Azad University</div>
                    </v-col>
                </v-row>
                <v-row class="left-border">
                    <v-col cols="11" offset="1">
                        <ul>
                            <li>Designed an android aplication for driving theory training as final project</li>
                        </ul>
                        <v-btn variant="outlined" height="27px" width="120px" class="btn-site mt-6">certificate</v-btn>
                    </v-col>
                </v-row>
                <v-row class="left-border pt-8">
                    <v-col cols="1" class="mr-0 my-auto">
                        <div class="circle"></div>
                    </v-col>
                    <v-col cols="2" class="my-auto pl-0" align="center">
                        <div class="background">2012 - 2016</div>
                    </v-col>
                    <v-col cols="4" class="my-auto">
                        <div class="font-weight-bold">Mathematics and Physics Diploma</div>
                    </v-col>
                    <v-col cols="5">
                        <div>Farzanagan High School</div>
                        <div>(School for Brilliant Talents)</div>
                    </v-col>
                </v-row>
                <v-row class="left-border">
                    <v-col cols="11" offset="1">
                        <v-btn variant="outlined" height="27px" width="120px" class="btn-site">certificate</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-divider :thickness="2" class="mt-15 mb-10"></v-divider>
        <div class="title">Skills</div>
        <div class="my-10">
            <h3 class="font-weight-bold my-2">Vue.js</h3>
            <span class="skill-background">vuetify</span>
            <span class="skill-background">vue-router</span>
            <span class="skill-background">pinia</span>
            <span class="skill-background">typescript</span>
            <span class="skill-background">sass</span>
            <span class="skill-background">less</span>
            <span class="skill-background">responsive design</span>
        </div>
        <div class="my-10">
            <h3 class="font-weight-bold my-2">React</h3>
            <span class="skill-background">react bootstrap</span>
            <span class="skill-background">fontawesome</span>
            <span class="skill-background">react-router-dom</span>
            <span class="skill-background">typescript</span>
            <span class="skill-background">sass</span>
            <span class="skill-background">less</span>
            <span class="skill-background">responsive design</span>
        </div>
        <h3 class="font-weight-bold my-2">Html and Css</h3>
        <div class="my-10">
            <h3 class="font-weight-bold my-2">Javascript</h3>
            <span class="skill-background">promises</span>
            <span class="skill-background">callback functions</span>
            <span class="skill-background">asynchronous</span>
            <span class="skill-background">polymorphism</span>
            <span class="skill-background">sass</span>
            <span class="skill-background">less</span>
            <span class="skill-background">responsive design</span>
        </div>
        <div class="my-10">
            <h3 class="font-weight-bold my-2">Java</h3>
            <span class="skill-background">object-Oriented programming</span>
            <span class="skill-background">polymorphism</span>
            <span class="skill-background">inheritance</span>
            <span class="skill-background">interfaces</span>
            <span class="skill-background">android studio</span>
        </div>
        <div class="my-10">
            <h3 class="font-weight-bold my-2">other skils</h3>
            <span class="skill-background">git</span>
            <span class="skill-background">npm</span>
        </div>
        <v-divider :thickness="2" class="mt-15 mb-10"></v-divider>
        <div class="title mt-15">Languages</div>
        <div class="my-10">
            <h3 class="font-weight-bold my-2">Farsi</h3>
            <span class="skill-background">Native</span>
        </div>
        <div class="my-10">
            <h3 class="font-weight-bold my-2">English</h3>
            <span class="skill-background">Speacking: 7 of 9</span>
            <span class="skill-background">Reading: 6 of 9</span>
            <span class="skill-background">Listening: 6 of 9</span>
            <span class="skill-background">Writing: 5.5 of 9</span>
        </div>

    </v-container>
</template>
<style lang="scss">
.v-container.about-container {
    padding: 20px 50px;
    line-height: 30px;
    font-size: 16px;

    .title {
        font-size: 26px;
        margin-top: 20px;
        color: white;
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

    .btn-site {
        font-size: 10px;
        color: #b4b4b5;
    }

    .skill-background {
        border: 1px solid #7cfefe;
        border-radius: 5px;
        margin: 3px;
        padding: 7px;
    }

    @media(max-width: 700px) {
        padding: 20px 20px;
    }
}
</style>