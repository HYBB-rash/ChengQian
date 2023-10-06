import { createApp } from 'vue'; // 导入 createApp 而不是 Vue
import Tmpl from "@/Tmpl.vue";
import 'element-plus/theme-chalk/index.css'; // Element Plus 的样式
import page7 from '@/assets/pic/page7.png'
import '@/assets/css/main.css'

const page_cfg = {
    title: "联邦EE经验类移民",
    img: page7,
    sub_title: [
        "审批速度快、申请者只",
        "需在官方指定的网站递交电子材料即可",
        "移民费用低、配额充足公",
    ],
    project_instruction: "联邦经验类移民（CEC即 Canadian Experience Class，联邦经验" +
        "类移民），适用于拥有加拿大教育背景的国际学生，以及在加拿" +
        "大境内持有临时工作签证的海外工人。不同于我们所了解的FSW，" +
        "CEC的要求是申请人需要有加拿大境内的工作经验，此项条件主" +
        "要是给申请人提供了额外的加分，从而更容易达到筛选分数。",
    condition: [
        "办理周期：6-12个月",
        "投资金额：无要求",
        "语言要求：雅思5分",
        "工作年限时常：1年+",
        "身份类型：工作签证",
        "学历要求：无需求",
        "年龄要求：无要求",
        "管理年限要求：无要求",
    ],
    advantage: [
        "成功率高：加拿大移民部去年9月新设的加拿大经验类别移民申请，大受中国留学生的欢迎，接近一半的申请人为中国留学生。CEC目前成功率非常高，拒签率只有4%左右，是所有移民类别中最低的。",
        "配额充足：移民部在推出新计划时，最初希望一年能吸纳1.2万名CEC移民，之后调低目标为5000-7500人，但在实施后的9个月内，只收到不足2000宗申请，而单是计算2011年1月-5月22日的数字，总申请人数仅为1128宗，不到全年最低目标的四分之一。",
        "速度快：移民部渥太华髮言人谢德（Karen Shadc）指出，目前加拿大经验类别的平均处理时间为了-6个月，就算申请人数大增，当局估计处理时间也会在12个月内，比起一般的技术移民申请要快得多。她说，在更多留学生及工作签证者了解到CEC是一个取得永久居民资格的快捷方式时，申请人数料会增加。",
    ],
    require_condition: [
        "有一年加拿大工作经验，工作职位和内",
        "容符合加拿大移民局要求 NOA （O/A/B）",
        "雅思达到政府要求分数",
    ],
    require_material: [
        "IRCC申请表",
        "身份证件",
        "无犯罪记录",
        "体检报告",
        "工作相关文件（例如offer等）",
        "资质证书",
        "ECA学历认证报告",
        "提名证书（非必须）",
    ],
    process: [
        "进入初筛打分池；一般初筛要满足67分才能被邀请入CRS打分池；准备好材料入池，入池后系统会自动算出CRS分数",
        "等待邀请，收到ITA，提交材料（60天内）",
        "联邦审批通过；收到移民局发的ready for visa邮件，邮寄相关材料",
        "收到护照和移民纸后登陆加拿大",
    ],
};

const app = createApp(Tmpl, page_cfg);

app.mount('#app'); // 使用 app.mount() 方法来挂载应用程序

