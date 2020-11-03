let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
  .js('src/app.js', 'dist/')
  .sass('src/app.scss', 'dist/')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')]
  });

  if (process.env.NODE_ENV === 'development') {
    mix.webpackConfig({
      output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
      publicPath: '/'
      },
      devServer: {
      proxy: {
        '!**/*.(js|css)': { target: 'http://localhost:3001' }
      }
      }
    });
  }