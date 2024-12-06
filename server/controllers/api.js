const getAPI = async(req, res) => {
    try { 
        res.status(200).json({"organization": "Student Cyber Games"})
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {getAPI};