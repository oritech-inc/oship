


export const AppData = [
    data(), Cookies("init")
]

function data() {
    return (
        {
            appInfo: getAppInfo(),
            browser: getBrowser(),
            screen: getScreen(),
            locale: getUrl(),
        }
    )
}

function getAppInfo() {
    return (
        {
            name: 'OsHIP',
            version: '0.0.1',
            release: 'Dev',
            year: '2023',
            author: 'Origintech Limited'
        }
    )
}

function getBrowser() {
    return (
        {
            cookie: navigator.cookieEnabled,
            appName: navigator.appCodeName,
            version: navigator.appVersion,
            product: navigator.product,
            platform: navigator.platform,
            language: navigator.language,
            online: navigator.onLine,
            java: navigator.javaEnabled()
        }
    )
}

function getScreen() {
    return (
        {
            height: screen.height,
            width: screen.width,
            avail_h: screen.availHeight,
            avail_w: screen.availWidth,
            color: screen.colorDepth,
            pixel: screen.pixelDepth,
        }
    )
}

function getUrl() {
    return (
        {
            href: window.location.href,
            host: window.location.hostname,
            path: window.location.pathname,
            protocol: window.location.protocol,
            port: window.location.port,
        }
    )
}

function Cookies(n) {
    let c = getCookie(n);
    if (c !== "") {
        return c;
    }
    else {
        setCookie(n, JSON.stringify(data()), 7);
    }

}

function getCookie(c) {
    let name = c + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(n, o, e) {
    const d = new Date();
    d.setTime(d.getTime() + (e * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = n + "=" + o + ";" + expires + ";path=/";
}