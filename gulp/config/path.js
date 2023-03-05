const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
        style: `${buildFolder}/css/`,
        script: `${buildFolder}/js/`,
        image: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        style: `${srcFolder}/scss/**/*.scss`,
        script: `${srcFolder}/js/*.js`,
        image: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,svg,webp}`,
        fonts: `${srcFolder}/fonts/`,
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        style: `${srcFolder}/scss/**/*.scss`,
        script: `${srcFolder}/js/*.js`,
        image: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,svg,webp}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
}