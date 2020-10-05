module.exports = {
    publicPath: '/Portfolio/',
    outputDir: 'docs',
    css: {
        loaderOptions: {
            sass: {
                prependData: `
            @import "@/assets/scss/_global.scss";
          `,
            },
        },
    },
};