/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>',
            'source-code-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-code-pro:n9,n7,n2,n3,n4,n6,n5:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'p1',
                            display: 'block',
                            type: 'group',
                            rect: ['-6', '-4', '812', '609', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bg',
                                display: 'block',
                                type: 'image',
                                tag: 'img',
                                rect: ['0', '0', '812', '609', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'easy_parallax',
                                display: 'block',
                                type: 'text',
                                rect: ['56', '337', '700', 'auto', 'auto', 'auto'],
                                text: "Easy Parallax with Edge Animate",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [42, "px"], "rgba(237,241,250,1.00)", "100", "none", "", "break-word", ""],
                                textShadow: ["rgba(0,0,0,0.65098)", 1, 1, 2]
                            },
                            {
                                id: 'down_arrow',
                                symbolName: 'down_arrow',
                                display: 'block',
                                type: 'rect',
                                rect: ['45.3%', '86%', '76', '39', 'auto', 'auto'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0.65098)", 1, 1, 2],
                                transform: [[],[],[],['1','0.66079']]
                            }]
                        },
                        {
                            id: 'p2',
                            display: 'block',
                            type: 'group',
                            rect: ['0', '0', '800', '600', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bg_block',
                                symbolName: 'bg_block',
                                display: 'none',
                                type: 'rect',
                                rect: ['0', '603', '800', '600', 'auto', 'auto']
                            },
                            {
                                id: 'copy',
                                display: 'none',
                                type: 'text',
                                rect: ['82px', '485', '635px', '163px', 'auto', 'auto'],
                                opacity: 0,
                                text: "Parallax effects are fun and trendy, <br>but they're a pain to author - especially if you don't code.<br> <br>Perhaps there's a better way? <br><br>Scroll on...",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [23, "px"], "rgba(255,255,255,1)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "26px", ""],
                                textShadow: ["rgba(0,0,0,0.65098)", 1, 1, 2],
                                transform: [[],[],[],['0.7']]
                            },
                            {
                                id: 'logo_circle',
                                display: 'block',
                                type: 'image',
                                tag: 'img',
                                rect: ['334', '51', '133', '133', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"edge_an_circle.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'p3_a',
                            display: 'none',
                            type: 'group',
                            rect: ['0px', '123', '801', '317', 'auto', 'auto'],
                            opacity: 1,
                            c: [
                            {
                                id: 'theory_title',
                                display: 'none',
                                type: 'group',
                                rect: ['0', '178', '801', '76', 'auto', 'auto'],
                                opacity: 0,
                                transform: [[],[],[],['0.8','0.8']],
                                c: [
                                {
                                    id: 'first_the',
                                    display: 'none',
                                    type: 'text',
                                    rect: ['0', '0', '415', '51', 'auto', 'auto'],
                                    opacity: 1,
                                    text: "First, the ",
                                    align: "right",
                                    font: ['source-sans-pro, sans-serif', [52, "px"], "rgba(34,67,149,1.00)", "100", "none", "normal", "break-word", ""],
                                    transform: [[],[],[],['1','0.99']]
                                },
                                {
                                    id: 'theory',
                                    display: 'none',
                                    type: 'text',
                                    rect: ['426', '0', '375', '51', 'auto', 'auto'],
                                    opacity: 1,
                                    text: "theory:",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [52, "px"], "rgba(34,67,149,1.00)", "500", "none", "normal", "break-word", ""],
                                    transform: [[],[],[],['1','0.99']]
                                },
                                {
                                    id: 'underline',
                                    display: 'none',
                                    type: 'rect',
                                    rect: ['319', '75', '163', '1', 'auto', 'auto'],
                                    fill: ["rgba(34,67,149,1.00)"],
                                    stroke: [0,"rgba(169,156,247,1.00)","solid"]
                                }]
                            },
                            {
                                id: 'icon_18306',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['534', '418', '132', '132', 'auto', 'auto'],
                                opacity: 0,
                                fill: ["rgba(0,0,0,0)",im+"icon_18306.svg",'0px','0px']
                            },
                            {
                                id: 'copy1',
                                display: 'none',
                                type: 'text',
                                rect: ['57', '413', '436', '107', 'auto', 'auto'],
                                opacity: 0,
                                text: "Parallax basically amounts to <br>moving a bunch of  HTML elements around in a fixed sequence.",
                                align: "right",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1.00)", "300", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'p3_b',
                            display: 'none',
                            type: 'group',
                            rect: ['118', '451', '100', '100', 'auto', 'auto'],
                            opacity: 0,
                            transform: [[],[],[],['1','0.8']],
                            c: [
                            {
                                id: 'icon_1519',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['-23', '-4', '132', '132', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"icon_1519.svg",'0px','0px']
                            },
                            {
                                id: 'copy2',
                                display: 'none',
                                type: 'text',
                                rect: ['131', '6', '501', '112', 'auto', 'auto'],
                                text: "In other words, an animation - <br>except that instead of playing back automatically..",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "300", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'p3_c',
                            display: 'none',
                            type: 'group',
                            rect: ['124', '484', '540', '113', 'auto', 'auto'],
                            opacity: 0,
                            transform: [[],[],[],['1','0.7']],
                            c: [
                            {
                                id: 'icon_3515',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['408', '-9', '120', '120', 'auto', 'auto'],
                                opacity: 1,
                                fill: ["rgba(0,0,0,0)",im+"icon_3515.svg",'0px','0px']
                            },
                            {
                                id: 'Text',
                                display: 'none',
                                type: 'text',
                                rect: ['-71', '16', '434', '69', 'auto', 'auto'],
                                opacity: 1,
                                text: "..the user drives the timing of the animation as they scroll.",
                                align: "right",
                                font: ['source-sans-pro, sans-serif', [28, ""], "rgba(0,0,0,1)", "300", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'p4_head',
                            display: 'none',
                            type: 'group',
                            rect: ['-2', '-2', '804', '603', 'auto', 'auto'],
                            c: [
                            {
                                id: 'edge_animate_headerbg22',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['0', '0', '804', 'auto', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"edge_animate_headerbg2.jpg",'0px','0px']
                            },
                            {
                                id: 'line',
                                display: 'none',
                                type: 'rect',
                                rect: ['2', '35', '800', '1', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.70)"],
                                stroke: [0,"rgb(169, 156, 247)","solid"]
                            }]
                        },
                        {
                            id: 'p4_a',
                            display: 'none',
                            type: 'group',
                            rect: ['0', '0', '800', '600', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text4',
                                display: 'none',
                                type: 'text',
                                rect: ['0', '212', '800', 'auto', 'auto', 'auto'],
                                text: "Therefore, if you happened to have a good",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(227,232,252,1.00)", "300", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Text4Copy2',
                                display: 'none',
                                type: 'text',
                                rect: ['1', '334', '799', '113', 'auto', 'auto'],
                                text: "you could just sync an animation's <br>timeline to the browser's scrollbar, <br>and boom - parallax!",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(227,232,252,1.00)", "300", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Text4Copy',
                                display: 'none',
                                type: 'text',
                                rect: ['1', '265', '799', '56', 'auto', 'auto'],
                                text: "HTML animation authoring tool,",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [44, "px"], "rgba(255,255,255,1.00)", "500", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'p4_overlay',
                            display: 'none',
                            type: 'group',
                            rect: ['-1', '34', '802', '569', 'auto', 'auto'],
                            c: [
                            {
                                id: 'p4_blockers',
                                display: 'none',
                                type: 'rect',
                                rect: ['0', '165', '802', '57', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(169, 156, 247)","solid"],
                                transform: [[],[],[],[],['50%','0%']]
                            },
                            {
                                id: 'p4_blockersCopy8',
                                display: 'none',
                                type: 'rect',
                                rect: ['0', '417', '802', '70', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(169, 156, 247)","solid"],
                                transform: [[],[],[],[],['50%','0%']]
                            },
                            {
                                id: 'p4_blockersCopy5',
                                display: 'none',
                                type: 'rect',
                                rect: ['0', '221', '802', '76', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(169, 156, 247)","solid"],
                                transform: [[],[],[],[],['50%','0%']]
                            },
                            {
                                id: 'p4_blockersCopy7',
                                display: 'none',
                                type: 'rect',
                                rect: ['0', '69', '802', '97', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(169, 156, 247)","solid"],
                                transform: [[],[],[],[],['50%','0%']]
                            },
                            {
                                id: 'p4_blockersCopy6',
                                display: 'none',
                                type: 'rect',
                                rect: ['0', '296', '802', '57', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(169, 156, 247)","solid"],
                                transform: [[],[],[],['1','2.14285'],['50%','0%']]
                            },
                            {
                                id: 'p4_blockersCopy9',
                                display: 'none',
                                type: 'rect',
                                rect: ['0', '486', '802', '83', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(169, 156, 247)","solid"],
                                transform: [[],[],[],[],['50%','0%']]
                            },
                            {
                                id: 'p4_blockersCopy10',
                                display: 'none',
                                type: 'rect',
                                rect: ['0', '0', '802', '70', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(169, 156, 247)","solid"],
                                transform: [[],[],[],[],['50%','0%']]
                            }]
                        },
                        {
                            id: 'p4_b',
                            display: 'none',
                            type: 'group',
                            rect: ['165px', '643', '501', '56', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text2',
                                display: 'none',
                                type: 'text',
                                rect: ['-164', '-37', '799', '152', 'auto', 'auto'],
                                text: "Fortunately we have such a tool.<br><br>So without further ado, <br>here's how to do it.",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(255,255,255,1)", "300", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'step1_head',
                            display: 'none',
                            type: 'group',
                            rect: ['346', '384', '109', '109', 'auto', 'auto'],
                            opacity: 0,
                            c: [
                            {
                                id: 'Ellipse',
                                display: 'none',
                                type: 'ellipse',
                                rect: ['0', '0', '109', '109', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(72,62,123,1.00)"],
                                stroke: [0,"rgb(169, 156, 247)","solid"]
                            },
                            {
                                id: 'Text6',
                                display: 'none',
                                type: 'text',
                                rect: ['18', '40', 'auto', 'auto', 'auto', 'auto'],
                                text: "Step 1.",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "500", "none", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'get_An',
                                display: 'none',
                                type: 'text',
                                rect: ['-208', '149', '527', '40', 'auto', 'auto'],
                                opacity: 1,
                                text: "Get hold of Edge Animate. ",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [30, ""], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'p5_a',
                            display: 'none',
                            type: 'group',
                            rect: ['1px', '217', '799', '480', 'auto', 'auto'],
                            opacity: 0,
                            transform: [[],[],[],['1','0.54']],
                            c: [
                            {
                                id: 'edge_shadow',
                                display: 'none',
                                type: 'rect',
                                rect: ['334', '389', '130', '95', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0.35)"],
                                stroke: [0,"rgb(169, 156, 247)","solid"],
                                boxShadow: ["", 0, 0, 4, 4, "rgba(0,0,0,0.35)"],
                                transform: [[],[],['77'],['1','0.1799'],['50%','100%']]
                            },
                            {
                                id: 'Text3',
                                display: 'none',
                                type: 'text',
                                rect: ['491', '360', '167', '69', 'auto', 'auto'],
                                opacity: 0,
                                text: "(transformed DIV <br>with a box-shadow)<br>↙",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [17, "px"], "rgba(0,0,0,1.00)", "300", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'edge-an',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['355', '374', '89', '89', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"edge-an.png",'0px','0px'],
                                transform: [[],[],[],['1.46694','1.46694']]
                            },
                            {
                                id: 'Text5',
                                display: 'none',
                                type: 'text',
                                rect: ['0', '230', '799', '70', 'auto', 'auto'],
                                text: "It's a visual tool for CSS animations, <br>available as part of Adobe's Creative Cloud.",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1.00)", "300", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'p5_b',
                            display: 'none',
                            type: 'group',
                            rect: ['26px', '580', '759', '258', 'auto', 'auto'],
                            opacity: 1,
                            c: [
                            {
                                id: 'Text8',
                                display: 'none',
                                type: 'text',
                                rect: ['0', '23', '400', '72', 'auto', 'auto'],
                                text: "Already a CC member?<br>Install via the app:",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "300", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'an-install',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['6', '97', '387', '180', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"an-install.png",'0px','0px']
                            },
                            {
                                id: 'p5_try_button',
                                symbolName: 'try_button',
                                display: 'none',
                                type: 'rect',
                                rect: ['488', '117', '176', '71', 'auto', 'auto']
                            },
                            {
                                id: 'Text8Copy3',
                                display: 'none',
                                type: 'text',
                                rect: ['393', '22', '366', '79', 'auto', 'auto'],
                                text: "Otherwise, have a<br> 30-day trial:",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "300", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'p6_a',
                            display: 'none',
                            type: 'group',
                            rect: ['142', '671', '517', '200', 'auto', 'auto'],
                            opacity: 1,
                            c: [
                            {
                                id: 'Text7',
                                display: 'none',
                                type: 'text',
                                rect: ['57', '84', '403', '274', 'auto', 'auto'],
                                clip: 'rect(0px 403px 274px 0px)',
                                text: "Edge Animate uses a timeline that will look familiar to anyone who's used After Effects, or Flash's motion editor. <br><br>(The main difference is that here, everything you can tween is a CSS style.)",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "300", "none", "", "break-word", ""],
                                textStyle: ["", "", "33px", ""]
                            },
                            {
                                id: 'timeline2',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['0', '-66', '517px', 'auto', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"timeline.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'p6_b',
                            display: 'none',
                            type: 'group',
                            rect: ['173', '608', '456', '422', 'auto', 'auto'],
                            opacity: 1,
                            c: [
                            {
                                id: 'lessons',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['58', '0', '338', '132', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"lessons.png",'0px','0px'],
                                boxShadow: ["", 0, 1, 2, 2, "rgba(0,0,0,0.65)"]
                            },
                            {
                                id: 'Text9',
                                display: 'none',
                                type: 'text',
                                rect: ['0', '13px', '456px', '180', 'auto', 'auto'],
                                clip: 'rect(0px 456px 180px 0px)',
                                text: "If you're new to timeline animation, I recommend Animate's built-in tutorials. They're really good.",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "300", "none", "", "break-word", ""],
                                textStyle: ["", "", "33px", ""]
                            },
                            {
                                id: 'Text9Copy',
                                display: 'none',
                                type: 'text',
                                rect: ['0px', '155px', '456px', '60px', 'auto', 'auto'],
                                text: "There is also a ton of help online.",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "300", "none", "", "break-word", ""],
                                textStyle: ["", "", "33px", ""]
                            },
                            {
                                id: 'help_button',
                                symbolName: 'help_button',
                                display: 'none',
                                type: 'rect',
                                rect: ['83', '362', '300', '60', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'p6_c',
                            display: 'none',
                            type: 'group',
                            rect: ['100', '324', '600', '200', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text10Copy',
                                display: 'none',
                                type: 'text',
                                rect: ['0', '181', '600', '34', 'auto', 'auto'],
                                opacity: 0,
                                text: "Incidentally, I personally think ",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [28, ""], "rgba(0,0,0,1)", "300", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Text10Copy2',
                                display: 'none',
                                type: 'text',
                                rect: ['0', '215', '600', '34', 'auto', 'auto'],
                                opacity: 0,
                                text: "parallax feels most natural when",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [28, ""], "rgba(0,0,0,1)", "300", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Text10Copy3',
                                display: 'none',
                                type: 'text',
                                rect: ['0', '250', '600', '34', 'auto', 'auto'],
                                opacity: 0,
                                text: "the animations flow mostly upwards.",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [28, ""], "rgba(0,0,0,1)", "300", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Text10Copy5',
                                display: 'none',
                                type: 'text',
                                rect: ['0', '312', '600', '34', 'auto', 'auto'],
                                opacity: 0,
                                text: "But this is a stylistic choice - ",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [28, ""], "rgba(0,0,0,1)", "300", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Text10Copy6',
                                display: 'none',
                                type: 'text',
                                rect: ['0', '347', '600', '34', 'auto', 'auto'],
                                opacity: 0,
                                text: "technically you can do anything you like.",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [28, ""], "rgba(0,0,0,1)", "300", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'step2_head',
                            display: 'none',
                            type: 'group',
                            rect: ['346', '81', '109', '109', 'auto', 'auto'],
                            c: [
                            {
                                id: 'EllipseCopy2',
                                display: 'none',
                                type: 'ellipse',
                                rect: ['0', '0', '109', '109', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: 0,
                                fill: ["rgba(72,62,123,1)"],
                                stroke: [0,"rgb(169, 156, 247)","solid"]
                            },
                            {
                                id: 'Text6Copy2',
                                display: 'none',
                                type: 'text',
                                rect: ['18', '40', 'auto', 'auto', 'auto', 'auto'],
                                opacity: 0,
                                text: "Step 2.",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [24, ""], "rgba(255,255,255,1)", "500", "none", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'get_AnCopy',
                                display: 'none',
                                type: 'text',
                                rect: ['-209', '149', '527', '40', 'auto', 'auto'],
                                opacity: 0,
                                text: "Make an awesome animation.",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [30, ""], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'p7_a',
                            display: 'none',
                            type: 'group',
                            rect: ['138', '524', '663', '178', 'auto', 'auto'],
                            opacity: 0,
                            c: [
                            {
                                id: 'Text11',
                                display: 'none',
                                type: 'text',
                                rect: ['39', '0', '448', '75', 'auto', 'auto'],
                                text: "..but not much. <br>There are only two things to do:",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [29, "px"], "rgba(0,0,0,1.00)", "300", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Text11Copy',
                                display: 'none',
                                type: 'text',
                                rect: ['0', '103', '663', '75', 'auto', 'auto'],
                                text: "1. Artificially make the page scrollable<br>2. Sync the animation to the scroll position.",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [29, "px"], "rgba(0,0,0,1.00)", "300", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'p7_b',
                            display: 'none',
                            type: 'group',
                            rect: ['58', '300', '711', '279', 'auto', 'auto'],
                            c: [
                            {
                                id: 'an-ui',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['-398', '0', '320px', 'auto', 'auto', 'auto'],
                                clip: 'rect(36px 318px 215px 0px)',
                                fill: ["rgba(0,0,0,0)",im+"an-ui.png",'0px','0px']
                            },
                            {
                                id: 'RoundRect',
                                display: 'none',
                                type: 'rect',
                                rect: ['-134', '67', '54', '54', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [8,"rgba(255,0,0,0.50)","solid"]
                            },
                            {
                                id: 'Text12',
                                display: 'none',
                                type: 'text',
                                rect: ['364', '302', '347', '240', 'auto', 'auto'],
                                text: "To add scripts, select the stage, press the actions button, and choose \"compositionReady\".<br>This event fires when the project is initialized.",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [26, "px"], "rgba(0,0,0,1)", "300", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'step3_head',
                            display: 'none',
                            type: 'group',
                            rect: ['-1', '-209', '1000', '750', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bg2',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['182', '358', '635', '476', 'auto', 'auto'],
                                clip: 'rect(267px 635px 317px 0px)',
                                opacity: 0,
                                fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px'],
                                transform: [[],[],[],['1.5748','1.5748']]
                            },
                            {
                                id: 'get_AnCopy3',
                                display: 'none',
                                type: 'text',
                                rect: ['138', '660', '527', '40', 'auto', 'auto'],
                                opacity: 0,
                                text: "// add a little code",
                                align: "center",
                                font: ['source-code-pro, sans-serif', [30, ""], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'EllipseCopy3',
                                display: 'none',
                                type: 'ellipse',
                                rect: ['347', '290', '109', '109', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: 0,
                                fill: ["rgba(72,62,123,1)"],
                                stroke: [0,"rgb(169, 156, 247)","solid"]
                            },
                            {
                                id: 'Text6Copy3',
                                display: 'none',
                                type: 'text',
                                rect: ['365', '330', 'auto', 'auto', 'auto', 'auto'],
                                opacity: 0,
                                text: "Step 3.",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [24, ""], "rgba(255,255,255,1)", "500", "none", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'Text14',
                                display: 'none',
                                type: 'text',
                                rect: ['187', '818', '427px', '48', 'auto', 'auto'],
                                text: "Here's the code I used:",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [33, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'p8_a',
                            display: 'none',
                            type: 'group',
                            rect: ['42', '611', '755', '600', 'auto', 'auto'],
                            c: [
                            {
                                id: 'CODE',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['0', '0', '640', 'auto', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"code.png",'0px','0px']
                            },
                            {
                                id: 'comment-1',
                                display: 'none',
                                type: 'text',
                                rect: ['-31', '-76', '375', '39', 'auto', 'auto'],
                                opacity: 0,
                                text: "First we create a div..",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'comment-2',
                                display: 'none',
                                type: 'text',
                                rect: ['243', '-122', '500', '91', 'auto', 'auto'],
                                opacity: 0,
                                text: "Then we style it with jQuery to be tall and hidden, so the page scrolls",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'comment-3',
                                display: 'none',
                                type: 'text',
                                rect: ['361', '69', '382', '135', 'auto', 'auto'],
                                opacity: 0,
                                text: "The page's height affects how fast it scrolls, so tune this value at the very end.",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'comment-4',
                                display: 'none',
                                type: 'text',
                                rect: ['442', '147', '289', '86', 'auto', 'auto'],
                                opacity: 0,
                                text: "Then attach the tall div to the page.",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'comment-5',
                                display: 'none',
                                type: 'text',
                                rect: ['533', '204', '220', '185', 'auto', 'auto'],
                                opacity: 0,
                                text: "Next, position Edge Animate's stage as \"fixed\", so it doesn't scroll.",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'comment-6',
                                display: 'none',
                                type: 'text',
                                rect: ['527', '274', '225', '190', 'auto', 'auto'],
                                opacity: 0,
                                text: "Last, a function that tracks the window's scroll position..<br>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'comment-7',
                                display: 'none',
                                type: 'text',
                                rect: ['416', '595', '325', '112px', 'auto', 'auto'],
                                opacity: 0,
                                text: "..and when it changes, sets the animation accordingly.",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'comment-8',
                                display: 'none',
                                type: 'text',
                                rect: ['47', '694', '611', '96', 'auto', 'auto'],
                                opacity: 0,
                                text: "We drive things with  requestAnimationFrame to avoid updating more than once per screen refresh.",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'code-box',
                                display: 'none',
                                type: 'rect',
                                rect: ['-19', '-13', '569', '56', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                opacity: 0,
                                fill: ["rgba(255,255,255,0)"],
                                stroke: [8,"rgba(255, 0, 0, 0.498039)","solid"]
                            }]
                        },
                        {
                            id: 'p8_b',
                            display: 'none',
                            type: 'group',
                            rect: ['0', '228', '800', '318', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text16',
                                display: 'none',
                                type: 'text',
                                rect: ['119', '377', '547', '44px', 'auto', 'auto'],
                                text: "And here's the code, for your copy/pasting convenience.",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'code_box',
                                symbolName: 'code_box',
                                display: 'none',
                                type: 'rect',
                                rect: ['150', '469', '486', '226', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'p9_a',
                            display: 'none',
                            type: 'group',
                            rect: ['2', '63', '800', '351', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bg3',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['-2', '-65', '804', 'auto', 'auto', 'auto'],
                                clip: 'rect(604px 804px 604px 0px)',
                                opacity: 1,
                                fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
                            },
                            {
                                id: 'p9_t2',
                                display: 'none',
                                type: 'text',
                                rect: ['0', '460', '800', '39', 'auto', 'auto'],
                                opacity: 0,
                                text: "The project source is on github, help yourself.",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [27, "px"], "rgba(255,255,255,1.00)", "100", "none", "normal", "break-word", ""],
                                transform: [[],[],[],['1','0.5']]
                            },
                            {
                                id: 'p9_t1',
                                display: 'none',
                                type: 'text',
                                rect: ['0', '376', '800', '83', 'auto', 'auto'],
                                opacity: 0,
                                text: "As you've surely guessed, this guide was made <br>with the same method it describes. ",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [27, "px"], "rgba(255,255,255,1)", "100", "none", "normal", "break-word", ""],
                                transform: [[],[],[],['1','0.5']]
                            },
                            {
                                id: 'p9_title',
                                display: 'none',
                                type: 'text',
                                rect: ['0', '292', '800', '60', 'auto', 'auto'],
                                opacity: 0,
                                text: "That's it!",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [50, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                transform: [[],[],[],['1','0.41']]
                            }]
                        },
                        {
                            id: 'p9_b',
                            display: 'none',
                            type: 'group',
                            rect: ['-2', '-2', '804', '603', 'auto', 'auto'],
                            c: [
                            {
                                id: 'madeby',
                                display: 'none',
                                type: 'text',
                                rect: ['25', '621', '379', 'auto', 'auto', 'auto'],
                                text: "made by @fenomas",
                                align: "right",
                                font: ['source-sans-pro, sans-serif', [22, "px"], "rgba(255,255,255,1)", "100", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'profile',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['416', '605', '60', '60', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"profile.png",'0px','0px']
                            },
                            {
                                id: 'but_credit',
                                symbolName: 'round_HL_button',
                                display: 'none',
                                type: 'rect',
                                rect: ['416', '605', '60', '60', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'sources',
                                display: 'none',
                                type: 'text',
                                rect: ['25', '691', '379', 'auto', 'auto', 'auto'],
                                text: "sources at github/andyhall",
                                align: "right",
                                font: ['source-sans-pro, sans-serif', [22, "px"], "rgba(255,255,255,1)", "100", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'GitHub-Mark',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['416', '675', '60', 'auto', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"GitHub-Mark.png",'0px','0px']
                            },
                            {
                                id: 'but_source',
                                symbolName: 'round_HL_button',
                                display: 'none',
                                type: 'rect',
                                rect: ['416', '675', '60', '60', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'edgean',
                                display: 'none',
                                type: 'text',
                                rect: ['25', '758', '379', '35', 'auto', 'auto'],
                                text: "greets: Edge Animate",
                                align: "right",
                                font: ['source-sans-pro, sans-serif', [22, "px"], "rgba(255,255,255,1)", "100", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'edge_an_circle',
                                display: 'none',
                                type: 'image',
                                tag: 'img',
                                rect: ['416', '745', '60', '60', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"edge_an_circle.png",'0px','0px']
                            },
                            {
                                id: 'but_edge_an',
                                symbolName: 'round_HL_button',
                                display: 'none',
                                type: 'rect',
                                rect: ['416', '745', '60', '60', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'icons1',
                                display: 'none',
                                type: 'text',
                                rect: ['25', '811', '379', '35', 'auto', 'auto'],
                                text: "icons from the Noun Project:",
                                align: "right",
                                font: ['source-sans-pro, sans-serif', [22, "px"], "rgba(255,255,255,1)", "100", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'icons2',
                                display: 'none',
                                type: 'text',
                                rect: ['421', '814', '334', '69', 'auto', 'auto'],
                                text: "Video Player by Antar<br>Stopwatch by James Thoburn<br>Mouse by Roman J. Sokolov",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [18, "px"], "rgba(255,255,255,1)", "100", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'tx',
                                display: 'none',
                                type: 'text',
                                rect: ['2', '921', '800', '20', 'auto', 'auto'],
                                text: "keep circulating the tapes!",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [17, "px"], "rgba(226,232,248,1.00)", "100", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'HEADER',
                            symbolName: 'header',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '-41', '800', '44', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800', '600', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 60000,
                    autoPlay: false,
                    data: [
                        [
                            "eid630",
                            "display",
                            10250,
                            0,
                            "easeOutQuad",
                            "${p4_blockersCopy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid640",
                            "display",
                            12000,
                            0,
                            "easeOutQuad",
                            "${p4_blockersCopy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid774",
                            "display",
                            25250,
                            0,
                            "easeInQuad",
                            "${help_button}",
                            'none',
                            'block'
                        ],
                        [
                            "eid778",
                            "display",
                            29124,
                            0,
                            "easeInQuad",
                            "${help_button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid918",
                            "display",
                            36000,
                            0,
                            "easeOutQuad",
                            "${an-ui}",
                            'none',
                            'block'
                        ],
                        [
                            "eid923",
                            "display",
                            38107,
                            0,
                            "easeInQuad",
                            "${an-ui}",
                            'block',
                            'none'
                        ],
                        [
                            "eid915",
                            "display",
                            36000,
                            0,
                            "easeOutQuad",
                            "${p7_b}",
                            'none',
                            'block'
                        ],
                        [
                            "eid920",
                            "display",
                            38107,
                            0,
                            "easeInQuad",
                            "${p7_b}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1009",
                            "top",
                            41709,
                            0,
                            "easeOutQuad",
                            "${comment-2}",
                            '-122px',
                            '-122px'
                        ],
                        [
                            "eid820",
                            "scaleX",
                            31005,
                            750,
                            "easeInQuad",
                            "${Text10Copy6}",
                            '1',
                            '2.11'
                        ],
                        [
                            "eid956",
                            "opacity",
                            40750,
                            500,
                            "linear",
                            "${comment-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid955",
                            "opacity",
                            42250,
                            500,
                            "linear",
                            "${comment-2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid828",
                            "scaleX",
                            31250,
                            750,
                            "easeInQuad",
                            "${Text10Copy3}",
                            '1',
                            '2.11'
                        ],
                        [
                            "eid1123",
                            "opacity",
                            54750,
                            750,
                            "easeOutQuad",
                            "${p9_title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1131",
                            "opacity",
                            56500,
                            750,
                            "easeInQuad",
                            "${p9_title}",
                            '1',
                            '0'
                        ],
                        [
                            "eid719",
                            "opacity",
                            21000,
                            750,
                            "easeOutQuad",
                            "${get_AnCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid861",
                            "opacity",
                            31250,
                            884,
                            "easeInQuad",
                            "${get_AnCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid988",
                            "opacity",
                            46750,
                            500,
                            "linear",
                            "${comment-6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid989",
                            "opacity",
                            48250,
                            500,
                            "linear",
                            "${comment-6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1290",
                            "display",
                            25250,
                            0,
                            "easeInQuad",
                            "${Text9Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1291",
                            "display",
                            29124,
                            0,
                            "easeInQuad",
                            "${Text9Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid686",
                            "opacity",
                            16500,
                            500,
                            "easeInQuad",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid840",
                            "display",
                            29000,
                            0,
                            "easeOutQuad",
                            "${Text10Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid851",
                            "display",
                            32346,
                            0,
                            "easeOutQuad",
                            "${Text10Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1198",
                            "top",
                            57619,
                            750,
                            "easeOutQuad",
                            "${GitHub-Mark}",
                            '675px',
                            '333px'
                        ],
                        [
                            "eid969",
                            "display",
                            38364,
                            0,
                            "linear",
                            "${CODE}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1077",
                            "display",
                            52572,
                            0,
                            "linear",
                            "${CODE}",
                            'block',
                            'none'
                        ],
                        [
                            "eid512",
                            "top",
                            4402,
                            1098,
                            "easeOutQuad",
                            "${HEADER}",
                            '-41px',
                            '0px'
                        ],
                        [
                            "eid1144",
                            "top",
                            54500,
                            1250,
                            "easeInQuad",
                            "${HEADER}",
                            '0px',
                            '-47px'
                        ],
                        [
                            "eid1212",
                            "top",
                            58250,
                            750,
                            "easeOutQuad",
                            "${tx}",
                            '921px',
                            '577px'
                        ],
                        [
                            "eid749",
                            "top",
                            26750,
                            750,
                            "easeInOutQuad",
                            "${Text9}",
                            '163px',
                            '13px'
                        ],
                        [
                            "eid1053",
                            "display",
                            39119,
                            0,
                            "linear",
                            "${comment-1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1064",
                            "display",
                            41500,
                            0,
                            "linear",
                            "${comment-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid556",
                            "opacity",
                            9500,
                            750,
                            "easeOutQuad",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid762",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid767",
                            "display",
                            15250,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid693",
                            "display",
                            18850,
                            0,
                            "easeInQuad",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1018",
                            "height",
                            40750,
                            500,
                            "linear",
                            "${code-box}",
                            '56px',
                            '120px'
                        ],
                        [
                            "eid1023",
                            "height",
                            42250,
                            500,
                            "linear",
                            "${code-box}",
                            '120px',
                            '32px'
                        ],
                        [
                            "eid1035",
                            "height",
                            45250,
                            500,
                            "linear",
                            "${code-box}",
                            '32px',
                            '56px'
                        ],
                        [
                            "eid1041",
                            "height",
                            46750,
                            500,
                            "linear",
                            "${code-box}",
                            '56px',
                            '95px'
                        ],
                        [
                            "eid1286",
                            "height",
                            48250,
                            0,
                            "linear",
                            "${code-box}",
                            '95px',
                            '95px'
                        ],
                        [
                            "eid1287",
                            "height",
                            48750,
                            0,
                            "linear",
                            "${code-box}",
                            '95px',
                            '96px'
                        ],
                        [
                            "eid1279",
                            "height",
                            49750,
                            500,
                            "linear",
                            "${code-box}",
                            '96px',
                            '76px'
                        ],
                        [
                            "eid930",
                            "top",
                            37500,
                            607,
                            "easeOutQuad",
                            "${Text14}",
                            '818px',
                            '524px'
                        ],
                        [
                            "eid1228",
                            "display",
                            57619,
                            0,
                            "easeInOutQuad",
                            "${GitHub-Mark}",
                            'none',
                            'block'
                        ],
                        [
                            "eid611",
                            "height",
                            10750,
                            500,
                            "easeOutQuad",
                            "${p4_blockersCopy5}",
                            '76px',
                            '1px'
                        ],
                        [
                            "eid1149",
                            "display",
                            54250,
                            0,
                            "easeOutQuad",
                            "${bg3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid487",
                            "opacity",
                            3500,
                            1000,
                            "easeOutQuad",
                            "${icon_18306}",
                            '0',
                            '1'
                        ],
                        [
                            "eid506",
                            "opacity",
                            5627,
                            623,
                            "easeOutSine",
                            "${icon_18306}",
                            '1',
                            '0'
                        ],
                        [
                            "eid844",
                            "display",
                            29000,
                            0,
                            "easeOutQuad",
                            "${Text10Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid847",
                            "display",
                            32346,
                            0,
                            "easeOutQuad",
                            "${Text10Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid823",
                            "scaleY",
                            31500,
                            750,
                            "easeInQuad",
                            "${Text10Copy}",
                            '1',
                            '4.57'
                        ],
                        [
                            "eid515",
                            "display",
                            3500,
                            0,
                            "easeOutQuad",
                            "${theory}",
                            'none',
                            'block'
                        ],
                        [
                            "eid588",
                            "display",
                            10376,
                            0,
                            "easeOutQuad",
                            "${theory}",
                            'block',
                            'none'
                        ],
                        [
                            "eid723",
                            "display",
                            20661,
                            0,
                            "easeInOutQuad",
                            "${EllipseCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid865",
                            "display",
                            33355,
                            0,
                            "easeInOutQuad",
                            "${EllipseCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1088",
                            "left",
                            54000,
                            500,
                            "easeInQuad",
                            "${code_box}",
                            '150px',
                            '149px'
                        ],
                        [
                            "eid842",
                            "display",
                            29000,
                            0,
                            "easeOutQuad",
                            "${Text10Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid849",
                            "display",
                            32346,
                            0,
                            "easeOutQuad",
                            "${Text10Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1060",
                            "display",
                            49750,
                            0,
                            "linear",
                            "${comment-8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1071",
                            "display",
                            51841,
                            0,
                            "linear",
                            "${comment-8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid829",
                            "scaleY",
                            31250,
                            750,
                            "easeInQuad",
                            "${Text10Copy3}",
                            '1',
                            '4.57'
                        ],
                        [
                            "eid1119",
                            "top",
                            54750,
                            750,
                            "easeOutQuad",
                            "${p9_title}",
                            '292px',
                            '206px'
                        ],
                        [
                            "eid1125",
                            "top",
                            56500,
                            750,
                            "easeInQuad",
                            "${p9_title}",
                            '206px',
                            '48px'
                        ],
                        [
                            "eid761",
                            "display",
                            0,
                            0,
                            "linear",
                            "${edge-an}",
                            'none',
                            'none'
                        ],
                        [
                            "eid766",
                            "display",
                            15250,
                            0,
                            "linear",
                            "${edge-an}",
                            'none',
                            'block'
                        ],
                        [
                            "eid692",
                            "display",
                            18850,
                            0,
                            "easeInQuad",
                            "${edge-an}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "background-color",
                            13000,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(72,62,123,1.00)',
                            'rgba(72,62,123,1.00)'
                        ],
                        [
                            "eid1008",
                            "left",
                            41709,
                            0,
                            "easeOutQuad",
                            "${comment-2}",
                            '243px',
                            '243px'
                        ],
                        [
                            "eid721",
                            "display",
                            20661,
                            0,
                            "easeInOutQuad",
                            "${get_AnCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid862",
                            "display",
                            32250,
                            0,
                            "easeOutQuad",
                            "${get_AnCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid455",
                            "top",
                            2750,
                            1000,
                            "easeInQuad",
                            "${logo_circle}",
                            '51px',
                            '-531px'
                        ],
                        [
                            "eid763",
                            "display",
                            0,
                            0,
                            "linear",
                            "${edge_shadow}",
                            'none',
                            'none'
                        ],
                        [
                            "eid768",
                            "display",
                            15250,
                            0,
                            "linear",
                            "${edge_shadow}",
                            'none',
                            'block'
                        ],
                        [
                            "eid694",
                            "display",
                            18850,
                            0,
                            "easeInQuad",
                            "${edge_shadow}",
                            'block',
                            'none'
                        ],
                        [
                            "eid737",
                            "top",
                            22500,
                            1500,
                            "easeInOutQuad",
                            "${Text7}",
                            '84px',
                            '-104px'
                        ],
                        [
                            "eid908",
                            "left",
                            36000,
                            750,
                            "easeOutQuad",
                            "${an-ui}",
                            '-398px',
                            '0px'
                        ],
                        [
                            "eid873",
                            "display",
                            32250,
                            0,
                            "easeInOutQuad",
                            "${EllipseCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid940",
                            "display",
                            39119,
                            0,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1121",
                            "scaleY",
                            54750,
                            750,
                            "easeOutQuad",
                            "${p9_title}",
                            '0.41',
                            '1'
                        ],
                        [
                            "eid1128",
                            "scaleY",
                            56500,
                            750,
                            "easeInQuad",
                            "${p9_title}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid484",
                            "left",
                            3500,
                            1000,
                            "easeOutQuad",
                            "${icon_18306}",
                            '534px',
                            '530px'
                        ],
                        [
                            "eid499",
                            "left",
                            5250,
                            1000,
                            "easeInQuad",
                            "${icon_18306}",
                            '530px',
                            '788px'
                        ],
                        [
                            "eid609",
                            "height",
                            11000,
                            500,
                            "easeOutQuad",
                            "${p4_blockersCopy7}",
                            '97px',
                            '1px'
                        ],
                        [
                            "eid800",
                            "top",
                            29124,
                            750,
                            "easeOutQuad",
                            "${Text10Copy2}",
                            '215px',
                            '34px'
                        ],
                        [
                            "eid817",
                            "top",
                            31384,
                            750,
                            "easeInQuad",
                            "${Text10Copy2}",
                            '34px',
                            '238px'
                        ],
                        [
                            "eid539",
                            "scaleY",
                            7750,
                            1000,
                            "easeOutQuad",
                            "${p3_c}",
                            '0.7',
                            '1'
                        ],
                        [
                            "eid935",
                            "top",
                            38364,
                            636,
                            "easeInQuad",
                            "${step3_head}",
                            '-209px',
                            '-573px'
                        ],
                        [
                            "eid1230",
                            "display",
                            57386,
                            0,
                            "easeInOutQuad",
                            "${but_credit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid590",
                            "display",
                            10250,
                            0,
                            "easeOutQuad",
                            "${edge_animate_headerbg22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid656",
                            "display",
                            15095,
                            0,
                            "easeInQuad",
                            "${edge_animate_headerbg22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1221",
                            "display",
                            58250,
                            0,
                            "easeInOutQuad",
                            "${tx}",
                            'none',
                            'block'
                        ],
                        [
                            "eid606",
                            "height",
                            10250,
                            500,
                            "easeOutQuad",
                            "${p4_blockers}",
                            '57px',
                            '1px'
                        ],
                        [
                            "eid879",
                            "top",
                            33000,
                            750,
                            "easeOutQuad",
                            "${bg2}",
                            '358px',
                            '137px'
                        ],
                        [
                            "eid1229",
                            "display",
                            57500,
                            0,
                            "easeInOutQuad",
                            "${sources}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1285",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${bg_block}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1284",
                            "display",
                            1328,
                            0,
                            "easeInQuad",
                            "${bg_block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid462",
                            "display",
                            3866,
                            0,
                            "easeOutQuad",
                            "${bg_block}",
                            'block',
                            'none'
                        ],
                        [
                            "eid631",
                            "display",
                            10250,
                            0,
                            "easeOutQuad",
                            "${p4_blockersCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid639",
                            "display",
                            11750,
                            0,
                            "easeOutQuad",
                            "${p4_blockersCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1003",
                            "height",
                            40124,
                            0,
                            "easeOutQuad",
                            "${comment-1}",
                            '39px',
                            '39px'
                        ],
                        [
                            "eid1021",
                            "width",
                            40750,
                            500,
                            "linear",
                            "${code-box}",
                            '569px',
                            '305px'
                        ],
                        [
                            "eid1026",
                            "width",
                            42250,
                            500,
                            "linear",
                            "${code-box}",
                            '305px',
                            '231px'
                        ],
                        [
                            "eid1031",
                            "width",
                            43750,
                            500,
                            "linear",
                            "${code-box}",
                            '231px',
                            '339px'
                        ],
                        [
                            "eid1036",
                            "width",
                            45250,
                            500,
                            "linear",
                            "${code-box}",
                            '339px',
                            '527px'
                        ],
                        [
                            "eid1040",
                            "width",
                            46750,
                            500,
                            "linear",
                            "${code-box}",
                            '527px',
                            '448px'
                        ],
                        [
                            "eid1046",
                            "width",
                            48250,
                            500,
                            "linear",
                            "${code-box}",
                            '448px',
                            '597px'
                        ],
                        [
                            "eid1051",
                            "width",
                            49750,
                            500,
                            "linear",
                            "${code-box}",
                            '597px',
                            '377px'
                        ],
                        [
                            "eid526",
                            "opacity",
                            5627,
                            1000,
                            "easeOutQuad",
                            "${p3_b}",
                            '0',
                            '1'
                        ],
                        [
                            "eid535",
                            "opacity",
                            7332,
                            1000,
                            "easeInQuad",
                            "${p3_b}",
                            '1',
                            '0'
                        ],
                        [
                            "eid165",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${get_An}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid579",
                            "opacity",
                            9500,
                            750,
                            "easeOutQuad",
                            "${p3_a}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1204",
                            "top",
                            57500,
                            750,
                            "easeOutQuad",
                            "${sources}",
                            '691px',
                            '349px'
                        ],
                        [
                            "eid1242",
                            "top",
                            38500,
                            750,
                            "easeOutQuad",
                            "${p8_a}",
                            '611px',
                            '482px'
                        ],
                        [
                            "eid1243",
                            "top",
                            39250,
                            12500,
                            "linear",
                            "${p8_a}",
                            '482px',
                            '-418px'
                        ],
                        [
                            "eid1244",
                            "top",
                            51750,
                            750,
                            "easeInQuad",
                            "${p8_a}",
                            '-418px',
                            '-675px'
                        ],
                        [
                            "eid1208",
                            "top",
                            57250,
                            750,
                            "easeOutQuad",
                            "${madeby}",
                            '621px',
                            '279px'
                        ],
                        [
                            "eid1062",
                            "opacity",
                            39250,
                            500,
                            "linear",
                            "${code-box}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1073",
                            "opacity",
                            51250,
                            500,
                            "linear",
                            "${code-box}",
                            '1',
                            '0'
                        ],
                        [
                            "eid430",
                            "scaleX",
                            1000,
                            1000,
                            "easeOutQuad",
                            "${copy}",
                            '0.7',
                            '1'
                        ],
                        [
                            "eid517",
                            "display",
                            3500,
                            0,
                            "easeOutQuad",
                            "${theory_title}",
                            'none',
                            'block'
                        ],
                        [
                            "eid586",
                            "display",
                            10376,
                            0,
                            "easeOutQuad",
                            "${theory_title}",
                            'block',
                            'none'
                        ],
                        [
                            "eid531",
                            "display",
                            5627,
                            0,
                            "easeOutQuad",
                            "${p3_b}",
                            'none',
                            'block'
                        ],
                        [
                            "eid557",
                            "display",
                            8547,
                            0,
                            "easeOutSine",
                            "${p3_b}",
                            'block',
                            'none'
                        ],
                        [
                            "eid906",
                            "left",
                            36000,
                            750,
                            "easeOutQuad",
                            "${RoundRect}",
                            '-134px',
                            '264px'
                        ],
                        [
                            "eid1233",
                            "display",
                            57250,
                            0,
                            "easeInOutQuad",
                            "${p9_b}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1245",
                            "top",
                            40750,
                            500,
                            "linear",
                            "${code-box}",
                            '-13px',
                            '34px'
                        ],
                        [
                            "eid1259",
                            "top",
                            42250,
                            500,
                            "linear",
                            "${code-box}",
                            '34px',
                            '100px'
                        ],
                        [
                            "eid1260",
                            "top",
                            43750,
                            500,
                            "linear",
                            "${code-box}",
                            '100px',
                            '168px'
                        ],
                        [
                            "eid1262",
                            "top",
                            45250,
                            500,
                            "linear",
                            "${code-box}",
                            '168px',
                            '231px'
                        ],
                        [
                            "eid1270",
                            "top",
                            46750,
                            500,
                            "linear",
                            "${code-box}",
                            '231px',
                            '365px'
                        ],
                        [
                            "eid1275",
                            "top",
                            48250,
                            500,
                            "linear",
                            "${code-box}",
                            '365px',
                            '476px'
                        ],
                        [
                            "eid1278",
                            "top",
                            49750,
                            500,
                            "linear",
                            "${code-box}",
                            '476px',
                            '586px'
                        ],
                        [
                            "eid1150",
                            "display",
                            54250,
                            0,
                            "easeOutQuad",
                            "${p9_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid550",
                            "top",
                            7332,
                            1000,
                            "easeOutSine",
                            "${copy2}",
                            '6px',
                            '-112px'
                        ],
                        [
                            "eid1055",
                            "display",
                            42250,
                            0,
                            "linear",
                            "${comment-3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1066",
                            "display",
                            44500,
                            0,
                            "linear",
                            "${comment-3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid480",
                            "opacity",
                            3500,
                            1000,
                            "easeOutQuad",
                            "${theory_title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1222",
                            "display",
                            58136,
                            0,
                            "easeInOutQuad",
                            "${icons2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid599",
                            "display",
                            10250,
                            0,
                            "easeOutQuad",
                            "${p4_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid646",
                            "display",
                            13859,
                            0,
                            "easeInQuad",
                            "${p4_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid644",
                            "top",
                            13000,
                            750,
                            "easeInQuad",
                            "${p4_b}",
                            '643px',
                            '276px'
                        ],
                        [
                            "eid650",
                            "top",
                            14250,
                            750,
                            "easeInQuad",
                            "${p4_b}",
                            '276px',
                            '-86px'
                        ],
                        [
                            "eid610",
                            "height",
                            11750,
                            500,
                            "easeOutQuad",
                            "${p4_blockersCopy10}",
                            '70px',
                            '1px'
                        ],
                        [
                            "eid1056",
                            "display",
                            43750,
                            0,
                            "linear",
                            "${comment-4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1067",
                            "display",
                            45978,
                            0,
                            "linear",
                            "${comment-4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid796",
                            "top",
                            29500,
                            750,
                            "easeOutQuad",
                            "${Text10Copy6}",
                            '347px',
                            '166px'
                        ],
                        [
                            "eid815",
                            "top",
                            31005,
                            750,
                            "easeInQuad",
                            "${Text10Copy6}",
                            '166px',
                            '238px'
                        ],
                        [
                            "eid605",
                            "height",
                            11500,
                            500,
                            "easeOutQuad",
                            "${p4_blockersCopy9}",
                            '83px',
                            '1px'
                        ],
                        [
                            "eid1257",
                            "left",
                            42250,
                            500,
                            "linear",
                            "${code-box}",
                            '-19px',
                            '15px'
                        ],
                        [
                            "eid1028",
                            "left",
                            43750,
                            500,
                            "linear",
                            "${code-box}",
                            '15px',
                            '-19px'
                        ],
                        [
                            "eid1276",
                            "left",
                            48250,
                            500,
                            "linear",
                            "${code-box}",
                            '-19px',
                            '44px'
                        ],
                        [
                            "eid1048",
                            "left",
                            49750,
                            500,
                            "linear",
                            "${code-box}",
                            '44px',
                            '-19px'
                        ],
                        [
                            "eid154",
                            "top",
                            7535,
                            0,
                            "linear",
                            "${Ellipse}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid700",
                            "display",
                            18500,
                            0,
                            "easeOutQuad",
                            "${an-install}",
                            'none',
                            'block'
                        ],
                        [
                            "eid727",
                            "display",
                            20864,
                            0,
                            "easeInOutQuad",
                            "${an-install}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1007",
                            "top",
                            40124,
                            0,
                            "easeOutQuad",
                            "${comment-1}",
                            '-76px',
                            '-76px'
                        ],
                        [
                            "eid874",
                            "display",
                            32250,
                            0,
                            "easeInOutQuad",
                            "${Text6Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid939",
                            "display",
                            39119,
                            0,
                            "easeInQuad",
                            "${Text6Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid750",
                            "clip",
                            26750,
                            750,
                            "easeInOutQuad",
                            "${Text9}",
                            [0,456,180,0],
                            [114,456,180,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid883",
                            "opacity",
                            33000,
                            750,
                            "easeOutQuad",
                            "${bg2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid701",
                            "display",
                            18500,
                            0,
                            "easeOutQuad",
                            "${Text8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid728",
                            "display",
                            20864,
                            0,
                            "easeInOutQuad",
                            "${Text8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid776",
                            "display",
                            25250,
                            0,
                            "easeInQuad",
                            "${lessons}",
                            'none',
                            'block'
                        ],
                        [
                            "eid780",
                            "display",
                            29124,
                            0,
                            "easeInQuad",
                            "${lessons}",
                            'block',
                            'none'
                        ],
                        [
                            "eid709",
                            "rotateZ",
                            20750,
                            1000,
                            "easeInOutQuad",
                            "${Ellipse}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid458",
                            "top",
                            2750,
                            1000,
                            "easeInQuad",
                            "${down_arrow}",
                            '86.04%',
                            '-9.52%'
                        ],
                        [
                            "eid401",
                            "top",
                            0,
                            1328,
                            "easeInQuad",
                            "${easy_parallax}",
                            '337px',
                            '-66px'
                        ],
                        [
                            "eid1111",
                            "scaleY",
                            55250,
                            500,
                            "easeOutQuad",
                            "${p9_t2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1127",
                            "scaleY",
                            56750,
                            500,
                            "easeInQuad",
                            "${p9_t2}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid1086",
                            "top",
                            52250,
                            750,
                            "easeOutQuad",
                            "${Text16}",
                            '377px',
                            '-21px'
                        ],
                        [
                            "eid1089",
                            "top",
                            54000,
                            750,
                            "easeInQuad",
                            "${Text16}",
                            '-21px',
                            '-581px'
                        ],
                        [
                            "eid509",
                            "scaleX",
                            5627,
                            623,
                            "easeOutSine",
                            "${copy1}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid533",
                            "display",
                            5627,
                            0,
                            "easeOutQuad",
                            "${icon_1519}",
                            'none',
                            'block'
                        ],
                        [
                            "eid559",
                            "display",
                            8547,
                            0,
                            "easeOutSine",
                            "${icon_1519}",
                            'block',
                            'none'
                        ],
                        [
                            "eid149",
                            "top",
                            7535,
                            0,
                            "linear",
                            "${get_An}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid760",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid765",
                            "display",
                            15250,
                            0,
                            "linear",
                            "${Text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid691",
                            "display",
                            18850,
                            0,
                            "easeInQuad",
                            "${Text5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid681",
                            "left",
                            16500,
                            1250,
                            "easeInOutQuad",
                            "${Text3}",
                            '491px',
                            '632px'
                        ],
                        [
                            "eid514",
                            "display",
                            3500,
                            0,
                            "easeOutQuad",
                            "${first_the}",
                            'none',
                            'block'
                        ],
                        [
                            "eid589",
                            "display",
                            10376,
                            0,
                            "easeOutQuad",
                            "${first_the}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1206",
                            "top",
                            58136,
                            750,
                            "easeOutQuad",
                            "${icons2}",
                            '814px',
                            '472px'
                        ],
                        [
                            "eid870",
                            "opacity",
                            32250,
                            1000,
                            "easeInOutQuad",
                            "${Text6Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid916",
                            "display",
                            36000,
                            0,
                            "easeOutQuad",
                            "${Text12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid921",
                            "display",
                            38107,
                            0,
                            "easeInQuad",
                            "${Text12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid661",
                            "display",
                            14750,
                            0,
                            "easeOutQuad",
                            "${step1_head}",
                            'none',
                            'block'
                        ],
                        [
                            "eid729",
                            "display",
                            21856,
                            0,
                            "easeOutQuad",
                            "${step1_head}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1216",
                            "top",
                            57750,
                            750,
                            "easeOutQuad",
                            "${edgean}",
                            '758px',
                            '416px'
                        ],
                        [
                            "eid603",
                            "display",
                            10250,
                            0,
                            "easeOutQuad",
                            "${p4_head}",
                            'none',
                            'block'
                        ],
                        [
                            "eid654",
                            "display",
                            15095,
                            0,
                            "easeInQuad",
                            "${p4_head}",
                            'block',
                            'none'
                        ],
                        [
                            "eid810",
                            "opacity",
                            29124,
                            750,
                            "easeOutQuad",
                            "${Text10Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid837",
                            "opacity",
                            31884,
                            250,
                            "easeInQuad",
                            "${Text10Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid482",
                            "left",
                            3500,
                            1000,
                            "easeOutQuad",
                            "${copy1}",
                            '57px',
                            '53px'
                        ],
                        [
                            "eid502",
                            "left",
                            5250,
                            1000,
                            "easeInQuad",
                            "${copy1}",
                            '53px',
                            '-318px'
                        ],
                        [
                            "eid1214",
                            "top",
                            57386,
                            750,
                            "easeOutQuad",
                            "${profile}",
                            '605px',
                            '263px'
                        ],
                        [
                            "eid464",
                            "display",
                            3866,
                            0,
                            "easeOutQuad",
                            "${down_arrow}",
                            'block',
                            'none'
                        ],
                        [
                            "eid544",
                            "display",
                            7750,
                            0,
                            "easeInQuad",
                            "${icon_3515}",
                            'none',
                            'block'
                        ],
                        [
                            "eid562",
                            "display",
                            10376,
                            0,
                            "easeOutQuad",
                            "${icon_3515}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1148",
                            "display",
                            54750,
                            0,
                            "easeOutQuad",
                            "${p9_t2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1152",
                            "display",
                            57334,
                            0,
                            "easeOutQuad",
                            "${p9_t2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid736",
                            "top",
                            21750,
                            750,
                            "easeOutQuad",
                            "${p6_a}",
                            '671px',
                            '370px'
                        ],
                        [
                            "eid741",
                            "top",
                            24750,
                            750,
                            "easeInQuad",
                            "${p6_a}",
                            '370px',
                            '110px'
                        ],
                        [
                            "eid748",
                            "top",
                            26750,
                            750,
                            "easeInOutQuad",
                            "${help_button}",
                            '362px',
                            '208px'
                        ],
                        [
                            "eid1093",
                            "display",
                            52250,
                            0,
                            "easeInQuad",
                            "${code_box}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1096",
                            "display",
                            54750,
                            0,
                            "easeInQuad",
                            "${code_box}",
                            'block',
                            'none'
                        ],
                        [
                            "eid607",
                            "height",
                            11250,
                            500,
                            "easeOutQuad",
                            "${p4_blockersCopy6}",
                            '57px',
                            '1px'
                        ],
                        [
                            "eid857",
                            "display",
                            21750,
                            0,
                            "easeOutQuad",
                            "${Text7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid860",
                            "display",
                            25586,
                            0,
                            "easeOutQuad",
                            "${Text7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid662",
                            "display",
                            14750,
                            0,
                            "easeOutQuad",
                            "${get_An}",
                            'none',
                            'block'
                        ],
                        [
                            "eid708",
                            "display",
                            20872,
                            0,
                            "easeInQuad",
                            "${get_An}",
                            'block',
                            'none'
                        ],
                        [
                            "eid730",
                            "display",
                            21856,
                            0,
                            "easeOutQuad",
                            "${get_An}",
                            'none',
                            'none'
                        ],
                        [
                            "eid856",
                            "display",
                            21750,
                            0,
                            "easeOutQuad",
                            "${timeline2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid859",
                            "display",
                            25586,
                            0,
                            "easeOutQuad",
                            "${timeline2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid542",
                            "display",
                            7750,
                            0,
                            "easeInQuad",
                            "${p3_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid560",
                            "display",
                            10376,
                            0,
                            "easeOutQuad",
                            "${p3_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1090",
                            "left",
                            54000,
                            750,
                            "easeInQuad",
                            "${Text16}",
                            '119px',
                            '118px'
                        ],
                        [
                            "eid986",
                            "opacity",
                            45250,
                            500,
                            "linear",
                            "${comment-5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid987",
                            "opacity",
                            46750,
                            500,
                            "linear",
                            "${comment-5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid706",
                            "opacity",
                            20000,
                            750,
                            "easeInQuad",
                            "${p5_b}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1063",
                            "display",
                            39119,
                            0,
                            "linear",
                            "${code-box}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1072",
                            "display",
                            51841,
                            0,
                            "linear",
                            "${code-box}",
                            'block',
                            'none'
                        ],
                        [
                            "eid713",
                            "rotateZ",
                            20750,
                            1000,
                            "easeInOutQuad",
                            "${Text6Copy2}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid863",
                            "rotateZ",
                            32250,
                            1000,
                            "easeInOutQuad",
                            "${Text6Copy2}",
                            '360deg',
                            '720deg'
                        ],
                        [
                            "eid957",
                            "opacity",
                            42250,
                            500,
                            "linear",
                            "${comment-3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid958",
                            "opacity",
                            43750,
                            500,
                            "linear",
                            "${comment-3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid651",
                            "top",
                            14250,
                            750,
                            "easeInQuad",
                            "${p4_head}",
                            '-2px',
                            '-581px'
                        ],
                        [
                            "eid1218",
                            "top",
                            57895,
                            750,
                            "easeOutQuad",
                            "${but_edge_an}",
                            '745px',
                            '403px'
                        ],
                        [
                            "eid841",
                            "display",
                            29000,
                            0,
                            "easeOutQuad",
                            "${Text10Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid850",
                            "display",
                            32346,
                            0,
                            "easeOutQuad",
                            "${Text10Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid875",
                            "display",
                            32250,
                            0,
                            "easeInOutQuad",
                            "${step3_head}",
                            'none',
                            'block'
                        ],
                        [
                            "eid938",
                            "display",
                            39119,
                            0,
                            "easeInQuad",
                            "${step3_head}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1117",
                            "opacity",
                            55000,
                            750,
                            "easeOutQuad",
                            "${p9_t1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1132",
                            "opacity",
                            56632,
                            618,
                            "easeInQuad",
                            "${p9_t1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid658",
                            "top",
                            14750,
                            750,
                            "easeOutQuad",
                            "${step1_head}",
                            '384px',
                            '81px'
                        ],
                        [
                            "eid1054",
                            "display",
                            40750,
                            0,
                            "linear",
                            "${comment-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1065",
                            "display",
                            43000,
                            0,
                            "linear",
                            "${comment-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1223",
                            "display",
                            58000,
                            0,
                            "easeInOutQuad",
                            "${icons1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1147",
                            "display",
                            54750,
                            0,
                            "easeOutQuad",
                            "${p9_t1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1153",
                            "display",
                            57334,
                            0,
                            "easeOutQuad",
                            "${p9_t1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid769",
                            "display",
                            13000,
                            0,
                            "easeInQuad",
                            "${p4_b}",
                            'none',
                            'block'
                        ],
                        [
                            "eid771",
                            "display",
                            15095,
                            0,
                            "easeInQuad",
                            "${p4_b}",
                            'block',
                            'none'
                        ],
                        [
                            "eid459",
                            "display",
                            3866,
                            0,
                            "easeOutQuad",
                            "${p2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid752",
                            "opacity",
                            28250,
                            750,
                            "easeInQuad",
                            "${p6_b}",
                            '1',
                            '0'
                        ],
                        [
                            "eid705",
                            "scaleY",
                            20000,
                            750,
                            "easeInQuad",
                            "${p5_b}",
                            '1',
                            '0.69767'
                        ],
                        [
                            "eid1010",
                            "width",
                            41709,
                            0,
                            "easeOutQuad",
                            "${comment-2}",
                            '500px',
                            '500px'
                        ],
                        [
                            "eid1084",
                            "top",
                            52500,
                            500,
                            "easeOutQuad",
                            "${code_box}",
                            '469px',
                            '92px'
                        ],
                        [
                            "eid1087",
                            "top",
                            54000,
                            500,
                            "easeInQuad",
                            "${code_box}",
                            '92px',
                            '-468px'
                        ],
                        [
                            "eid476",
                            "scaleX",
                            3500,
                            1000,
                            "easeOutQuad",
                            "${theory_title}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid552",
                            "top",
                            9500,
                            750,
                            "easeOutSine",
                            "${icon_3515}",
                            '-9px',
                            '-136px'
                        ],
                        [
                            "eid1002",
                            "width",
                            40124,
                            0,
                            "easeOutQuad",
                            "${comment-1}",
                            '375px',
                            '375px'
                        ],
                        [
                            "eid678",
                            "scaleY",
                            15250,
                            960,
                            "easeOutSine",
                            "${edge_shadow}",
                            '0.1799',
                            '0.53684'
                        ],
                        [
                            "eid679",
                            "scaleY",
                            16210,
                            1540,
                            "easeInSine",
                            "${edge_shadow}",
                            '0.53684',
                            '0.25'
                        ],
                        [
                            "eid668",
                            "scaleY",
                            15250,
                            750,
                            "easeOutQuad",
                            "${p5_a}",
                            '0.54',
                            '1'
                        ],
                        [
                            "eid702",
                            "scaleY",
                            16000,
                            0,
                            "easeOutQuad",
                            "${p5_a}",
                            '1',
                            '1'
                        ],
                        [
                            "eid703",
                            "scaleY",
                            18000,
                            750,
                            "easeOutQuad",
                            "${p5_a}",
                            '1',
                            '0.46573'
                        ],
                        [
                            "eid742",
                            "scaleY",
                            24750,
                            750,
                            "easeInQuad",
                            "${p6_a}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid1226",
                            "display",
                            57750,
                            0,
                            "easeInOutQuad",
                            "${edgean}",
                            'none',
                            'block'
                        ],
                        [
                            "eid710",
                            "rotateZ",
                            20750,
                            1000,
                            "easeInOutQuad",
                            "${Text6}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid825",
                            "scaleY",
                            31384,
                            750,
                            "easeInQuad",
                            "${Text10Copy2}",
                            '1',
                            '4.57'
                        ],
                        [
                            "eid814",
                            "opacity",
                            29250,
                            750,
                            "easeOutQuad",
                            "${Text10Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid839",
                            "opacity",
                            31750,
                            250,
                            "easeInQuad",
                            "${Text10Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid548",
                            "top",
                            7332,
                            1000,
                            "easeOutSine",
                            "${icon_1519}",
                            '-4px',
                            '-126px'
                        ],
                        [
                            "eid891",
                            "display",
                            33750,
                            0,
                            "easeInOutQuad",
                            "${Text11Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid901",
                            "display",
                            36342,
                            0,
                            "easeOutQuad",
                            "${Text11Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid898",
                            "scaleY",
                            35500,
                            750,
                            "easeOutQuad",
                            "${p7_a}",
                            '1',
                            '0.49'
                        ],
                        [
                            "eid824",
                            "scaleX",
                            31384,
                            750,
                            "easeInQuad",
                            "${Text10Copy2}",
                            '1',
                            '2.11'
                        ],
                        [
                            "eid773",
                            "display",
                            25250,
                            0,
                            "easeInQuad",
                            "${p6_b}",
                            'none',
                            'block'
                        ],
                        [
                            "eid777",
                            "display",
                            29124,
                            0,
                            "easeInQuad",
                            "${p6_b}",
                            'block',
                            'none'
                        ],
                        [
                            "eid547",
                            "left",
                            7332,
                            1000,
                            "easeInQuad",
                            "${icon_1519}",
                            '-23px',
                            '-262px'
                        ],
                        [
                            "eid537",
                            "top",
                            7750,
                            1000,
                            "easeOutQuad",
                            "${p3_c}",
                            '484px',
                            '314px'
                        ],
                        [
                            "eid872",
                            "display",
                            32250,
                            0,
                            "easeInOutQuad",
                            "${get_AnCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid941",
                            "display",
                            39119,
                            0,
                            "easeInQuad",
                            "${get_AnCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid629",
                            "display",
                            10250,
                            0,
                            "easeOutQuad",
                            "${p4_blockersCopy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid641",
                            "display",
                            12250,
                            0,
                            "easeOutQuad",
                            "${p4_blockersCopy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid634",
                            "display",
                            10250,
                            0,
                            "easeOutQuad",
                            "${p4_blockersCopy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid636",
                            "display",
                            11000,
                            0,
                            "easeOutQuad",
                            "${p4_blockersCopy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid917",
                            "display",
                            36000,
                            0,
                            "easeOutQuad",
                            "${RoundRect}",
                            'none',
                            'block'
                        ],
                        [
                            "eid922",
                            "display",
                            38107,
                            0,
                            "easeInQuad",
                            "${RoundRect}",
                            'block',
                            'none'
                        ],
                        [
                            "eid549",
                            "left",
                            7332,
                            1000,
                            "easeInQuad",
                            "${copy2}",
                            '131px',
                            '632px'
                        ],
                        [
                            "eid866",
                            "rotateZ",
                            32250,
                            1000,
                            "easeInOutQuad",
                            "${Text6Copy3}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid1115",
                            "opacity",
                            55250,
                            500,
                            "easeOutQuad",
                            "${p9_t2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1130",
                            "opacity",
                            56750,
                            500,
                            "easeInQuad",
                            "${p9_t2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid802",
                            "top",
                            29389,
                            750,
                            "easeOutQuad",
                            "${Text10Copy5}",
                            '312px',
                            '131px'
                        ],
                        [
                            "eid818",
                            "top",
                            31115,
                            750,
                            "easeInQuad",
                            "${Text10Copy5}",
                            '131px',
                            '238px'
                        ],
                        [
                            "eid843",
                            "display",
                            29000,
                            0,
                            "easeOutQuad",
                            "${Text10Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid848",
                            "display",
                            32346,
                            0,
                            "easeOutQuad",
                            "${Text10Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid511",
                            "scaleY",
                            5627,
                            623,
                            "easeOutSine",
                            "${copy1}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid14",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,1)',
                            'rgba(255,255,255,1)'
                        ],
                        [
                            "eid997",
                            "background-color",
                            37500,
                            1000,
                            "easeOutQuad",
                            "${Stage}",
                            'rgba(255,255,255,1)',
                            'rgba(248,248,248,1.00)'
                        ],
                        [
                            "eid999",
                            "background-color",
                            60000,
                            0,
                            "easeOutQuad",
                            "${Stage}",
                            'rgba(248,248,248,1.00)',
                            'rgba(248,248,248,1.00)'
                        ],
                        [
                            "eid698",
                            "display",
                            18500,
                            0,
                            "easeOutQuad",
                            "${Text8Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid725",
                            "display",
                            20864,
                            0,
                            "easeInOutQuad",
                            "${Text8Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid532",
                            "display",
                            5627,
                            0,
                            "easeOutQuad",
                            "${copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid558",
                            "display",
                            8547,
                            0,
                            "easeOutSine",
                            "${copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid488",
                            "opacity",
                            3500,
                            1000,
                            "easeOutQuad",
                            "${copy1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid507",
                            "opacity",
                            5627,
                            623,
                            "easeOutSine",
                            "${copy1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid855",
                            "display",
                            21750,
                            0,
                            "easeOutQuad",
                            "${p6_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid858",
                            "display",
                            25586,
                            0,
                            "easeOutQuad",
                            "${p6_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid632",
                            "display",
                            10250,
                            0,
                            "easeOutQuad",
                            "${p4_blockersCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid638",
                            "display",
                            11500,
                            0,
                            "easeOutQuad",
                            "${p4_blockersCopy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid806",
                            "opacity",
                            29500,
                            750,
                            "easeOutQuad",
                            "${Text10Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid835",
                            "opacity",
                            31500,
                            250,
                            "easeInQuad",
                            "${Text10Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid914",
                            "top",
                            36000,
                            750,
                            "easeOutQuad",
                            "${Text12}",
                            '302px',
                            '39px'
                        ],
                        [
                            "eid608",
                            "height",
                            10500,
                            500,
                            "easeOutQuad",
                            "${p4_blockersCopy8}",
                            '70px',
                            '1px'
                        ],
                        [
                            "eid845",
                            "display",
                            29000,
                            0,
                            "easeOutQuad",
                            "${p6_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid846",
                            "display",
                            32346,
                            0,
                            "easeOutQuad",
                            "${p6_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid466",
                            "display",
                            3866,
                            0,
                            "easeOutQuad",
                            "${bg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid683",
                            "top",
                            16500,
                            1250,
                            "easeInQuad",
                            "${Text3}",
                            '360px',
                            '394px'
                        ],
                        [
                            "eid1210",
                            "top",
                            57386,
                            750,
                            "easeOutQuad",
                            "${but_credit}",
                            '605px',
                            '263px'
                        ],
                        [
                            "eid1058",
                            "display",
                            46750,
                            0,
                            "linear",
                            "${comment-6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1069",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${comment-6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid600",
                            "display",
                            10250,
                            0,
                            "easeOutQuad",
                            "${Text4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid647",
                            "display",
                            13859,
                            0,
                            "easeInQuad",
                            "${Text4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1092",
                            "display",
                            52250,
                            0,
                            "easeInQuad",
                            "${p8_b}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1095",
                            "display",
                            54750,
                            0,
                            "easeInQuad",
                            "${p8_b}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1200",
                            "top",
                            58000,
                            750,
                            "easeOutQuad",
                            "${icons1}",
                            '811px',
                            '469px'
                        ],
                        [
                            "eid1202",
                            "top",
                            57619,
                            750,
                            "easeOutQuad",
                            "${but_source}",
                            '675px',
                            '333px'
                        ],
                        [
                            "eid743",
                            "opacity",
                            24750,
                            750,
                            "easeInQuad",
                            "${p6_a}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1094",
                            "display",
                            52250,
                            0,
                            "easeInQuad",
                            "${Text16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1097",
                            "display",
                            54750,
                            0,
                            "easeInQuad",
                            "${Text16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid722",
                            "display",
                            20661,
                            0,
                            "easeInOutQuad",
                            "${Text6Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid864",
                            "display",
                            33355,
                            0,
                            "easeInOutQuad",
                            "${Text6Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid720",
                            "display",
                            20661,
                            0,
                            "easeInOutQuad",
                            "${step2_head}",
                            'none',
                            'block'
                        ],
                        [
                            "eid924",
                            "display",
                            33355,
                            0,
                            "easeOutQuad",
                            "${step2_head}",
                            'block',
                            'none'
                        ],
                        [
                            "eid919",
                            "top",
                            37250,
                            750,
                            "easeInQuad",
                            "${p7_b}",
                            '300px',
                            '-240px'
                        ],
                        [
                            "eid670",
                            "opacity",
                            15250,
                            750,
                            "easeOutQuad",
                            "${p5_a}",
                            '0',
                            '1'
                        ],
                        [
                            "eid688",
                            "opacity",
                            16000,
                            0,
                            "easeInQuad",
                            "${p5_a}",
                            '1',
                            '1'
                        ],
                        [
                            "eid689",
                            "opacity",
                            18000,
                            750,
                            "easeInQuad",
                            "${p5_a}",
                            '1',
                            '0'
                        ],
                        [
                            "eid508",
                            "scaleX",
                            5627,
                            623,
                            "easeOutSine",
                            "${icon_18306}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid1227",
                            "display",
                            57619,
                            0,
                            "easeInOutQuad",
                            "${but_source}",
                            'none',
                            'block'
                        ],
                        [
                            "eid775",
                            "display",
                            25250,
                            0,
                            "easeInQuad",
                            "${Text9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid779",
                            "display",
                            29124,
                            0,
                            "easeInQuad",
                            "${Text9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1232",
                            "display",
                            57250,
                            0,
                            "easeInOutQuad",
                            "${madeby}",
                            'none',
                            'block'
                        ],
                        [
                            "eid524",
                            "top",
                            5627,
                            1000,
                            "easeOutQuad",
                            "${p3_b}",
                            '451px',
                            '305px'
                        ],
                        [
                            "eid472",
                            "top",
                            3500,
                            1000,
                            "easeOutQuad",
                            "${copy1}",
                            '413px',
                            '189px'
                        ],
                        [
                            "eid503",
                            "top",
                            5250,
                            1000,
                            "easeOutSine",
                            "${copy1}",
                            '189px',
                            '57px'
                        ],
                        [
                            "eid1059",
                            "display",
                            48250,
                            0,
                            "linear",
                            "${comment-7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1070",
                            "display",
                            50500,
                            0,
                            "linear",
                            "${comment-7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1006",
                            "left",
                            40124,
                            0,
                            "easeOutQuad",
                            "${comment-1}",
                            '-31px',
                            '-31px'
                        ],
                        [
                            "eid990",
                            "opacity",
                            48250,
                            500,
                            "linear",
                            "${comment-7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid991",
                            "opacity",
                            49750,
                            500,
                            "linear",
                            "${comment-7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid520",
                            "display",
                            3500,
                            0,
                            "easeOutQuad",
                            "${p3_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid585",
                            "display",
                            10376,
                            0,
                            "easeOutQuad",
                            "${p3_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid666",
                            "top",
                            15250,
                            750,
                            "easeOutQuad",
                            "${p5_a}",
                            '217px',
                            '84px'
                        ],
                        [
                            "eid687",
                            "top",
                            18000,
                            750,
                            "easeInQuad",
                            "${p5_a}",
                            '84px',
                            '-142px'
                        ],
                        [
                            "eid478",
                            "scaleY",
                            3500,
                            1000,
                            "easeOutQuad",
                            "${theory_title}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid889",
                            "opacity",
                            33750,
                            750,
                            "easeInOutQuad",
                            "${p7_a}",
                            '0',
                            '1'
                        ],
                        [
                            "eid899",
                            "opacity",
                            35500,
                            750,
                            "easeOutQuad",
                            "${p7_a}",
                            '1',
                            '0'
                        ],
                        [
                            "eid890",
                            "display",
                            33750,
                            0,
                            "easeInOutQuad",
                            "${p7_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid900",
                            "display",
                            36342,
                            0,
                            "easeOutQuad",
                            "${p7_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid892",
                            "display",
                            33750,
                            0,
                            "easeInOutQuad",
                            "${Text11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid902",
                            "display",
                            36342,
                            0,
                            "easeOutQuad",
                            "${Text11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid804",
                            "top",
                            29250,
                            750,
                            "easeOutQuad",
                            "${Text10Copy3}",
                            '250px',
                            '69px'
                        ],
                        [
                            "eid819",
                            "top",
                            31250,
                            750,
                            "easeInQuad",
                            "${Text10Copy3}",
                            '69px',
                            '238px'
                        ],
                        [
                            "eid953",
                            "opacity",
                            39250,
                            500,
                            "linear",
                            "${comment-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid954",
                            "opacity",
                            40750,
                            500,
                            "linear",
                            "${comment-1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid518",
                            "display",
                            3500,
                            0,
                            "easeOutQuad",
                            "${icon_18306}",
                            'none',
                            'block'
                        ],
                        [
                            "eid545",
                            "display",
                            6500,
                            0,
                            "easeInQuad",
                            "${icon_18306}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1143",
                            "clip",
                            54250,
                            1000,
                            "easeOutQuad",
                            "${bg3}",
                            [604,804,604,0],
                            [0,804,604,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid717",
                            "opacity",
                            20750,
                            1000,
                            "easeInOutQuad",
                            "${Text6Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid463",
                            "display",
                            3866,
                            0,
                            "easeOutQuad",
                            "${p1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1057",
                            "display",
                            45250,
                            0,
                            "linear",
                            "${comment-5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1068",
                            "display",
                            47491,
                            0,
                            "linear",
                            "${comment-5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid465",
                            "display",
                            3866,
                            0,
                            "easeOutQuad",
                            "${easy_parallax}",
                            'block',
                            'none'
                        ],
                        [
                            "eid808",
                            "opacity",
                            29008,
                            750,
                            "easeOutQuad",
                            "${Text10Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid836",
                            "opacity",
                            32000,
                            250,
                            "easeInQuad",
                            "${Text10Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid627",
                            "display",
                            10250,
                            0,
                            "easeOutQuad",
                            "${p4_blockers}",
                            'none',
                            'block'
                        ],
                        [
                            "eid635",
                            "display",
                            10750,
                            0,
                            "easeOutQuad",
                            "${p4_blockers}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1101",
                            "top",
                            55000,
                            750,
                            "easeOutQuad",
                            "${p9_t1}",
                            '376px',
                            '322px'
                        ],
                        [
                            "eid1126",
                            "top",
                            56632,
                            618,
                            "easeInQuad",
                            "${p9_t1}",
                            '322px',
                            '164px'
                        ],
                        [
                            "eid877",
                            "top",
                            33000,
                            750,
                            "easeOutQuad",
                            "${get_AnCopy3}",
                            '660px',
                            '439px'
                        ],
                        [
                            "eid1154",
                            "left",
                            57334,
                            0,
                            "easeOutQuad",
                            "${p9_a}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid516",
                            "display",
                            3500,
                            0,
                            "easeOutQuad",
                            "${underline}",
                            'none',
                            'block'
                        ],
                        [
                            "eid587",
                            "display",
                            10376,
                            0,
                            "easeOutQuad",
                            "${underline}",
                            'block',
                            'none'
                        ],
                        [
                            "eid745",
                            "top",
                            25250,
                            750,
                            "easeOutQuad",
                            "${p6_b}",
                            '608px',
                            '306px'
                        ],
                        [
                            "eid751",
                            "top",
                            28250,
                            750,
                            "easeInQuad",
                            "${p6_b}",
                            '306px',
                            '59px'
                        ],
                        [
                            "eid994",
                            "opacity",
                            49750,
                            500,
                            "linear",
                            "${comment-8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid995",
                            "opacity",
                            51250,
                            500,
                            "linear",
                            "${comment-8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid881",
                            "opacity",
                            33000,
                            750,
                            "easeOutQuad",
                            "${get_AnCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid555",
                            "opacity",
                            9500,
                            750,
                            "easeOutQuad",
                            "${icon_3515}",
                            '1',
                            '0'
                        ],
                        [
                            "eid448",
                            "top",
                            1328,
                            672,
                            "easeOutQuad",
                            "${bg_block}",
                            '603px',
                            '582px'
                        ],
                        [
                            "eid457",
                            "top",
                            2750,
                            1000,
                            "easeInQuad",
                            "${bg_block}",
                            '582px',
                            '0px'
                        ],
                        [
                            "eid601",
                            "display",
                            10250,
                            0,
                            "easeOutQuad",
                            "${Text4Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid648",
                            "display",
                            13859,
                            0,
                            "easeInQuad",
                            "${Text4Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid602",
                            "display",
                            10250,
                            0,
                            "easeOutQuad",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid649",
                            "display",
                            13859,
                            0,
                            "easeInQuad",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid153",
                            "top",
                            7535,
                            0,
                            "linear",
                            "${Text6}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid664",
                            "display",
                            14750,
                            0,
                            "easeOutQuad",
                            "${Ellipse}",
                            'none',
                            'block'
                        ],
                        [
                            "eid732",
                            "display",
                            21856,
                            0,
                            "easeOutQuad",
                            "${Ellipse}",
                            'block',
                            'none'
                        ],
                        [
                            "eid822",
                            "scaleX",
                            31500,
                            750,
                            "easeInQuad",
                            "${Text10Copy}",
                            '1',
                            '2.11'
                        ],
                        [
                            "eid1225",
                            "display",
                            57895,
                            0,
                            "easeInOutQuad",
                            "${edge_an_circle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid513",
                            "display",
                            4402,
                            0,
                            "easeOutQuad",
                            "${HEADER}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1145",
                            "display",
                            55851,
                            0,
                            "easeInQuad",
                            "${HEADER}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${HEADER}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1288",
                            "top",
                            26750,
                            750,
                            "easeInOutQuad",
                            "${Text9Copy}",
                            '302px',
                            '155px'
                        ],
                        [
                            "eid1283",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1282",
                            "display",
                            1000,
                            0,
                            "easeInQuad",
                            "${copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid461",
                            "display",
                            3866,
                            0,
                            "easeOutQuad",
                            "${copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid519",
                            "display",
                            3500,
                            0,
                            "easeOutQuad",
                            "${copy1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid546",
                            "display",
                            6500,
                            0,
                            "easeInQuad",
                            "${copy1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1099",
                            "top",
                            55250,
                            500,
                            "easeOutQuad",
                            "${p9_t2}",
                            '460px',
                            '406px'
                        ],
                        [
                            "eid1124",
                            "top",
                            56750,
                            500,
                            "easeInQuad",
                            "${p9_t2}",
                            '406px',
                            '248px'
                        ],
                        [
                            "eid1113",
                            "scaleY",
                            55000,
                            750,
                            "easeOutQuad",
                            "${p9_t1}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1129",
                            "scaleY",
                            56632,
                            618,
                            "easeInQuad",
                            "${p9_t1}",
                            '1',
                            '1.8'
                        ],
                        [
                            "eid672",
                            "skewX",
                            15250,
                            2500,
                            "easeOutQuad",
                            "${edge_shadow}",
                            '77.09deg',
                            '-82deg'
                        ],
                        [
                            "eid759",
                            "display",
                            0,
                            0,
                            "linear",
                            "${p5_a}",
                            'none',
                            'none'
                        ],
                        [
                            "eid764",
                            "display",
                            15250,
                            0,
                            "linear",
                            "${p5_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid690",
                            "display",
                            18850,
                            0,
                            "easeInQuad",
                            "${p5_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid578",
                            "top",
                            9500,
                            750,
                            "easeOutQuad",
                            "${p3_a}",
                            '123px',
                            '12px'
                        ],
                        [
                            "eid868",
                            "opacity",
                            32250,
                            1000,
                            "easeInQuad",
                            "${EllipseCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid405",
                            "top",
                            1000,
                            1000,
                            "easeOutQuad",
                            "${copy}",
                            '485px',
                            '341px'
                        ],
                        [
                            "eid456",
                            "top",
                            2750,
                            1000,
                            "easeInQuad",
                            "${copy}",
                            '341px',
                            '-241px'
                        ],
                        [
                            "eid543",
                            "display",
                            7750,
                            0,
                            "easeInQuad",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid561",
                            "display",
                            10376,
                            0,
                            "easeOutQuad",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid628",
                            "display",
                            10250,
                            0,
                            "easeOutQuad",
                            "${p4_overlay}",
                            'none',
                            'block'
                        ],
                        [
                            "eid642",
                            "display",
                            12250,
                            0,
                            "easeOutQuad",
                            "${p4_overlay}",
                            'block',
                            'none'
                        ],
                        [
                            "eid696",
                            "top",
                            18500,
                            750,
                            "easeOutQuad",
                            "${p5_b}",
                            '580px',
                            '313px'
                        ],
                        [
                            "eid704",
                            "top",
                            20000,
                            750,
                            "easeInQuad",
                            "${p5_b}",
                            '313px',
                            '97px'
                        ],
                        [
                            "eid812",
                            "opacity",
                            29389,
                            750,
                            "easeOutQuad",
                            "${Text10Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid838",
                            "opacity",
                            31610,
                            250,
                            "easeInQuad",
                            "${Text10Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid887",
                            "top",
                            33750,
                            750,
                            "easeInOutQuad",
                            "${p7_a}",
                            '524px',
                            '349px'
                        ],
                        [
                            "eid893",
                            "top",
                            35500,
                            750,
                            "easeOutQuad",
                            "${p7_a}",
                            '349px',
                            '254px'
                        ],
                        [
                            "eid936",
                            "display",
                            38364,
                            0,
                            "easeInQuad",
                            "${p8_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1091",
                            "display",
                            52572,
                            0,
                            "easeInQuad",
                            "${p8_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid528",
                            "scaleY",
                            5627,
                            1000,
                            "easeOutQuad",
                            "${p3_b}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid937",
                            "display",
                            37411,
                            0,
                            "easeInQuad",
                            "${Text14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid949",
                            "display",
                            39119,
                            0,
                            "linear",
                            "${Text14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid553",
                            "left",
                            9500,
                            750,
                            "easeInQuad",
                            "${Text}",
                            '-71px',
                            '-396px'
                        ],
                        [
                            "eid826",
                            "scaleX",
                            31115,
                            750,
                            "easeInQuad",
                            "${Text10Copy5}",
                            '1',
                            '2.11'
                        ],
                        [
                            "eid959",
                            "opacity",
                            43750,
                            500,
                            "linear",
                            "${comment-4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid960",
                            "opacity",
                            45250,
                            500,
                            "linear",
                            "${comment-4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid697",
                            "display",
                            18500,
                            0,
                            "easeOutQuad",
                            "${p5_b}",
                            'none',
                            'block'
                        ],
                        [
                            "eid724",
                            "display",
                            20864,
                            0,
                            "easeInOutQuad",
                            "${p5_b}",
                            'block',
                            'none'
                        ],
                        [
                            "eid460",
                            "display",
                            3866,
                            0,
                            "easeOutQuad",
                            "${logo_circle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid604",
                            "display",
                            10250,
                            0,
                            "easeOutQuad",
                            "${line}",
                            'none',
                            'block'
                        ],
                        [
                            "eid655",
                            "display",
                            15095,
                            0,
                            "easeInQuad",
                            "${line}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1224",
                            "display",
                            57895,
                            0,
                            "easeInOutQuad",
                            "${but_edge_an}",
                            'none',
                            'block'
                        ],
                        [
                            "eid663",
                            "display",
                            14750,
                            0,
                            "easeOutQuad",
                            "${Text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid731",
                            "display",
                            21856,
                            0,
                            "easeOutQuad",
                            "${Text6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid699",
                            "display",
                            18500,
                            0,
                            "easeOutQuad",
                            "${p5_try_button}",
                            'none',
                            'block'
                        ],
                        [
                            "eid726",
                            "display",
                            20864,
                            0,
                            "easeInOutQuad",
                            "${p5_try_button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid510",
                            "scaleY",
                            5627,
                            623,
                            "easeOutSine",
                            "${icon_18306}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid827",
                            "scaleY",
                            31115,
                            750,
                            "easeInQuad",
                            "${Text10Copy5}",
                            '1',
                            '4.57'
                        ],
                        [
                            "eid470",
                            "top",
                            3500,
                            1000,
                            "easeOutQuad",
                            "${icon_18306}",
                            '418px',
                            '194px'
                        ],
                        [
                            "eid500",
                            "top",
                            5250,
                            1000,
                            "easeOutSine",
                            "${icon_18306}",
                            '194px',
                            '38px'
                        ],
                        [
                            "eid660",
                            "opacity",
                            14750,
                            750,
                            "easeOutQuad",
                            "${step1_head}",
                            '0',
                            '1'
                        ],
                        [
                            "eid645",
                            "top",
                            13000,
                            750,
                            "easeInQuad",
                            "${p4_a}",
                            '0px',
                            '-430px'
                        ],
                        [
                            "eid821",
                            "scaleY",
                            31005,
                            750,
                            "easeInQuad",
                            "${Text10Copy6}",
                            '1',
                            '4.57'
                        ],
                        [
                            "eid633",
                            "display",
                            10250,
                            0,
                            "easeOutQuad",
                            "${p4_blockersCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid637",
                            "display",
                            11250,
                            0,
                            "easeOutQuad",
                            "${p4_blockersCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid707",
                            "opacity",
                            20000,
                            750,
                            "easeInQuad",
                            "${get_An}",
                            '1',
                            '0'
                        ],
                        [
                            "eid551",
                            "left",
                            9500,
                            750,
                            "easeInQuad",
                            "${icon_3515}",
                            '408px',
                            '677px'
                        ],
                        [
                            "eid871",
                            "display",
                            32250,
                            0,
                            "easeInOutQuad",
                            "${bg2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid942",
                            "display",
                            39119,
                            0,
                            "easeInQuad",
                            "${bg2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid554",
                            "top",
                            9500,
                            750,
                            "easeOutSine",
                            "${Text}",
                            '16px',
                            '-101px'
                        ],
                        [
                            "eid715",
                            "opacity",
                            20750,
                            1000,
                            "easeOutQuad",
                            "${EllipseCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid407",
                            "opacity",
                            1000,
                            1000,
                            "easeOutQuad",
                            "${copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid474",
                            "top",
                            3500,
                            1000,
                            "easeOutQuad",
                            "${theory_title}",
                            '178px',
                            '0px'
                        ],
                        [
                            "eid1231",
                            "display",
                            57386,
                            0,
                            "easeInOutQuad",
                            "${profile}",
                            'none',
                            'block'
                        ],
                        [
                            "eid541",
                            "opacity",
                            7750,
                            1000,
                            "easeOutQuad",
                            "${p3_c}",
                            '0',
                            '1'
                        ],
                        [
                            "eid739",
                            "clip",
                            23361,
                            639,
                            "linear",
                            "${Text7}",
                            [0,403,274,0],
                            [66,403,274,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1146",
                            "display",
                            54750,
                            0,
                            "easeOutQuad",
                            "${p9_title}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1151",
                            "display",
                            57334,
                            0,
                            "easeOutQuad",
                            "${p9_title}",
                            'block',
                            'none'
                        ],
                        [
                            "eid798",
                            "top",
                            29008,
                            750,
                            "easeOutQuad",
                            "${Text10Copy}",
                            '181px',
                            '0px'
                        ],
                        [
                            "eid816",
                            "top",
                            31500,
                            750,
                            "easeInQuad",
                            "${Text10Copy}",
                            '0px',
                            '238px'
                        ],
                        [
                            "eid770",
                            "display",
                            13000,
                            0,
                            "easeInQuad",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid772",
                            "display",
                            15095,
                            0,
                            "easeInQuad",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1220",
                            "top",
                            57895,
                            750,
                            "easeOutQuad",
                            "${edge_an_circle}",
                            '745px',
                            '403px'
                        ]
                    ]
                }
            },
            "down_arrow": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['23.77%', -18, '51.37%', '193.79%', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text',
                            text: '➧',
                            font: ['Arial, Helvetica, sans-serif', [65, 'px'], 'rgba(255,255,255,1)', '300', 'none', 'normal', '', ''],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 76, 39]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid738",
                            "top",
                            0,
                            500,
                            "easeInOutCubic",
                            "${Text}",
                            '-18px',
                            '-2px'
                        ],
                        [
                            "eid740",
                            "top",
                            500,
                            500,
                            "easeInOutCubic",
                            "${Text}",
                            '-2px',
                            '-18px'
                        ]
                    ]
                }
            },
            "header": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [-2, -2, 804, 34, 'auto', 'auto'],
                            fill: ['rgba(13,18,75,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text5',
                            text: 'EASY PARALLAX WITH EDGE ANIMATE',
                            rect: ['11.5%', '11.36%', '76.88%', '68.2%', 'auto', 'auto'],
                            textStyle: ['1px', '', '', ''],
                            font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(248,248,248,0.99)', '300', 'none', 'normal', '', ''],
                            textShadow: ['rgba(0,0,0,0.44)', '1px', '1px', '1px'],
                            align: 'center'
                        },
                        {
                            type: 'image',
                            id: 'adobe',
                            rect: ['94.56%', '0%', 24, 40, 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/adobe.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${p3_title}': {
                            textShadow: 'r{:}{{:}:{:}}',
                            rect: [0, 0, 0, 0]
                        },
                        '${symbolSelector}': {
                            rect: [null, null, 800, 44]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "try_button": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['7.94%', '0%', 148, '69px', 'auto', 'auto'],
                            borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                            fill: ['rgba(192,177,182,1)', [270, [['rgba(253,201,0,1.00)', 0], ['rgba(254,159,0,1.00)', 100]]]],
                            id: 'RoundRect',
                            stroke: ['1px', 'rgba(211,115,0,1.00)', 'solid'],
                            type: 'rect',
                            boxShadow: ['', '0px', '2px', '5px', 0, 'rgba(0,0,0,0.35)']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1', '0.99', 1], ['50%', '50%']],
                            align: 'center',
                            text: 'Try!',
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(255,255,255,1.00)', '300', 'none', 'normal', '', ''],
                            type: 'text',
                            rect: [24, 14, 128, 41, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.35)', '0px', '1px', '2px'],
                            id: 'Text4'
                        },
                        {
                            type: 'rect',
                            borderRadius: ['8px', '8px', '8px', '8px'],
                            rect: ['7.39%', '0%', '85.23%', '100%', 'auto', 'auto'],
                            id: 'try_but_hitarea',
                            stroke: [1, 'rgb(211, 115, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 176, 71]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    labels: {
                        "show": 0,
                        "hide": 250
                    },
                    data: [
                        [
                            "eid338",
                            "background-image",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            [270,[['rgba(253,201,0,1.00)',0],['rgba(254,159,0,1.00)',100]]],
                            [270,[['rgba(211,115,0,1.00)',0],['rgba(254,159,0,1.00)',100]]]
                        ],
                        [
                            "eid339",
                            "background-image",
                            250,
                            250,
                            "linear",
                            "${RoundRect}",
                            [270,[['rgba(211,115,0,1.00)',0],['rgba(253,158,0,1.00)',100]]],
                            [270,[['rgba(253,201,0,1.00)',0],['rgba(253,158,0,1.00)',100]]]
                        ],
                        [
                            "eid68",
                            "width",
                            3000,
                            0,
                            "linear",
                            "${RoundRect}",
                            '148px',
                            '148px'
                        ],
                        [
                            "eid69",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${RoundRect}",
                            '7.94%',
                            '7.94%'
                        ]
                    ]
                }
            },
            "help_button": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0.02%', '0%', 298, 58, 'auto', 'auto'],
                            borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                            fill: ['rgba(192,177,182,1)', [270, [['rgba(253,201,0,1.00)', 0], ['rgba(254,159,0,1.00)', 100]]]],
                            id: 'RoundRect',
                            stroke: ['1px', 'rgba(211,115,0,1.00)', 'solid'],
                            type: 'rect',
                            boxShadow: ['', '0px', '2px', '5px', 0, 'rgba(0,0,0,0.35)']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1', '0.99', 1], ['50%', '50%']],
                            align: 'center',
                            text: 'Learn Edge Animate CC',
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '300', 'none', 'normal', '', ''],
                            type: 'text',
                            rect: [0, 15, 300, 30, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.35)', '0px', '1px', '2px'],
                            id: 'Text4'
                        },
                        {
                            type: 'rect',
                            borderRadius: ['8px', '8px', '8px', '8px'],
                            rect: ['0%', '0%', 300, 60, 'auto', 'auto'],
                            id: 'try_but_hitarea',
                            stroke: [1, 'rgb(211, 115, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 300, 60]
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    labels: {
                        "show": 0,
                        "hide": 250
                    },
                    data: [
                        [
                            "eid338",
                            "background-image",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            [270,[['rgba(253,201,0,1.00)',0],['rgba(254,159,0,1.00)',100]]],
                            [270,[['rgba(211,115,0,1.00)',0],['rgba(254,159,0,1.00)',100]]]
                        ],
                        [
                            "eid339",
                            "background-image",
                            250,
                            250,
                            "linear",
                            "${RoundRect}",
                            [270,[['rgba(211,115,0,1.00)',0],['rgba(253,158,0,1.00)',100]]],
                            [270,[['rgba(253,201,0,1.00)',0],['rgba(253,158,0,1.00)',100]]]
                        ],
                        [
                            "eid68",
                            "width",
                            750,
                            0,
                            "linear",
                            "${RoundRect}",
                            '298px',
                            '298px'
                        ],
                        [
                            "eid69",
                            "left",
                            750,
                            0,
                            "linear",
                            "${RoundRect}",
                            '0.02%',
                            '0.02%'
                        ]
                    ]
                }
            },
            "code_box": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 484, 224, 'auto', 'auto'],
                            borderRadius: ['6px 6px', '6px 6px', '6px 6px', '6px 6px'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'RoundRect3',
                            stroke: ['1px', 'rgba(204,204,204,1.00)', 'solid'],
                            type: 'rect',
                            boxShadow: ['', 0, '1px', '3px', '2px', 'rgba(0,0,0,0.65)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 486, 226]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "round_HL_button": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 56, 56, 'auto', 'auto'],
                            borderRadius: ['30px 30px', '30px 30px', '30px 30px', '30px 30px'],
                            id: 'outline',
                            stroke: ['2px', 'rgba(6,19,74,0.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(6,19,74,0.40)']
                        },
                        {
                            type: 'rect',
                            id: 'hit_area',
                            stroke: ['0px', 'rgb(255, 255, 255)', 'solid'],
                            rect: [-294, 0, 354, 60, 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 60, 60]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "show": 0,
                        "hide": 250
                    },
                    data: [
                        [
                            "eid272",
                            "border-color",
                            0,
                            250,
                            "easeInOutQuad",
                            "${outline}",
                            'rgba(6,19,74,0.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid273",
                            "border-color",
                            250,
                            250,
                            "easeInOutQuad",
                            "${outline}",
                            'rgba(255,255,255,1.00)',
                            'rgba(6,19,74,0.00)'
                        ],
                        [
                            "eid270",
                            "background-color",
                            0,
                            250,
                            "easeInOutQuad",
                            "${outline}",
                            'rgba(6,19,74,0.40)',
                            'rgba(6,19,74,0.00)'
                        ],
                        [
                            "eid271",
                            "background-color",
                            250,
                            250,
                            "easeInOutQuad",
                            "${outline}",
                            'rgba(6,19,74,0.00)',
                            'rgba(6,19,74,0.40)'
                        ]
                    ]
                }
            },
            "bg_block": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, 800, 600, 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 800, 600]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("parallax_edgeActions.js");
})("EDGE-343491701");
