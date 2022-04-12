const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pdc', {
    id_pdc: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sigsoc: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    coddep: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    codcha: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    libcha: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    libch2: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    codate: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    codsec: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    codssc: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    badhab: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    centch: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    comptr: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    typpos: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    typres: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cfmcal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numimo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    couhor: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ecouhor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cousim: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ecousim: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cfrend: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nbpsim: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    codmet: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    codqlf: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    dtemes: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    cutmut: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    cunbcy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numcal: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    numver: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    indmod: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    datmod: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    tiersr: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    tiever: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    codart: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    emplac: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    datach: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    prxach: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    eprxach: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    valamo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    evalamo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    cumnbp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fimage: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    codpla: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    dimen1: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    dimen2: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    dimen3: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    prestd: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    eprestd: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    typpre: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    pctpre: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ctrper: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ctrver: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    moiani: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    derctr: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    derver: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    etactr: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    classe: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    datcla: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    codctr: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    tolacd: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    tolacf: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    unimes: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    numbad: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    normes: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    codfrn: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    codfab: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    reffou: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    reffab: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    rangem: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    numser: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    codque: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    codfmm: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    vm1min: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    vm1max: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    vm2min: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    vm2max: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    vm3min: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    vm3max: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    frmesu: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    prgint: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    parcom: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nonuti: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    equipt: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    gemain: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    resapp: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    gesusu: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    format: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cfvfab: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    indsai: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    champ1: {
      type: DataTypes.STRING(23),
      allowNull: false
    },
    champ2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    typcom: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    credat: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    creheu: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    crepar: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    moddat: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    modheu: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    modpar: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pdc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pdc" },
        ]
      },
    ]
  });
};
