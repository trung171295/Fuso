$('[data-fancybox="gallery"]').fancybox({
    closeExisting: false,
    protect: true,
    preventCaptionOverlap: true
    ,
    buttons: [
        "zoom",
        //"share",
        "slideShow",
        "fullScreen",
        "download",

        "close"
    ],
    iframe: {
        // Iframe template
        tpl:
            ''
    },
    clickContent: function (current, event) {
        return current.type === "image" ? "zoom" : false;
    },

    afterLoad: function (instance, current) {
        var pixelRatio = window.devicePixelRatio || 1;

        if (pixelRatio > 1.5) {
            current.width = current.width / pixelRatio;
            current.height = current.height / pixelRatio;
        }
    },
    mobile: {
        preventCaptionOverlap: true,
        idleTime: false,
        clickContent: function (current, event) {
            return current.type === "image" ? "toggleControls" : false;
        },
        clickSlide: function (current, event) {
            return current.type === "image" ? "toggleControls" : false;
        },
        dblclickContent: function (current, event) {
            return current.type === "image" ? "zoom" : false;
        },
        dblclickSlide: function (current, event) {
            return current.type === "image" ? "zoom" : false;
        }
    },
    
});

//////////video
$('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    },
    vimeo : {
        color : 'f00'
    }
});