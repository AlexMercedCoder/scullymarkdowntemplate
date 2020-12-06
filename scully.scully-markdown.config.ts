exports.config = {

  projectRoot: "./src",
  projectName: "scully-markdown",
  outDir: './dist/static',

  routes: {
    '/blog/:postId': {
      type: 'contentFolder',
      postId: {
        folder: "./markdown"
      }
    },
  }
};