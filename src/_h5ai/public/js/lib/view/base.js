const {dom} = require('../util');

const rootSelector = 'body';
const topbarTpl =
        `<div id="topbar">
            <div id="toolbar"></div>
            <div id="flowbar"></div>
            <a id="backlink" href="http://cloudwiki.h3c.com" title="H3C 云计算资料库">
                <div style="color:#e60010;font-size:16px;font-weight: 700;">H3C</div>
                <div>CloudWiki</div>
            </a>
        </div>`;
const mainrowTpl =
        `<div id="mainrow">
            <div id="content"></div>
        </div>`;

const init = () => {
    const $root = dom(rootSelector)
        .attr('id', 'root')
        .clr()
        .app(topbarTpl)
        .app(mainrowTpl);

    return {
        $root,
        $topbar: $root.find('#topbar'),
        $toolbar: $root.find('#toolbar'),
        $flowbar: $root.find('#flowbar'),
        $mainrow: $root.find('#mainrow'),
        $content: $root.find('#content')
    };
};

module.exports = init();
