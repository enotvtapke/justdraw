const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const NODE_ENV = "development";

module.exports = env => {
	var config = {
		context: __dirname + "/src", //Устанавливаю директория для поиска точек входа (entry)

		mode: NODE_ENV == "development" ? "development" : "production",

		entry: { //Точки входа для поиска файлов
			canvas: "./canvas",
			websock: "./websock"
		},

		output: { //Точки выхода, файлы, получающиеся на выходе
			path: __dirname + "/public/js", //Путь к папке с выходныммми файлами
			filename: "[name].js", //Названия коненого файла [name] значит, что название будет взяты из имени файлов на входе
			publicPath: '/js/', //Как получить файл из интернета (сюда сохраняется файл с кодом из динамических инпутов)
			library: "[name]" //Название переменной главной функции в конечном файле
		},

		watch: true, //Автоматическое обновление конечных файлов при изменении начальных файлов

		devtool: NODE_ENV == "development" ? "inline-cheap-module-source-map" : "", //Sours map для конечных фалов(ножно при тестах)

		plugins: [  //Подключаемые плагины
			new webpack.DefinePlugin({  //Плагин делает переменную глобальной
				NODE_ENV: JSON.stringify(NODE_ENV), //название переменной: занчение переменной
			})
		],

		module: {  //Подключение модулей, например, перепроцессоров, постпроцессоров
			rules: [{
				test: /\.js$/, //Тип фалов на действует модуль (RegExp применяется к имени файла)
      			exclude: /(node_modules|bower_components)/, //Исключённые типы файлов
      			use: {
				  	loader: "babel-loader", //Название loadera, бабель заменяет новый js на старый
				  	options: {
				    	presets: [
					      	["env", {
					        	targets: {
					          		browsers: "> 3%"
					        	}
					      	}]
				    	]
				  	}
			  	}
			}]
		},

		optimization: {
		    minimizer: [
		    	new UglifyJsPlugin({})
		    ],
		    noEmitOnErrors: true, 
		}
	};

	return config;
}