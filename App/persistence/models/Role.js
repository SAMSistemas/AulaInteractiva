module.exports = function(sequelize, DataTypes) {
    var Role = sequelize.define("Role", {
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        permissions: DataTypes.STRING
    });

    return Role;
};

