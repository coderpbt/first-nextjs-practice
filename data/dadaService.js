const APP_DATA =  {
    Exprience : [
        {
            deg : 'SENIOR FRONTEND DEVELOPER',
            year : '2022 - Present',
            company : 'Iqrasys Solutions Ltd.',
            desc : 'Duties/Responsibilities Web Design, HTML5, CSS3, Javascript, Bootstrap,React.js Web Development, : FireBase, MongoDB, Node Js, Express Js,PHP, MySQL, WordPress, GitHub etc'
        },
        {
            deg : 'WEB DESIGNER & WORDPRESS DEVELOPER',
            year : '2022 - Present',
            company : 'Doodle Inc',
            desc : 'Duties/Responsibilities Web Design, HTML5, CSS3, Javascript, Bootstrap,React.js Web Development, : FireBase, MongoDB, Node Js, Express Js,PHP, MySQL, WordPress, GitHub etc'
        },
        {
            deg : 'SENIOR FRONTEND DEVELOPER',
            year : '2022 - Present',
            company : 'Bangladesh Skill Development Institude(BSDI)',
            desc : 'Duties/Responsibilities Web Design, HTML5, CSS3, Javascript, Bootstrap,React.js Web Development, : FireBase, MongoDB, Node Js, Express Js,PHP, MySQL, WordPress, GitHub etc'
        },
    ]
}

export const getExprience = () => {
    return APP_DATA.Exprience.slice();
}