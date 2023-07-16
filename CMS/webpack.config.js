import path from 'path';

export default {
	// ...other webpack configuration options
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true, // Enable CSS modules
							importLoaders: 1,
						},
					},
					'postcss-loader',
				],
				include: /\.module\.css$/, // Match CSS files with .module.css extension
			},
			// ...other rules for non-module CSS
		],
	},
	resolve: {
		fallback: {
			crypto: require.resolve('crypto-browserify'),
		},
	},
	// ...other webpack configuration options
};
