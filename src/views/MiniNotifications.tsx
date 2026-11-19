const img24Outlined = "./assets/13ab3765-efe7-470d-872a-60326f66b0fc.svg";
const imgIcon = "./assets/026560dc-8902-4648-b825-7e77655c1073.png";
const imgIcon1 = "./assets/47f830a4-7438-4b7f-94d2-492ab3dbd4bd.png";
const imgIcon2 = "./assets/08ac7a4a-e9b4-4701-93f7-5a4c81abab08.png";
const imgIcon3 = "./assets/b13da111-e870-448a-89f0-a9684b4e2427.png";
const imgCap = "./assets/b53895e2-f699-40ad-a263-11061d666ef7.svg";
const imgWifi = "./assets/13da3ef7-dc87-486a-8b86-89d83b908cf8.svg";
const imgCellularConnection = "./assets/de92ea2a-a982-4083-8d9e-56a5f1ad1d69.svg";
const imgLeftButton1 = "./assets/6dbb9922-f18b-487a-a720-5474c114a16f.svg";
const imgIcTitlebarMore = "./assets/b5f744fc-ca23-4a08-8089-cd4f87c5a6b9.svg";
const imgIcSSArrowforwardOutlined12 = "./assets/7f984950-9b1f-4606-90a8-1a770323f216.svg";

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
    <div className="overflow-clip relative rounded-[24px] size-full" data-node-id="1:11663" style={{ backgroundImage: "linear-gradient(90deg, rgb(243, 243, 244) 0%, rgb(243, 243, 244) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="通知消息-小程序tab">
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-node-id="1:11664" data-name="导航">
        <div className="h-[44px] relative shrink-0 w-full" data-node-id="1:11665" data-name="DuxStatusBar">
          <div className="-translate-y-1/2 absolute contents right-[14.34px] top-[calc(50%+1px)]" data-node-id="I1:11665;9511:2557" data-name="Battery">
            <div className="-translate-y-1/2 absolute border border-black border-solid h-[11.333px] opacity-35 right-[16.67px] rounded-[2.667px] top-[calc(50%+1px)] w-[22px]" data-node-id="I1:11665;9511:2558" data-name="Border" />
            <div className="-translate-y-1/2 absolute h-[4px] right-[14.34px] top-[calc(50%+1px)] w-[1.328px]" data-node-id="I1:11665;9511:2559" data-name="Cap">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCap} />
            </div>
            <div className="-translate-y-1/2 absolute bg-black h-[7.333px] right-[18.67px] rounded-[1.333px] top-[calc(50%+1px)] w-[18px]" data-node-id="I1:11665;9511:2560" data-name="Capacity" />
          </div>
          <div className="-translate-y-1/2 absolute h-[11px] right-[43.67px] top-[calc(50%+0.83px)] w-[15.333px]" data-node-id="I1:11665;9511:2561" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="-translate-y-1/2 absolute h-[10.667px] right-[64px] top-[calc(50%+1px)] w-[17px]" data-node-id="I1:11665;9511:2565" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="-translate-y-1/2 absolute h-[21px] left-[21px] top-[calc(50%-4.17px)] w-[54px]" data-node-id="I1:11665;9511:2570" data-name="Time Style">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] leading-[normal] left-[27px] not-italic text-[15px] text-black text-center top-[calc(50%-3.5px)] tracking-[-0.3px] w-[54px]" data-node-id="I1:11665;9511:2571">
              9:41
            </p>
          </div>
        </div>
        <div className="h-[44px] relative shrink-0 w-[390px]" data-node-id="1:11666" data-name="DuxTitleBar">
          <div className="-translate-y-1/2 absolute content-stretch flex gap-[20px] items-center left-[16px] top-1/2" data-node-id="I1:11666;16555:74510" data-name="Left Button">
            <div className="relative shrink-0 size-[24px]" data-node-id="I1:11666;24350:54915" data-name="Left Button 1">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeftButton1} />
            </div>
          </div>
          <div className="-translate-y-1/2 absolute content-stretch flex gap-[4px] items-center justify-center left-[96px] right-[96px] top-1/2" data-node-id="I1:11666;16555:74513" data-name="Title">
            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[color:var(--TextPrimary,#161823)] text-center whitespace-nowrap" data-node-id="I1:11666;16555:74514">
              <p className="leading-[normal]">通知消息</p>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-['PingFang_SC:Regular'] leading-[normal] not-italic right-[16px] text-[15px] text-[color:var(--TextPrimary,#161823)] text-right top-[calc(50%-10.5px)] whitespace-nowrap" data-node-id="I1:11666;16555:74525">
            消息管理
          </p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[152px] w-[358px]" data-node-id="1:11691" data-name="list">
        <div className="bg-[var(--bg-bgcard,white)] content-stretch flex flex-col items-center relative rounded-[12px] shrink-0 w-full" data-node-id="1:11692" data-name="消息模版_light">
          <div className="content-stretch flex flex-col h-[52px] items-center overflow-clip relative shrink-0 w-full" data-node-id="1:11693" data-name="tittle">
            <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11694" data-name="text">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:11695" data-name="icon+名称">
                <div className="border-[0.5px] border-[var(--line-linereverse2,rgba(22,24,35,0.12))] border-solid overflow-clip relative rounded-[100px] shrink-0 size-[28px]" data-node-id="1:11696" data-name="icon">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgIcon} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="1:11700" data-name="标题">
                  <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-textprimary,#161823)] text-[length:var(--size-15,15px)] whitespace-nowrap" data-node-id="1:11701">
                    兴趣卡官方助手
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-13,13px)] whitespace-nowrap" data-node-id="1:11702">
                11月10日
              </p>
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:11703" data-name="icon">
                <div className="absolute left-0 size-[24px] top-0" data-node-id="1:11704" data-name="ic_titlebar_more">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcTitlebarMore} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[12px] px-[16px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:11708" data-name="info">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:11709" data-name="标题部分">
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[length:var(--size-17,17px)] w-full" data-node-id="1:11710">
                兴趣卡创作者通知
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font-cn,'PingFang_SC:Regular')] gap-[6px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-node-id="1:11713" data-name="list">
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 text-[length:var(--size-14,14px)] w-full" data-node-id="1:11714" data-name="info">
                <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] whitespace-nowrap" data-node-id="1:11715">
                  提醒内容
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))]" data-node-id="1:11716">
                  兴趣卡审核通过
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="1:11717" data-name="info">
                <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-14,14px)] w-[56px]" data-node-id="1:11718">
                  更新内容
                </p>
                <p className="flex-[1_0_0] max-h-[20px] min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))] text-ellipsis" data-node-id="1:11719">{`你提交的{兴趣卡名称}已通过并进入分发环节，平台会结合兴趣卡功能、内容以及平台推荐策略，向抖音用户进行兴趣卡推荐，请耐心等待`}</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:11720" data-name="action">
            <div className="content-stretch flex flex-col items-center justify-center mb-[-0.5px] overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="1:11721" data-name="line">
              <div className="bg-[rgba(22,24,35,0.12)] h-[0.5px] relative shrink-0 w-full" data-node-id="1:11722" data-name="line" />
            </div>
            <div className="content-stretch flex gap-[24px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11723" data-name="action">
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[length:var(--size-14,14px)] whitespace-nowrap" data-node-id="1:11724">
                查看详情
              </p>
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-w-px relative" data-node-id="1:11725" data-name="行动点">
                <div className="relative shrink-0 size-[12px]" data-node-id="1:11727" data-name="icon 12">
                  <div className="absolute left-0 size-[12px] top-[0.5px]" data-node-id="1:11728" data-name="ic_s_s_arrowforward_outlined_12">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSArrowforwardOutlined12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--bg-bgcard,white)] content-stretch flex flex-col items-center relative rounded-[12px] shrink-0 w-full" data-node-id="1:11791" data-name="消息模版_light">
          <div className="content-stretch flex flex-col h-[52px] items-center overflow-clip relative shrink-0 w-full" data-node-id="1:11792" data-name="tittle">
            <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11793" data-name="text">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:11794" data-name="icon+名称">
                <div className="border-[0.5px] border-[var(--line-linereverse2,rgba(22,24,35,0.12))] border-solid overflow-clip relative rounded-[12px] shrink-0 size-[28px]" data-node-id="1:11795" data-name="icon">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgIcon1} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="1:11799" data-name="标题">
                  <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[normal] not-italic relative shrink-0 text-[15px] text-[color:var(--text-textprimary,#161823)] whitespace-nowrap" data-node-id="1:11800">
                    羊了个羊
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[13px] text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] whitespace-nowrap" data-node-id="1:11801">
                9月2日
              </p>
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:11802" data-name="icon">
                <div className="absolute left-0 size-[24px] top-0" data-node-id="1:11803" data-name="ic_titlebar_more">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcTitlebarMore} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[12px] px-[16px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:11807" data-name="info">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:11808" data-name="标题部分">
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[length:var(--size-17,17px)] w-full" data-node-id="1:11809">
                离线收益更新了
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font-cn,'PingFang_SC:Regular')] gap-[6px] items-start leading-[normal] not-italic relative shrink-0 text-[length:var(--size-14,14px)] w-full" data-node-id="1:11812" data-name="list">
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="1:11813" data-name="info">
                <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] whitespace-nowrap" data-node-id="1:11814">
                  活动名称
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))]" data-node-id="1:11815">
                  离线收益
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="1:11816" data-name="info">
                <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] w-[56px]" data-node-id="1:11817">
                  提醒内容
                </p>
                <p className="flex-[1_0_0] min-w-px relative text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))]" data-node-id="1:11818">
                  你有一份离线收益大礼包更新，快领取
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:11819" data-name="action">
            <div className="content-stretch flex flex-col items-center justify-center mb-[-0.5px] overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="1:11820" data-name="line">
              <div className="bg-[rgba(22,24,35,0.12)] h-[0.5px] relative shrink-0 w-full" data-node-id="1:11821" data-name="line" />
            </div>
            <div className="content-stretch flex gap-[24px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11822" data-name="action">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[14px] whitespace-nowrap" data-node-id="1:11823">
                查看详情
              </p>
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-w-px relative" data-node-id="1:11824" data-name="行动点">
                <div className="relative shrink-0 size-[12px]" data-node-id="1:11826" data-name="icon 12">
                  <div className="absolute left-0 size-[12px] top-[0.5px]" data-node-id="1:11827" data-name="ic_s_s_arrowforward_outlined_12">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSArrowforwardOutlined12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--bg-bgcard,white)] content-stretch flex flex-col items-center relative rounded-[12px] shrink-0 w-full" data-node-id="1:11828" data-name="消息模版_light">
          <div className="content-stretch flex flex-col h-[52px] items-center overflow-clip relative shrink-0 w-full" data-node-id="1:11829" data-name="tittle">
            <div className="content-stretch flex gap-[12px] items-center mb-[-0.5px] overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11830" data-name="text">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:11831" data-name="icon+名称">
                <div className="overflow-clip relative rounded-[70px] shrink-0 size-[28px]" data-node-id="1:11832" data-name="icon">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[70px] size-full" src={imgIcon2} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="1:11836" data-name="标题">
                  <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[normal] not-italic relative shrink-0 text-[15px] text-[color:var(--text-textprimary,#161823)] whitespace-nowrap" data-node-id="1:11837">
                    趣追
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[13px] text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] whitespace-nowrap" data-node-id="1:11838">
                6月12日
              </p>
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:11839" data-name="icon">
                <div className="absolute left-0 size-[24px] top-0" data-node-id="1:11840" data-name="ic_titlebar_more">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcTitlebarMore} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="1:11842" data-name="line">
              <div className="bg-[rgba(22,24,35,0.12)] h-[0.5px] relative shrink-0 w-full" data-node-id="1:11843" data-name="line" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[16px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:11844" data-name="info">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:11845" data-name="标题部分">
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[length:var(--size-17,17px)] w-full" data-node-id="1:11846">
                TA的动态更新了
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-node-id="1:11849" data-name="list">
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="1:11850" data-name="info">
                <p className="font-['PingFang_SC:Regular'] relative shrink-0 text-[14px] text-[rgba(22,24,35,0.6)] whitespace-nowrap" data-node-id="1:11851">
                  TA的动态
                </p>
                <p className="flex-[1_0_0] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] min-w-px relative text-[#161823] text-[length:var(--size-14,14px)]" data-node-id="1:11852">
                  周杰伦更新动态了！
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="1:11853" data-name="info">
                <p className="font-['PingFang_SC:Regular'] relative shrink-0 text-[14px] text-[rgba(22,24,35,0.6)] w-[60px]" data-node-id="1:11854">
                  更新内容
                </p>
                <p className="flex-[1_0_0] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] min-w-px relative text-[#161823] text-[length:var(--size-14,14px)]" data-node-id="1:11855">
                  TA发布了周杰伦最新视频
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:11856" data-name="action">
            <div className="content-stretch flex flex-col items-center justify-center mb-[-0.5px] overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="1:11857" data-name="line">
              <div className="bg-[rgba(22,24,35,0.12)] h-[0.5px] relative shrink-0 w-full" data-node-id="1:11858" data-name="line" />
            </div>
            <div className="content-stretch flex gap-[24px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11859" data-name="action">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[14px] whitespace-nowrap" data-node-id="1:11860">
                查看详情
              </p>
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-w-px relative" data-node-id="1:11861" data-name="行动点">
                <div className="relative shrink-0 size-[12px]" data-node-id="1:11863" data-name="icon 12">
                  <div className="absolute left-0 size-[12px] top-[0.5px]" data-node-id="1:11864" data-name="ic_s_s_arrowforward_outlined_12">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSArrowforwardOutlined12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--bg-bgcard,white)] content-stretch flex flex-col items-center relative rounded-[12px] shrink-0 w-full" data-node-id="1:11865" data-name="消息模版_light">
          <div className="content-stretch flex flex-col h-[52px] items-center overflow-clip relative shrink-0 w-full" data-node-id="1:11866" data-name="tittle">
            <div className="content-stretch flex gap-[12px] items-center mb-[-0.5px] overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11867" data-name="text">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:11868" data-name="icon+名称">
                <div className="overflow-clip relative rounded-[70px] shrink-0 size-[28px]" data-node-id="1:11869" data-name="icon">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[70px] size-full" src={imgIcon3} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="1:11873" data-name="标题">
                  <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[normal] not-italic relative shrink-0 text-[15px] text-[color:var(--text-textprimary,#161823)] whitespace-nowrap" data-node-id="1:11874">
                    趣玩活动
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[13px] text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] whitespace-nowrap" data-node-id="1:11875">
                6月8日
              </p>
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:11876" data-name="icon">
                <div className="absolute left-0 size-[24px] top-0" data-node-id="1:11877" data-name="ic_titlebar_more">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcTitlebarMore} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="1:11879" data-name="line">
              <div className="bg-[rgba(22,24,35,0.12)] h-[0.5px] relative shrink-0 w-full" data-node-id="1:11880" data-name="line" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[16px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:11881" data-name="info">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:11882" data-name="标题部分">
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[length:var(--size-17,17px)] w-full" data-node-id="1:11883">
                报名结果
              </p>
            </div>
            <div className="content-stretch flex items-start overflow-clip pt-[4px] relative shrink-0 w-full" data-node-id="1:11886" data-name="正文">
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular'] leading-[normal] min-w-px not-italic overflow-hidden relative text-[14px] text-[color:var(--text-textprimary,#161823)] text-ellipsis" data-node-id="1:11887">
                恭喜！你已成功报名。同频的小伙伴正在集结，就等闪亮登场~
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-node-id="1:11888" data-name="list">
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="1:11889" data-name="info">
                <p className="font-['PingFang_SC:Regular'] relative shrink-0 text-[14px] text-[rgba(22,24,35,0.6)] whitespace-nowrap" data-node-id="1:11890">
                  活动名称
                </p>
                <p className="flex-[1_0_0] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] min-w-px relative text-[#161823] text-[length:var(--size-14,14px)]" data-node-id="1:11891">
                  6月18日/越野跑训练
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="1:11892" data-name="info">
                <p className="font-['PingFang_SC:Regular'] relative shrink-0 text-[14px] text-[rgba(22,24,35,0.6)] whitespace-nowrap" data-node-id="1:11893">
                  活动时间
                </p>
                <p className="flex-[1_0_0] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] min-w-px relative text-[#161823] text-[length:var(--size-14,14px)]" data-node-id="1:11894">
                  06.18 周六 07:00~18:00
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="1:11895" data-name="info">
                <p className="font-['PingFang_SC:Regular'] relative shrink-0 text-[14px] text-[rgba(22,24,35,0.6)] whitespace-nowrap" data-node-id="1:11896">
                  活动地点
                </p>
                <p className="flex-[1_0_0] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] min-w-px relative text-[#161823] text-[length:var(--size-14,14px)]" data-node-id="1:11897">
                  北京市海淀区悦跑俱乐部
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:11898" data-name="action">
            <div className="content-stretch flex flex-col items-center justify-center mb-[-0.5px] overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="1:11899" data-name="line">
              <div className="bg-[rgba(22,24,35,0.12)] h-[0.5px] relative shrink-0 w-full" data-node-id="1:11900" data-name="line" />
            </div>
            <div className="content-stretch flex gap-[24px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:11901" data-name="action">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[14px] whitespace-nowrap" data-node-id="1:11902">
                查看详情
              </p>
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-w-px relative" data-node-id="1:11903" data-name="行动点">
                <div className="relative shrink-0 size-[12px]" data-node-id="1:11905" data-name="icon 12">
                  <div className="absolute left-0 size-[12px] top-[0.5px]" data-node-id="1:11906" data-name="ic_s_s_arrowforward_outlined_12">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSArrowforwardOutlined12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[64px] left-0 overflow-clip top-[88px] w-[390px]" data-node-id="1:11907" data-name="筛选">
        <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-0 px-[16px] top-[16px]" data-node-id="1:11908" data-name="选项">
          <div className="bg-[var(--bg-bgprimary,white)] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[18px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:11911" data-name="未选">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--text-textprimary,#161823)] text-center whitespace-nowrap" data-node-id="1:11912">
              全部
            </p>
          </div>
          <div className="bg-[var(--bg-bgprimary,white)] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[18px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:11914" data-name="未选">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--text-textprimary,#161823)] text-center whitespace-nowrap" data-node-id="1:11915">
              热点
            </p>
          </div>
          <div className="bg-[var(--bg-bgprimary,white)] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[18px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:11917" data-name="选中">
            <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--system-primary,#fe2c55)] text-center whitespace-nowrap" data-node-id="1:11918">
              小程序
            </p>
          </div>
          <div className="bg-[var(--bg-bgprimary,white)] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[18px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:11919" data-name="未选">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--text-textprimary,#161823)] text-center whitespace-nowrap" data-node-id="1:11920">
              支付助手
            </p>
          </div>
          <div className="bg-[var(--bg-bgprimary,white)] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[18px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:11921" data-name="未选">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--text-textprimary,#161823)] text-center whitespace-nowrap" data-node-id="1:11922">
              钱包通知
            </p>
          </div>
          <div className="bg-[var(--bg-bgprimary,white)] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[16px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:11923" data-name="未选">
            <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--text-textprimary,#161823)] text-center whitespace-nowrap" data-node-id="1:11924">
              系统通知
            </p>
          </div>
        </div>
        <div className="absolute contents right-0 top-0" data-node-id="1:11925">
          <div className="absolute bg-[var(--bg-bgpaneltone,#f3f3f4)] bottom-0 h-[64px] overflow-clip right-0 w-[54px]" data-node-id="1:11926" data-name="icon">
            <IcSSFunnel className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" />
          </div>
          <div className="absolute h-[64px] left-[324px] top-0 w-[12px]" data-node-id="1:11928" style={{ backgroundImage: "linear-gradient(-89.99999873214597deg, rgb(243, 243, 244) 0%, rgba(243, 243, 244, 0) 100%)" }} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[390px]" data-node-id="1:11929" data-name="DuxHomeIndicator">
        <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%-0.5px)] rounded-[100px] w-[133px]" data-node-id="I1:11929;9512:2639" data-name="Home Indicator" />
      </div>
    </div>
  );
}
