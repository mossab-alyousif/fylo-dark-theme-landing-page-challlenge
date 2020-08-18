// In next.config.js

import withSass from '@zeit/next-sass';
import withCSS from '@zeit/next-css';

export default withCSS(
    withSass({
        webpack(config, options) {
            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                    },
                },
            });
            return config;
        },
    })
);

// import withReactSvg from 'next-react-svg';
// import path from 'path';
// const __dirname = path.resolve();
// export default withReactSvg({
//     include: path.join(__dirname, 'images/svg'),
//     webpack(config, options) {
//         return config;
//     },
// });
