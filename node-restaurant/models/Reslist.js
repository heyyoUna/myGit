const db = require('./../modules/connect-mysql');
const tableName = 'restaurant';
// const pkField = 'sid';

class Reslist{
   static async findAll(pk=0) {
        const sql = `SELECT * FROM ${tableName} LIMIT 6`;
                const [rs] = await db.query(sql);
                if(rs && rs.length){
                    return rs;
                }
                return null;
            }
        }
    
module.exports= Reslist;