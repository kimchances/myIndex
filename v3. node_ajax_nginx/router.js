var express = require('express')
var mysqlSucker = require('./models/mysql-connector')
var router = express.Router()

router.get('/', function (req, res) {
    let lastData = {};
    let sqlStatement = 'SELECT Idx_Info.Idx_If_name AS uName,  Idx_Info.Idx_If_content AS uContent,  Idx_Info.Idx_Pj_Title AS pTitle,  Idx_Info.Idx_Pj_Content AS pContent,  Idx_Info.Idx_If_headImg AS uHeadImg,  Idx_Info.Idx_Wb_title AS wTitle,  Idx_Info.Idx_Wb_nav AS wNav FROM Idx_Info';
    mysqlSucker.query(sqlStatement, [], function (infoData, fields) {
        let sqlStatement = 'SELECT Idx_Category.Idx_Ctgr_Name AS cName,  Idx_Category.Idx_Ctgr_NameEn AS cNameEn,  Idx_Category.Idx_Ctgr_Content AS cContent,  Idx_Category.Idx_Ctgr_Url AS cUrl,  Idx_Category.Idx_Ctgr_Font AS cFont,  Idx_Category.Idx_Ctgr_JumpEnable AS jump FROM Idx_Category';
        mysqlSucker.query(sqlStatement, [], function (categoryData, fields) {
            let sqlStatement = '  SELECT Idx_Projects.id AS pId,  Idx_Projects.Idx_Pro_Name AS pName,  Idx_Projects.Idx_Pro_Pics AS pPics,  Idx_Projects.Idx_Pro_URL AS pUrl,  Idx_Projects.Idx_Pro_Content AS pContent,  Idx_Projects.Idx_Pro_JumpEnable AS jump FROM Idx_Projects';
            mysqlSucker.query(sqlStatement, [], function (projectData, fields) {
                res.render('index.html', {
                    "info": JSON.parse(JSON.stringify(infoData)),
                    "category": JSON.parse(JSON.stringify(categoryData)),
                    "projects": JSON.parse(JSON.stringify(projectData))
                });
            });
        });
    });
});
module.exports = router