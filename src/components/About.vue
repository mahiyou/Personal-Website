<template>
    <v-container class="about-container">
        <div class="page-title">About me</div>
        <v-img src="../assets/pics/me2.jpg" height="500px" class="img mr-5"></v-img>
        <p class="title">Maedeh Yousefi</p>
        <p class="sub-title">Front End Developer</p>
        <v-divider :thickness="1.5" class="my-5"></v-divider>
        <div class="content">
            Hi, welcome to my personal website.<br />
            I graduated in software engineering with a bachelor’s degree in 2020.<br />
            After graduation I tried different fields and finaly decided to work as a frontend developer.<br />
            My priority in every project is customer convenience in using the user interface, and after that beauty and
            creativity is important.
        </div>
        <v-divider :thickness="1.5" class="my-10"></v-divider>
        <v-row>
            <v-col>
                <v-table>
                    <tbody>
                        <tr>
                            <td class="font-weight-bold text-white">Birthday:</td>
                            <td>11.05.1998</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold text-white">Age:</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold text-white">Email:</td>
                            <td>you.maede@gmail.com</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold text-white">github:</td>
                            <td>github.com/mahiyou</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
            <v-col>
                <v-table>
                    <tbody>
                        <tr>
                            <td class="font-weight-bold text-white">Major:</td>
                            <td>Software Engineering</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold text-white">Deegree:</td>
                            <td>Bachelor</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold text-white">Interest:</td>
                            <td>Cooking and baking</td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold text-white">Freelance:</td>
                            <td>Available</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
        <v-btn variant="outlined" class="mt-10">Download CV</v-btn>
        <v-divider :thickness="1.5" class="my-10"></v-divider>
        <div class="title text-white">Skills</div>
        <v-row>
            <v-col class="pr-10">
                <v-row class="mt-5">
                    <v-col>
                        <div class="text-white">Html & Css</div>
                    </v-col>
                    <v-col>
                        <div class="text-right">100%</div>
                    </v-col>
                </v-row>
                <v-progress-linear model-value="100" :height="3"></v-progress-linear>
                <v-row class="mt-5">
                    <v-col>
                        <div class="text-white">Vue</div>
                    </v-col>
                    <v-col>
                        <div class="text-right">70%</div>
                    </v-col>
                </v-row>
                <v-progress-linear model-value="70" :height="3"></v-progress-linear>
                <v-row class="mt-5">
                    <v-col>
                        <div class="text-white">Java Script</div>
                    </v-col>
                    <v-col>
                        <div class="text-right">50%</div>
                    </v-col>
                </v-row>
                <v-progress-linear model-value="50" :height="3"></v-progress-linear>
            </v-col>
            <v-col class="pl-10">
                <v-row class="mt-5">
                    <v-col>
                        <div class="text-white">React</div>
                    </v-col>
                    <v-col>
                        <div class="text-right">70%</div>
                    </v-col>
                </v-row>
                <v-progress-linear model-value="70" :height="3" color="#b4b4b5"></v-progress-linear>
                <v-row class="mt-5">
                    <v-col>
                        <div class="text-white">Java</div>
                    </v-col>
                    <v-col>
                        <div class="text-right">70%</div>
                    </v-col>
                </v-row>
                <v-progress-linear model-value="70" :height="3"></v-progress-linear>
                <v-row class="mt-5">
                    <v-col>
                        <div class="text-white">English Language</div>
                    </v-col>
                    <v-col>
                        <div class="text-right">80%</div>
                    </v-col>
                </v-row>
                <v-progress-linear model-value="80" :height="3"></v-progress-linear>
            </v-col>
        </v-row>
        <v-divider :thickness="1.5" class="my-15"></v-divider>
        <v-row>
            <v-col class="pr-6">
                <div class="title text-white mb-10 mt-0">Work Experience</div>
                <v-row class="left-border">
                    <v-col cols="1" class="mr-0 my-auto">
                        <div class="circle"></div>
                    </v-col>
                    <v-col cols="4" class="my-auto pl-0" align="center">
                        <div class="background text-white">2022 - today</div>
                    </v-col>
                    <v-col cols="7" class="my-auto">
                        <div class="text-white font-weight-bold">Jey Server Company</div>
                        <div>Front End Developer</div>
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
                        <div>Java programer</div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col class="pl-6">
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
                        <div>Bachelor degree</div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<style lang="scss">
.v-container.about-container {
    padding: 80px 50px;
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
    .left-border{
        border-left: 1px solid #56585c;
    }
    .background{
        background-color: #414247;
        border-radius: 30px;
        padding: 5px;
        font-size: 14px;
    }
}
</style>