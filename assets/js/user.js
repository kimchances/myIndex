(function ($) {
    $(function () {

        var $window = $(window);
        var $ip = "../myServer/serveraction.do";
        $window.on('load', function () {
            /*
            * 跑数据,个人信息
            * 跑数据,分类信息
            * 跑数据,项目列表
            * */
            $.ajax({
                type: "POST", //提交方式
                url: $ip,//路径
                data: {
                    "serverCode": "getIndexUser"
                },//数据，这里使用的是Json格式进行传输,
                dataType: 'json',
                done: function (result) {//返回数据根据结果进行相应的处理
                    console.info(result);
                    if (result) {
                        let dataSource = result.data;
                        $("#myName").text(dataSource[0].uName);
                        $("#myText").text(dataSource[0].uContent);
                        $("#myText").attr('src', dataSource[0].uHeadImg);
                    }
                }
            });
            $.ajax({
                type: "POST", //提交方式
                url: $ip,//路径
                data: {
                    "serverCode": "getIndexCategory"
                },//数据，这里使用的是Json格式进行传输,
                dataType: 'json',
                done: function (result) {//返回数据根据结果进行相应的处理
                    console.info(result);
                    if (result) {
                        let dataSource = result.data;
                        console.info(result);
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
                    }
                }
            });
            $.ajax({
                type: "POST", //提交方式
                url: $ip,//路径
                data: {
                    "serverCode": "getIndexProjects"
                },//数据，这里使用的是Json格式进行传输,
                dataType: 'json',
                done: function (result) {//返回数据根据结果进行相应的处理
                    console.info(result);
                    if (result) {
                        let dataSource = result.data;
                        let dataSourceL = dataSource.length;
                        let htmlStr = ``;
                        for (let i = 0; i < dataSourceL; i++) {
                            if (dataSource[i].jump == "1") {
                                htmlStr += `<div class="container" onclick="window.open('${dataSource[i].cUrl}')">`;
                            } else {
                                htmlStr += `<div class="container">`;
                            }
                            htmlStr += `<div class="row">
                            <div class="4u 12u(mobile)">
                            <article class="box style2">
                            <a href="#" class="image featured"><img src="${dataSource[i].pUrl}"/></a>
                            <h3><a href="#">${dataSource[i].pName}</a></h3>
                            <p>${dataSource[i].pContent}</p></article></div></div></div>`;
                        }
                        htmlStr += `<p>------------你触摸到了我的底线------------</p>`;
                        $("#related").append(htmlStr);
                    }
                }
            });
        });
    });

})(jQuery);