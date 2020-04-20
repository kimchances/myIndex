(function ($) {

    let getUser = new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST", //提交方式
            url: "getUser",//路径
            data: {},//数据，这里使用的是Json格式进行传输,
            dataType: 'json',
            success: function (result) {//返回数据根据结果进行相应的处理
                // console.info(result);
                if (result) {
                    if(result.length) {
                        $("#myName").text(result[0].uName);
                        $("#myText").html(result[0].uContent);
                        $("#myPic").attr('src', result[0].uHeadImg);
                        $("#pTitle").text(result[0].pTitle);
                        $("#pContent").text(result[0].pContent);
                        $("title").html(result[0].wTitle);
                        $("#nav").html(result[0].wNav);
                    }
                    resolve();
                }
            }
        });
    });
    let getCategory = new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST", //提交方式
            url: "getCategory",//路径
            data: {},//数据，这里使用的是Json格式进行传输,
            dataType: 'json',
            success: function (result) {//返回数据根据结果进行相应的处理
                // console.info(result);
                if (result) {
                    let dataSourceL = result.length;
                    let htmlStr = ``;
                    let categoryTitle = ``;
                    for (let i = 0; i < dataSourceL; i++) {
                        if (result[i].jump == "1") {
                            htmlStr += `<div class="4u 12u(mobile)" onclick="window.open('${result[i].cUrl}')">`;
                        } else {
                            htmlStr += `<div class="4u 12u(mobile)">`;
                        }
                        htmlStr += `<section class="box style1">
                                <span class="icon featured ${result[i].cFont}"></span>
                                <h3>${result[i].cName}</h3>
                                <p>${result[i].cContent}</p>
                                </section>
                                </div>`;
                        if (!i) {
                            categoryTitle += `${result[i].cNameEn}`;
                        } else {
                            categoryTitle += `　/　${result[i].cNameEn}`;
                        }
                    }
                    $("#myCategory").html(htmlStr);
                    $("#myCategoryTitle").text(categoryTitle);
                    resolve();
                }
            }
        });
    });
    let getProjects = new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST", //提交方式
            url: "getProjects",//路径
            data: {},//数据，这里使用的是Json格式进行传输,
            dataType: 'json',
            success: function (result) {//返回数据根据结果进行相应的处理
                // console.info(result);
                if (result) {
                    let dataSourceL = result.length;
                    let htmlStr = `<div class="container"><div class="row">`;
                    for (let i = 0; i < dataSourceL; i++) {
                        if (result[i].jump == "1") {
                            htmlStr += `<div class="4u 12u(mobile)" onclick="window.open('${result[i].pUrl}?projectId=${result[i].pId}')">`;
                        } else {
                            htmlStr += `<div class="4u 12u(mobile)">`;
                        }
                        htmlStr += `
                            <article class="box style2">
                            <a href="javascript:void(0);" class="image featured"><img src="${result[i].pPics}"/></a>
                            <h3><a href="javascript:void(0);">${result[i].pName}</a></h3>
                            <p>${result[i].pContent}</p></article></div>`;
                    }
                    htmlStr += `</div></div>`;
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
                $.ajax({
                    url: "loading.txt",
                    type: "GET",
                    dataType: "text",
                    success: function (data) {
                        $('body').append(data);
                        resolve();
                    }
                });
            }).then(function () {
                Promise.race([getUser, getCategory, getProjects]).then(function (result) {
                    $(".wrap").hide();
                    $(".main_content").show();
                    $("body").css('background', '#FFF'); //覆盖样式,背景mash直接用的是ColorBlack*/
                });
            });
        });
    });

})(jQuery);