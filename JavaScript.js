$(document).ready(function () {
    //$(".documentbox.ptop").scroll(function () {
    //    var sk = $(this).scrollTop();
    //    var pr = $(this).prev();
    //    var st = $('.ui.stickybox');
    //    if (sk > 0) {
    //        pr.addClass('mtop');
    //        if (sk > 15) {
    //            st.css('margin-top', (sk - 15) + 'px');
    //        }
    //    }
    //    else {
    //        pr.removeClass('mtop');
    //        if (sk < 15) {
    //            st.css('margin-top', '0px');
    //        }
    //    }
    //});
    $("input[type = 'text']").bind('keydown', function (event) {
        if (event.keyCode == "13") {
            search.go();
        }
    });
    $('.menu_list>.ui.accordion').accordion();
    DocumentReady();
});
function DocumentReady() {
    //无操作的下拉框
    $('.ui.dropdown.noaction[tabindex!="0"]').dropdown({ 'action': 'hide' });
    //带有可清除标记的下拉框初始化
    $('.ui.dropdown.clearable[tabindex!="0"]').dropdown({ clearable: true });
    //其他普通下拉框初始化
    $('.ui.dropdown[tabindex!="0"]').dropdown();
    //表格中的权限
    $('.ui.checkbox#SelectAll:has(>input[tabindex!="0"])').checkbox({
        onChecked: function () {
            var table = $(this).parents('.ui.table');
            var boxs = table.find('tbody>tr>td:first-child>.ui.checkbox');
            for (var i = 0; i < boxs.length; i++) {
                $(boxs[i]).checkbox('check');
            }
        },
        onUnchecked: function () {
            var table = $(this).parents('.ui.table');
            var boxs = table.find('tbody>tr>td:first-child>.ui.checkbox');
            for (var i = 0; i < boxs.length; i++) {
                $(boxs[i]).checkbox('uncheck');
            }
        }
    });
    //选择框
    $('.ui.checkbox:has(>input[tabindex!="0"])').checkbox();
    //带清除按钮的输入框
    $('.clearable.input > input').each((i, e) => {
        if ($(e).val().length > 0) {
            $(e).next().css('display', 'block');
        }
    });
    $('.clearable.input > input').focus(function () {
        if ($(this).val().length > 0) {
            $(this).next().css('display', 'block');
        }
    });
    $('.clearable.input > .close').click(function () {
        $(this).prev().val('');
        $(this).css('display', 'none');
    });
    $('.clearable.input > input').bind('input propertychange', function () {
        if ($(this).val().length > 0) {
            $(this).next().css('display', 'block');
        }
        else {
            $(this).next().css('display', 'none');
        }
    });
    $('.Approvalform.readonly .ui.dropdown').addClass('read-only');
    $('.Approvalform.readonly .ui.calendar').addClass('read-only');
    $('.Approvalform.readonly .field input,.Approvalform.readonly .field textarea').attr('readonly', 'readonly');

    $('.ui.calendar.date').not('.read-only').calendar({
        type: 'date',
        firstDayOfWeek: 1,
        text: {
            days: ['日', '一', '二', '三', '四', '五', '六'],
            months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            today: '今天',
            now: '现在',
            am: '上午',
            pm: '下午'
        },
        onHide: function () {
            $(this).siblings('input').blur();
        },
        formatter: {
            date: function (date, settings) {
                if (!date) return '';
                var day = date.getDate();
                if (day < 10) {
                    day = "0" + day;
                }
                var month = date.getMonth() + 1;
                if (month < 10) {
                    month = "0" + month;
                }
                var year = date.getFullYear();
                return year + '-' + month + '-' + day;
            }
        }
    });
    $('.ui.calendar.month').not('.read-only').calendar({
        type: 'month',
        firstDayOfWeek: 1,
        text: {
            days: ['日', '一', '二', '三', '四', '五', '六'],
            months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            today: '今天',
            now: '现在',
            am: '上午',
            pm: '下午'
        },
        onHide: function () {
            $(this).siblings('input').blur();
        },
        formatter: {
            date: function (date, settings) {
                if (!date) return '';
                var month = date.getMonth() + 1;
                if (month < 10) {
                    month = "0" + month;
                }
                var year = date.getFullYear();
                return year + '年' + month + '月';
            }
        }
    });
    // datetime  扩展日历类型：type: 'datetime',
    $('.ui.calendar.datetime').calendar({
        type: 'datetime',
        firstDayOfWeek: 1,
        ampm: false,
        text: {
            days: ['日', '一', '二', '三', '四', '五', '六'],
            months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            today: '今天',
            now: '现在',
        },
        onHide: function () {
            $(this).siblings('input').blur();
        },
        formatter: {
            date: function (date, settings) {

                if (!date) return '';
                var hour = date.getHours();
                if (hour < 10) {
                    hour = "0" + hour;
                }
                var minute = date.getMinutes();
                if (minute < 10) {
                    minute = "0" + minute;
                }
                console.log(hour, minute);
                var day = date.getDate();
                if (day < 10) {
                    day = "0" + day;
                }
                var month = date.getMonth() + 1;
                if (month < 10) {
                    month = "0" + month;
                }
                var year = date.getFullYear();
                return year + '-' + month + '-' + day;
            }
        }
    });
    // datetime
    $('.ui.input.CardNo>input').bind("input", function () {
        $(this).val($(this).val().replace(/[ \f\t\v]/g, '').replace(/(\d{4})(?=\d)/g, "$1  "));
    });
    $("input[type='text'],textarea").attr('spellcheck', false);
    $('.ui.rating.priorityLevel[index!="0"]').attr('index', 0).rating({
        onRate: function (value) {
            switch (value) {
                case 1:
                    $(this).removeClass('green olive yellow orange red').addClass('green')
                    break;
                case 2:
                    $(this).removeClass('green olive yellow orange red').addClass('olive')
                    break;
                case 3:
                    $(this).removeClass('green olive yellow orange red').addClass('yellow')
                    break;
                case 4:
                    $(this).removeClass('green olive yellow orange red').addClass('orange')
                    break;
                case 5:
                    $(this).removeClass('green olive yellow orange red').addClass('red')
                    break;
            }
        }
    });
    $('.ui.rating[index!="0"]').attr('index', 0).rating();
    $('*[data-content]').popup();
}
function ImagePreview() {
    var src = event.target.src;
    modal.load({
        view: '/Home/ImagePreview?Url=' + src,
        width: 500
    });
}
jQuery.fn.post = function (url, data, autoreload, callback) {
    var net = new ajaxhelp();
    var target = this;
    var tmpcss = 'loading disabled';
    net.post(url, data, function () {
        if (target) { target.addClass(tmpcss); }
    }, function (result) {
        if (!result.success) {
            if (target) { target.removeClass(tmpcss); }
            tip.error(result.message);
            return;
        }
        if (autoreload) {
            window.location.reload();
        }
        else {
            if (callback) {
                callback(result.result);
            }
        }
    });
};
jQuery.fn.Aget = function (url, callback) {
    var net = new ajaxhelp();
    var target = this;
    var tmpcss = 'loading disabled';
    net.get(url, function () {
        if (target) { target.addClass(tmpcss); }
    }, function (result) {
        if (!result.success) {
            if (target) { target.removeClass(tmpcss); }
            tip.error(result.message);
            return;
        }
        if (callback) {
            if (target) { target.removeClass(tmpcss); }
            callback(result.result);
        }
    });
};
jQuery.fn.getData = function () {
    var _form = $(this);
    var objs = _form.find('input[type="text"],input[type="file"],input[type="checkbox"],input[type="hidden"],input[type="password"],input[type="number"],textarea,div.ui.rating,img');
    var qid = "id", result = {};
    for (var i = 0; i < objs.length; i++) {
        var o = objs[i];
        var key = $(o).attr(qid);
        if (key !== undefined) {
            var val = null;
            if (o.nodeName === 'INPUT') {
                switch (o.type) {
                    case 'hidden':
                    case 'password':
                    case 'text':
                        val = $(o).val().trim();
                        break;
                    case 'number':
                        val = Number($(o).val());
                        break;
                    case 'file':
                        val = o.files.length > 0 ? o.files : null;
                        break;
                    case 'checkbox':
                        val = o.checked;
                        break;
                }
            }
            else if (o.nodeName === 'TEXTAREA') {
                val = $(o).val().trim();
            }
            else if (o.nodeName === 'DIV' && o.classList.contains('rating')) {
                val = $(o).rating('get rating');
            }
            else if (o.nodeName === 'IMG') {
                val = $(o).attr('src');
            }
            result[key] = val;
        }
    }
    return result;
};
jQuery.fn.loadview = function (url) {
    var html = $('<div class="ui active inverted dimmer"><div class="ui text loader">Loading...</div></div>');
    var t = $(this);
    t.append(html);
    var net = new ajaxhelp();
    net.get(url, function () { }, function (result) {
        t.html(result);
    });
};
class urlhelp {
    constructor() { }
    parseParam(params) {
        var queryAry = [], val = undefined;
        for (var query in params) {
            val = params[query];
            if (val !== '' && typeof val !== 'undefined' && val !== null) {
                queryAry.push(query + '=' + val);
            }
        }
        return queryAry.join('&');
    };
    replaceParamVal(ourl, paramName, replaceWith) {
        if (ourl) {
            ourl = ourl.replace('?', '');
        }
        else {
            ourl = paramName + '=' + replaceWith;
            return "?" + ourl;
        }
        var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)", "i");
        var r = ourl.match(reg);
        if (r === null) {
            ourl = ourl + "&" + paramName + '=' + replaceWith;
            return '?' + ourl;
        }
        else {
            var re = eval('/(' + paramName + '=)([^&]*)/gi');
            var nUrl = ourl.replace(re, paramName + '=' + replaceWith);
            return '?' + nUrl;
        }
    };
    load(p) {
        var oUrl = window.location.search;
        oUrl = this.replaceParamVal(oUrl, 'Page', p);
        window.location.href = window.location.pathname + oUrl;
    };
    resize(s) {
        var oUrl = window.location.search;
        oUrl = this.replaceParamVal(oUrl, 'Page', '1');
        oUrl = this.replaceParamVal(oUrl, 'PageSize', s);
        window.location.href = window.location.pathname + oUrl;
    };
    search(el) {
        var data = $(el).parents('.search.box').getdata();
        data = this.parseParam(data);
        data = data.replace('#', '%23');
        var _url = "";
        if (data) {
            _url = "?" + data;
        }
        window.location.href = window.location.pathname + _url;
    }
}

var url = new urlhelp();
function loadScript(domid, url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = 'async';
    script.src = url;
    document.getElementById(domid).appendChild(script);
    if (script.readyState) {   //IE
        script.onreadystatechange = function () {
            if (script.readyState == 'complete' || script.readyState == 'loaded') {
                script.onreadystatechange = null;
                callback();
            }
        }
    } else {    //非IE
        script.onload = function () { callback(); }
    }
}
function copy(s) {
    var result;
    // 将复制内容添加到临时textarea元素中
    var tempTextarea = document.createElement('textarea');
    tempTextarea.style.height = "0px";
    tempTextarea.style.width = "0px";
    tempTextarea.style.overflow = 'hidden';
    tempTextarea.style.border = "0";
    tempTextarea.innerText = s;
    document.body.appendChild(tempTextarea);

    // 判断设备
    var u = navigator.userAgent;
    if (u.match(/(iPhone|iPod|iPad);?/i)) {
        // iOS
        // 移除已选择的元素
        window.getSelection().removeAllRanges();
        // 创建一个Range对象
        var range = document.createRange();
        // 选中
        range.selectNode(tempTextarea);
        // 执行选中元素
        window.getSelection().addRange(range);
        // 复制
        result = document.execCommand('copy');
        // 移除选中元素
        window.getSelection().removeAllRanges();

    } else {
        // 选中    
        tempTextarea.select();
        // 复制
        result = document.execCommand('Copy');
    }
    tempTextarea.remove();
};
class ckeditor {
    constructor() {
        this.option = {
            removePlugins: ['Markdown'],
            //plugins: ['base64uploadAdapter'],
            toolbar: {
                items: [
                    //'imageInsert',
                    //'subscript',
                    //'superscript',
                    //'redo',
                    //'undo',
                    //'underline',
                    //'todoList',
                    //'bold',
                    //'italic',
                    //'indent',
                    //'outdent',
                    //'link',
                    //'mediaEmbed',
                    //'insertTable',
                    //'imageUpload',
                    //'CKFinder',
                    //'blockQuote',
                    //'numberedList',
                    //'bulletedList',
                    //'alignment',
                    //'exportPdf',
                    //'code',
                    //'codeBlock',
                    //'exportWord',
                    //'fontBackgroundColor',
                    //'highlight',
                    //'fontColor',
                    //'horizontalLine',
                    //'fontSize',
                    //'htmlEmbed',
                    //'fontFamily',
                    //'MathType',
                    //'ChemType',
                    //'pageBreak',
                    //'restrictedEditingException',
                    //'removeFormat',
                    //'specialCharacters',
                    //'strikethrough'
                    'heading',
                    'bold',
                    'italic',
                    'underline',
                    'strikethrough',
                    'fontColor',
                    'fontBackgroundColor',
                    '|',
                    'imageUpload',
                    'insertTable',
                    'link',
                    'code',
                    'blockQuote',
                    'codeBlock',
                    'horizontalLine',
                    '|',
                    'alignment',
                    'bulletedList',
                    'todoList',
                    'removeFormat'
                ]
            },
            language: 'zh-cn',
            blockToolbar: [

            ],
            image: {
                styles: [
                    //'alignLeft', 'alignCenter', 'alignRight'
                ],
                toolbar: [
                    //'imageStyle:alignLeft',
                    //'imageStyle:alignCenter',
                    //'imageStyle:alignRight'
                    //'imageTextAlternative',
                    //'imageStyle:full',
                    //'imageStyle:side',
                    //'linkImage'
                ]
            },
            table: {
                contentToolbar: [
                    'tableColumn',
                    'tableRow',
                    'mergeTableCells',
                    //'tableCellProperties',
                    //'tableProperties'
                ]
            },
            //ckfinder: {
            //    uploadUrl: '/Documents/UpLoad'
            //},
            licenseKey: ''
        };
        this.editor = null;
        this.watchdog = null;
    }
    balloonblock(el) {
        var editbox = document.querySelector(el).querySelector('.editorbox>.editor');
        this.editor = CKSource.Editor.create(editbox, this.option).then(editor => {
            editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                return new UploadAdapter(loader);
            };
        });
    }
    document(el) {
        var toolbar = document.querySelector(el).querySelector('.toolbars');
        var editbox = document.querySelector(el).querySelector('.editorbox>.editor');
        CKSource.Editor.create(editbox, this.option).then(editor => {
            toolbar.appendChild(editor.ui.view.toolbar.element);
            editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                return new UploadAdapter(loader);
            };
            this.editor = editor;
        });
    }
    getTitle() {
        return this.editor.plugins.get('Title').getTitle();
    }
    getBody() {
        return this.editor.plugins.get('Title').getBody();
    }
}
class UploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }
    upload() {
        return new Promise((resolve, reject) => {
            this.loader.file.then(realFile => {
                var net = new ajaxhelp();
                net.upload('/Home/UpLoad', realFile, function () { }, function (result) {
                    console.log(result);
                    if (result.success) {
                        resolve({
                            default: result.result.url
                        });
                    } else {
                        reject(result.message);
                    }
                });
            })
        });
    }
    abort() {
    }
}
function upload(url, target, callback) {
    var input = $('<input type="file" style="display:none;" />');
    var net = new ajaxhelp();
    input.unbind('change').bind('change', function () {
        $(target).addClass('loading disabled');
        net.upload(url, input[0].files[0], function () { }, function (result) {
            $(target).removeClass('loading disabled');
            if (callback) {
                callback(result);
            }
        });
    });
    input.click();
}
var search = {
    open: () => {
        var button = $(event.target);
        if (!button.hasClass('button')) {
            button = $(button.parents('.button')[0]);
        }
        $('.box.search')
            .sidebar({
                context: '.Content',
                onVisible: function () {
                    button.animate({ 'margin-left': '-39' }, 150);
                }, onHidden: function () {
                    $(this).parent().removeClass('pushable');
                    button.animate({ 'margin-left': '0' }, 150);
                }
            }).sidebar('toggle');
    },
    go: () => {
        var target = event.target;
        if (target.nodeName == 'I') {
            target = $(target).parent();
        }
        var form = $(target).parents('.ui.form');
        var data = form.getData();
        var pz = search.getUrlParam('PageSize');
        if (pz) {
            data.PageSize = pz;
        }
        var url = search.toUrl(data);
        window.location.href = url;
    },
    toUrl: (data) => {
        var queryAry = [], val = undefined;
        for (var query in data) {
            val = data[query];
            if (val !== '' && typeof val !== 'undefined' && val !== null) {
                queryAry.push(query + '=' + val);
            }
        }
        var result = queryAry.join('&');
        result = result.replace('#', '%23');
        if (result) {
            result = "?" + result;
        }
        return window.location.pathname + result;
    },
    getUrlParam: (name) => {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }
};
var tip = {
    error: (message) => {
        $('body').toast({
            class: 'red',
            position: 'bottom center',
            displayTime: 3000,
            title: '错误',
            message: message,
            showIcon: 'exclamation triangle',
        });
    },
    success: (message) => {
        $('body').toast({
            class: 'green',
            position: 'bottom center',
            displayTime: 2000,
            title: '成功',
            message: message,
            showIcon: 'check'
        });
    },
    info: (message) => {
        $('body').toast({
            class: 'orange',
            position: 'bottom center',
            displayTime: 3000,
            title: '信息',
            message: message,
            showIcon: 'info'
        });
    },
    ask: (message, url, data, callback) => {
        var html = $(`<div class="ui mini modal">
                        <i class="close icon"></i>
                        <div class="header">
                            <i class="icon exclamation triangle"></i>
                            确认操作
                        </div>
                        <div class="content">`+ message + `</div>
                        <div class="actions">
                            <div class="ui labeled icon button red ok">确认<i class="checkmark icon"></i></div>
                            <div class="ui button black cancel">取消</div>
                        </div>
                    </div>`);
        var seting = {
            allowMultiple: true,
            closable: false,
            autofocus: false,
            onHidden: function () {
                $(this).remove();
            },
            autofocus: false,
            onApprove: function (e) {
                if (callback) {
                    $(e).post(url, data, false, callback);
                }
                else {
                    $(e).post(url, data, true);
                }
                return false;
            }
        };
        $(html).modal(seting).modal('show');
    }
};
class ajaxhelp {
    constructor() { }
    post(url, data, before, done) { this.init(url, 'POST', data, before, done, 'application/x-www-form-urlencoded;charset=UTF-8;', 'json', true); };
    get(url, before, done) { this.init(url, 'GET', null, before, done, 'text/html', 'html', true); };
    upload(url, data, before, done) { this.init(url, 'POST', data, before, done, false, 'json', false); };
    init(url, method, data, before, done, contentType, dataType, processData) {
        if (contentType == false) {
            var formData = new FormData();
            formData.append("files", data);
            data = formData;
        }
        var _settings = {
            //预请求的数据
            data: data,
            //指定请求连接
            url: url,
            //指定请求方式
            type: method,
            //请求超时时间
            timeout: '30000',
            //请求内容类型
            contentType: contentType,
            //是否开启异步
            async: true,
            //是否转换为查询字符串
            processData: processData,
            //回调函数中$(this)所代表的Dom
            context: null,
            //返回的数据格式
            dataType: dataType,
            //请求前执行
            beforeSend: function (xhr) {
                if (before) {
                    before();
                }
            },
            //请求成功执行
            success: function (result, status, xhr) {
                if (done) {
                    done(method == "GET" ? { success: true, result: result } : result);
                }
            },
            //请求错误执行,注意返回的结果与接口返回的通用模型一致，方便done回调统一处理
            error: function (xhr, status, error) {
                if (done) {
                    done(method == "GET" || status != 200 ? { success: false, message: error } : result);
                }
            },
            //请求完成执行，不管成功或失败
            complete: function (xhr, status) { }
        };
        //RequestType用于告知控制器基类当前请求是否整页、弹窗或是接口，以下逻辑为前后约定
        if (method === 'POST') {
            _settings.headers = { RequestType: 2 };
        }
        else if (method === 'GET') {
            _settings.headers = { RequestType: 1 };
        }
        $.ajax(_settings);
    };
}
var modal = {
    load: (option) => {
        //option.view=视图Url
        //option.submit=弹窗表单提交url
        //option.done=弹窗加载完成后执行
        //option.width=弹窗宽度,可空,支持mini、tiny、small、large、单位px
        //option.modify=提交前对提交的对象进行处理，接收一个参数为当前弹窗内表单对象
        //option.callback=替换默认向submit发送请求的操作，自己编写提交事件

        var html = $(`<div class="ui mini modal">
                        <i class="close icon"></i>
                        <div class="header">Please wait</div>
                        <div class="content">
                            <div class="ui icon header" style="width:100%;margin:0;">
                                <i class="big spinner loading icon"></i>
                                <div class="content" style="margin-top:25px;padding-left:0px;display:block;">
                                    <div class="sub header">Please wait，Loading...</div>
                                </div>
                            </div>
                        </div>
                        <div class="actions">
                            <div class="ui cancel black button">Cancel</div>
                        </div>
                    </div>`);
        var net = new ajaxhelp();
        net.get(option.view, function () {
            $(html).modal({
                allowMultiple: true,
                closable: false,
                autofocus: false,
                onHidden: function () {
                    $(this).remove();
                },
                autofocus: false
            }).modal('show');
        }, function (result) {
            $(html).html(result.result).removeClass('mini');
            if (isNaN(Number(option.width))) {
                $(html).addClass(option.width);
            }
            else {
                $(html).css('width', option.width + 'px');
            }
            $(html).children('.actions').children('.ui.labeled.button.green').click(function () {
                var data = $(html).children('.content').children('.ui.form').getData();
                if (option.modify) {
                    option.modify($(html), data);
                }
                if (option.callback) {
                    option.callback(data, $(html), $(this));
                }
                else if (option.submit) {
                    $(this).post(option.submit, data, true);
                }
            });
            if (option.done) {
                option.done($(html));
            }
            DocumentReady();
        });
    }
};