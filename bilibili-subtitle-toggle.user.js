// ==UserScript==
// @name         B站字幕快捷键Bilibili Subtitle Toggle with Shortcut
// @namespace    http://tampermonkey.net/
// @version      2025-03-13
// @description  Toggle subtitles on Bilibili with a shortcut key ('C').
// @author       bushnerd
// @license MIT
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    // 快捷键开关字幕
    document.addEventListener('keydown', function (event) {
        // 检测是否按下 'C' 键
        if (event.key === 'c' || event.key === 'C') {
            const subtitleButton = document.querySelector('.bpx-player-ctrl-btn[aria-label="字幕"] .bpx-common-svg-icon');
            if (subtitleButton) {
                subtitleButton.click(); // 模拟点击字幕按钮
            } else {
                console.log("Subtitle button not found. Please check the selector.");
            }
        }
    });

    console.log("Bilibili Subtitle Toggle with Shortcut script has been loaded.");
})();

