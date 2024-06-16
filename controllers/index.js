const sql = require('../utils/db');

module.exports.getAllBanks = async (req, res) => {
    const [banks] = await sql.query('select * from bank_details limit 100');
    res.status(200).json(banks);
}

module.exports.getBankById = async (req, res) => {
    const {id} = req.params;
    const results = await sql.query('select * from bank_details where bank_id = ?', [id]);
    if (results[0].length === 0) {
        return res.status(404).send('Bank not found.');
      }
    res.status(200).json(results[0]);
}

module.exports.getBanksByBranch =  async(req, res) => {
    const { branch } = req.params;
    const results = await sql.query('select * from bank_details where bank_branch = ? limit 100', [branch])
    if (results[0].length === 0) {
        return res.status(404).send('There are no banks in the specified branch.');
    }
    res.status(200).json(results[0]);
}

module.exports.getBanksByCity = async (req, res) => {
    const { city } = req.params;
    const [banks] = await sql.query('select * from bank_details where bank_city = ? limit 100', [city]);
    res.status(200).json(banks);
}

module.exports.getBanksByDistrict =  async (req, res) => {
    const { district } = req.params;
    const results = await sql.query('select * from bank_details where bank_district = ? limit 100', [district]);
    if (results[0].length === 0) {
        return res.status(404).send('There are no banks in the specified region');
      }
    res.status(200).json(results[0]);
}