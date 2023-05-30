const path = require('path');

module.exports = {
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
	// ...other webpack configuration options
};
