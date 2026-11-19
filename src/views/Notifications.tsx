const img24Outlined = "./assets/13ab3765-efe7-470d-872a-60326f66b0fc.svg";
const imgIcon = "./assets/026560dc-8902-4648-b825-7e77655c1073.png";
const imgImage4 = "./assets/dbe2f64c-da6e-431a-927b-71f29be3c5a3.png";
const imgIcon1 = "./assets/47f830a4-7438-4b7f-94d2-492ab3dbd4bd.png";
const imgPic = "./assets/9c321cc5-b57c-463b-a978-b40da92fc7a6.png";
const imgCap = "./assets/b53895e2-f699-40ad-a263-11061d666ef7.svg";
const imgWifi = "./assets/13da3ef7-dc87-486a-8b86-89d83b908cf8.svg";
const imgCellularConnection = "./assets/de92ea2a-a982-4083-8d9e-56a5f1ad1d69.svg";
const imgLeftButton1 = "./assets/6dbb9922-f18b-487a-a720-5474c114a16f.svg";
const imgIcTitlebarMore = "./assets/b5f744fc-ca23-4a08-8089-cd4f87c5a6b9.svg";
const imgIcSSArrowforwardOutlined12 = "./assets/7f984950-9b1f-4606-90a8-1a770323f216.svg";
const img = "./assets/0ba45db6-5c81-458d-93b0-1ddc5376ba08.svg";

type IcSSFunnelProps = {
  className?: string;
  propValue?: "24";
  propValue1?: "outlined";
};

function IcSSFunnel({ className, propValue = "24", propValue1 = "outlined" }: IcSSFunnelProps) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="1:27">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={img24Outlined} />
    </div>
  );
}

export default function tab() {
  return (
    <div className="overflow-clip relative rounded-[24px] size-full" data-node-id="1:11441" style={{ backgroundImage: "linear-gradient(90deg, rgb(243, 243, 244) 0%, rgb(243, 243, 244) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="通知消息-全部tab">
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-node-id="1:11442" data-name="导航">
        <div className="h-[44px] relative shrink-0 w-full" data-node-id="1:11443" data-name="DuxStatusBar">
          <div className="-translate-y-1/2 absolute contents right-[14.34px] top-[calc(50%+1px)]" data-node-id="I1:11443;9511:2557" data-name="Battery">
            <div className="-translate-y-1/2 absolute border border-black border-solid h-[11.333px] opacity-35 right-[16.67px] rounded-[2.667px] top-[calc(50%+1px)] w-[22px]" data-node-id="I1:11443;9511:2558" data-name="Border" />
            <div className="-translate-y-1/2 absolute h-[4px] right-[14.34px] top-[calc(50%+1px)] w-[1.328px]" data-node-id="I1:11443;9511:2559" data-name="Cap">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCap} />
            </div>
            <div className="-translate-y-1/2 absolute bg-black h-[7.333px] right-[18.67px] rounded-[1.333px] top-[calc(50%+1px)] w-[18px]" data-node-id="I1:11443;9511:2560" data-name="Capacity" />
          </div>
          <div className="-translate-y-1/2 absolute h-[11px] right-[43.67px] top-[calc(50%+0.83px)] w-[15.333px]" data-node-id="I1:11443;9511:2561" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="-translate-y-1/2 absolute h-[10.667px] right-[64px] top-[calc(50%+1px)] w-[17px]" data-node-id="I1:11443;9511:2565" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="-translate-y-1/2 absolute h-[21px] left-[21px] top-[calc(50%-4.17px)] w-[54px]" data-node-id="I1:11443;9511:2570" data-name="Time Style">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] leading-[normal] left-[27px] not-italic text-[15px] text-black text-center top-[calc(50%-3.5px)] tracking-[-0.3px] w-[54px]" data-node-id="I1:11443;9511:2571">
              9:41
            </p>
          </div>
        </div>
        <div className="h-[44px] relative shrink-0 w-[390px]" data-node-id="1:11444" data-name="DuxTitleBar">
          <div className="-translate-y-1/2 absolute content-stretch flex gap-[20px] items-center left-[16px] top-1/2" data-node-id="I1:11444;16555:74510" data-name="Left Button">
            <div className="relative shrink-0 size-[24px]" data-node-id="I1:11444;24350:54915" data-name="Left Button 1">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeftButton1} />
            </div>
          </div>
          <div className="-translate-y-1/2 absolute content-stretch flex gap-[4px] items-center justify-center left-[96px] right-[96px] top-1/2" data-node-id="I1:11444;16555:74513" data-name="Title">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[color:var(--TextPrimary,#161823)] text-center whitespace-nowrap" data-node-id="I1:11444;16555:74514">
              <p className="leading-[normal]">通知消息</p>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-['PingFang_SC:Regular'] leading-[normal] not-italic right-[16px] text-[15px] text-[color:var(--TextPrimary,#161823)] text-right top-[calc(50%-10.5px)] whitespace-nowrap" data-node-id="I1:11444;16555:74525">
            消息管理
          </p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[152px] w-[358px]" data-node-id="1:11469" data-name="list">
        <div className="bg-[var(--bg-bgcard,white)] content-stretch flex flex-col items-center relative rounded-[12px] shrink-0 w-full" data-node-id="1:11470" data-name="消息模版_light">
          <div className="content-stretch flex flex-col h-[52px] items-center overflow-clip relative shrink-0 w-full" data-node-id="1:11471" data-name="tittle">
            <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11472" data-name="text">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:11473" data-name="icon+名称">
                <div className="border-[0.5px] border-[var(--line-linereverse2,rgba(22,24,35,0.12))] border-solid overflow-clip relative rounded-[100px] shrink-0 size-[28px]" data-node-id="1:11474" data-name="icon">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgIcon} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="1:11478" data-name="标题">
                  <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-textprimary,#161823)] text-[length:var(--size-15,15px)] whitespace-nowrap" data-node-id="1:11479">
                    兴趣卡官方助手
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-13,13px)] whitespace-nowrap" data-node-id="1:11480">
                11月10日
              </p>
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:11481" data-name="icon">
                <div className="absolute left-0 size-[24px] top-0" data-node-id="1:11482" data-name="ic_titlebar_more">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcTitlebarMore} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[12px] px-[16px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:11486" data-name="info">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:11487" data-name="标题部分">
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[length:var(--size-17,17px)] w-full" data-node-id="1:11488">
                兴趣卡创作者通知
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font-cn,'PingFang_SC:Regular')] gap-[6px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-node-id="1:11491" data-name="list">
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 text-[length:var(--size-14,14px)] w-full" data-node-id="1:11492" data-name="info">
                <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] whitespace-nowrap" data-node-id="1:11493">
                  提醒内容
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))]" data-node-id="1:11494">
                  兴趣卡审核通过
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="1:11495" data-name="info">
                <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-14,14px)] w-[56px]" data-node-id="1:11496">
                  更新内容
                </p>
                <p className="flex-[1_0_0] max-h-[20px] min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))] text-ellipsis" data-node-id="1:11497">{`你提交的{兴趣卡名称}已通过并进入分发环节，平台会结合兴趣卡功能、内容以及平台推荐策略，向抖音用户进行兴趣卡推荐，请耐心等待`}</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:11498" data-name="action">
            <div className="content-stretch flex flex-col items-center justify-center mb-[-0.5px] overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="1:11499" data-name="line">
              <div className="bg-[rgba(22,24,35,0.12)] h-[0.5px] relative shrink-0 w-full" data-node-id="1:11500" data-name="line" />
            </div>
            <div className="content-stretch flex gap-[24px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11501" data-name="action">
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[length:var(--size-14,14px)] whitespace-nowrap" data-node-id="1:11502">
                查看详情
              </p>
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-w-px relative" data-node-id="1:11503" data-name="行动点">
                <div className="relative shrink-0 size-[12px]" data-node-id="1:11505" data-name="icon 12">
                  <div className="absolute left-0 size-[12px] top-[0.5px]" data-node-id="1:11506" data-name="ic_s_s_arrowforward_outlined_12">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSArrowforwardOutlined12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--bg-bgcard,white)] content-stretch flex flex-col items-center overflow-clip relative rounded-[12px] shrink-0 w-[358px]" data-node-id="1:11507" data-name="普通模版_light">
          <div className="content-stretch flex flex-col h-[52px] items-center overflow-clip relative shrink-0 w-full" data-node-id="1:11508" data-name="tittle">
            <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11509" data-name="text">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:11510" data-name="icon+名称">
                <div className="bg-[#f03a49] overflow-clip relative rounded-[70px] shrink-0 size-[28px]" data-node-id="1:11511" data-name="icon">
                  <div className="absolute left-0 size-[28px] top-0" data-node-id="1:11524" data-name="抖音公益/公益平台">
                    <div className="absolute bg-[#3c8cff] inset-0 rounded-[35px]" data-node-id="I1:11524;1105:9736" />
                    <div className="absolute inset-[17.5%] overflow-clip" data-node-id="I1:11524;1105:9737">
                      <div className="absolute h-[13.962px] left-[1.01px] top-[2.16px] w-[16.17px]" data-node-id="I1:11524;1105:9738" data-name="image 4">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:11525" data-name="标题">
                  <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[normal] not-italic relative shrink-0 text-[15px] text-[color:var(--text-textprimary,#161823)] whitespace-nowrap" data-node-id="1:11526">
                    公益平台
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-13,13px)] whitespace-nowrap" data-node-id="1:11528">
                11月2日
              </p>
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:11529" data-name="icon">
                <div className="absolute left-0 size-[24px] top-0" data-node-id="1:11530" data-name="ic_titlebar_more">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcTitlebarMore} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[12px] px-[16px] relative shrink-0 w-full" data-node-id="1:11534" data-name="body">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:11535" data-name="title">
              <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--text-textprimary,#161823)] w-full" data-node-id="1:11536">
                了不起的妈妈
              </p>
            </div>
            <div className="content-stretch flex items-start overflow-clip pt-[4px] relative shrink-0 w-full" data-node-id="1:11538" data-name="正文">
              <p className="[word-break:break-word] flex-[1_0_0] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] min-w-px not-italic overflow-hidden relative text-[14px] text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))] text-ellipsis" data-node-id="1:11539">
                你有一份双节上热门红包待领取。快去领取最高价值 1000 元劵，并参与解锁最高价值 10000 元锦鲤流量
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font-cn,'PingFang_SC:Regular')] gap-[6px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-node-id="1:11540" data-name="list">
              <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 text-[length:var(--size-14,14px)] w-full" data-node-id="1:11541" data-name="info">
                <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] whitespace-nowrap" data-node-id="1:11542">
                  账户名称
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))]" data-node-id="1:11543">
                  哈哈哈开心
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 text-[length:var(--size-14,14px)] w-full" data-node-id="1:11544" data-name="info">
                <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] whitespace-nowrap" data-node-id="1:11545">
                  发布时间
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))]" data-node-id="1:11546">
                  2026-10-17 14:30:44
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="1:11553" data-name="info">
                <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-14,14px)] w-[56px] whitespace-pre-wrap" data-node-id="1:11554">{`备注     `}</p>
                <p className="flex-[1_0_0] min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))] text-ellipsis" data-node-id="1:11555">
                  你的抖音号 3881192 于07 月 23 日 10:58 进行了登录。如非本人操作请立即前往
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:11559" data-name="action">
            <div className="content-stretch flex flex-col items-center justify-center mb-[-0.5px] overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="1:11560" data-name="line">
              <div className="bg-[rgba(22,24,35,0.12)] h-[0.5px] relative shrink-0 w-full" data-node-id="1:11561" data-name="line" />
            </div>
            <div className="content-stretch flex gap-[24px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11562" data-name="action">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[14px] whitespace-nowrap" data-node-id="1:11563">
                查看详情
              </p>
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-w-px relative" data-node-id="1:11564" data-name="行动点">
                <div className="relative shrink-0 size-[12px]" data-node-id="1:11566" data-name="icon 12">
                  <div className="absolute left-0 size-[12px] top-[0.5px]" data-node-id="1:11567" data-name="ic_s_s_arrowforward_outlined_12">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSArrowforwardOutlined12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--bg-bgcard,white)] content-stretch flex flex-col items-center relative rounded-[12px] shrink-0 w-full" data-node-id="1:11569" data-name="消息模版_light">
          <div className="content-stretch flex flex-col h-[52px] items-center overflow-clip relative shrink-0 w-full" data-node-id="1:11570" data-name="tittle">
            <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11571" data-name="text">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:11572" data-name="icon+名称">
                <div className="border-[0.5px] border-[var(--line-linereverse2,rgba(22,24,35,0.12))] border-solid overflow-clip relative rounded-[12px] shrink-0 size-[28px]" data-node-id="1:11573" data-name="icon">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgIcon1} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="1:11577" data-name="标题">
                  <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[normal] not-italic relative shrink-0 text-[15px] text-[color:var(--text-textprimary,#161823)] whitespace-nowrap" data-node-id="1:11578">
                    羊了个羊
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[13px] text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] whitespace-nowrap" data-node-id="1:11579">
                9月2日
              </p>
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:11580" data-name="icon">
                <div className="absolute left-0 size-[24px] top-0" data-node-id="1:11581" data-name="ic_titlebar_more">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcTitlebarMore} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[12px] px-[16px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:11585" data-name="info">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:11586" data-name="标题部分">
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[length:var(--size-17,17px)] w-full" data-node-id="1:11587">
                离线收益更新了
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font-cn,'PingFang_SC:Regular')] gap-[6px] items-start leading-[normal] not-italic relative shrink-0 text-[length:var(--size-14,14px)] w-full" data-node-id="1:11590" data-name="list">
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="1:11591" data-name="info">
                <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] whitespace-nowrap" data-node-id="1:11592">
                  活动名称
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))]" data-node-id="1:11593">
                  离线收益
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="1:11594" data-name="info">
                <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] w-[56px]" data-node-id="1:11595">
                  提醒内容
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))]" data-node-id="1:11596">
                  你有一份离线收益大礼包更新，快领取
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:11597" data-name="action">
            <div className="content-stretch flex flex-col items-center justify-center mb-[-0.5px] overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="1:11598" data-name="line">
              <div className="bg-[rgba(22,24,35,0.12)] h-[0.5px] relative shrink-0 w-full" data-node-id="1:11599" data-name="line" />
            </div>
            <div className="content-stretch flex gap-[24px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11600" data-name="action">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[14px] whitespace-nowrap" data-node-id="1:11601">
                查看详情
              </p>
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-w-px relative" data-node-id="1:11602" data-name="行动点">
                <div className="relative shrink-0 size-[12px]" data-node-id="1:11604" data-name="icon 12">
                  <div className="absolute left-0 size-[12px] top-[0.5px]" data-node-id="1:11605" data-name="ic_s_s_arrowforward_outlined_12">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSArrowforwardOutlined12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--bg-bgcard,white)] content-stretch flex flex-col items-center overflow-clip relative rounded-[12px] shrink-0 w-[358px]" data-node-id="1:11606" data-name="文字模版_light">
          <div className="content-stretch flex flex-col h-[52px] items-center overflow-clip relative shrink-0 w-full" data-node-id="1:11607" data-name="tittle">
            <div className="content-stretch flex gap-[12px] items-center mb-[-0.5px] overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11608" data-name="text">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:11609" data-name="icon+名称">
                <div className="bg-[#f03a49] overflow-clip relative rounded-[70px] shrink-0 size-[28px]" data-node-id="1:11610" data-name="icon">
                  <div className="absolute left-0 size-[28px] top-0" data-node-id="1:11613" data-name="生活服务交易">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:11614" data-name="标题">
                  <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[normal] not-italic relative shrink-0 text-[15px] text-[color:var(--text-textprimary,#161823)] whitespace-nowrap" data-node-id="1:11615">
                    生活服务
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-13,13px)] whitespace-nowrap" data-node-id="1:11617">
                11月2日
              </p>
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:11618" data-name="icon">
                <div className="absolute left-0 size-[24px] top-0" data-node-id="1:11619" data-name="ic_titlebar_more">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcTitlebarMore} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="1:11621" data-name="line">
              <div className="bg-[rgba(22,24,35,0.12)] h-[0.5px] relative shrink-0 w-full" data-node-id="1:11622" data-name="line" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:11623" data-name="info">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:11624" data-name="标题部分">
              <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[17px] w-full" data-node-id="1:11625">
                商品配送中
              </p>
            </div>
            <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="1:11628" data-name="图片+正文">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#161823] text-[14px] text-ellipsis" data-node-id="1:11629">
                <p>
                  <span className="leading-[normal]">{`您购买的小炉将【中关村店】干软肥瘦混合 1 斤闪送到家，下单时请标注是否需要撒调料：孜然辣椒，正在配送中请... `}</span>
                  <span className="leading-[normal] text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))]">全文</span>
                </p>
              </div>
              <div className="relative rounded-[2px] shrink-0 size-[56px]" data-node-id="1:11630" data-name="pic">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgPic} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:11631" data-name="action">
            <div className="content-stretch flex flex-col items-center justify-center mb-[-0.5px] overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="1:11632" data-name="line">
              <div className="bg-[rgba(22,24,35,0.12)] h-[0.5px] relative shrink-0 w-full" data-node-id="1:11633" data-name="line" />
            </div>
            <div className="content-stretch flex gap-[24px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11634" data-name="action">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[14px] whitespace-nowrap" data-node-id="1:11635">
                查看详情
              </p>
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-w-px relative" data-node-id="1:11636" data-name="行动点">
                <div className="relative shrink-0 size-[12px]" data-node-id="1:11638" data-name="icon 12">
                  <div className="absolute left-0 size-[12px] top-[0.5px]" data-node-id="1:11639" data-name="ic_s_s_arrowforward_outlined_12">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSArrowforwardOutlined12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[64px] left-0 overflow-clip top-[88px] w-[390px]" data-node-id="1:11640" data-name="筛选">
        <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-0 px-[16px] top-[16px]" data-node-id="1:11641" data-name="选项">
          <div className="bg-[var(--bg-bgprimary,white)] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[18px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:11642" data-name="选中">
            <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--system-primary,#fe2c55)] text-center whitespace-nowrap" data-node-id="1:11643">
              全部
            </p>
          </div>
          <div className="bg-[var(--bg-bgprimary,white)] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[18px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:11647" data-name="未选">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--text-textprimary,#161823)] text-center whitespace-nowrap" data-node-id="1:11648">
              热点
            </p>
          </div>
          <div className="bg-[var(--bg-bgprimary,white)] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[18px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:11652" data-name="未选">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--text-textprimary,#161823)] text-center whitespace-nowrap" data-node-id="1:11653">
              支付助手
            </p>
          </div>
          <div className="bg-[var(--bg-bgprimary,white)] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[18px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:11654" data-name="未选">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--text-textprimary,#161823)] text-center whitespace-nowrap" data-node-id="1:11655">
              钱包通知
            </p>
          </div>
          <div className="bg-[var(--bg-bgprimary,white)] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[16px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:11656" data-name="未选">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--text-textprimary,#161823)] text-center whitespace-nowrap" data-node-id="1:11657">
              系统通知
            </p>
          </div>
        </div>
        <div className="absolute contents right-0 top-0" data-node-id="1:11658">
          <div className="absolute bg-[var(--bg-bgpaneltone,#f3f3f4)] bottom-0 h-[64px] overflow-clip right-0 w-[54px]" data-node-id="1:11659" data-name="icon">
            <IcSSFunnel className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" />
          </div>
          <div className="absolute h-[64px] left-[324px] top-0 w-[12px]" data-node-id="1:11661" style={{ backgroundImage: "linear-gradient(-89.99999873214597deg, rgb(243, 243, 244) 0%, rgba(243, 243, 244, 0) 100%)" }} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[390px]" data-node-id="1:11662" data-name="DuxHomeIndicator">
        <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%-0.5px)] rounded-[100px] w-[133px]" data-node-id="I1:11662;9512:2639" data-name="Home Indicator" />
      </div>
    </div>
  );
}
