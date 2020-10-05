module.exports = {
    publicPath: '/portfolio/',
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