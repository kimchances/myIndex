(function ($) {

    let geterUser = new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST", //提交方式
            url: "../myServer/serveraction.do",//路径
            data: {
                "serverCode": "getIndexUser"
            },//数据，这里使用的是Json格式进行传输,
            dataType: 'json',
            success: function (result) {//返回数据根据结果进行相应的处理
                console.info(result);
                if (result) {
                    let dataSource = result.data;
                    if(dataSource.length) {
                        $("#myName").text(dataSource[0].uName);
                        $("#myText").html(dataSource[0].uContent);
                        $("#myPic").attr('src', dataSource[0].uHeadImg);
                        $("#pTitle").text(dataSource[0].pTitle);
                        $("#pContent").text(dataSource[0].pContent);
                    }
                    resolve();
                }
            }
        });
    });
    let geterCategory = new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST", //提交方式
            url: "../myServer/serveraction.do",//路径
            data: {
                "serverCode": "getIndexCategory"
            },//数据，这里使用的是Json格式进行传输,
            dataType: 'json',
            success: function (result) {//返回数据根据结果进行相应的处理
                console.info(result);
                if (result) {
                    let dataSource = result.data;
                    let dataSourceL = dataSource.length;
                    let htmlStr = ``;
                    let categoryTitle = ``;
                    for (let i = 0; i < dataSourceL; i++) {
                        if (dataSource[i].jump == "1") {
                            htmlStr += `<div class="4u 12u(mobile)" onclick="window.open('${dataSource[i].cUrl}')">`;
                        } else {
                            htmlStr += `<div class="4u 12u(mobile)">`;
                        }
                        htmlStr += `<section class="box style1">
                                <span class="icon featured ${dataSource[i].cFont}"></span>
                                <h3>${dataSource[i].cName}</h3>
                                <p>${dataSource[i].cContent}</p>
                                </section>
                                </div>`;
                        if (!i) {
                            categoryTitle += `${dataSource[i].cNameEn}`;
                        } else {
                            categoryTitle += `　/　${dataSource[i].cNameEn}`;
                        }
                    }
                    $("#myCategory").html(htmlStr);
                    $("#myCategoryTitle").text(categoryTitle);
                    resolve();
                }
            }
        });
    });
    let geterProjects = new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST", //提交方式
            url: "../myServer/serveraction.do",//路径
            data: {
                "serverCode": "getIndexProjects"
            },//数据，这里使用的是Json格式进行传输,
            dataType: 'json',
            success: function (result) {//返回数据根据结果进行相应的处理
                console.info(result);
                if (result) {
                    let dataSource = result.data;
                    let dataSourceL = dataSource.length;
                    let htmlStr = `<div class="container"><div class="row">`;
                    for (let i = 0; i < dataSourceL; i++) {
                        if (dataSource[i].jump == "1") {
                            htmlStr += `<div class="4u 12u(mobile)" onclick="window.location.href='project_detail.html?projectId=${dataSource[i].pId}'">`;
                        } else {
                            htmlStr += `<div class="4u 12u(mobile)">`;
                        }
                        htmlStr += `
                            <article class="box style2">
                            <a href="javascript:void(0);" class="image featured"><img src="${dataSource[i].pUrl}"/></a>
                            <h3><a href="javascript:void(0);">${dataSource[i].pName}</a></h3>
                            <p>${dataSource[i].pContent}</p></article></div>`;
                    }
                    htmlStr += `</div></div><p>------------* 有爱的底线 *------------</p>`;
                    $("#related").append(htmlStr);
                    resolve();
                }
            }
        });
    });

    $(function () {
        let $window = $(window);
        $window.on('load', function () {
            /*
            * 跑数据,个人信息
            * 跑数据,分类信息
            * 跑数据,项目列表
            * */
            new Promise(function (resolve, reject) {
                let specUrl='';
                /*
                * 防止直接访问域名的相对路劲获取错误
                * */
                if(window.location.href.split('/e').length>1){
                    specUrl="loading.txt";
                }else{
                    specUrl="e/loading.txt"
                }

                $.ajax({
                    url: specUrl,
                    type: "GET",
                    dataType: "text",
                    success: function (data) {
                        $('body').append(data);
                        resolve();
                    }
                });
            }).then(function () {
                Promise.race([geterUser, geterCategory, geterProjects]).then(function (result) {
                    $(".wrap").hide();
                    $(".main_content").show();
                    $("body").css('background', '#FFF'); //覆盖样式,背景mash直接用的是ColorBlack*/
                });
            });
        });
    });

})(jQuery);