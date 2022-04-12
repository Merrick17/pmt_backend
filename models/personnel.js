const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personnel', {
    id_personnel: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SIGSOC: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CODDEP: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    NUMERO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    NOMPER: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PRENOM: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MATRIC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DTEENT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DTESOR: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TYPPER: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    STABAD: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    BADHAB: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ATEHAB: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SECHAB: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SSEHAB: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PCHHAB: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RESHAB: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RYTHAB: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    EQUHAB: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CALHAB: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CALANN: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    GROHAB: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    SHSHAB: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ANPASD: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ANPASP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ANENCD: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ANENCP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ANSUID: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ANSUIP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    GESHRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ANNUAL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BONHRE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TAUHOR: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ETAUHOR: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CODMET: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CODQLF: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NATION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DATNAI: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LIENAI: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SITFAM: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NBRENF: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ADRESS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ADRES2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ADRES3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CODPOS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NOMVIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NUMTEL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NUMTE2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NUMSSO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PERPRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TYPCON: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NIVEAU: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ECHELO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    COEFFI: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CPAREP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CPAACQ: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CPAPRI: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RTTREP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RTTACQ: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    RTTPRI: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ANNREP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ANNCUM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    HSUREP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    HSUCUM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    INDSAI: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    COMMEN: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CPHOTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TYPCOM: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CREDAT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CREHEU: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CREPAR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MODDAT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    MODHEU: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MODPAR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PASSWD: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'personnel',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_personnel" },
        ]
      },
    ]
  });
};
