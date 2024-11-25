const path = require("path");

module.exports = {
	resolve: {
		alias: {
			admin: path.resolve(__dirname, "src/admin/"),
			autentica: path.resolve(__dirname, "src/autentica/"),
			componentes: path.resolve(__dirname, "src/componentes/"),
			hooks: path.resolve(__dirname, "src/hooks/"),
			paginas: path.resolve(__dirname, "src/paginas/"),
			services: path.resolve(__dirname, "src/services/"),
		},
	},
};
