/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['source-sans-pro, sans-serif']='<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>';
    fonts['source-code-pro, sans-serif']='<script src=\"http://use.edgefonts.net/source-code-pro:n9,n7,n2,n3,n4,n6,n5:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'p1',
                display: 'block',
                type: 'group',
                rect: ['-6', '-4','812','609','auto', 'auto'],
                c: [
                {
                    id: 'bg',
                    display: 'block',
                    type: 'image',
                    tag: 'img',
                    rect: ['0px', '0px','812px','609px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'easy_parallax',
                    display: 'block',
                    type: 'text',
                    rect: ['56px', '337px','700px','auto','auto', 'auto'],
                    text: "Easy Parallax with Edge Animate",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 42, "rgba(237,241,250,1.00)", "100", "none", ""],
                    textShadow: ["rgba(0,0,0,0.65098)", 1, 1, 2]
                },
                {
                    id: 'down_arrow',
                    display: 'block',
                    type: 'rect',
                    rect: ['45.3%', '86%','auto','auto','auto', 'auto'],
                    transform: [[],[],[],['1','0.66079']]
                }]
            },
            {
                id: 'p2',
                display: 'block',
                type: 'group',
                rect: ['0', '0','800','600','auto', 'auto'],
                c: [
                {
                    id: 'bg_block',
                    display: 'none',
                    type: 'rect',
                    rect: ['0', '582px','auto','auto','auto', 'auto']
                },
                {
                    id: 'copy',
                    display: 'none',
                    type: 'text',
                    rect: ['82px', '341px','635px','163px','auto', 'auto'],
                    text: "Parallax effects are fun and trendy, <br>but they're a pain to author - especially if you don't code.<br> <br>Perhaps there's a better way? <br><br>Scroll on...",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 23, "rgba(255,255,255,1)", "300", "none", "normal"],
                    textShadow: ["rgba(0,0,0,0.65098)", 1, 1, 2]
                },
                {
                    id: 'logo_circle',
                    display: 'block',
                    type: 'image',
                    tag: 'img',
                    rect: ['334px', '51px','133px','133px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"edge_an_circle.png",'0px','0px']
                }]
            },
            {
                id: 'p3_a',
                display: 'none',
                type: 'group',
                rect: ['0px', '123px','801','317','auto', 'auto'],
                c: [
                {
                    id: 'theory_title',
                    display: 'none',
                    type: 'group',
                    rect: ['0', '0','801','76','auto', 'auto'],
                    c: [
                    {
                        id: 'first_the',
                        display: 'none',
                        type: 'text',
                        rect: ['0px', '0px','415px','51px','auto', 'auto'],
                        text: "First, the ",
                        align: "right",
                        font: ['source-sans-pro, sans-serif', 52, "rgba(34,67,149,1.00)", "100", "none", "normal"],
                        transform: [[],[],[],['1','0.99']]
                    },
                    {
                        id: 'theory',
                        display: 'none',
                        type: 'text',
                        rect: ['426px', '0px','375px','51px','auto', 'auto'],
                        text: "theory:",
                        align: "left",
                        font: ['source-sans-pro, sans-serif', 52, "rgba(34,67,149,1.00)", "500", "none", "normal"],
                        transform: [[],[],[],['1','0.99']]
                    },
                    {
                        id: 'underline',
                        display: 'none',
                        type: 'rect',
                        rect: ['319px', '75px','163px','1px','auto', 'auto'],
                        fill: ["rgba(34,67,149,1.00)"],
                        stroke: [0,"rgba(169,156,247,1.00)","solid"]
                    }]
                },
                {
                    id: 'icon_18306',
                    display: 'none',
                    type: 'image',
                    tag: 'img',
                    rect: ['530px', '194px','132px','132px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"icon_18306.svg",'0px','0px']
                },
                {
                    id: 'copy1',
                    display: 'none',
                    type: 'text',
                    rect: ['53px', '189px','436px','107px','auto', 'auto'],
                    text: "Parallax basically amounts to <br>moving a bunch of  HTML elements around in a fixed sequence.",
                    align: "right",
                    font: ['source-sans-pro, sans-serif', 28, "rgba(0,0,0,1.00)", "300", "none", "normal"]
                }]
            },
            {
                id: 'p3_b',
                display: 'none',
                type: 'group',
                rect: ['118px', '305px','100','100','auto', 'auto'],
                c: [
                {
                    id: 'icon_1519',
                    display: 'none',
                    type: 'image',
                    tag: 'img',
                    rect: ['-23px', '-4px','132px','132px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"icon_1519.svg",'0px','0px']
                },
                {
                    id: 'copy2',
                    display: 'none',
                    type: 'text',
                    rect: ['131px', '6px','501px','112px','auto', 'auto'],
                    text: "In other words, an animation - <br>except that instead of playing back automatically..",
                    align: "left",
                    font: ['source-sans-pro, sans-serif', 28, "rgba(0,0,0,1.00)", "300", "none", "normal"]
                }]
            },
            {
                id: 'p3_c',
                display: 'none',
                type: 'group',
                rect: ['124px', '314px','540','113','auto', 'auto'],
                c: [
                {
                    id: 'icon_3515',
                    display: 'none',
                    type: 'image',
                    tag: 'img',
                    rect: ['408px', '-9px','120px','120px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"icon_3515.svg",'0px','0px']
                },
                {
                    id: 'Text',
                    display: 'none',
                    type: 'text',
                    rect: ['-71px', '16px','434px','69px','auto', 'auto'],
                    text: "..the user drives the timing of the animation as they scroll.",
                    align: "right",
                    font: ['source-sans-pro, sans-serif', 28, "rgba(0,0,0,1)", "300", "none", "normal"]
                }]
            },
            {
                id: 'p4_head',
                display: 'none',
                type: 'group',
                rect: ['-2', '-2','804','603','auto', 'auto'],
                c: [
                {
                    id: 'edge_animate_headerbg22',
                    display: 'none',
                    type: 'image',
                    tag: 'img',
                    rect: ['0px', '0px','804px','auto','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"edge_animate_headerbg2.jpg",'0px','0px']
                },
                {
                    id: 'line',
                    display: 'none',
                    type: 'rect',
                    rect: ['2px', '35px','800px','1px','auto', 'auto'],
                    fill: ["rgba(255,255,255,0.70)"],
                    stroke: [0,"rgb(169, 156, 247)","solid"]
                }]
            },
            {
                id: 'p4_a',
                display: 'none',
                type: 'group',
                rect: ['0px', '0px','800px','600px','auto', 'auto'],
                c: [
                {
                    id: 'Text4',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '212px','800px','auto','auto', 'auto'],
                    text: "Therefore, if you happened to have a good",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 30, "rgba(227,232,252,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text4Copy2',
                    display: 'none',
                    type: 'text',
                    rect: ['1px', '334px','799px','113px','auto', 'auto'],
                    text: "you could just sync an animation's <br>timeline to the browser's scrollbar, <br>and boom - parallax!",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 30, "rgba(227,232,252,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text4Copy',
                    display: 'none',
                    type: 'text',
                    rect: ['1px', '265px','799px','56px','auto', 'auto'],
                    text: "HTML animation authoring tool,",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 44, "rgba(255,255,255,1.00)", "500", "none", "normal"]
                }]
            },
            {
                id: 'p4_overlay',
                display: 'none',
                type: 'group',
                rect: ['-1', '34','802','569','auto', 'auto'],
                c: [
                {
                    id: 'p4_blockers',
                    display: 'none',
                    type: 'rect',
                    rect: ['0px', '165px','802px','57px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(169, 156, 247)","solid"]
                },
                {
                    id: 'p4_blockersCopy8',
                    display: 'none',
                    type: 'rect',
                    rect: ['0px', '417px','802px','70px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(169, 156, 247)","solid"]
                },
                {
                    id: 'p4_blockersCopy5',
                    display: 'none',
                    type: 'rect',
                    rect: ['0px', '221px','802px','76px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(169, 156, 247)","solid"]
                },
                {
                    id: 'p4_blockersCopy7',
                    display: 'none',
                    type: 'rect',
                    rect: ['0px', '69px','802px','97px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(169, 156, 247)","solid"]
                },
                {
                    id: 'p4_blockersCopy6',
                    display: 'none',
                    type: 'rect',
                    rect: ['0px', '296px','802px','57px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(169, 156, 247)","solid"],
                    transform: [[],[],[],['1','2.14285']]
                },
                {
                    id: 'p4_blockersCopy9',
                    display: 'none',
                    type: 'rect',
                    rect: ['0px', '486px','802px','83px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(169, 156, 247)","solid"]
                },
                {
                    id: 'p4_blockersCopy10',
                    display: 'none',
                    type: 'rect',
                    rect: ['0px', '0px','802px','70px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgb(169, 156, 247)","solid"]
                }]
            },
            {
                id: 'p4_b',
                display: 'none',
                type: 'group',
                rect: ['165px', '276px','501','56','auto', 'auto'],
                c: [
                {
                    id: 'Text2',
                    display: 'none',
                    type: 'text',
                    rect: ['-164px', '-37px','799px','152px','auto', 'auto'],
                    text: "Fortunately we have such a tool.<br><br>So without further ado, <br>here's how to do it.",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 30, "rgba(255,255,255,1)", "300", "none", "normal"]
                }]
            },
            {
                id: 'step1_head',
                display: 'none',
                type: 'group',
                rect: ['346px', '81','109','109','auto', 'auto'],
                c: [
                {
                    id: 'Ellipse',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['0px', '0px','135px','135px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(82,70,138,1.00)"],
                    stroke: [0,"rgb(169, 156, 247)","solid"]
                },
                {
                    id: 'Text6',
                    display: 'none',
                    type: 'text',
                    rect: ['18px', '40px','auto','auto','auto', 'auto'],
                    text: "Step 1.",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 24, "rgba(255,255,255,1.00)", "500", "none", "normal"]
                },
                {
                    id: 'get_An',
                    display: 'none',
                    type: 'text',
                    rect: ['-208px', '149px','527px','71px','auto', 'auto'],
                    text: "Get hold of Edge Animate. ",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 30, "rgba(0,0,0,1)", "500", "none", "normal"]
                }]
            },
            {
                id: 'p5_a',
                display: 'none',
                type: 'group',
                rect: ['1px', '84px','799','480','auto', 'auto'],
                c: [
                {
                    id: 'edge_shadow',
                    display: 'none',
                    type: 'rect',
                    rect: ['334px', '389px','104px','95px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0.35)"],
                    stroke: [0,"rgb(169, 156, 247)","solid"],
                    boxShadow: ["", 0, 0, 4, 4, "rgba(0,0,0,0.35)"],
                    transform: [[],[],['-80'],['1','0.27']]
                },
                {
                    id: 'Text3',
                    display: 'none',
                    type: 'text',
                    rect: ['615px', '386px','167px','69px','auto', 'auto'],
                    text: "(transformed DIV <br>with a box-shadow)<br>↙",
                    align: "left",
                    font: ['source-sans-pro, sans-serif', 17, "rgba(0,0,0,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'edge-an',
                    display: 'none',
                    type: 'image',
                    tag: 'img',
                    rect: ['355px', '374px','89px','89px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"edge-an.png",'0px','0px'],
                    transform: [[],[],[],['1.46694','1.46694']]
                },
                {
                    id: 'Text5',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '230px','799px','70px','auto', 'auto'],
                    text: "It's a visual tool for CSS animations, <br>available as part of Adobe's Creative Cloud.",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 28, "rgba(34,67,149,1.00)", "300", "none", "normal"]
                }]
            },
            {
                id: 'p5_b',
                display: 'none',
                type: 'group',
                rect: ['26px', '313px','759','258','auto', 'auto'],
                c: [
                {
                    id: 'Text8',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '23px','400px','72px','auto', 'auto'],
                    text: "Already a CC member?<br>Install via the app:",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 28, "rgba(0,0,0,1)", "300", "none", "normal"]
                },
                {
                    id: 'an-install',
                    display: 'none',
                    type: 'image',
                    tag: 'img',
                    rect: ['6px', '97px','387px','180px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"an-install.png",'0px','0px']
                },
                {
                    id: 'p5_try_button',
                    display: 'none',
                    type: 'rect',
                    rect: ['488px', '117px','auto','auto','auto', 'auto']
                },
                {
                    id: 'Text8Copy3',
                    display: 'none',
                    type: 'text',
                    rect: ['393px', '22px','366px','79px','auto', 'auto'],
                    text: "Otherwise, have a<br> 30-day trial:",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 28, "rgba(0,0,0,1)", "300", "none", "normal"]
                }]
            },
            {
                id: 'p6_a',
                display: 'none',
                type: 'group',
                rect: ['142px', '370px','517','200','auto', 'auto'],
                c: [
                {
                    id: 'Text7',
                    display: 'none',
                    type: 'text',
                    rect: ['57px', '84px','403px','274px','auto', 'auto'],
                    clip: ['rect(0px 403px 274px 0px)'],
                    text: "Edge Animate uses a timeline that will look familiar to anyone who's used After Effects, or Flash's motion editor. <br><br>(The main difference is that here, everything you can tween is a CSS style.)",
                    font: ['source-sans-pro, sans-serif', 28, "rgba(0,0,0,1)", "300", "none", ""]
                },
                {
                    id: 'timeline2',
                    display: 'none',
                    type: 'image',
                    tag: 'img',
                    rect: ['0px', '-66px','517px','auto','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"timeline.png",'0px','0px']
                }]
            },
            {
                id: 'p6_b',
                display: 'none',
                type: 'group',
                rect: ['173', '306','456','422','auto', 'auto'],
                c: [
                {
                    id: 'lessons',
                    display: 'none',
                    type: 'image',
                    tag: 'img',
                    rect: ['58px', '0px','338px','132px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"lessons.png",'0px','0px'],
                    boxShadow: ["", 0, 1, 2, 2, "rgba(0,0,0,0.65)"]
                },
                {
                    id: 'Text9',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '163px','456px','180px','auto', 'auto'],
                    clip: ['rect(0px 456px 180px 0px)'],
                    text: "If you're new to timeline animation, I recommend Animate's built-in tutorials. They're really good.<br><br>There is also a ton of help online.",
                    font: ['source-sans-pro, sans-serif', 28, "rgba(0,0,0,1)", "300", "none", ""]
                },
                {
                    id: 'help_button',
                    display: 'none',
                    type: 'rect',
                    rect: ['83px', '362px','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'p6_c',
                display: 'none',
                type: 'group',
                rect: ['100', '324','600','200','auto', 'auto'],
                c: [
                {
                    id: 'Text10Copy',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '0px','600px','34px','auto', 'auto'],
                    opacity: 1,
                    text: "Incidentally, I personally think ",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 28, "rgba(0,0,0,1)", "300", "none", "normal"]
                },
                {
                    id: 'Text10Copy2',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '34px','600px','34px','auto', 'auto'],
                    opacity: 1,
                    text: "parallax feels most natural when",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 28, "rgba(0,0,0,1)", "300", "none", "normal"]
                },
                {
                    id: 'Text10Copy3',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '69px','600px','34px','auto', 'auto'],
                    opacity: 1,
                    text: "the animations flow mostly upwards.",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 28, "rgba(0,0,0,1)", "300", "none", "normal"]
                },
                {
                    id: 'Text10Copy5',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '131px','600px','34px','auto', 'auto'],
                    opacity: 1,
                    text: "But this is a stylistic choice - ",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 28, "rgba(0,0,0,1)", "300", "none", "normal"]
                },
                {
                    id: 'Text10Copy6',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '166px','600px','34px','auto', 'auto'],
                    opacity: 1,
                    text: "technically you can do anything you like.",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 28, "rgba(0,0,0,1)", "300", "none", "normal"]
                }]
            },
            {
                id: 'step2_head',
                display: 'none',
                type: 'group',
                rect: ['346px', '81','109','109','auto', 'auto'],
                c: [
                {
                    id: 'EllipseCopy2',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['0px', '0px','135px','135px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(82,70,138,1.00)"],
                    stroke: [0,"rgb(169, 156, 247)","solid"]
                },
                {
                    id: 'Text6Copy2',
                    display: 'none',
                    type: 'text',
                    rect: ['18px', '40px','auto','auto','auto', 'auto'],
                    text: "Step 2.",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 24, "rgba(255,255,255,1.00)", "500", "none", "normal"]
                },
                {
                    id: 'get_AnCopy',
                    display: 'none',
                    type: 'text',
                    rect: ['-209px', '149px','527px','71px','auto', 'auto'],
                    text: "Make an awesome animation.",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 30, "rgba(0,0,0,1)", "500", "none", "normal"]
                }]
            },
            {
                id: 'p7_a',
                display: 'none',
                type: 'group',
                rect: ['138', '349','663','178','auto', 'auto'],
                c: [
                {
                    id: 'Text11',
                    display: 'none',
                    type: 'text',
                    rect: ['39px', '0px','448px','75px','auto', 'auto'],
                    text: "..but not much. <br>There are only two things to do:",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 29, "rgba(0,0,0,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text11Copy',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '103px','663px','75px','auto', 'auto'],
                    text: "1. Artificially make the page scrollable<br>2. Sync the animation to the scroll position.",
                    align: "left",
                    font: ['source-sans-pro, sans-serif', 29, "rgba(0,0,0,1.00)", "300", "none", "normal"]
                }]
            },
            {
                id: 'p7_b',
                display: 'none',
                type: 'group',
                rect: ['58', '300','711','279','auto', 'auto'],
                c: [
                {
                    id: 'an-ui',
                    display: 'none',
                    type: 'image',
                    tag: 'img',
                    rect: ['0px', '0px','320px','auto','auto', 'auto'],
                    clip: ['rect(36px 318px 215px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"an-ui.png",'0px','0px']
                },
                {
                    id: 'RoundRect',
                    display: 'none',
                    type: 'rect',
                    rect: ['264px', '67px','54px','54px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(255,255,255,0.00)"],
                    stroke: [8,"rgba(255,0,0,0.50)","solid"]
                },
                {
                    id: 'Text12',
                    display: 'none',
                    type: 'text',
                    rect: ['364px', '39px','347px','240px','auto', 'auto'],
                    text: "To add scripts, select the stage, press the actions button, and choose \"creationComplete\".<br>This event fires when the project is initialized.",
                    align: "left",
                    font: ['source-sans-pro, sans-serif', 26, "rgba(0,0,0,1)", "300", "none", "normal"]
                }]
            },
            {
                id: 'step3_head',
                display: 'none',
                type: 'group',
                rect: ['-1px', '-209px','1000','750','auto', 'auto'],
                c: [
                {
                    id: 'bg2',
                    display: 'none',
                    type: 'image',
                    tag: 'img',
                    rect: ['182px', '137px','635px','476px','auto', 'auto'],
                    clip: ['rect(267px 635px 317px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px'],
                    transform: [[],[],[],['1.5748','1.5748']]
                },
                {
                    id: 'get_AnCopy3',
                    display: 'none',
                    type: 'text',
                    rect: ['138px', '439px','527px','71px','auto', 'auto'],
                    text: "// add a little code",
                    align: "center",
                    font: ['source-code-pro, sans-serif', 30, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'EllipseCopy3',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['347px', '290px','135px','135px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(82,70,138,1.00)"],
                    stroke: [0,"rgb(169, 156, 247)","solid"]
                },
                {
                    id: 'Text6Copy3',
                    display: 'none',
                    type: 'text',
                    rect: ['365px', '330px','auto','auto','auto', 'auto'],
                    text: "Step 3.",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 24, "rgba(255,255,255,1.00)", "500", "none", "normal"]
                },
                {
                    id: 'Text14',
                    display: 'none',
                    type: 'text',
                    rect: ['187px', '524px','427px','48px','auto', 'auto'],
                    text: "Here's the code I used:",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 33, "rgba(0,0,0,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'p8_a',
                display: 'none',
                type: 'group',
                rect: ['42px', '277','755','600','auto', 'auto'],
                c: [
                {
                    id: 'CODE',
                    display: 'none',
                    type: 'image',
                    tag: 'img',
                    rect: ['0px', '0px','640px','auto','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"code.png",'0px','0px']
                },
                {
                    id: 'comment-1',
                    display: 'none',
                    type: 'text',
                    rect: ['-19px', '-184px','194px','112px','auto', 'auto'],
                    text: "First we create a div..",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 30, "rgba(0,0,0,1)", "500", "none", "normal"]
                },
                {
                    id: 'comment-2',
                    display: 'none',
                    type: 'text',
                    rect: ['-6px', '-51px','194px','91px','auto', 'auto'],
                    text: "Then we style it with jQuery to be tall and hidden, so the page scrolls",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 30, "rgba(0,0,0,1)", "500", "none", "normal"]
                },
                {
                    id: 'comment-3',
                    display: 'none',
                    type: 'text',
                    rect: ['361px', '69px','382px','135px','auto', 'auto'],
                    text: "The page's height affects how fast it scrolls, so tune this value at the very end.",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 30, "rgba(0,0,0,1)", "500", "none", "normal"]
                },
                {
                    id: 'comment-4',
                    display: 'none',
                    type: 'text',
                    rect: ['442px', '147px','289px','86px','auto', 'auto'],
                    text: "Then attach the tall div to the page.",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 30, "rgba(0,0,0,1)", "500", "none", "normal"]
                },
                {
                    id: 'comment-5',
                    display: 'none',
                    type: 'text',
                    rect: ['533px', '204px','220px','185px','auto', 'auto'],
                    text: "Next, position Edge Animate's stage as \"fixed\", so it doesn't scroll.",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 30, "rgba(0,0,0,1)", "500", "none", "normal"]
                },
                {
                    id: 'comment-6',
                    display: 'none',
                    type: 'text',
                    rect: ['527px', '274px','225px','190px','auto', 'auto'],
                    text: "Last, a function that tracks the window's scroll position..<br>",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 30, "rgba(0,0,0,1)", "500", "none", "normal"]
                },
                {
                    id: 'comment-7',
                    display: 'none',
                    type: 'text',
                    rect: ['416px', '595px','325px','112px','auto', 'auto'],
                    text: "..and when it changes, sets the animation accordingly.",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 30, "rgba(0,0,0,1)", "500", "none", "normal"]
                },
                {
                    id: 'comment-8',
                    display: 'none',
                    type: 'text',
                    rect: ['47px', '694px','611px','96px','auto', 'auto'],
                    text: "We drive things with  requestAnimationFrame to avoid updating more than once per screen refresh.",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 30, "rgba(0,0,0,1)", "500", "none", "normal"]
                },
                {
                    id: 'code-box',
                    display: 'none',
                    type: 'rect',
                    rect: ['-2px', '12px','517px','57px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(255,255,255,0)"],
                    stroke: [8,"rgba(255, 0, 0, 0.498039)","solid"]
                }]
            },
            {
                id: 'p8_b',
                display: 'none',
                type: 'group',
                rect: ['0', '228','800','318','auto', 'auto'],
                c: [
                {
                    id: 'Text16',
                    display: 'none',
                    type: 'text',
                    rect: ['119px', '0px','547px','44px','auto', 'auto'],
                    text: "And here's the code, for your copy/pasting convenience.",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 34, "rgba(0,0,0,1)", "500", "none", "normal"]
                },
                {
                    id: 'code_box',
                    display: 'none',
                    type: 'rect',
                    rect: ['150', '92px','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'p9_a',
                display: 'none',
                type: 'group',
                rect: ['0', '63','800','351','auto', 'auto'],
                c: [
                {
                    id: 'bg3',
                    display: 'none',
                    type: 'image',
                    tag: 'img',
                    rect: ['-2px', '-65px','804px','auto','auto', 'auto'],
                    clip: ['rect(0px 804px 0px 0px)'],
                    opacity: 1,
                    fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
                },
                {
                    id: 'p9_t2',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '406px','800px','39px','auto', 'auto'],
                    text: "The project source is on github, help yourself.",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 27, "rgba(255,255,255,1.00)", "100", "none", "normal"]
                },
                {
                    id: 'p9_t1',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '322px','800px','83px','auto', 'auto'],
                    text: "As you've surely guessed, this guide was made <br>with the same method it describes. ",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 27, "rgba(255,255,255,1.00)", "100", "none", "normal"]
                },
                {
                    id: 'p9_title',
                    display: 'none',
                    type: 'text',
                    rect: ['0px', '206px','800px','60px','auto', 'auto'],
                    text: "That's it!",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 50, "rgba(255,255,255,1.00)", "300", "none", "normal"]
                }]
            },
            {
                id: 'p9_b',
                display: 'none',
                type: 'group',
                rect: ['-2', '-2','804','603','auto', 'auto'],
                c: [
                {
                    id: 'madeby',
                    display: 'none',
                    type: 'text',
                    rect: ['25px', '279px','379px','auto','auto', 'auto'],
                    text: "made by @fenomas",
                    align: "right",
                    font: ['source-sans-pro, sans-serif', 22, "rgba(255,255,255,1)", "100", "none", "normal"]
                },
                {
                    id: 'profile',
                    display: 'none',
                    type: 'image',
                    tag: 'img',
                    rect: ['416px', '263px','60px','60px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"profile.png",'0px','0px']
                },
                {
                    id: 'but_credit',
                    display: 'none',
                    type: 'rect',
                    rect: ['416px', '263px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'sources',
                    display: 'none',
                    type: 'text',
                    rect: ['25px', '349px','379px','auto','auto', 'auto'],
                    text: "sources at github/andyhall",
                    align: "right",
                    font: ['source-sans-pro, sans-serif', 22, "rgba(255,255,255,1)", "100", "none", "normal"]
                },
                {
                    id: 'GitHub-Mark',
                    display: 'none',
                    type: 'image',
                    tag: 'img',
                    rect: ['416px', '333px','60px','auto','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"GitHub-Mark.png",'0px','0px']
                },
                {
                    id: 'but_source',
                    display: 'none',
                    type: 'rect',
                    rect: ['416px', '333px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'edgean',
                    display: 'none',
                    type: 'text',
                    rect: ['25px', '416px','379px','35px','auto', 'auto'],
                    text: "greets: Edge Animate",
                    align: "right",
                    font: ['source-sans-pro, sans-serif', 22, "rgba(255,255,255,1)", "100", "none", "normal"]
                },
                {
                    id: 'edge_an_circle',
                    display: 'none',
                    type: 'image',
                    tag: 'img',
                    rect: ['416px', '403px','60px','60px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"edge_an_circle.png",'0px','0px']
                },
                {
                    id: 'but_edge_an',
                    display: 'none',
                    type: 'rect',
                    rect: ['416px', '403px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'icons1',
                    display: 'none',
                    type: 'text',
                    rect: ['25px', '469px','379px','35px','auto', 'auto'],
                    text: "icons from the Noun Project:",
                    align: "right",
                    font: ['source-sans-pro, sans-serif', 22, "rgba(255,255,255,1)", "100", "none", "normal"]
                },
                {
                    id: 'icons2',
                    display: 'none',
                    type: 'text',
                    rect: ['421px', '472px','334px','69px','auto', 'auto'],
                    text: "Video Player by Antar<br>Stopwatch by James Thoburn<br>Mouse by Roman J. Sokolov",
                    align: "left",
                    font: ['source-sans-pro, sans-serif', 18, "rgba(255,255,255,1)", "100", "none", "normal"]
                },
                {
                    id: 'tx',
                    display: 'none',
                    type: 'text',
                    rect: ['2px', '921px','800px','20px','auto', 'auto'],
                    text: "keep circulating the tapes!",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 17, "rgba(226,232,248,1.00)", "100", "none", "normal"]
                }]
            },
            {
                id: 'HEADER',
                display: 'none',
                type: 'rect',
                rect: ['100px', '279px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'but_edge_an',
                symbolName: 'round_HL_button',
                autoPlay: {

                }
            },
            {
                id: 'but_credit',
                symbolName: 'round_HL_button',
                autoPlay: {

                }
            },
            {
                id: 'but_source',
                symbolName: 'round_HL_button',
                autoPlay: {

                }
            },
            {
                id: 'code_box',
                symbolName: 'code_box',
                autoPlay: {

                }
            },
            {
                id: 'down_arrow',
                symbolName: 'down_arrow',
                autoPlay: {

                }
            },
            {
                id: 'bg_block',
                symbolName: 'bg_block',
                autoPlay: {

                }
            },
            {
                id: 'HEADER',
                symbolName: 'header',
                autoPlay: {

                }
            },
            {
                id: 'help_button',
                symbolName: 'help_button',
                autoPlay: {

                }
            },
            {
                id: 'p5_try_button',
                symbolName: 'try_button',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_p7_b}": [
                ["style", "display", 'none'],
                ["style", "top", '300px']
            ],
            "${_Text10Copy}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '600px'],
                ["style", "top", '181px'],
                ["style", "text-align", 'center'],
                ["style", "height", '34px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '1']
            ],
            "${_underline}": [
                ["style", "top", '75px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(34,67,149,1.00)'],
                ["style", "height", '1px'],
                ["color", "border-color", 'rgba(169,156,247,1.00)'],
                ["style", "left", '319px'],
                ["style", "width", '163px']
            ],
            "${_comment-4}": [
                ["style", "font-weight", '500'],
                ["style", "left", '442px'],
                ["style", "font-size", '30px'],
                ["style", "top", '147px'],
                ["style", "opacity", '0'],
                ["style", "height", '86px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "display", 'none'],
                ["style", "width", '289px']
            ],
            "${_p9_t2}": [
                ["transform", "scaleX", '1'],
                ["style", "font-weight", '100'],
                ["style", "left", '0px'],
                ["style", "width", '800px'],
                ["style", "top", '460px'],
                ["style", "font-size", '27px'],
                ["transform", "scaleY", '0.5'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '39px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_code}": [
                ["style", "height", 'auto']
            ],
            "${_bg}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["style", "height", '609px'],
                ["style", "left", '0px'],
                ["style", "width", '812px']
            ],
            "${_comment-2}": [
                ["style", "opacity", '0'],
                ["style", "left", '243px'],
                ["style", "font-size", '30px'],
                ["style", "top", '-122px'],
                ["style", "font-weight", '500'],
                ["style", "display", 'none'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "width", '500px'],
                ["style", "height", '91px']
            ],
            "${_Text11Copy}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "font-size", '29px'],
                ["style", "top", '103px'],
                ["style", "text-align", 'left'],
                ["style", "height", '75px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "width", '663px'],
                ["style", "display", 'none']
            ],
            "${_p4_blockersCopy5}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '76px'],
                ["style", "display", 'none'],
                ["style", "top", '221px'],
                ["style", "left", '0px'],
                ["style", "width", '802px']
            ],
            "${_icon_1519}": [
                ["style", "top", '-4px'],
                ["style", "display", 'none'],
                ["style", "height", '132px'],
                ["style", "left", '-23px'],
                ["style", "width", '132px']
            ],
            "${_EllipseCopy2}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(72,62,123,1)'],
                ["style", "height", '109px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '109px']
            ],
            "${_p4_blockersCopy8}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '70px'],
                ["style", "display", 'none'],
                ["style", "top", '417px'],
                ["style", "left", '0px'],
                ["style", "width", '802px']
            ],
            "${_Text8Copy2}": [
                ["style", "top", '393px'],
                ["style", "height", '64px'],
                ["style", "font-weight", '300'],
                ["style", "left", '31px'],
                ["style", "width", '211px']
            ],
            "${_Text12}": [
                ["style", "top", '302px'],
                ["style", "font-size", '26px'],
                ["style", "height", '240px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "left", '364px'],
                ["style", "width", '347px']
            ],
            "${_icon_3515}": [
                ["style", "top", '-9px'],
                ["style", "display", 'none'],
                ["style", "height", '120px'],
                ["style", "opacity", '1'],
                ["style", "left", '408px'],
                ["style", "width", '120px']
            ],
            "${_p4_blockersCopy6}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '2.14285'],
                ["style", "height", '57px'],
                ["style", "display", 'none'],
                ["style", "top", '296px'],
                ["style", "left", '0px'],
                ["style", "width", '802px']
            ],
            "${_an-install}": [
                ["style", "top", '97px'],
                ["style", "height", '180px'],
                ["style", "display", 'none'],
                ["style", "left", '6px'],
                ["style", "width", '387px']
            ],
            "${_p9_b}": [
                ["style", "display", 'none']
            ],
            "${_p5_b}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '1'],
                ["style", "top", '580px']
            ],
            "${_easy_parallax}": [
                ["subproperty", "textShadow.blur", '2px'],
                ["subproperty", "textShadow.offsetH", '1px'],
                ["color", "color", 'rgba(237,241,250,1.00)'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "left", '56px'],
                ["style", "font-size", '42px'],
                ["style", "top", '337px'],
                ["style", "text-align", 'center'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "display", 'block'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "width", '700px'],
                ["style", "font-weight", '100']
            ],
            "${_p5_try_button}": [
                ["style", "display", 'none'],
                ["style", "left", '488px'],
                ["style", "top", '117px']
            ],
            "${_edge_an_circle}": [
                ["style", "top", '745px'],
                ["style", "height", '60px'],
                ["style", "display", 'none'],
                ["style", "left", '416px'],
                ["style", "width", '60px']
            ],
            "${_first_the}": [
                ["color", "color", 'rgba(34,67,149,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '415px'],
                ["style", "top", '0px'],
                ["style", "font-weight", '100'],
                ["transform", "scaleY", '0.99'],
                ["style", "display", 'none'],
                ["style", "height", '51px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-size", '52px'],
                ["style", "text-align", 'right']
            ],
            "${_Ellipse}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(72,62,123,1.00)'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "height", '109px'],
                ["style", "left", '0px'],
                ["style", "width", '109px']
            ],
            "${_Text16}": [
                ["style", "top", '377px'],
                ["style", "font-size", '34px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '500'],
                ["style", "left", '119px'],
                ["style", "width", '547px']
            ],
            "${_p4_blockersCopy9}": [
                ["style", "top", '486px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '83px'],
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["style", "width", '802px']
            ],
            "${_bg3}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "opacity", '1'],
                ["style", "left", '-2px'],
                ["style", "width", '804px'],
                ["style", "top", '-65px'],
                ["transform", "scaleY", '1'],
                ["style", "height", 'auto'],
                ["style", "clip", [604,804,604,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none']
            ],
            "${_p2}": [
                ["style", "display", 'block']
            ],
            "${_Text10Copy5}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '600px'],
                ["style", "top", '312px'],
                ["style", "text-align", 'center'],
                ["style", "height", '34px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '1']
            ],
            "${_edgean}": [
                ["style", "font-weight", '100'],
                ["style", "left", '25px'],
                ["style", "font-size", '22px'],
                ["style", "top", '758px'],
                ["style", "text-align", 'right'],
                ["style", "height", '35px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "width", '379px'],
                ["style", "display", 'none']
            ],
            "${_get_An}": [
                ["style", "top", '149px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "height", '40px'],
                ["style", "font-weight", '500'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '-208px'],
                ["style", "width", '527px']
            ],
            "${_an-ui}": [
                ["style", "top", '0px'],
                ["style", "height", 'auto'],
                ["style", "display", 'none'],
                ["style", "left", '-398px'],
                ["style", "clip", [36,318,215,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_HEADER}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '-41px']
            ],
            "${_Text3}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '491px'],
                ["style", "width", '167px'],
                ["style", "top", '360px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '17px'],
                ["style", "height", '69px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "opacity", '0'],
                ["style", "display", 'none']
            ],
            "${_help_button}": [
                ["style", "top", '362px'],
                ["style", "left", '83px'],
                ["style", "display", 'none']
            ],
            "${_Text10Copy4}": [
                ["style", "height", '38px'],
                ["style", "top", '375px'],
                ["style", "left", '415px'],
                ["style", "width", '465px']
            ],
            "${_but_credit}": [
                ["style", "top", '605px'],
                ["style", "display", 'none'],
                ["style", "left", '416px'],
                ["style", "cursor", 'pointer']
            ],
            "${_CODE}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", 'auto'],
                ["style", "left", '0px'],
                ["style", "width", '640px']
            ],
            "${_Text18Copy4}": [
                ["style", "top", '331px'],
                ["style", "left", '201px'],
                ["style", "width", '141px']
            ],
            "${_p4_b}": [
                ["style", "top", '643px'],
                ["style", "display", 'none']
            ],
            "${_GitHub-Mark}": [
                ["style", "top", '675px'],
                ["style", "height", 'auto'],
                ["style", "display", 'none'],
                ["style", "left", '416px'],
                ["style", "width", '60px']
            ],
            "${_Text6Copy}": [
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '364px'],
                ["style", "top", '40px']
            ],
            "${_profile}": [
                ["style", "top", '605px'],
                ["style", "height", '60px'],
                ["style", "display", 'none'],
                ["style", "left", '416px'],
                ["style", "width", '60px']
            ],
            "${_bg2}": [
                ["transform", "scaleX", '1.5748'],
                ["style", "opacity", '0'],
                ["style", "left", '182px'],
                ["style", "width", '635px'],
                ["style", "top", '358px'],
                ["transform", "scaleY", '1.5748'],
                ["style", "height", '476px'],
                ["style", "clip", [267,635,317,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none']
            ],
            "${_outline}": [
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0)'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.blur", '0px']
            ],
            "${_lessons}": [
                ["subproperty", "boxShadow.blur", '2px'],
                ["style", "left", '58px'],
                ["style", "width", '338px'],
                ["style", "top", '0px'],
                ["style", "height", '132px'],
                ["subproperty", "boxShadow.spread", '2px'],
                ["style", "display", 'none'],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
            ],
            "${_p9_a}": [
                ["style", "display", 'none'],
                ["style", "left", '2px']
            ],
            "${_line}": [
                ["color", "background-color", 'rgba(255,255,255,0.70)'],
                ["style", "top", '35px'],
                ["style", "height", '1px'],
                ["style", "display", 'none'],
                ["style", "left", '2px'],
                ["style", "width", '800px']
            ],
            "${_icon_18306}": [
                ["style", "top", '418px'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '132px'],
                ["style", "opacity", '0'],
                ["style", "left", '534px'],
                ["style", "width", '132px']
            ],
            "${_p7_a}": [
                ["style", "top", '524px'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none']
            ],
            "${_p8_b}": [
                ["style", "display", 'none']
            ],
            "${_p3_c}": [
                ["style", "top", '484px'],
                ["transform", "scaleY", '0.7'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '124px']
            ],
            "${_theory}": [
                ["color", "color", 'rgba(34,67,149,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '426px'],
                ["style", "font-size", '52px'],
                ["style", "top", '0px'],
                ["style", "width", '375px'],
                ["transform", "scaleY", '0.99'],
                ["style", "display", 'none'],
                ["style", "height", '51px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "text-align", 'left'],
                ["style", "opacity", '1']
            ],
            "${_p6_c}": [
                ["style", "display", 'none']
            ],
            "${_Text2}": [
                ["style", "top", '-37px'],
                ["style", "font-size", '30px'],
                ["style", "height", '152px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '300'],
                ["style", "left", '-164px'],
                ["style", "width", '799px']
            ],
            "${_Text}": [
                ["style", "top", '16px'],
                ["style", "height", '69px'],
                ["style", "text-align", 'right'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '-71px'],
                ["style", "width", '434px']
            ],
            "${_get_AnCopy}": [
                ["style", "top", '149px'],
                ["style", "opacity", '0'],
                ["style", "height", '40px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '500'],
                ["style", "left", '-209px'],
                ["style", "width", '527px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '800px']
            ],
            "${_p5_a}": [
                ["style", "top", '217px'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.54'],
                ["style", "display", 'none']
            ],
            "${_code_box}": [
                ["style", "top", '469px'],
                ["style", "left", '150px'],
                ["style", "display", 'none']
            ],
            "${_Text6Copy2}": [
                ["style", "top", '40px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-weight", '500'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '18px'],
                ["style", "display", 'none']
            ],
            "${_p4_blockers}": [
                ["style", "top", '165px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '57px'],
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["style", "width", '802px']
            ],
            "${_p9_t1}": [
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '0px'],
                ["style", "font-size", '27px'],
                ["style", "top", '376px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '0.5'],
                ["style", "width", '800px'],
                ["style", "height", '83px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_Text8}": [
                ["style", "top", '23px'],
                ["style", "width", '400px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "height", '72px'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "font-size", '28px']
            ],
            "${_Text6Copy3}": [
                ["style", "top", '330px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '365px'],
                ["style", "font-weight", '500']
            ],
            "${_step1_head}": [
                ["style", "top", '384px'],
                ["style", "opacity", '0'],
                ["style", "left", '346px'],
                ["style", "display", 'none']
            ],
            "${_comment-6}": [
                ["style", "font-weight", '500'],
                ["style", "left", '527px'],
                ["style", "font-size", '30px'],
                ["style", "top", '274px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "width", '225px'],
                ["style", "height", '190px']
            ],
            "${_down_arrow}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "filter.drop-shadow.blur", '2px'],
                ["transform", "scaleY", '0.66079'],
                ["style", "left", '45.32%'],
                ["style", "display", 'block'],
                ["style", "top", '86.04%'],
                ["subproperty", "filter.drop-shadow.offsetV", '1px'],
                ["subproperty", "filter.drop-shadow.offsetH", '1px']
            ],
            "${_Text4}": [
                ["color", "color", 'rgba(227,232,252,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "font-size", '30px'],
                ["style", "top", '212px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'none'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "width", '800px']
            ],
            "${_timeline2}": [
                ["style", "top", '-66px'],
                ["style", "height", 'auto'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_step2_head}": [
                ["style", "left", '346px'],
                ["style", "display", 'none']
            ],
            "${_Text10Copy6}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '600px'],
                ["style", "top", '347px'],
                ["style", "text-align", 'center'],
                ["style", "height", '34px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '1']
            ],
            "${_comment-3}": [
                ["style", "opacity", '0'],
                ["style", "left", '361px'],
                ["style", "width", '382px'],
                ["style", "top", '69px'],
                ["style", "font-weight", '500'],
                ["style", "height", '135px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-size", '30px'],
                ["style", "display", 'none']
            ],
            "${_Text10Copy2}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '600px'],
                ["style", "top", '215px'],
                ["style", "text-align", 'center'],
                ["style", "height", '34px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '1']
            ],
            "${_comment-7}": [
                ["style", "top", '595px'],
                ["style", "font-size", '30px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-weight", '500'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '416px'],
                ["style", "width", '325px']
            ],
            "${_Text14}": [
                ["style", "top", '818px'],
                ["style", "display", 'none'],
                ["style", "height", '48px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "left", '187px'],
                ["style", "font-size", '33px']
            ],
            "${_p4_blockersCopy10}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '70px'],
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["style", "width", '802px']
            ],
            "${_p8_a}": [
                ["style", "top", '611px'],
                ["style", "left", '42px'],
                ["style", "display", 'none']
            ],
            "${_logo_circle}": [
                ["style", "top", '51px'],
                ["style", "display", 'block'],
                ["style", "height", '133px'],
                ["style", "left", '334px'],
                ["style", "width", '133px']
            ],
            "${_p3_b}": [
                ["style", "top", '451px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '118px'],
                ["style", "display", 'none']
            ],
            "${_sources}": [
                ["style", "top", '691px'],
                ["style", "font-size", '22px'],
                ["style", "text-align", 'right'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '25px'],
                ["style", "width", '379px']
            ],
            "${_comment-8}": [
                ["style", "opacity", '0'],
                ["style", "left", '47px'],
                ["style", "width", '611px'],
                ["style", "top", '694px'],
                ["style", "height", '96px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-size", '30px'],
                ["style", "font-weight", '500']
            ],
            "${_get_AnCopy3}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '138px'],
                ["style", "width", '527px'],
                ["style", "top", '660px'],
                ["style", "height", '40px'],
                ["style", "font-family", 'source-code-pro, sans-serif'],
                ["style", "opacity", '0'],
                ["style", "display", 'none']
            ],
            "${_Text8Copy}": [
                ["style", "font-size", '']
            ],
            "${_but_edge_an}": [
                ["style", "top", '745px'],
                ["style", "display", 'none'],
                ["style", "left", '416px'],
                ["style", "cursor", 'pointer']
            ],
            "${_edge_shadow}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.35)'],
                ["color", "background-color", 'rgba(0,0,0,0.35)'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "left", '334px'],
                ["style", "width", '130px'],
                ["style", "top", '389px'],
                ["subproperty", "boxShadow.spread", '4px'],
                ["transform", "scaleY", '0.1799'],
                ["transform", "skewX", '77.09deg'],
                ["style", "height", '95px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.blur", '4px']
            ],
            "${_icons2}": [
                ["style", "font-weight", '100'],
                ["style", "left", '421px'],
                ["style", "font-size", '18px'],
                ["style", "top", '814px'],
                ["style", "text-align", 'left'],
                ["style", "height", '69px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "width", '334px'],
                ["style", "display", 'none']
            ],
            "${_Text9}": [
                ["style", "line-height", '33px'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "font-size", '28px'],
                ["style", "top", '163px'],
                ["style", "height", '180px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "clip", [0,456,180,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none']
            ],
            "${_p4_blockersCopy7}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '97px'],
                ["style", "display", 'none'],
                ["style", "top", '69px'],
                ["style", "left", '0px'],
                ["style", "width", '802px']
            ],
            "${_get_AnCopy2}": [
                ["style", "top", '149px'],
                ["style", "font-family", 'lato, sans-serif'],
                ["style", "height", '40px'],
                ["style", "font-weight", '500'],
                ["style", "left", '-209px'],
                ["style", "width", '527px']
            ],
            "${_Text4Copy2}": [
                ["color", "color", 'rgba(227,232,252,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '1px'],
                ["style", "font-size", '30px'],
                ["style", "top", '334px'],
                ["style", "text-align", 'center'],
                ["style", "height", '113px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "width", '799px'],
                ["style", "display", 'none']
            ],
            "${_Text8Copy3}": [
                ["style", "top", '22px'],
                ["style", "font-size", '28px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "height", '79px'],
                ["style", "font-weight", '300'],
                ["style", "left", '393px'],
                ["style", "width", '366px']
            ],
            "${_p3_a}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "top", '123px']
            ],
            "${_theory_title}": [
                ["style", "top", '178px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "display", 'none']
            ],
            "${_RoundRect}": [
                ["style", "top", '67px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '-134px'],
                ["style", "display", 'none'],
                ["style", "height", '54px'],
                ["color", "border-color", 'rgba(255,0,0,0.50)'],
                ["style", "border-width", '8px'],
                ["style", "width", '54px']
            ],
            "${_Text7}": [
                ["style", "line-height", '33px'],
                ["style", "font-weight", '300'],
                ["style", "left", '57px'],
                ["style", "font-size", '28px'],
                ["style", "top", '84px'],
                ["transform", "scaleY", '1'],
                ["style", "width", '403px'],
                ["style", "height", '274px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "clip", [0,403,274,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none']
            ],
            "${_Text11}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '39px'],
                ["style", "font-size", '29px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '75px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "width", '448px'],
                ["style", "display", 'none']
            ],
            "${_but_source}": [
                ["style", "top", '675px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["style", "left", '416px'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleX", '1']
            ],
            "${_comment-5}": [
                ["style", "opacity", '0'],
                ["style", "left", '533px'],
                ["style", "width", '220px'],
                ["style", "top", '204px'],
                ["style", "font-weight", '500'],
                ["style", "display", 'none'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-size", '30px'],
                ["style", "height", '185px']
            ],
            "${_Text5}": [
                ["transform", "scaleX", '1'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "font-size", '28px'],
                ["style", "top", '230px'],
                ["style", "width", '799px'],
                ["style", "height", '70px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'none']
            ],
            "${_p4_head}": [
                ["style", "display", 'none'],
                ["style", "top", '-2px']
            ],
            "${_fy7Ju}": [
                ["style", "width", 'auto']
            ],
            "${_comment-1}": [
                ["style", "opacity", '0'],
                ["style", "left", '-31px'],
                ["style", "width", '375px'],
                ["style", "top", '-76px'],
                ["style", "font-weight", '500'],
                ["style", "height", '39px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-size", '30px'],
                ["style", "display", 'none']
            ],
            "${_p4_overlay}": [
                ["style", "display", 'none']
            ],
            "${_step3_head}": [
                ["style", "display", 'none'],
                ["style", "left", '-1px'],
                ["style", "top", '-209px']
            ],
            "${_madeby}": [
                ["style", "top", '621px'],
                ["style", "font-size", '22px'],
                ["style", "text-align", 'right'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '25px'],
                ["style", "width", '379px']
            ],
            "${_edge-an}": [
                ["style", "top", '374px'],
                ["transform", "scaleY", '1.46694'],
                ["style", "display", 'none'],
                ["style", "height", '89px'],
                ["transform", "scaleX", '1.46694'],
                ["style", "left", '355px'],
                ["style", "width", '89px']
            ],
            "${_p6_a}": [
                ["style", "top", '671px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '142px']
            ],
            "${_icons1}": [
                ["style", "font-weight", '100'],
                ["style", "left", '25px'],
                ["style", "width", '379px'],
                ["style", "top", '811px'],
                ["style", "text-align", 'right'],
                ["style", "height", '35px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-size", '22px'],
                ["style", "display", 'none']
            ],
            "${_copy1}": [
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '57px'],
                ["style", "font-size", '28px'],
                ["style", "top", '413px'],
                ["style", "text-align", 'right'],
                ["transform", "scaleY", '1'],
                ["style", "height", '107px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["transform", "scaleX", '1'],
                ["style", "width", '436px']
            ],
            "${_Text6}": [
                ["style", "top", '40px'],
                ["style", "font-weight", '500'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "left", '18px'],
                ["style", "display", 'none']
            ],
            "${_p1}": [
                ["style", "display", 'block']
            ],
            "${_copy2}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '300'],
                ["style", "left", '131px'],
                ["style", "width", '501px'],
                ["style", "top", '6px'],
                ["style", "text-align", 'left'],
                ["style", "display", 'none'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "height", '112px'],
                ["style", "font-size", '28px']
            ],
            "${_p6_b}": [
                ["style", "top", '608px'],
                ["style", "opacity", '1'],
                ["style", "display", 'none']
            ],
            "${_tx}": [
                ["color", "color", 'rgba(226,232,248,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "left", '2px'],
                ["style", "font-size", '17px'],
                ["style", "top", '921px'],
                ["style", "text-align", 'center'],
                ["style", "height", '20px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "width", '800px'],
                ["style", "display", 'none']
            ],
            "${_edge_animate_headerbg22}": [
                ["style", "top", '0px'],
                ["style", "height", 'auto'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '804px']
            ],
            "${_EllipseCopy3}": [
                ["style", "top", '290px'],
                ["style", "height", '109px'],
                ["color", "background-color", 'rgba(72,62,123,1)'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '347px'],
                ["style", "width", '109px']
            ],
            "${_p4_a}": [
                ["style", "top", '0px'],
                ["style", "height", '600px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '800px']
            ],
            "${_p9_title}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "font-size", '50px'],
                ["style", "top", '292px'],
                ["transform", "scaleY", '0.41'],
                ["style", "width", '800px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "opacity", '0'],
                ["style", "height", '60px']
            ],
            "${_Text10Copy3}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '600px'],
                ["style", "top", '250px'],
                ["style", "text-align", 'center'],
                ["style", "height", '34px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '1']
            ],
            "${_code-box}": [
                ["style", "top", '-13px'],
                ["style", "display", 'none'],
                ["style", "height", '56px'],
                ["style", "opacity", '0'],
                ["style", "left", '-19px'],
                ["style", "width", '569px']
            ],
            "${_copy}": [
                ["subproperty", "textShadow.blur", '2px'],
                ["subproperty", "textShadow.offsetH", '1px'],
                ["transform", "scaleX", '0.7'],
                ["style", "font-weight", '300'],
                ["style", "font-size", '23px'],
                ["style", "top", '485px'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "line-height", '26px']
            ],
            "${_Text4Copy}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '1px'],
                ["style", "width", '799px'],
                ["style", "top", '265px'],
                ["style", "text-align", 'center'],
                ["style", "height", '56px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-size", '44px'],
                ["style", "display", 'none']
            ],
            "${_bg_block}": [
                ["style", "top", '603px'],
                ["style", "display", 'none']
            ],
            "${_Text18Copy3}": [
                ["style", "top", '331px'],
                ["style", "left", '459px'],
                ["style", "width", '154px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 60000,
            autoPlay: false,
            timeline: [
                { id: "eid401", tween: [ "style", "${_easy_parallax}", "top", '-66px', { fromValue: '337px'}], position: 0, duration: 1328, easing: "easeInQuad" },
                { id: "eid1150", tween: [ "style", "${_p9_a}", "display", 'block', { fromValue: 'none'}], position: 54250, duration: 0, easing: "easeOutQuad" },
                { id: "eid750", tween: [ "style", "${_Text9}", "clip", [114,456,180,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,456,180,0]}], position: 26750, duration: 750, easing: "easeInOutQuad" },
                { id: "eid550", tween: [ "style", "${_copy2}", "top", '-112px', { fromValue: '6px'}], position: 7332, duration: 1000, easing: "easeOutSine" },
                { id: "eid715", tween: [ "style", "${_EllipseCopy2}", "opacity", '1', { fromValue: '0'}], position: 20750, duration: 1000, easing: "easeOutQuad" },
                { id: "eid407", tween: [ "style", "${_copy}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid609", tween: [ "style", "${_p4_blockersCopy7}", "height", '1px', { fromValue: '97px'}], position: 11000, duration: 500, easing: "easeOutQuad" },
                { id: "eid739", tween: [ "style", "${_Text7}", "clip", [66,403,274,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,403,274,0]}], position: 23361, duration: 639 },
                { id: "eid748", tween: [ "style", "${_help_button}", "top", '208px', { fromValue: '362px'}], position: 26750, duration: 750, easing: "easeInOutQuad" },
                { id: "eid1143", tween: [ "style", "${_bg3}", "clip", [0,804,604,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [604,804,604,0]}], position: 54250, duration: 1000, easing: "easeOutQuad" },
                { id: "eid827", tween: [ "transform", "${_Text10Copy5}", "scaleY", '4.57', { fromValue: '1'}], position: 31115, duration: 750, easing: "easeInQuad" },
                { id: "eid476", tween: [ "transform", "${_theory_title}", "scaleX", '1', { fromValue: '0.8'}], position: 3500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid644", tween: [ "style", "${_p4_b}", "top", '276px', { fromValue: '643px'}], position: 13000, duration: 750, easing: "easeInQuad" },
                { id: "eid650", tween: [ "style", "${_p4_b}", "top", '-86px', { fromValue: '276px'}], position: 14250, duration: 750, easing: "easeInQuad" },
                { id: "eid709", tween: [ "transform", "${_Ellipse}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 20750, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid700", tween: [ "style", "${_an-install}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0, easing: "easeOutQuad" },
                { id: "eid727", tween: [ "style", "${_an-install}", "display", 'none', { fromValue: 'block'}], position: 20864, duration: 0, easing: "easeInOutQuad" },
                { id: "eid917", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0, easing: "easeOutQuad" },
                { id: "eid922", tween: [ "style", "${_RoundRect}", "display", 'none', { fromValue: 'block'}], position: 38107, duration: 0, easing: "easeInQuad" },
                { id: "eid460", tween: [ "style", "${_logo_circle}", "display", 'none', { fromValue: 'block'}], position: 3866, duration: 0, easing: "easeOutQuad" },
                { id: "eid661", tween: [ "style", "${_step1_head}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0, easing: "easeOutQuad" },
                { id: "eid729", tween: [ "style", "${_step1_head}", "display", 'none', { fromValue: 'block'}], position: 21856, duration: 0, easing: "easeOutQuad" },
                { id: "eid806", tween: [ "style", "${_Text10Copy6}", "opacity", '1', { fromValue: '0'}], position: 29500, duration: 750, easing: "easeOutQuad" },
                { id: "eid835", tween: [ "style", "${_Text10Copy6}", "opacity", '0', { fromValue: '1'}], position: 31500, duration: 250, easing: "easeInQuad" },
                { id: "eid994", tween: [ "style", "${_comment-8}", "opacity", '1', { fromValue: '0'}], position: 49750, duration: 500 },
                { id: "eid995", tween: [ "style", "${_comment-8}", "opacity", '0', { fromValue: '1'}], position: 51250, duration: 500 },
                { id: "eid514", tween: [ "style", "${_first_the}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeOutQuad" },
                { id: "eid589", tween: [ "style", "${_first_the}", "display", 'none', { fromValue: 'block'}], position: 10376, duration: 0, easing: "easeOutQuad" },
                { id: "eid631", tween: [ "style", "${_p4_blockersCopy6}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid639", tween: [ "style", "${_p4_blockersCopy6}", "display", 'none', { fromValue: 'block'}], position: 11750, duration: 0, easing: "easeOutQuad" },
                { id: "eid611", tween: [ "style", "${_p4_blockersCopy5}", "height", '1px', { fromValue: '76px'}], position: 10750, duration: 500, easing: "easeOutQuad" },
                { id: "eid539", tween: [ "transform", "${_p3_c}", "scaleY", '1', { fromValue: '0.7'}], position: 7750, duration: 1000, easing: "easeOutQuad" },
                { id: "eid701", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0, easing: "easeOutQuad" },
                { id: "eid728", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 20864, duration: 0, easing: "easeInOutQuad" },
                { id: "eid721", tween: [ "style", "${_get_AnCopy}", "display", 'block', { fromValue: 'none'}], position: 20661, duration: 0, easing: "easeInOutQuad" },
                { id: "eid862", tween: [ "style", "${_get_AnCopy}", "display", 'none', { fromValue: 'block'}], position: 32250, duration: 0, easing: "easeOutQuad" },
                { id: "eid829", tween: [ "transform", "${_Text10Copy3}", "scaleY", '4.57', { fromValue: '1'}], position: 31250, duration: 750, easing: "easeInQuad" },
                { id: "eid1018", tween: [ "style", "${_code-box}", "height", '120px', { fromValue: '56px'}], position: 40750, duration: 500 },
                { id: "eid1023", tween: [ "style", "${_code-box}", "height", '32px', { fromValue: '120px'}], position: 42250, duration: 500 },
                { id: "eid1035", tween: [ "style", "${_code-box}", "height", '56px', { fromValue: '32px'}], position: 45250, duration: 500 },
                { id: "eid1041", tween: [ "style", "${_code-box}", "height", '95px', { fromValue: '56px'}], position: 46750, duration: 500 },
                { id: "eid1286", tween: [ "style", "${_code-box}", "height", '95px', { fromValue: '95px'}], position: 48250, duration: 0 },
                { id: "eid1287", tween: [ "style", "${_code-box}", "height", '96px', { fromValue: '95px'}], position: 48750, duration: 0 },
                { id: "eid1279", tween: [ "style", "${_code-box}", "height", '76px', { fromValue: '96px'}], position: 49750, duration: 500 },
                { id: "eid898", tween: [ "transform", "${_p7_a}", "scaleY", '0.49', { fromValue: '1'}], position: 35500, duration: 750, easing: "easeOutQuad" },
                { id: "eid761", tween: [ "style", "${_edge-an}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid766", tween: [ "style", "${_edge-an}", "display", 'block', { fromValue: 'none'}], position: 15250, duration: 0 },
                { id: "eid692", tween: [ "style", "${_edge-an}", "display", 'none', { fromValue: 'block'}], position: 18850, duration: 0, easing: "easeInQuad" },
                { id: "eid873", tween: [ "style", "${_EllipseCopy3}", "display", 'block', { fromValue: 'none'}], position: 32250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid940", tween: [ "style", "${_EllipseCopy3}", "display", 'none', { fromValue: 'block'}], position: 39119, duration: 0, easing: "easeInQuad" },
                { id: "eid874", tween: [ "style", "${_Text6Copy3}", "display", 'block', { fromValue: 'none'}], position: 32250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid939", tween: [ "style", "${_Text6Copy3}", "display", 'none', { fromValue: 'block'}], position: 39119, duration: 0, easing: "easeInQuad" },
                { id: "eid1021", tween: [ "style", "${_code-box}", "width", '305px', { fromValue: '569px'}], position: 40750, duration: 500 },
                { id: "eid1026", tween: [ "style", "${_code-box}", "width", '231px', { fromValue: '305px'}], position: 42250, duration: 500 },
                { id: "eid1031", tween: [ "style", "${_code-box}", "width", '339px', { fromValue: '231px'}], position: 43750, duration: 500 },
                { id: "eid1036", tween: [ "style", "${_code-box}", "width", '527px', { fromValue: '339px'}], position: 45250, duration: 500 },
                { id: "eid1040", tween: [ "style", "${_code-box}", "width", '448px', { fromValue: '527px'}], position: 46750, duration: 500 },
                { id: "eid1046", tween: [ "style", "${_code-box}", "width", '597px', { fromValue: '448px'}], position: 48250, duration: 500 },
                { id: "eid1051", tween: [ "style", "${_code-box}", "width", '377px', { fromValue: '597px'}], position: 49750, duration: 500 },
                { id: "eid842", tween: [ "style", "${_Text10Copy3}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0, easing: "easeOutQuad" },
                { id: "eid849", tween: [ "style", "${_Text10Copy3}", "display", 'none', { fromValue: 'block'}], position: 32346, duration: 0, easing: "easeOutQuad" },
                { id: "eid1056", tween: [ "style", "${_comment-4}", "display", 'block', { fromValue: 'none'}], position: 43750, duration: 0 },
                { id: "eid1067", tween: [ "style", "${_comment-4}", "display", 'none', { fromValue: 'block'}], position: 45978, duration: 0 },
                { id: "eid480", tween: [ "style", "${_theory_title}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid515", tween: [ "style", "${_theory}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeOutQuad" },
                { id: "eid588", tween: [ "style", "${_theory}", "display", 'none', { fromValue: 'block'}], position: 10376, duration: 0, easing: "easeOutQuad" },
                { id: "eid1222", tween: [ "style", "${_icons2}", "display", 'block', { fromValue: 'none'}], position: 58136, duration: 0, easing: "easeInOutQuad" },
                { id: "eid956", tween: [ "style", "${_comment-2}", "opacity", '1', { fromValue: '0'}], position: 40750, duration: 500 },
                { id: "eid955", tween: [ "style", "${_comment-2}", "opacity", '0', { fromValue: '1'}], position: 42250, duration: 500 },
                { id: "eid519", tween: [ "style", "${_copy1}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeOutQuad" },
                { id: "eid546", tween: [ "style", "${_copy1}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0, easing: "easeInQuad" },
                { id: "eid544", tween: [ "style", "${_icon_3515}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0, easing: "easeInQuad" },
                { id: "eid562", tween: [ "style", "${_icon_3515}", "display", 'none', { fromValue: 'block'}], position: 10376, duration: 0, easing: "easeOutQuad" },
                { id: "eid883", tween: [ "style", "${_bg2}", "opacity", '1', { fromValue: '0'}], position: 33000, duration: 750, easing: "easeOutQuad" },
                { id: "eid556", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 750, easing: "easeOutQuad" },
                { id: "eid1242", tween: [ "style", "${_p8_a}", "top", '482px', { fromValue: '611px'}], position: 38500, duration: 750, easing: "easeOutQuad" },
                { id: "eid1243", tween: [ "style", "${_p8_a}", "top", '-418px', { fromValue: '482px'}], position: 39250, duration: 12500 },
                { id: "eid1244", tween: [ "style", "${_p8_a}", "top", '-675px', { fromValue: '-418px'}], position: 51750, duration: 750, easing: "easeInQuad" },
                { id: "eid823", tween: [ "transform", "${_Text10Copy}", "scaleY", '4.57', { fromValue: '1'}], position: 31500, duration: 750, easing: "easeInQuad" },
                { id: "eid1006", tween: [ "style", "${_comment-1}", "left", '-31px', { fromValue: '-31px'}], position: 40124, duration: 0, easing: "easeOutQuad" },
                { id: "eid472", tween: [ "style", "${_copy1}", "top", '189px', { fromValue: '413px'}], position: 3500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid503", tween: [ "style", "${_copy1}", "top", '57px', { fromValue: '189px'}], position: 5250, duration: 1000, easing: "easeOutSine" },
                { id: "eid720", tween: [ "style", "${_step2_head}", "display", 'block', { fromValue: 'none'}], position: 20661, duration: 0, easing: "easeInOutQuad" },
                { id: "eid924", tween: [ "style", "${_step2_head}", "display", 'none', { fromValue: 'block'}], position: 33355, duration: 0, easing: "easeOutQuad" },
                { id: "eid820", tween: [ "transform", "${_Text10Copy6}", "scaleX", '2.11', { fromValue: '1'}], position: 31005, duration: 750, easing: "easeInQuad" },
                { id: "eid658", tween: [ "style", "${_step1_head}", "top", '81px', { fromValue: '384px'}], position: 14750, duration: 750, easing: "easeOutQuad" },
                { id: "eid478", tween: [ "transform", "${_theory_title}", "scaleY", '1', { fromValue: '0.8'}], position: 3500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid663", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0, easing: "easeOutQuad" },
                { id: "eid731", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 21856, duration: 0, easing: "easeOutQuad" },
                { id: "eid541", tween: [ "style", "${_p3_c}", "opacity", '1', { fromValue: '0'}], position: 7750, duration: 1000, easing: "easeOutQuad" },
                { id: "eid578", tween: [ "style", "${_p3_a}", "top", '12px', { fromValue: '123px'}], position: 9500, duration: 750, easing: "easeOutQuad" },
                { id: "eid1090", tween: [ "style", "${_Text16}", "left", '118px', { fromValue: '119px'}], position: 54000, duration: 750, easing: "easeInQuad" },
                { id: "eid953", tween: [ "style", "${_comment-1}", "opacity", '1', { fromValue: '0'}], position: 39250, duration: 500 },
                { id: "eid954", tween: [ "style", "${_comment-1}", "opacity", '0', { fromValue: '1'}], position: 40750, duration: 500 },
                { id: "eid866", tween: [ "transform", "${_Text6Copy3}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 32250, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid686", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 16500, duration: 500, easing: "easeInQuad" },
                { id: "eid579", tween: [ "style", "${_p3_a}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 750, easing: "easeOutQuad" },
                { id: "eid474", tween: [ "style", "${_theory_title}", "top", '0px', { fromValue: '178px'}], position: 3500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid1216", tween: [ "style", "${_edgean}", "top", '416px', { fromValue: '758px'}], position: 57750, duration: 750, easing: "easeOutQuad" },
                { id: "eid1053", tween: [ "style", "${_comment-1}", "display", 'block', { fromValue: 'none'}], position: 39119, duration: 0 },
                { id: "eid1064", tween: [ "style", "${_comment-1}", "display", 'none', { fromValue: 'block'}], position: 41500, duration: 0 },
                { id: "eid1010", tween: [ "style", "${_comment-2}", "width", '500px', { fromValue: '500px'}], position: 41709, duration: 0, easing: "easeOutQuad" },
                { id: "eid752", tween: [ "style", "${_p6_b}", "opacity", '0', { fromValue: '1'}], position: 28250, duration: 750, easing: "easeInQuad" },
                { id: "eid1225", tween: [ "style", "${_edge_an_circle}", "display", 'block', { fromValue: 'none'}], position: 57895, duration: 0, easing: "easeInOutQuad" },
                { id: "eid763", tween: [ "style", "${_edge_shadow}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid768", tween: [ "style", "${_edge_shadow}", "display", 'block', { fromValue: 'none'}], position: 15250, duration: 0 },
                { id: "eid694", tween: [ "style", "${_edge_shadow}", "display", 'none', { fromValue: 'block'}], position: 18850, duration: 0, easing: "easeInQuad" },
                { id: "eid555", tween: [ "style", "${_icon_3515}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 750, easing: "easeOutQuad" },
                { id: "eid988", tween: [ "style", "${_comment-6}", "opacity", '1', { fromValue: '0'}], position: 46750, duration: 500 },
                { id: "eid989", tween: [ "style", "${_comment-6}", "opacity", '0', { fromValue: '1'}], position: 48250, duration: 500 },
                { id: "eid1055", tween: [ "style", "${_comment-3}", "display", 'block', { fromValue: 'none'}], position: 42250, duration: 0 },
                { id: "eid1066", tween: [ "style", "${_comment-3}", "display", 'none', { fromValue: 'block'}], position: 44500, duration: 0 },
                { id: "eid602", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid649", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 13859, duration: 0, easing: "easeInQuad" },
                { id: "eid1099", tween: [ "style", "${_p9_t2}", "top", '406px', { fromValue: '460px'}], position: 55250, duration: 500, easing: "easeOutQuad" },
                { id: "eid1124", tween: [ "style", "${_p9_t2}", "top", '248px', { fromValue: '406px'}], position: 56750, duration: 500, easing: "easeInQuad" },
                { id: "eid455", tween: [ "style", "${_logo_circle}", "top", '-531px', { fromValue: '51px'}], position: 2750, duration: 1000, easing: "easeInQuad" },
                { id: "eid1231", tween: [ "style", "${_profile}", "display", 'block', { fromValue: 'none'}], position: 57386, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1088", tween: [ "style", "${_code_box}", "left", '149px', { fromValue: '150px'}], position: 54000, duration: 500, easing: "easeInQuad" },
                { id: "eid678", tween: [ "transform", "${_edge_shadow}", "scaleY", '0.53684', { fromValue: '0.1799'}], position: 15250, duration: 960, easing: "easeOutSine" },
                { id: "eid679", tween: [ "transform", "${_edge_shadow}", "scaleY", '0.25', { fromValue: '0.53684'}], position: 16210, duration: 1540, easing: "easeInSine" },
                { id: "eid840", tween: [ "style", "${_Text10Copy}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0, easing: "easeOutQuad" },
                { id: "eid851", tween: [ "style", "${_Text10Copy}", "display", 'none', { fromValue: 'block'}], position: 32346, duration: 0, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "style", "${_Ellipse}", "top", '0px', { fromValue: '0px'}], position: 7535, duration: 0 },
                { id: "eid798", tween: [ "style", "${_Text10Copy}", "top", '0px', { fromValue: '181px'}], position: 29008, duration: 750, easing: "easeOutQuad" },
                { id: "eid816", tween: [ "style", "${_Text10Copy}", "top", '238px', { fromValue: '0px'}], position: 31500, duration: 750, easing: "easeInQuad" },
                { id: "eid930", tween: [ "style", "${_Text14}", "top", '524px', { fromValue: '818px'}], position: 37500, duration: 607, easing: "easeOutQuad" },
                { id: "eid808", tween: [ "style", "${_Text10Copy}", "opacity", '1', { fromValue: '0'}], position: 29008, duration: 750, easing: "easeOutQuad" },
                { id: "eid836", tween: [ "style", "${_Text10Copy}", "opacity", '0', { fromValue: '1'}], position: 32000, duration: 250, easing: "easeInQuad" },
                { id: "eid513", tween: [ "style", "${_HEADER}", "display", 'block', { fromValue: 'none'}], position: 4402, duration: 0, easing: "easeOutQuad" },
                { id: "eid1145", tween: [ "style", "${_HEADER}", "display", 'none', { fromValue: 'block'}], position: 55851, duration: 0, easing: "easeInQuad" },
                { id: "eid775", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 25250, duration: 0, easing: "easeInQuad" },
                { id: "eid779", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 29124, duration: 0, easing: "easeInQuad" },
                { id: "eid825", tween: [ "transform", "${_Text10Copy2}", "scaleY", '4.57', { fromValue: '1'}], position: 31384, duration: 750, easing: "easeInQuad" },
                { id: "eid1121", tween: [ "transform", "${_p9_title}", "scaleY", '1', { fromValue: '0.41'}], position: 54750, duration: 750, easing: "easeOutQuad" },
                { id: "eid1128", tween: [ "transform", "${_p9_title}", "scaleY", '1.8', { fromValue: '1'}], position: 56500, duration: 750, easing: "easeInQuad" },
                { id: "eid802", tween: [ "style", "${_Text10Copy5}", "top", '131px', { fromValue: '312px'}], position: 29389, duration: 750, easing: "easeOutQuad" },
                { id: "eid818", tween: [ "style", "${_Text10Copy5}", "top", '238px', { fromValue: '131px'}], position: 31115, duration: 750, easing: "easeInQuad" },
                { id: "eid969", tween: [ "style", "${_CODE}", "display", 'block', { fromValue: 'none'}], position: 38364, duration: 0 },
                { id: "eid1077", tween: [ "style", "${_CODE}", "display", 'none', { fromValue: 'block'}], position: 52572, duration: 0 },
                { id: "eid149", tween: [ "style", "${_get_An}", "top", '149px', { fromValue: '149px'}], position: 7535, duration: 0 },
                { id: "eid707", tween: [ "style", "${_get_An}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 750, easing: "easeInQuad" },
                { id: "eid664", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0, easing: "easeOutQuad" },
                { id: "eid732", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'block'}], position: 21856, duration: 0, easing: "easeOutQuad" },
                { id: "eid1149", tween: [ "style", "${_bg3}", "display", 'block', { fromValue: 'none'}], position: 54250, duration: 0, easing: "easeOutQuad" },
                { id: "eid908", tween: [ "style", "${_an-ui}", "left", '0px', { fromValue: '-398px'}], position: 36000, duration: 750, easing: "easeOutQuad" },
                { id: "eid542", tween: [ "style", "${_p3_c}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0, easing: "easeInQuad" },
                { id: "eid560", tween: [ "style", "${_p3_c}", "display", 'none', { fromValue: 'block'}], position: 10376, duration: 0, easing: "easeOutQuad" },
                { id: "eid1154", tween: [ "style", "${_p9_a}", "left", '2px', { fromValue: '2px'}], position: 57334, duration: 0, easing: "easeOutQuad" },
                { id: "eid1212", tween: [ "style", "${_tx}", "top", '577px', { fromValue: '921px'}], position: 58250, duration: 750, easing: "easeOutQuad" },
                { id: "eid890", tween: [ "style", "${_p7_a}", "display", 'block', { fromValue: 'none'}], position: 33750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid900", tween: [ "style", "${_p7_a}", "display", 'none', { fromValue: 'block'}], position: 36342, duration: 0, easing: "easeOutQuad" },
                { id: "eid607", tween: [ "style", "${_p4_blockersCopy6}", "height", '1px', { fromValue: '57px'}], position: 11250, duration: 500, easing: "easeOutQuad" },
                { id: "eid919", tween: [ "style", "${_p7_b}", "top", '-240px', { fromValue: '300px'}], position: 37250, duration: 750, easing: "easeInQuad" },
                { id: "eid957", tween: [ "style", "${_comment-3}", "opacity", '1', { fromValue: '0'}], position: 42250, duration: 500 },
                { id: "eid958", tween: [ "style", "${_comment-3}", "opacity", '0', { fromValue: '1'}], position: 43750, duration: 500 },
                { id: "eid526", tween: [ "style", "${_p3_b}", "opacity", '1', { fromValue: '0'}], position: 5627, duration: 1000, easing: "easeOutQuad" },
                { id: "eid535", tween: [ "style", "${_p3_b}", "opacity", '0', { fromValue: '1'}], position: 7332, duration: 1000, easing: "easeInQuad" },
                { id: "eid1223", tween: [ "style", "${_icons1}", "display", 'block', { fromValue: 'none'}], position: 58000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid430", tween: [ "transform", "${_copy}", "scaleX", '1', { fromValue: '0.7'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid959", tween: [ "style", "${_comment-4}", "opacity", '1', { fromValue: '0'}], position: 43750, duration: 500 },
                { id: "eid960", tween: [ "style", "${_comment-4}", "opacity", '0', { fromValue: '1'}], position: 45250, duration: 500 },
                { id: "eid723", tween: [ "style", "${_EllipseCopy2}", "display", 'block', { fromValue: 'none'}], position: 20661, duration: 0, easing: "easeInOutQuad" },
                { id: "eid865", tween: [ "style", "${_EllipseCopy2}", "display", 'none', { fromValue: 'block'}], position: 33355, duration: 0, easing: "easeInOutQuad" },
                { id: "eid660", tween: [ "style", "${_step1_head}", "opacity", '1', { fromValue: '0'}], position: 14750, duration: 750, easing: "easeOutQuad" },
                { id: "eid1058", tween: [ "style", "${_comment-6}", "display", 'block', { fromValue: 'none'}], position: 46750, duration: 0 },
                { id: "eid1069", tween: [ "style", "${_comment-6}", "display", 'none', { fromValue: 'block'}], position: 49000, duration: 0 },
                { id: "eid814", tween: [ "style", "${_Text10Copy3}", "opacity", '1', { fromValue: '0'}], position: 29250, duration: 750, easing: "easeOutQuad" },
                { id: "eid839", tween: [ "style", "${_Text10Copy3}", "opacity", '0', { fromValue: '1'}], position: 31750, duration: 250, easing: "easeInQuad" },
                { id: "eid986", tween: [ "style", "${_comment-5}", "opacity", '1', { fromValue: '0'}], position: 45250, duration: 500 },
                { id: "eid987", tween: [ "style", "${_comment-5}", "opacity", '0', { fromValue: '1'}], position: 46750, duration: 500 },
                { id: "eid632", tween: [ "style", "${_p4_blockersCopy7}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid638", tween: [ "style", "${_p4_blockersCopy7}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0, easing: "easeOutQuad" },
                { id: "eid737", tween: [ "style", "${_Text7}", "top", '-104px', { fromValue: '84px'}], position: 22500, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid448", tween: [ "style", "${_bg_block}", "top", '582px', { fromValue: '603px'}], position: 1328, duration: 672, easing: "easeOutQuad" },
                { id: "eid457", tween: [ "style", "${_bg_block}", "top", '0px', { fromValue: '582px'}], position: 2750, duration: 1000, easing: "easeInQuad" },
                { id: "eid856", tween: [ "style", "${_timeline2}", "display", 'block', { fromValue: 'none'}], position: 21750, duration: 0, easing: "easeOutQuad" },
                { id: "eid859", tween: [ "style", "${_timeline2}", "display", 'none', { fromValue: 'block'}], position: 25586, duration: 0, easing: "easeOutQuad" },
                { id: "eid1285", tween: [ "style", "${_bg_block}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1284", tween: [ "style", "${_bg_block}", "display", 'block', { fromValue: 'none'}], position: 1328, duration: 0, easing: "easeInQuad" },
                { id: "eid462", tween: [ "style", "${_bg_block}", "display", 'none', { fromValue: 'block'}], position: 3866, duration: 0, easing: "easeOutQuad" },
                { id: "eid698", tween: [ "style", "${_Text8Copy3}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0, easing: "easeOutQuad" },
                { id: "eid725", tween: [ "style", "${_Text8Copy3}", "display", 'none', { fromValue: 'block'}], position: 20864, duration: 0, easing: "easeInOutQuad" },
                { id: "eid706", tween: [ "style", "${_p5_b}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 750, easing: "easeInQuad" },
                { id: "eid843", tween: [ "style", "${_Text10Copy5}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0, easing: "easeOutQuad" },
                { id: "eid848", tween: [ "style", "${_Text10Copy5}", "display", 'none', { fromValue: 'block'}], position: 32346, duration: 0, easing: "easeOutQuad" },
                { id: "eid528", tween: [ "transform", "${_p3_b}", "scaleY", '1', { fromValue: '0.8'}], position: 5627, duration: 1000, easing: "easeOutQuad" },
                { id: "eid531", tween: [ "style", "${_p3_b}", "display", 'block', { fromValue: 'none'}], position: 5627, duration: 0, easing: "easeOutQuad" },
                { id: "eid557", tween: [ "style", "${_p3_b}", "display", 'none', { fromValue: 'block'}], position: 8547, duration: 0, easing: "easeOutSine" },
                { id: "eid551", tween: [ "style", "${_icon_3515}", "left", '677px', { fromValue: '408px'}], position: 9500, duration: 750, easing: "easeInQuad" },
                { id: "eid627", tween: [ "style", "${_p4_blockers}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid635", tween: [ "style", "${_p4_blockers}", "display", 'none', { fromValue: 'block'}], position: 10750, duration: 0, easing: "easeOutQuad" },
                { id: "eid605", tween: [ "style", "${_p4_blockersCopy9}", "height", '1px', { fromValue: '83px'}], position: 11500, duration: 500, easing: "easeOutQuad" },
                { id: "eid466", tween: [ "style", "${_bg}", "display", 'none', { fromValue: 'block'}], position: 3866, duration: 0, easing: "easeOutQuad" },
                { id: "eid879", tween: [ "style", "${_bg2}", "top", '137px', { fromValue: '358px'}], position: 33000, duration: 750, easing: "easeOutQuad" },
                { id: "eid743", tween: [ "style", "${_p6_a}", "opacity", '0', { fromValue: '1'}], position: 24750, duration: 750, easing: "easeInQuad" },
                { id: "eid601", tween: [ "style", "${_Text4Copy2}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid648", tween: [ "style", "${_Text4Copy2}", "display", 'none', { fromValue: 'block'}], position: 13859, duration: 0, easing: "easeInQuad" },
                { id: "eid1146", tween: [ "style", "${_p9_title}", "display", 'block', { fromValue: 'none'}], position: 54750, duration: 0, easing: "easeOutQuad" },
                { id: "eid1151", tween: [ "style", "${_p9_title}", "display", 'none', { fromValue: 'block'}], position: 57334, duration: 0, easing: "easeOutQuad" },
                { id: "eid543", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0, easing: "easeInQuad" },
                { id: "eid561", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 10376, duration: 0, easing: "easeOutQuad" },
                { id: "eid935", tween: [ "style", "${_step3_head}", "top", '-573px', { fromValue: '-209px'}], position: 38364, duration: 636, easing: "easeInQuad" },
                { id: "eid1060", tween: [ "style", "${_comment-8}", "display", 'block', { fromValue: 'none'}], position: 49750, duration: 0 },
                { id: "eid1071", tween: [ "style", "${_comment-8}", "display", 'none', { fromValue: 'block'}], position: 51841, duration: 0 },
                { id: "eid1202", tween: [ "style", "${_but_source}", "top", '333px', { fromValue: '675px'}], position: 57619, duration: 750, easing: "easeOutQuad" },
                { id: "eid1086", tween: [ "style", "${_Text16}", "top", '-21px', { fromValue: '377px'}], position: 52250, duration: 750, easing: "easeOutQuad" },
                { id: "eid1089", tween: [ "style", "${_Text16}", "top", '-581px', { fromValue: '-21px'}], position: 54000, duration: 750, easing: "easeInQuad" },
                { id: "eid668", tween: [ "transform", "${_p5_a}", "scaleY", '1', { fromValue: '0.54'}], position: 15250, duration: 750, easing: "easeOutQuad" },
                { id: "eid702", tween: [ "transform", "${_p5_a}", "scaleY", '1', { fromValue: '1'}], position: 16000, duration: 0, easing: "easeOutQuad" },
                { id: "eid703", tween: [ "transform", "${_p5_a}", "scaleY", '0.46573', { fromValue: '1'}], position: 18000, duration: 750, easing: "easeOutQuad" },
                { id: "eid1002", tween: [ "style", "${_comment-1}", "width", '375px', { fromValue: '375px'}], position: 40124, duration: 0, easing: "easeOutQuad" },
                { id: "eid458", tween: [ "style", "${_down_arrow}", "top", '-9.52%', { fromValue: '86.04%'}], position: 2750, duration: 1000, easing: "easeInQuad" },
                { id: "eid871", tween: [ "style", "${_bg2}", "display", 'block', { fromValue: 'none'}], position: 32250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid942", tween: [ "style", "${_bg2}", "display", 'none', { fromValue: 'block'}], position: 39119, duration: 0, easing: "easeInQuad" },
                { id: "eid1283", tween: [ "style", "${_copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1282", tween: [ "style", "${_copy}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
                { id: "eid461", tween: [ "style", "${_copy}", "display", 'none', { fromValue: 'block'}], position: 3866, duration: 0, easing: "easeOutQuad" },
                { id: "eid891", tween: [ "style", "${_Text11Copy}", "display", 'block', { fromValue: 'none'}], position: 33750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid901", tween: [ "style", "${_Text11Copy}", "display", 'none', { fromValue: 'block'}], position: 36342, duration: 0, easing: "easeOutQuad" },
                { id: "eid870", tween: [ "style", "${_Text6Copy3}", "opacity", '1', { fromValue: '0'}], position: 32250, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid1148", tween: [ "style", "${_p9_t2}", "display", 'block', { fromValue: 'none'}], position: 54750, duration: 0, easing: "easeOutQuad" },
                { id: "eid1152", tween: [ "style", "${_p9_t2}", "display", 'none', { fromValue: 'block'}], position: 57334, duration: 0, easing: "easeOutQuad" },
                { id: "eid599", tween: [ "style", "${_p4_a}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid646", tween: [ "style", "${_p4_a}", "display", 'none', { fromValue: 'block'}], position: 13859, duration: 0, easing: "easeInQuad" },
                { id: "eid828", tween: [ "transform", "${_Text10Copy3}", "scaleX", '2.11', { fromValue: '1'}], position: 31250, duration: 750, easing: "easeInQuad" },
                { id: "eid470", tween: [ "style", "${_icon_18306}", "top", '194px', { fromValue: '418px'}], position: 3500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid500", tween: [ "style", "${_icon_18306}", "top", '38px', { fromValue: '194px'}], position: 5250, duration: 1000, easing: "easeOutSine" },
                { id: "eid165", tween: [ "style", "${_get_An}", "height", '40px', { fromValue: '40px'}], position: 1000, duration: 0 },
                { id: "eid1062", tween: [ "style", "${_code-box}", "opacity", '1', { fromValue: '0'}], position: 39250, duration: 500 },
                { id: "eid1073", tween: [ "style", "${_code-box}", "opacity", '0', { fromValue: '1'}], position: 51250, duration: 500 },
                { id: "eid1206", tween: [ "style", "${_icons2}", "top", '472px', { fromValue: '814px'}], position: 58136, duration: 750, easing: "easeOutQuad" },
                { id: "eid773", tween: [ "style", "${_p6_b}", "display", 'block', { fromValue: 'none'}], position: 25250, duration: 0, easing: "easeInQuad" },
                { id: "eid777", tween: [ "style", "${_p6_b}", "display", 'none', { fromValue: 'block'}], position: 29124, duration: 0, easing: "easeInQuad" },
                { id: "eid672", tween: [ "transform", "${_edge_shadow}", "skewX", '-82deg', { fromValue: '77.09deg'}], position: 15250, duration: 2500, easing: "easeOutQuad" },
                { id: "eid606", tween: [ "style", "${_p4_blockers}", "height", '1px', { fromValue: '57px'}], position: 10250, duration: 500, easing: "easeOutQuad" },
                { id: "eid1218", tween: [ "style", "${_but_edge_an}", "top", '403px', { fromValue: '745px'}], position: 57895, duration: 750, easing: "easeOutQuad" },
                { id: "eid742", tween: [ "transform", "${_p6_a}", "scaleY", '0.8', { fromValue: '1'}], position: 24750, duration: 750, easing: "easeInQuad" },
                { id: "eid547", tween: [ "style", "${_icon_1519}", "left", '-262px', { fromValue: '-23px'}], position: 7332, duration: 1000, easing: "easeInQuad" },
                { id: "eid916", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0, easing: "easeOutQuad" },
                { id: "eid921", tween: [ "style", "${_Text12}", "display", 'none', { fromValue: 'block'}], position: 38107, duration: 0, easing: "easeInQuad" },
                { id: "eid552", tween: [ "style", "${_icon_3515}", "top", '-136px', { fromValue: '-9px'}], position: 9500, duration: 750, easing: "easeOutSine" },
                { id: "eid722", tween: [ "style", "${_Text6Copy2}", "display", 'block', { fromValue: 'none'}], position: 20661, duration: 0, easing: "easeInOutQuad" },
                { id: "eid864", tween: [ "style", "${_Text6Copy2}", "display", 'none', { fromValue: 'block'}], position: 33355, duration: 0, easing: "easeInOutQuad" },
                { id: "eid590", tween: [ "style", "${_edge_animate_headerbg22}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid656", tween: [ "style", "${_edge_animate_headerbg22}", "display", 'none', { fromValue: 'block'}], position: 15095, duration: 0, easing: "easeInQuad" },
                { id: "eid800", tween: [ "style", "${_Text10Copy2}", "top", '34px', { fromValue: '215px'}], position: 29124, duration: 750, easing: "easeOutQuad" },
                { id: "eid817", tween: [ "style", "${_Text10Copy2}", "top", '238px', { fromValue: '34px'}], position: 31384, duration: 750, easing: "easeInQuad" },
                { id: "eid553", tween: [ "style", "${_Text}", "left", '-396px', { fromValue: '-71px'}], position: 9500, duration: 750, easing: "easeInQuad" },
                { id: "eid464", tween: [ "style", "${_down_arrow}", "display", 'none', { fromValue: 'block'}], position: 3866, duration: 0, easing: "easeOutQuad" },
                { id: "eid511", tween: [ "transform", "${_copy1}", "scaleY", '0.8', { fromValue: '1'}], position: 5627, duration: 623, easing: "easeOutSine" },
                { id: "eid533", tween: [ "style", "${_icon_1519}", "display", 'block', { fromValue: 'none'}], position: 5627, duration: 0, easing: "easeOutQuad" },
                { id: "eid559", tween: [ "style", "${_icon_1519}", "display", 'none', { fromValue: 'block'}], position: 8547, duration: 0, easing: "easeOutSine" },
                { id: "eid1200", tween: [ "style", "${_icons1}", "top", '469px', { fromValue: '811px'}], position: 58000, duration: 750, easing: "easeOutQuad" },
                { id: "eid844", tween: [ "style", "${_Text10Copy6}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0, easing: "easeOutQuad" },
                { id: "eid847", tween: [ "style", "${_Text10Copy6}", "display", 'none', { fromValue: 'block'}], position: 32346, duration: 0, easing: "easeOutQuad" },
                { id: "eid608", tween: [ "style", "${_p4_blockersCopy8}", "height", '1px', { fromValue: '70px'}], position: 10500, duration: 500, easing: "easeOutQuad" },
                { id: "eid554", tween: [ "style", "${_Text}", "top", '-101px', { fromValue: '16px'}], position: 9500, duration: 750, easing: "easeOutSine" },
                { id: "eid887", tween: [ "style", "${_p7_a}", "top", '349px', { fromValue: '524px'}], position: 33750, duration: 750, easing: "easeInOutQuad" },
                { id: "eid893", tween: [ "style", "${_p7_a}", "top", '254px', { fromValue: '349px'}], position: 35500, duration: 750, easing: "easeOutQuad" },
                { id: "eid518", tween: [ "style", "${_icon_18306}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeOutQuad" },
                { id: "eid545", tween: [ "style", "${_icon_18306}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0, easing: "easeInQuad" },
                { id: "eid509", tween: [ "transform", "${_copy1}", "scaleX", '0.8', { fromValue: '1'}], position: 5627, duration: 623, easing: "easeOutSine" },
                { id: "eid705", tween: [ "transform", "${_p5_b}", "scaleY", '0.69767', { fromValue: '1'}], position: 20000, duration: 750, easing: "easeInQuad" },
                { id: "eid1093", tween: [ "style", "${_code_box}", "display", 'block', { fromValue: 'none'}], position: 52250, duration: 0, easing: "easeInQuad" },
                { id: "eid1096", tween: [ "style", "${_code_box}", "display", 'none', { fromValue: 'block'}], position: 54750, duration: 0, easing: "easeInQuad" },
                { id: "eid824", tween: [ "transform", "${_Text10Copy2}", "scaleX", '2.11', { fromValue: '1'}], position: 31384, duration: 750, easing: "easeInQuad" },
                { id: "eid1228", tween: [ "style", "${_GitHub-Mark}", "display", 'block', { fromValue: 'none'}], position: 57619, duration: 0, easing: "easeInOutQuad" },
                { id: "eid517", tween: [ "style", "${_theory_title}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeOutQuad" },
                { id: "eid586", tween: [ "style", "${_theory_title}", "display", 'none', { fromValue: 'block'}], position: 10376, duration: 0, easing: "easeOutQuad" },
                { id: "eid1113", tween: [ "transform", "${_p9_t1}", "scaleY", '1', { fromValue: '0.5'}], position: 55000, duration: 750, easing: "easeOutQuad" },
                { id: "eid1129", tween: [ "transform", "${_p9_t1}", "scaleY", '1.8', { fromValue: '1'}], position: 56632, duration: 618, easing: "easeInQuad" },
                { id: "eid651", tween: [ "style", "${_p4_head}", "top", '-581px', { fromValue: '-2px'}], position: 14250, duration: 750, easing: "easeInQuad" },
                { id: "eid821", tween: [ "transform", "${_Text10Copy6}", "scaleY", '4.57', { fromValue: '1'}], position: 31005, duration: 750, easing: "easeInQuad" },
                { id: "eid512", tween: [ "style", "${_HEADER}", "top", '0px', { fromValue: '-41px'}], position: 4402, duration: 1098, easing: "easeOutQuad" },
                { id: "eid1144", tween: [ "style", "${_HEADER}", "top", '-47px', { fromValue: '0px'}], position: 54500, duration: 1250, easing: "easeInQuad" },
                { id: "eid537", tween: [ "style", "${_p3_c}", "top", '314px', { fromValue: '484px'}], position: 7750, duration: 1000, easing: "easeOutQuad" },
                { id: "eid1229", tween: [ "style", "${_sources}", "display", 'block', { fromValue: 'none'}], position: 57500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1111", tween: [ "transform", "${_p9_t2}", "scaleY", '1', { fromValue: '0.5'}], position: 55250, duration: 500, easing: "easeOutQuad" },
                { id: "eid1127", tween: [ "transform", "${_p9_t2}", "scaleY", '1.8', { fromValue: '1'}], position: 56750, duration: 500, easing: "easeInQuad" },
                { id: "eid769", tween: [ "style", "${_p4_b}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeInQuad" },
                { id: "eid771", tween: [ "style", "${_p4_b}", "display", 'none', { fromValue: 'block'}], position: 15095, duration: 0, easing: "easeInQuad" },
                { id: "eid1084", tween: [ "style", "${_code_box}", "top", '92px', { fromValue: '469px'}], position: 52500, duration: 500, easing: "easeOutQuad" },
                { id: "eid1087", tween: [ "style", "${_code_box}", "top", '-468px', { fromValue: '92px'}], position: 54000, duration: 500, easing: "easeInQuad" },
                { id: "eid872", tween: [ "style", "${_get_AnCopy3}", "display", 'block', { fromValue: 'none'}], position: 32250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid941", tween: [ "style", "${_get_AnCopy3}", "display", 'none', { fromValue: 'block'}], position: 39119, duration: 0, easing: "easeInQuad" },
                { id: "eid855", tween: [ "style", "${_p6_a}", "display", 'block', { fromValue: 'none'}], position: 21750, duration: 0, easing: "easeOutQuad" },
                { id: "eid858", tween: [ "style", "${_p6_a}", "display", 'none', { fromValue: 'block'}], position: 25586, duration: 0, easing: "easeOutQuad" },
                { id: "eid662", tween: [ "style", "${_get_An}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0, easing: "easeOutQuad" },
                { id: "eid708", tween: [ "style", "${_get_An}", "display", 'none', { fromValue: 'block'}], position: 20872, duration: 0, easing: "easeInQuad" },
                { id: "eid730", tween: [ "style", "${_get_An}", "display", 'none', { fromValue: 'none'}], position: 21856, duration: 0, easing: "easeOutQuad" },
                { id: "eid1210", tween: [ "style", "${_but_credit}", "top", '263px', { fromValue: '605px'}], position: 57386, duration: 750, easing: "easeOutQuad" },
                { id: "eid857", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 21750, duration: 0, easing: "easeOutQuad" },
                { id: "eid860", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 25586, duration: 0, easing: "easeOutQuad" },
                { id: "eid1208", tween: [ "style", "${_madeby}", "top", '279px', { fromValue: '621px'}], position: 57250, duration: 750, easing: "easeOutQuad" },
                { id: "eid548", tween: [ "style", "${_icon_1519}", "top", '-126px', { fromValue: '-4px'}], position: 7332, duration: 1000, easing: "easeOutSine" },
                { id: "eid804", tween: [ "style", "${_Text10Copy3}", "top", '69px', { fromValue: '250px'}], position: 29250, duration: 750, easing: "easeOutQuad" },
                { id: "eid819", tween: [ "style", "${_Text10Copy3}", "top", '238px', { fromValue: '69px'}], position: 31250, duration: 750, easing: "easeInQuad" },
                { id: "eid628", tween: [ "style", "${_p4_overlay}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid642", tween: [ "style", "${_p4_overlay}", "display", 'none', { fromValue: 'block'}], position: 12250, duration: 0, easing: "easeOutQuad" },
                { id: "eid482", tween: [ "style", "${_copy1}", "left", '53px', { fromValue: '57px'}], position: 3500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid502", tween: [ "style", "${_copy1}", "left", '-318px', { fromValue: '53px'}], position: 5250, duration: 1000, easing: "easeInQuad" },
                { id: "eid796", tween: [ "style", "${_Text10Copy6}", "top", '166px', { fromValue: '347px'}], position: 29500, duration: 750, easing: "easeOutQuad" },
                { id: "eid815", tween: [ "style", "${_Text10Copy6}", "top", '238px', { fromValue: '166px'}], position: 31005, duration: 750, easing: "easeInQuad" },
                { id: "eid841", tween: [ "style", "${_Text10Copy2}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0, easing: "easeOutQuad" },
                { id: "eid850", tween: [ "style", "${_Text10Copy2}", "display", 'none', { fromValue: 'block'}], position: 32346, duration: 0, easing: "easeOutQuad" },
                { id: "eid488", tween: [ "style", "${_copy1}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid507", tween: [ "style", "${_copy1}", "opacity", '0', { fromValue: '1'}], position: 5627, duration: 623, easing: "easeOutSine" },
                { id: "eid770", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeInQuad" },
                { id: "eid772", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 15095, duration: 0, easing: "easeInQuad" },
                { id: "eid699", tween: [ "style", "${_p5_try_button}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0, easing: "easeOutQuad" },
                { id: "eid726", tween: [ "style", "${_p5_try_button}", "display", 'none', { fromValue: 'block'}], position: 20864, duration: 0, easing: "easeInOutQuad" },
                { id: "eid990", tween: [ "style", "${_comment-7}", "opacity", '1', { fromValue: '0'}], position: 48250, duration: 500 },
                { id: "eid991", tween: [ "style", "${_comment-7}", "opacity", '0', { fromValue: '1'}], position: 49750, duration: 500 },
                { id: "eid713", tween: [ "transform", "${_Text6Copy2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 20750, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid863", tween: [ "transform", "${_Text6Copy2}", "rotateZ", '720deg', { fromValue: '360deg'}], position: 32250, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid524", tween: [ "style", "${_p3_b}", "top", '305px', { fromValue: '451px'}], position: 5627, duration: 1000, easing: "easeOutQuad" },
                { id: "eid826", tween: [ "transform", "${_Text10Copy5}", "scaleX", '2.11', { fromValue: '1'}], position: 31115, duration: 750, easing: "easeInQuad" },
                { id: "eid1147", tween: [ "style", "${_p9_t1}", "display", 'block', { fromValue: 'none'}], position: 54750, duration: 0, easing: "easeOutQuad" },
                { id: "eid1153", tween: [ "style", "${_p9_t1}", "display", 'none', { fromValue: 'block'}], position: 57334, duration: 0, easing: "easeOutQuad" },
                { id: "eid1119", tween: [ "style", "${_p9_title}", "top", '206px', { fromValue: '292px'}], position: 54750, duration: 750, easing: "easeOutQuad" },
                { id: "eid1125", tween: [ "style", "${_p9_title}", "top", '48px', { fromValue: '206px'}], position: 56500, duration: 750, easing: "easeInQuad" },
                { id: "eid1117", tween: [ "style", "${_p9_t1}", "opacity", '1', { fromValue: '0'}], position: 55000, duration: 750, easing: "easeOutQuad" },
                { id: "eid1132", tween: [ "style", "${_p9_t1}", "opacity", '0', { fromValue: '1'}], position: 56632, duration: 618, easing: "easeInQuad" },
                { id: "eid710", tween: [ "transform", "${_Text6}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 20750, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid1230", tween: [ "style", "${_but_credit}", "display", 'block', { fromValue: 'none'}], position: 57386, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1063", tween: [ "style", "${_code-box}", "display", 'block', { fromValue: 'none'}], position: 39119, duration: 0 },
                { id: "eid1072", tween: [ "style", "${_code-box}", "display", 'none', { fromValue: 'block'}], position: 51841, duration: 0 },
                { id: "eid914", tween: [ "style", "${_Text12}", "top", '39px', { fromValue: '302px'}], position: 36000, duration: 750, easing: "easeOutQuad" },
                { id: "eid633", tween: [ "style", "${_p4_blockersCopy5}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid637", tween: [ "style", "${_p4_blockersCopy5}", "display", 'none', { fromValue: 'block'}], position: 11250, duration: 0, easing: "easeOutQuad" },
                { id: "eid877", tween: [ "style", "${_get_AnCopy3}", "top", '439px', { fromValue: '660px'}], position: 33000, duration: 750, easing: "easeOutQuad" },
                { id: "eid736", tween: [ "style", "${_p6_a}", "top", '370px', { fromValue: '671px'}], position: 21750, duration: 750, easing: "easeOutQuad" },
                { id: "eid741", tween: [ "style", "${_p6_a}", "top", '110px', { fromValue: '370px'}], position: 24750, duration: 750, easing: "easeInQuad" },
                { id: "eid1009", tween: [ "style", "${_comment-2}", "top", '-122px', { fromValue: '-122px'}], position: 41709, duration: 0, easing: "easeOutQuad" },
                { id: "eid881", tween: [ "style", "${_get_AnCopy3}", "opacity", '1', { fromValue: '0'}], position: 33000, duration: 750, easing: "easeOutQuad" },
                { id: "eid1198", tween: [ "style", "${_GitHub-Mark}", "top", '333px', { fromValue: '675px'}], position: 57619, duration: 750, easing: "easeOutQuad" },
                { id: "eid604", tween: [ "style", "${_line}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid655", tween: [ "style", "${_line}", "display", 'none', { fromValue: 'block'}], position: 15095, duration: 0, easing: "easeInQuad" },
                { id: "eid918", tween: [ "style", "${_an-ui}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0, easing: "easeOutQuad" },
                { id: "eid923", tween: [ "style", "${_an-ui}", "display", 'none', { fromValue: 'block'}], position: 38107, duration: 0, easing: "easeInQuad" },
                { id: "eid1057", tween: [ "style", "${_comment-5}", "display", 'block', { fromValue: 'none'}], position: 45250, duration: 0 },
                { id: "eid1068", tween: [ "style", "${_comment-5}", "display", 'none', { fromValue: 'block'}], position: 47491, duration: 0 },
                { id: "eid405", tween: [ "style", "${_copy}", "top", '341px', { fromValue: '485px'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid456", tween: [ "style", "${_copy}", "top", '-241px', { fromValue: '341px'}], position: 2750, duration: 1000, easing: "easeInQuad" },
                { id: "eid1220", tween: [ "style", "${_edge_an_circle}", "top", '403px', { fromValue: '745px'}], position: 57895, duration: 750, easing: "easeOutQuad" },
                { id: "eid915", tween: [ "style", "${_p7_b}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0, easing: "easeOutQuad" },
                { id: "eid920", tween: [ "style", "${_p7_b}", "display", 'none', { fromValue: 'block'}], position: 38107, duration: 0, easing: "easeInQuad" },
                { id: "eid1054", tween: [ "style", "${_comment-2}", "display", 'block', { fromValue: 'none'}], position: 40750, duration: 0 },
                { id: "eid1065", tween: [ "style", "${_comment-2}", "display", 'none', { fromValue: 'block'}], position: 43000, duration: 0 },
                { id: "eid153", tween: [ "style", "${_Text6}", "top", '40px', { fromValue: '40px'}], position: 7535, duration: 0 },
                { id: "eid681", tween: [ "style", "${_Text3}", "left", '632px', { fromValue: '491px'}], position: 16500, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid937", tween: [ "style", "${_Text14}", "display", 'block', { fromValue: 'none'}], position: 37411, duration: 0, easing: "easeInQuad" },
                { id: "eid949", tween: [ "style", "${_Text14}", "display", 'none', { fromValue: 'block'}], position: 39119, duration: 0 },
                { id: "eid630", tween: [ "style", "${_p4_blockersCopy9}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid640", tween: [ "style", "${_p4_blockersCopy9}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0, easing: "easeOutQuad" },
                { id: "eid745", tween: [ "style", "${_p6_b}", "top", '306px', { fromValue: '608px'}], position: 25250, duration: 750, easing: "easeOutQuad" },
                { id: "eid751", tween: [ "style", "${_p6_b}", "top", '59px', { fromValue: '306px'}], position: 28250, duration: 750, easing: "easeInQuad" },
                { id: "eid634", tween: [ "style", "${_p4_blockersCopy8}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid636", tween: [ "style", "${_p4_blockersCopy8}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0, easing: "easeOutQuad" },
                { id: "eid822", tween: [ "transform", "${_Text10Copy}", "scaleX", '2.11', { fromValue: '1'}], position: 31500, duration: 750, easing: "easeInQuad" },
                { id: "eid463", tween: [ "style", "${_p1}", "display", 'none', { fromValue: 'block'}], position: 3866, duration: 0, easing: "easeOutQuad" },
                { id: "eid465", tween: [ "style", "${_easy_parallax}", "display", 'none', { fromValue: 'block'}], position: 3866, duration: 0, easing: "easeOutQuad" },
                { id: "eid1232", tween: [ "style", "${_madeby}", "display", 'block', { fromValue: 'none'}], position: 57250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid892", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 33750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid902", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 36342, duration: 0, easing: "easeOutQuad" },
                { id: "eid520", tween: [ "style", "${_p3_a}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeOutQuad" },
                { id: "eid585", tween: [ "style", "${_p3_a}", "display", 'none', { fromValue: 'block'}], position: 10376, duration: 0, easing: "easeOutQuad" },
                { id: "eid1245", tween: [ "style", "${_code-box}", "top", '34px', { fromValue: '-13px'}], position: 40750, duration: 500 },
                { id: "eid1259", tween: [ "style", "${_code-box}", "top", '100px', { fromValue: '34px'}], position: 42250, duration: 500 },
                { id: "eid1260", tween: [ "style", "${_code-box}", "top", '168px', { fromValue: '100px'}], position: 43750, duration: 500 },
                { id: "eid1262", tween: [ "style", "${_code-box}", "top", '231px', { fromValue: '168px'}], position: 45250, duration: 500 },
                { id: "eid1270", tween: [ "style", "${_code-box}", "top", '365px', { fromValue: '231px'}], position: 46750, duration: 500 },
                { id: "eid1275", tween: [ "style", "${_code-box}", "top", '476px', { fromValue: '365px'}], position: 48250, duration: 500 },
                { id: "eid1278", tween: [ "style", "${_code-box}", "top", '586px', { fromValue: '476px'}], position: 49750, duration: 500 },
                { id: "eid645", tween: [ "style", "${_p4_a}", "top", '-430px', { fromValue: '0px'}], position: 13000, duration: 750, easing: "easeInQuad" },
                { id: "eid776", tween: [ "style", "${_lessons}", "display", 'block', { fromValue: 'none'}], position: 25250, duration: 0, easing: "easeInQuad" },
                { id: "eid780", tween: [ "style", "${_lessons}", "display", 'none', { fromValue: 'block'}], position: 29124, duration: 0, easing: "easeInQuad" },
                { id: "eid666", tween: [ "style", "${_p5_a}", "top", '84px', { fromValue: '217px'}], position: 15250, duration: 750, easing: "easeOutQuad" },
                { id: "eid687", tween: [ "style", "${_p5_a}", "top", '-142px', { fromValue: '84px'}], position: 18000, duration: 750, easing: "easeInQuad" },
                { id: "eid600", tween: [ "style", "${_Text4Copy}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid647", tween: [ "style", "${_Text4Copy}", "display", 'none', { fromValue: 'block'}], position: 13859, duration: 0, easing: "easeInQuad" },
                { id: "eid510", tween: [ "transform", "${_icon_18306}", "scaleY", '0.8', { fromValue: '1'}], position: 5627, duration: 623, easing: "easeOutSine" },
                { id: "eid9", tween: [ "style", "${_HEADER}", "left", '0px', { fromValue: '0px'}], position: 5500, duration: 0 },
                { id: "eid549", tween: [ "style", "${_copy2}", "left", '632px', { fromValue: '131px'}], position: 7332, duration: 1000, easing: "easeInQuad" },
                { id: "eid1233", tween: [ "style", "${_p9_b}", "display", 'block', { fromValue: 'none'}], position: 57250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1214", tween: [ "style", "${_profile}", "top", '263px', { fromValue: '605px'}], position: 57386, duration: 750, easing: "easeOutQuad" },
                { id: "eid760", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid765", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 15250, duration: 0 },
                { id: "eid691", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 18850, duration: 0, easing: "easeInQuad" },
                { id: "eid14", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 0 },
                { id: "eid997", tween: [ "color", "${_Stage}", "background-color", 'rgba(248,248,248,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 37500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid999", tween: [ "color", "${_Stage}", "background-color", 'rgba(248,248,248,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(248,248,248,1.00)'}], position: 60000, duration: 0, easing: "easeOutQuad" },
                { id: "eid749", tween: [ "style", "${_Text9}", "top", '18px', { fromValue: '163px'}], position: 26750, duration: 750, easing: "easeInOutQuad" },
                { id: "eid1101", tween: [ "style", "${_p9_t1}", "top", '322px', { fromValue: '376px'}], position: 55000, duration: 750, easing: "easeOutQuad" },
                { id: "eid1126", tween: [ "style", "${_p9_t1}", "top", '164px', { fromValue: '322px'}], position: 56632, duration: 618, easing: "easeInQuad" },
                { id: "eid1226", tween: [ "style", "${_edgean}", "display", 'block', { fromValue: 'none'}], position: 57750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1008", tween: [ "style", "${_comment-2}", "left", '243px', { fromValue: '243px'}], position: 41709, duration: 0, easing: "easeOutQuad" },
                { id: "eid1257", tween: [ "style", "${_code-box}", "left", '15px', { fromValue: '-19px'}], position: 42250, duration: 500 },
                { id: "eid1028", tween: [ "style", "${_code-box}", "left", '-19px', { fromValue: '15px'}], position: 43750, duration: 500 },
                { id: "eid1276", tween: [ "style", "${_code-box}", "left", '44px', { fromValue: '-19px'}], position: 48250, duration: 500 },
                { id: "eid1048", tween: [ "style", "${_code-box}", "left", '-19px', { fromValue: '44px'}], position: 49750, duration: 500 },
                { id: "eid516", tween: [ "style", "${_underline}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeOutQuad" },
                { id: "eid587", tween: [ "style", "${_underline}", "display", 'none', { fromValue: 'block'}], position: 10376, duration: 0, easing: "easeOutQuad" },
                { id: "eid759", tween: [ "style", "${_p5_a}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid764", tween: [ "style", "${_p5_a}", "display", 'block', { fromValue: 'none'}], position: 15250, duration: 0 },
                { id: "eid690", tween: [ "style", "${_p5_a}", "display", 'none', { fromValue: 'block'}], position: 18850, duration: 0, easing: "easeInQuad" },
                { id: "eid683", tween: [ "style", "${_Text3}", "top", '394px', { fromValue: '360px'}], position: 16500, duration: 1250, easing: "easeInQuad" },
                { id: "eid875", tween: [ "style", "${_step3_head}", "display", 'block', { fromValue: 'none'}], position: 32250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid938", tween: [ "style", "${_step3_head}", "display", 'none', { fromValue: 'block'}], position: 39119, duration: 0, easing: "easeInQuad" },
                { id: "eid845", tween: [ "style", "${_p6_c}", "display", 'block', { fromValue: 'none'}], position: 29000, duration: 0, easing: "easeOutQuad" },
                { id: "eid846", tween: [ "style", "${_p6_c}", "display", 'none', { fromValue: 'block'}], position: 32346, duration: 0, easing: "easeOutQuad" },
                { id: "eid889", tween: [ "style", "${_p7_a}", "opacity", '1', { fromValue: '0'}], position: 33750, duration: 750, easing: "easeInOutQuad" },
                { id: "eid899", tween: [ "style", "${_p7_a}", "opacity", '0', { fromValue: '1'}], position: 35500, duration: 750, easing: "easeOutQuad" },
                { id: "eid936", tween: [ "style", "${_p8_a}", "display", 'block', { fromValue: 'none'}], position: 38364, duration: 0, easing: "easeInQuad" },
                { id: "eid1091", tween: [ "style", "${_p8_a}", "display", 'none', { fromValue: 'block'}], position: 52572, duration: 0, easing: "easeInQuad" },
                { id: "eid1059", tween: [ "style", "${_comment-7}", "display", 'block', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid1070", tween: [ "style", "${_comment-7}", "display", 'none', { fromValue: 'block'}], position: 50500, duration: 0 },
                { id: "eid812", tween: [ "style", "${_Text10Copy5}", "opacity", '1', { fromValue: '0'}], position: 29389, duration: 750, easing: "easeOutQuad" },
                { id: "eid838", tween: [ "style", "${_Text10Copy5}", "opacity", '0', { fromValue: '1'}], position: 31610, duration: 250, easing: "easeInQuad" },
                { id: "eid670", tween: [ "style", "${_p5_a}", "opacity", '1', { fromValue: '0'}], position: 15250, duration: 750, easing: "easeOutQuad" },
                { id: "eid688", tween: [ "style", "${_p5_a}", "opacity", '1', { fromValue: '1'}], position: 16000, duration: 0, easing: "easeInQuad" },
                { id: "eid689", tween: [ "style", "${_p5_a}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 750, easing: "easeInQuad" },
                { id: "eid1224", tween: [ "style", "${_but_edge_an}", "display", 'block', { fromValue: 'none'}], position: 57895, duration: 0, easing: "easeInOutQuad" },
                { id: "eid67", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(72,62,123,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(72,62,123,1.00)'}], position: 13000, duration: 0 },
                { id: "eid719", tween: [ "style", "${_get_AnCopy}", "opacity", '1', { fromValue: '0'}], position: 21000, duration: 750, easing: "easeOutQuad" },
                { id: "eid861", tween: [ "style", "${_get_AnCopy}", "opacity", '0', { fromValue: '1'}], position: 31250, duration: 884, easing: "easeInQuad" },
                { id: "eid1227", tween: [ "style", "${_but_source}", "display", 'block', { fromValue: 'none'}], position: 57619, duration: 0, easing: "easeInOutQuad" },
                { id: "eid487", tween: [ "style", "${_icon_18306}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid506", tween: [ "style", "${_icon_18306}", "opacity", '0', { fromValue: '1'}], position: 5627, duration: 623, easing: "easeOutSine" },
                { id: "eid774", tween: [ "style", "${_help_button}", "display", 'block', { fromValue: 'none'}], position: 25250, duration: 0, easing: "easeInQuad" },
                { id: "eid778", tween: [ "style", "${_help_button}", "display", 'none', { fromValue: 'block'}], position: 29124, duration: 0, easing: "easeInQuad" },
                { id: "eid508", tween: [ "transform", "${_icon_18306}", "scaleX", '0.8', { fromValue: '1'}], position: 5627, duration: 623, easing: "easeOutSine" },
                { id: "eid610", tween: [ "style", "${_p4_blockersCopy10}", "height", '1px', { fromValue: '70px'}], position: 11750, duration: 500, easing: "easeOutQuad" },
                { id: "eid532", tween: [ "style", "${_copy2}", "display", 'block', { fromValue: 'none'}], position: 5627, duration: 0, easing: "easeOutQuad" },
                { id: "eid558", tween: [ "style", "${_copy2}", "display", 'none', { fromValue: 'block'}], position: 8547, duration: 0, easing: "easeOutSine" },
                { id: "eid484", tween: [ "style", "${_icon_18306}", "left", '530px', { fromValue: '534px'}], position: 3500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid499", tween: [ "style", "${_icon_18306}", "left", '788px', { fromValue: '530px'}], position: 5250, duration: 1000, easing: "easeInQuad" },
                { id: "eid1204", tween: [ "style", "${_sources}", "top", '349px', { fromValue: '691px'}], position: 57500, duration: 750, easing: "easeOutQuad" },
                { id: "eid629", tween: [ "style", "${_p4_blockersCopy10}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid641", tween: [ "style", "${_p4_blockersCopy10}", "display", 'none', { fromValue: 'block'}], position: 12250, duration: 0, easing: "easeOutQuad" },
                { id: "eid1094", tween: [ "style", "${_Text16}", "display", 'block', { fromValue: 'none'}], position: 52250, duration: 0, easing: "easeInQuad" },
                { id: "eid1097", tween: [ "style", "${_Text16}", "display", 'none', { fromValue: 'block'}], position: 54750, duration: 0, easing: "easeInQuad" },
                { id: "eid1123", tween: [ "style", "${_p9_title}", "opacity", '1', { fromValue: '0'}], position: 54750, duration: 750, easing: "easeOutQuad" },
                { id: "eid1131", tween: [ "style", "${_p9_title}", "opacity", '0', { fromValue: '1'}], position: 56500, duration: 750, easing: "easeInQuad" },
                { id: "eid1003", tween: [ "style", "${_comment-1}", "height", '39px', { fromValue: '39px'}], position: 40124, duration: 0, easing: "easeOutQuad" },
                { id: "eid762", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid767", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 15250, duration: 0 },
                { id: "eid693", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 18850, duration: 0, easing: "easeInQuad" },
                { id: "eid717", tween: [ "style", "${_Text6Copy2}", "opacity", '1', { fromValue: '0'}], position: 20750, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid696", tween: [ "style", "${_p5_b}", "top", '313px', { fromValue: '580px'}], position: 18500, duration: 750, easing: "easeOutQuad" },
                { id: "eid704", tween: [ "style", "${_p5_b}", "top", '97px', { fromValue: '313px'}], position: 20000, duration: 750, easing: "easeInQuad" },
                { id: "eid1115", tween: [ "style", "${_p9_t2}", "opacity", '1', { fromValue: '0'}], position: 55250, duration: 500, easing: "easeOutQuad" },
                { id: "eid1130", tween: [ "style", "${_p9_t2}", "opacity", '0', { fromValue: '1'}], position: 56750, duration: 500, easing: "easeInQuad" },
                { id: "eid810", tween: [ "style", "${_Text10Copy2}", "opacity", '1', { fromValue: '0'}], position: 29124, duration: 750, easing: "easeOutQuad" },
                { id: "eid837", tween: [ "style", "${_Text10Copy2}", "opacity", '0', { fromValue: '1'}], position: 31884, duration: 250, easing: "easeInQuad" },
                { id: "eid459", tween: [ "style", "${_p2}", "display", 'none', { fromValue: 'block'}], position: 3866, duration: 0, easing: "easeOutQuad" },
                { id: "eid906", tween: [ "style", "${_RoundRect}", "left", '264px', { fromValue: '-134px'}], position: 36000, duration: 750, easing: "easeOutQuad" },
                { id: "eid603", tween: [ "style", "${_p4_head}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid654", tween: [ "style", "${_p4_head}", "display", 'none', { fromValue: 'block'}], position: 15095, duration: 0, easing: "easeInQuad" },
                { id: "eid1092", tween: [ "style", "${_p8_b}", "display", 'block', { fromValue: 'none'}], position: 52250, duration: 0, easing: "easeInQuad" },
                { id: "eid1095", tween: [ "style", "${_p8_b}", "display", 'none', { fromValue: 'block'}], position: 54750, duration: 0, easing: "easeInQuad" },
                { id: "eid1007", tween: [ "style", "${_comment-1}", "top", '-76px', { fromValue: '-76px'}], position: 40124, duration: 0, easing: "easeOutQuad" },
                { id: "eid868", tween: [ "style", "${_EllipseCopy3}", "opacity", '1', { fromValue: '0'}], position: 32250, duration: 1000, easing: "easeInQuad" },
                { id: "eid697", tween: [ "style", "${_p5_b}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0, easing: "easeOutQuad" },
                { id: "eid724", tween: [ "style", "${_p5_b}", "display", 'none', { fromValue: 'block'}], position: 20864, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1221", tween: [ "style", "${_tx}", "display", 'block', { fromValue: 'none'}], position: 58250, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
},
"down_arrow": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['90']],
                    rect: ['23.8%', '-18px', '51.4%', '193.8%', 'auto', 'auto'],
                    type: 'text',
                    id: 'Text',
                    text: '➧',
                    align: 'center',
                    font: ['Arial, Helvetica, sans-serif', 65, 'rgba(255,255,255,1)', '300', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '-18px'],
                ["style", "font-size", '65px'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '193.79%'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '23.77%'],
                ["style", "width", '51.37%']
            ],
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '76px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid738", tween: [ "style", "${_Text}", "top", '-2px', { fromValue: '-18px'}], position: 0, duration: 500, easing: "easeInOutCubic" },
                { id: "eid740", tween: [ "style", "${_Text}", "top", '-18px', { fromValue: '-2px'}], position: 500, duration: 500, easing: "easeInOutCubic" }            ]
        }
    }
},
"header": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-2px', '-2px', '804px', '34px', 'auto', 'auto'],
                    id: 'Rectangle4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(13,18,75,1.00)']
                },
                {
                    rect: ['11.5%', '11.4%', '76.9%', '68.2%', 'auto', 'auto'],
                    font: ['source-sans-pro, sans-serif', 18, 'rgba(248,248,248,0.99)', '300', 'none', 'normal'],
                    align: 'center',
                    id: 'Text5',
                    text: 'EASY PARALLAX WITH EDGE ANIMATE',
                    textShadow: ['rgba(0,0,0,0.44)', 1, 1, 1],
                    type: 'text'
                },
                {
                    rect: ['94.6%', '0%', '24px', '40px', 'auto', 'auto'],
                    id: 'adobe',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/adobe.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_adobe}": [
                ["style", "top", '0%'],
                ["style", "height", '40px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '94.56%'],
                ["style", "width", '24px']
            ],
            "${symbolSelector}": [
                ["style", "height", '44px'],
                ["style", "width", '800px']
            ],
            "${_Text5}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '1px'],
                ["color", "color", 'rgba(248,248,248,0.99)'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "left", '11.5%'],
                ["style", "font-size", '18px'],
                ["style", "top", '11.36%'],
                ["style", "text-align", 'center'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.44)'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "width", '76.88%']
            ],
            "${_Rectangle4}": [
                ["style", "top", '-2px'],
                ["style", "height", '34px'],
                ["color", "background-color", 'rgba(13,18,75,1.00)'],
                ["style", "left", '-2px'],
                ["style", "width", '804px']
            ],
            "${_p3_title}": [
                ["subproperty", "textShadow.blur", '0px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["subproperty", "textShadow.offsetV", '0px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"try_button": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '174px', '69px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    boxShadow: ['', 0, 2, 5, 0, 'rgba(0,0,0,0.35)'],
                    id: 'RoundRect',
                    stroke: [1, 'rgba(211,115,0,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(192,177,182,1)', [270, [['rgba(253,201,0,1.00)', 0], ['rgba(254,159,0,1.00)', 100]]]]
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.99']],
                    rect: ['24px', '14px', '128px', '41px', 'auto', 'auto'],
                    font: ['source-sans-pro, sans-serif', 30, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Try!',
                    textShadow: ['rgba(0,0,0,0.35)', 0, 1, 2],
                    type: 'text'
                },
                {
                    rect: ['7.4%', '0%', '85.2%', '100%', 'auto', 'auto'],
                    borderRadius: ['8px', '8px', '8px', '8px'],
                    type: 'rect',
                    id: 'try_but_hitarea',
                    stroke: [1, 'rgb(211, 115, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_try_but_hitarea}": [
                ["style", "top", '0%'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '100%'],
                ["style", "border-style", 'none'],
                ["style", "left", '7.39%'],
                ["style", "width", '85.23%']
            ],
            "${_RoundRect}": [
                ["subproperty", "boxShadow.inset", ''],
                ["gradient", "background-image", [270,[['rgba(253,201,0,1.00)',0],['rgba(254,159,0,1.00)',100]]]],
                ["style", "left", '7.94%'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["subproperty", "boxShadow.offsetV", '2px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.35)'],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '148px'],
                ["style", "top", '0%'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '5px'],
                ["color", "border-color", 'rgba(211,115,0,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '71px'],
                ["style", "width", '176px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '2px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "left", '24px'],
                ["style", "width", '128px'],
                ["style", "top", '14px'],
                ["transform", "scaleY", '0.99'],
                ["style", "text-align", 'center'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.35)'],
                ["style", "height", '41px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-weight", '300'],
                ["style", "font-size", '30px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            labels: {
                "show": 0,
                "hide": 250
            },
            timeline: [
                { id: "eid68", tween: [ "style", "${_RoundRect}", "width", '148px', { fromValue: '148px'}], position: 3000, duration: 0 },
                { id: "eid338", tween: [ "gradient", "${_RoundRect}", "background-image", [270,[['rgba(211,115,0,1.00)',0],['rgba(254,159,0,1.00)',100]]], { fromValue: [270,[['rgba(253,201,0,1.00)',0],['rgba(254,159,0,1.00)',100]]]}], position: 0, duration: 250 },
                { id: "eid339", tween: [ "gradient", "${_RoundRect}", "background-image", [270,[['rgba(253,201,0,1.00)',0],['rgba(253,158,0,1.00)',100]]], { fromValue: [270,[['rgba(211,115,0,1.00)',0],['rgba(253,158,0,1.00)',100]]]}], position: 250, duration: 250 },
                { id: "eid69", tween: [ "style", "${_RoundRect}", "left", '7.94%', { fromValue: '7.94%'}], position: 3000, duration: 0 }            ]
        }
    }
},
"help_button": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0%', '0%', '174px', '58px', 'auto', 'auto'],
                    borderRadius: ['8px 8px', '8px 8px', '8px 8px', '8px 8px'],
                    boxShadow: ['', 0, 2, 5, 0, 'rgba(0,0,0,0.35)'],
                    id: 'RoundRect',
                    stroke: [1, 'rgba(211,115,0,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(192,177,182,1)', [270, [['rgba(253,201,0,1.00)', 0], ['rgba(254,159,0,1.00)', 100]]]]
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.99']],
                    rect: ['0px', '15px', '300px', '30px', 'auto', 'auto'],
                    font: ['source-sans-pro, sans-serif', 24, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Learn Edge Animate CC',
                    textShadow: ['rgba(0,0,0,0.35)', 0, 1, 2],
                    type: 'text'
                },
                {
                    rect: ['0%', '0%', '300px', '60px', 'auto', 'auto'],
                    borderRadius: ['8px', '8px', '8px', '8px'],
                    type: 'rect',
                    id: 'try_but_hitarea',
                    stroke: [1, 'rgb(211, 115, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_try_but_hitarea}": [
                ["style", "top", '0%'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '0%'],
                ["style", "height", '60px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '300px']
            ],
            "${_RoundRect}": [
                ["subproperty", "boxShadow.inset", ''],
                ["gradient", "background-image", [270,[['rgba(253,201,0,1.00)',0],['rgba(254,159,0,1.00)',100]]]],
                ["style", "left", '0.02%'],
                ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["subproperty", "boxShadow.offsetV", '2px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.35)'],
                ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '298px'],
                ["style", "top", '0%'],
                ["style", "height", '58px'],
                ["color", "border-color", 'rgba(211,115,0,1.00)'],
                ["subproperty", "boxShadow.blur", '5px'],
                ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '300px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '2px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "left", '0px'],
                ["style", "width", '300px'],
                ["style", "top", '15px'],
                ["style", "font-size", '24px'],
                ["transform", "scaleY", '0.99'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.35)'],
                ["style", "height", '30px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-weight", '300'],
                ["style", "text-align", 'center']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "show": 0,
                "hide": 250
            },
            timeline: [
                { id: "eid68", tween: [ "style", "${_RoundRect}", "width", '298px', { fromValue: '298px'}], position: 750, duration: 0 },
                { id: "eid338", tween: [ "gradient", "${_RoundRect}", "background-image", [270,[['rgba(211,115,0,1.00)',0],['rgba(254,159,0,1.00)',100]]], { fromValue: [270,[['rgba(253,201,0,1.00)',0],['rgba(254,159,0,1.00)',100]]]}], position: 0, duration: 250 },
                { id: "eid339", tween: [ "gradient", "${_RoundRect}", "background-image", [270,[['rgba(253,201,0,1.00)',0],['rgba(253,158,0,1.00)',100]]], { fromValue: [270,[['rgba(211,115,0,1.00)',0],['rgba(253,158,0,1.00)',100]]]}], position: 250, duration: 250 },
                { id: "eid69", tween: [ "style", "${_RoundRect}", "left", '0.02%', { fromValue: '0.02%'}], position: 750, duration: 0 }            ]
        }
    }
},
"code_box": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '484px', '224px', 'auto', 'auto'],
                    borderRadius: ['6px 6px', '6px 6px', '6px 6px', '6px 6px'],
                    boxShadow: ['', 0, 1, 3, 2, 'rgba(0,0,0,0.65)'],
                    id: 'RoundRect3',
                    stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect3}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
                ["style", "border-bottom-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-top-right-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '484px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [6,6], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '1px'],
                ["subproperty", "boxShadow.spread", '2px'],
                ["style", "height", '224px'],
                ["color", "border-color", 'rgba(204,204,204,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '226px'],
                ["style", "width", '486px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"round_HL_button": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                    borderRadius: ['30px 30px', '30px 30px', '30px 30px', '30px 30px'],
                    id: 'outline',
                    stroke: [2, 'rgba(255,255,255,0.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(6,19,74,0.65)']
                },
                {
                    rect: ['-294px', '0px', '354px', '60px', 'auto', 'auto'],
                    id: 'hit_area',
                    stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_outline}": [
                ["color", "background-color", 'rgba(6,19,74,0.40)'],
                ["style", "border-top-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '56px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '56px'],
                ["color", "border-color", 'rgba(6,19,74,0.00)'],
                ["style", "left", '0px'],
                ["style", "border-width", '2px']
            ],
            "${_hit_area}": [
                ["style", "top", '0px'],
                ["style", "height", '60px'],
                ["style", "left", '-294px'],
                ["style", "border-width", '0px'],
                ["style", "width", '354px']
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '60px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "show": 0,
                "hide": 250
            },
            timeline: [
                { id: "eid272", tween: [ "color", "${_outline}", "border-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(6,19,74,0.00)'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid273", tween: [ "color", "${_outline}", "border-color", 'rgba(6,19,74,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 250, duration: 250, easing: "easeInOutQuad" },
                { id: "eid270", tween: [ "color", "${_outline}", "background-color", 'rgba(6,19,74,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(6,19,74,0.40)'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid271", tween: [ "color", "${_outline}", "background-color", 'rgba(6,19,74,0.40)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(6,19,74,0.00)'}], position: 250, duration: 250, easing: "easeInOutQuad" }            ]
        }
    }
},
"bg_block": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '800px', '600px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '600px'],
                ["style", "width", '800px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "height", '600px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '800px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-343491701");
