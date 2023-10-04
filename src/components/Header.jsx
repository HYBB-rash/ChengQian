import {ElMenuItem, ElSubMenu} from "element-plus";

/**  @typedef {{index: string, title: string, url: string, child: MenuItem[]}} MenuItem */

/**  @type {MenuItem[]} */ export const MENU_CONFIG = [
    {index: '1', title: '首页', url: '/', child: []},
    {
        index: '2', title: '移民服务', url: '', child: [
            {
                index: '2-1', title: '雇主担保', url: '', child: [
                    {index: '2-1-1', title: 'BC 省提名-技术移民', url: '/Immigration/Page1/', child: []},
                    {index: '2-1-2', title: '安省提名-技术移民', url: '/Immigration/Page2/', child: []},
                    {index: '2-1-3', title: '曼省提名-技术移民', url: '/Immigration/Page3/', child: []},
                    {index: '2-1-4', title: '萨省技术移民-雇主担保', url: '/Immigration/Page4/', child: []},
                    {index: '2-1-5', title: 'LMIA 工签', url: '/Immigration/Page5/', child: []}
                ]
            },
            {
                index: '2-2', title: '联邦移民', url: '', child: [
                    {index: '2-2-1', title: '联邦自雇移民', url: '/Immigration/Page6/', child: []},
                    {index: '2-2-2', title: '联邦 EE 经验类移民', url: '/Immigration/Page7/', child: []},
                    {index: '2-2-3', title: '联邦 EE 技术类移民', url: '/Immigration/Page8/', child: []},
                    {index: '2-2-4', title: '北方地区试点', url: '/Immigration/Page9/', child: []},
                    {index: '2-2-5', title: '农业食品试点移民', url: '/Immigration/Page10/', child: []},
                ]
            },
            {
                index: '2-3', title: '商业投资', url: '', child: [
                    {index: '2-3-1', title: 'SUV 联邦创业类移民', url: '', child: []},
                    // {index: '2-3-2', title: '跨国公司内部派遣工签', url: '#', child: []},
                    // {index: '2-3-3', title: 'BC 省企业家试点移民', url: '#', child: []},
                    // {index: '2-3-4', title: 'BC 省企业家基础移民', url: '#', child: []},
                ]
            },
            // {
            //     index: '2-4', title: '留学移民', url: '#', child: [
            //         {index: '2-4-1', title: '曼省留学移民', url: '#', child: []},
            //         {index: '2-4-2', title: '曼省硕博类移民', url: '#', child: []},
            //         {index: '2-4-3', title: 'BC省硕博类移民', url: '#', child: []},
            //         {index: '2-4-4', title: 'BC省省提名-留学移民', url: '#', child: []},
            //         {index: '2-4-5', title: '安省硕博类移民', url: '#', child: []},
            //         {index: '2-4-6', title: '安省省提名-留学移民', url: '#', child: []},
            //         {index: '2-4-7', title: '境内旅游签转学签', url: '#', child: []},
            //     ],
            // },
            // {
            //     index: '2-5', title: '团聚移民', url: '#', child: [
            //         {index: '2-5-1', title: '家族团聚移民-子女', url: '#', child: []},
            //         {index: '2-5-2', title: '家族团聚移民-配偶', url: '#', child: []},
            //         {index: '2-5-3', title: '家族团聚移民-父母', url: '#', child: []},
            //     ]
            // }
        ],
    },
    // {
    //     index: '3', title: '留学服务', url: '#', child: [
    //         {index: '3-1', title: '留学申请', url: '#', child: []},
    //         {index: '3-2', title: '留学签证', url: '#', child: []},
    //         {index: '3-3', title: '留学生签证', url: '#', child: []},
    //     ]
    // },
    // {index: '4', title: '语言服务', url: '#', child: []},
    // {index: '5', title: '学习资源', url: '#', child: []},
    // {index: '6', title: '在线咨询', url: '#', child: []},
    // {index: '7', title: '关于我们', url: '#', child: []},
];


/**
 * @param {MenuItem[]} menu_items
 * @return {JSX.Element[]}
 * @constructor
 */
const renderMenuItems = (menu_items) => menu_items.map(({index, title, url, child}) => {
    if (child.length === 0) {
        return <ElMenuItem index={index} onClick={() => { window.location = url }}>{title}</ElMenuItem>
    }
    return <ElSubMenu index={index}>
        {{
            title: () => <>{title}</>,
            default: () => <>{renderMenuItems(child)}</>
        }}
    </ElSubMenu>
})

export const MenuItems = () => <>{renderMenuItems(MENU_CONFIG)}</>;
