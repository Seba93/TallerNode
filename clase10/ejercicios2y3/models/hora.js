//Creacion de modelo para almacenar hora de visita
module.exports = function(sequelize, DataTypes) {
    var horario = sequelize.define('horario', {
        hora: {
            type: DataTypes.STRING,
            allowNull: false
        },

	minutos: {
            type: DataTypes.STRING,
            allowNull: false
        },

	segundos: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    return horario;
};
