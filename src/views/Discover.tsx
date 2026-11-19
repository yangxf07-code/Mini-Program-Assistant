const imgProperty1Top1 = "./assets/06c45745-9f98-456f-983d-0c2306ac11d9.svg";
const imgProperty1Top2 = "./assets/4cd70739-6f3e-4a83-b7b7-717532879807.svg";
const imgProperty1Top3 = "./assets/e527245c-bbaa-4262-bafa-3a099d67dc28.svg";
const imgProperty1Property2Light = "./assets/91fd6c14-501c-437c-bffb-ef8cad8a229c.svg";
const imgRectangle346243412 = "./assets/b8dddab6-123d-4211-acd7-3d5adcebe905.png";
const imgRectangle346243411 = "./assets/e88d321e-a84a-4ac1-a794-8ac9c62badfd.png";
const imgImage1636404342 = "./assets/ca75db71-b2cf-43ea-8b09-7e1e88749815.png";
const imgIcon = "./assets/204a3f00-bf4f-4581-a317-5f2d6e877e4a.png";
const imgFrame2147242641 = "./assets/3741bb0e-2b0b-4d01-823e-eb3f1c8d10de.png";
const imgRectangle2131355618 = "./assets/c63c3a85-3c9f-4427-89b1-48a88ac58dca.png";
const imgRectangle11113577 = "./assets/ebe3d0fa-0a15-477a-aba0-347eac1fab41.png";
const imgRectangle2131355619 = "./assets/e550f7b3-e6d6-4d6c-a6fb-370dfa60569e.png";
const imgRectangle11113578 = "./assets/c923ee3f-9eb6-47bd-b324-41bbe9413692.png";
const imgRectangle2131355620 = "./assets/0837cb9a-ab35-4d19-92e5-e3d1477744a9.png";
const imgRectangle11113579 = "./assets/04123322-ebb1-4549-bcf4-6df429adfaea.png";
const imgRectangle2131355621 = "./assets/465c8275-6368-48c6-ab34-4f6f4b5d67c3.png";
const imgRectangle11113580 = "./assets/40cf8b58-536a-4385-b131-e5dad618657b.png";
const imgRectangle2131355622 = "./assets/0e723879-7a7e-47fe-a8b9-41300f3aeb36.png";
const imgRectangle2131355617 = "./assets/1c229ec4-7a0f-48f6-912a-53c48c83ea54.svg";
const imgVector2 = "./assets/a673e884-70ab-4698-be07-d760f6926565.svg";
const imgCap = "./assets/b53895e2-f699-40ad-a263-11061d666ef7.svg";
const imgWifi = "./assets/13da3ef7-dc87-486a-8b86-89d83b908cf8.svg";
const imgCellularConnection = "./assets/de92ea2a-a982-4083-8d9e-56a5f1ad1d69.svg";
const imgEllipse1297 = "./assets/7480c86e-03ea-4666-8cdd-121d4fa65e04.svg";
const imgVector6 = "./assets/0a0a94f1-895a-4eee-883d-83c7e7a34e87.svg";
const imgFrame = "./assets/68f0a751-9377-4687-a6a0-5468f007000a.svg";
const imgFrame1 = "./assets/65bf6486-7a92-47d2-ad1f-ee41b8efbd93.svg";

type TopProps = {
  className?: string;
  property1?: "TOP1" | "TOP2" | "TOP3";
};

function Top({ className, property1 = "TOP1" }: TopProps) {
  const isTop2 = property1 === "TOP2";
  const isTop3 = property1 === "TOP3";
  return (
    <div className={className || "h-[18px] relative w-[34px]"} id={isTop3 ? "node-1_17210" : isTop2 ? "node-1_17206" : "node-1_17202"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={isTop3 ? imgProperty1Top3 : isTop2 ? imgProperty1Top2 : imgProperty1Top1} />
      <div className={`[word-break:break-word] absolute flex flex-col font-["Douyin_Number_ABC:ExtraBold"] inset-[19.7%_32.24%_13.63%_17.76%] justify-center leading-[0] not-italic text-[9px] tracking-[-0.5px] whitespace-nowrap ${isTop3 ? "text-[#ab4910]" : isTop2 ? "text-[#4294e0]" : "text-[#9f6000]"}`} id={isTop3 ? "node-1_17212" : isTop2 ? "node-1_17208" : "node-1_17204"}>
        <p className="leading-[normal]">TOP</p>
      </div>
      <div className={`[word-break:break-word] absolute flex flex-col font-["Douyin_Number_ABC:ExtraBold"] inset-[14.14%_17.76%_11.78%_67.76%] justify-center leading-[0] not-italic text-[9px] tracking-[-0.5px] ${isTop3 ? "text-[#ab4910]" : isTop2 ? "text-[#4294e0]" : "text-[#9f6000]"}`} id={isTop3 ? "node-1_17213" : isTop2 ? "node-1_17209" : "node-1_17205"}>
        <p className="leading-[normal]">{isTop3 ? "3" : isTop2 ? "2" : "1"}</p>
      </div>
    </div>
  );
}

type ComponentProps = {
  className?: string;
  property1?: "常态";
  property2?: "light";
};

function Component({ className, property1 = "常态", property2 = "light" }: ComponentProps) {
  return (
    <div className={className || "h-[32px] relative w-[76px]"} data-node-id="1:3920">
      <div className="absolute inset-[-1.56%_-0.66%]">
        <img alt="" className="block max-w-none size-full" src={imgProperty1Property2Light} />
      </div>
    </div>
  );
}

export default function tab() {
  return (
    <div className="overflow-clip relative rounded-[24px] size-full" data-node-id="1:15446" style={{ backgroundImage: "linear-gradient(90deg, rgb(244, 247, 251) 0%, rgb(244, 247, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="发现tab">
      <div className="absolute h-[290px] left-0 top-0 w-[390px]" data-node-id="1:15447">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle2131355617} />
      </div>
      <div className="absolute h-[443.273px] left-[129.98px] top-[-128.36px] w-[290.315px]" data-node-id="1:15448">
        <div className="absolute inset-[-0.31%_-8.7%_-3.16%_-8.7%]">
          <img alt="" className="block max-w-none size-full" src={imgVector2} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start justify-center left-1/2 top-0" data-node-id="1:15449" data-name="顶导">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:15450" data-name="导航">
          <div className="h-[44px] relative shrink-0 w-full" data-node-id="1:15451" data-name="DuxStatusBar">
            <div className="-translate-y-1/2 absolute contents right-[14.34px] top-[calc(50%+1px)]" data-node-id="I1:15451;9511:2557" data-name="Battery">
              <div className="-translate-y-1/2 absolute border border-black border-solid h-[11.333px] opacity-35 right-[16.67px] rounded-[2.667px] top-[calc(50%+1px)] w-[22px]" data-node-id="I1:15451;9511:2558" data-name="Border" />
              <div className="-translate-y-1/2 absolute h-[4px] right-[14.34px] top-[calc(50%+1px)] w-[1.328px]" data-node-id="I1:15451;9511:2559" data-name="Cap">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCap} />
              </div>
              <div className="-translate-y-1/2 absolute bg-black h-[7.333px] right-[18.67px] rounded-[1.333px] top-[calc(50%+1px)] w-[18px]" data-node-id="I1:15451;9511:2560" data-name="Capacity" />
            </div>
            <div className="-translate-y-1/2 absolute h-[11px] right-[43.67px] top-[calc(50%+0.83px)] w-[15.333px]" data-node-id="I1:15451;9511:2561" data-name="Wifi">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
            </div>
            <div className="-translate-y-1/2 absolute h-[10.667px] right-[64px] top-[calc(50%+1px)] w-[17px]" data-node-id="I1:15451;9511:2565" data-name="Cellular Connection">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
            </div>
            <div className="-translate-y-1/2 absolute h-[21px] left-[21px] top-[calc(50%-4.17px)] w-[54px]" data-node-id="I1:15451;9511:2570" data-name="Time Style">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] leading-[normal] left-[27px] not-italic text-[15px] text-black text-center top-[calc(50%-3.5px)] tracking-[-0.3px] w-[54px]" data-node-id="I1:15451;9511:2571">
                9:41
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center justify-end pl-[16px] pr-[12px] py-[10px] relative shrink-0 w-[390px]" data-node-id="1:15452" data-name="导航">
            <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0" data-node-id="1:15479" data-name="右侧">
              <Component className="h-[32px] relative shrink-0 w-[76px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[149.825px] items-center justify-center left-[-21.93px] top-[11.09px] w-[175.649px]" data-node-id="1:15483">
        <div className="flex-none rotate-[-28.5deg]">
          <div className="h-[87.868px] relative w-[152.161px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1297} />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['MF_YuanHei:Regular'] gap-[6px] items-start leading-[normal] left-[16px] not-italic text-[28px] text-black top-[73px]" data-node-id="1:15485">
        <p className="relative shrink-0 w-full" data-node-id="1:15486">
          兴趣卡
        </p>
        <p className="relative shrink-0 w-full" data-node-id="1:15487">
          官方小助手
        </p>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 top-[155px] w-[358px]" data-node-id="1:15505">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:15506">
          <div className="backdrop-blur-[6px] bg-gradient-to-b border-[0.3px] border-[var(--ui-shape-neutral-3,rgba(0,0,0,0.12))] border-solid from-[#fe831f] h-[112px] overflow-clip relative rounded-[12px] shrink-0 to-[#ffb54f] w-full" data-node-id="1:15513">
            <div className="absolute h-[173.367px] left-[91.44px] top-[24px] w-[314.009px]" data-node-id="1:15514">
              <div className="absolute inset-[-5.77%_0]">
                <img alt="" className="block max-w-none size-full" src={imgVector6} />
              </div>
            </div>
            <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col items-center justify-center left-1/2 pb-[10px] pt-[4px] w-[334px]" data-node-id="1:15515">
              <div className="content-stretch flex gap-[4px] h-[3px] items-center justify-center overflow-clip relative shrink-0 w-[42px]" data-node-id="1:15516" data-name="indicator">
                <div className="bg-[var(--ui-shape-neutral,#fafafa)] h-full relative rounded-[2px] shrink-0 w-[8px]" data-node-id="1:15517" />
                <div className="bg-[var(--ui-shape-neutral-2,rgba(255,255,255,0.32))] h-full relative rounded-[2px] shrink-0 w-[8px]" data-node-id="1:15518" />
                <div className="bg-[var(--ui-shape-neutral-2,rgba(255,255,255,0.32))] h-full relative rounded-[2px] shrink-0 w-[8px]" data-node-id="1:15519" />
              </div>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[6px] items-start leading-[normal] left-[16px] not-italic top-[20px] whitespace-nowrap" data-node-id="1:15520">
              <p className="font-['MF_YuanHei:Regular'] relative shrink-0 text-[26px] text-white" data-node-id="1:15521">
                兴趣卡创作指南
              </p>
              <p className="font-['PingFang_SC:Medium'] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.75)]" data-node-id="1:15522">
                把创意变成可在抖音刷到的互动内容~
              </p>
            </div>
            <div className="-translate-y-1/2 absolute right-[8px] rounded-[22.909px] size-[90px] top-1/2" data-node-id="1:15523">
              <div className="-translate-y-1/2 absolute contents left-[11.09%] right-[6.81%] top-[calc(50%-1.48px)]" data-node-id="1:15524">
                <div className="-translate-y-1/2 absolute flex h-[80.622px] items-center justify-center left-[13.5%] right-[6.81%] top-[calc(50%-1.87px)]" data-node-id="1:15525" style={{ containerType: "size" }}>
                  <div className="flex-none h-[hypot(-25.0164cqw,82.2908cqh)] rotate-[14.87deg] skew-x-[-0.26deg] w-[hypot(74.9836cqw,17.7092cqh)]">
                    <div className="border-[1.227px] border-solid border-white opacity-80 relative rounded-[9.818px] size-full">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9.818px] size-full" src={imgRectangle346243412} />
                    </div>
                  </div>
                </div>
                <div className="-translate-y-1/2 absolute border-[1.227px] border-solid border-white h-[68.727px] left-[11.09%] right-[27.09%] rounded-[9.818px] shadow-[0px_2.766px_13.829px_0px_rgba(86,68,56,0.12)] top-[calc(50%+4.85px)]" data-node-id="1:15526">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9.818px]">
                    <img alt="" className="absolute h-[109.77%] left-0 max-w-none top-0 w-full" src={imgRectangle346243411} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-5px] right-[279.25px] shadow-[0px_4px_20px_0px_rgba(2,133,40,0.12)] size-[45.854px]" data-node-id="1:15528" data-name="image 1636404342">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1636404342} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[12px] items-center left-[16px] top-[283px] w-[358px]" data-node-id="1:15531">
        <div className="bg-[rgba(22,24,35,0.05)] content-stretch flex h-[36px] items-center justify-center px-[20px] py-[12px] relative rounded-[100px] shrink-0" data-node-id="1:15532" data-name="Label-选中">
          <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[color:var(--TextPrimary,#161823)] text-[length:var(--size-15,15px)] text-center whitespace-nowrap" data-node-id="1:15533">
            用户最爱
          </p>
        </div>
        <div className="bg-[rgba(22,24,35,0.05)] content-stretch flex h-[36px] items-center justify-center px-[20px] py-[12px] relative rounded-[100px] shrink-0" data-node-id="1:15534" data-name="Label-选中">
          <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))] text-[length:var(--size-15,15px)] text-center whitespace-nowrap" data-node-id="1:15535">
            近期热门
          </p>
        </div>
      </div>
      <div className="absolute flex h-[81.328px] items-center justify-center left-[167.89px] top-[89.18px] w-[120.117px]" data-node-id="1:15537">
        <div className="flex-none rotate-[-1.6deg]">
          <div className="h-[78.064px] relative w-[117.983px]" data-name="拟物icon">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[110.62%] left-0 max-w-none top-[-5.31%] w-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[8px] items-start left-1/2 top-[329px] w-[358px]" data-node-id="1:15538">
        <div className="bg-white content-stretch flex gap-[12px] items-center pl-[8px] pr-[12px] py-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:15539">
          <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="1:15540">
            <div className="border-[0.5px] border-[var(--line-linereverse2,rgba(22,24,35,0.12))] border-solid overflow-clip relative rounded-[10px] shrink-0 size-[70px]" data-node-id="1:15541">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
                <img alt="" className="absolute h-[101.63%] left-[-2.5%] max-w-none top-[-0.82%] w-[105%]" src={imgFrame2147242641} />
              </div>
              <div className="absolute left-[-0.5px] size-[70px] top-[-0.5px]" data-node-id="1:15542">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2131355618} />
              </div>
              <Top className="absolute h-[18px] left-[-0.5px] top-[-0.5px] w-[34px]" />
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:15544">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px relative">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.3] not-italic relative shrink-0 w-full" data-node-id="1:15545">
                  <p className="font-['PingFang_SC:Medium'] max-h-[20px] overflow-hidden relative shrink-0 text-[15px] text-black text-ellipsis w-full" data-node-id="1:15546">
                    旅游盲盒抽
                  </p>
                  <p className="capitalize font-['PingFang_SC:Regular'] max-h-[16px] overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-ellipsis w-full" data-node-id="1:15547">
                    拯救纠结困难户！去哪儿里玩随机抽取盲盒
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] h-[17px] items-center relative shrink-0" data-node-id="1:15548">
                  <div className="border-[0.5px] border-[var(--line-linereverse2,rgba(22,24,35,0.12))] border-solid relative rounded-[100px] shrink-0 size-[16px]" data-node-id="1:15549">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgRectangle11113577} />
                  </div>
                  <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[length:var(--size-12,12px)] text-[rgba(0,0,0,0.4)] whitespace-nowrap" data-node-id="1:15550">
                    古希腊掌管冲浪的神
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0" data-node-id="1:15551">
            <div className="bg-black content-stretch flex h-[30px] items-center justify-center relative rounded-[100px] shrink-0 w-[54px]" data-node-id="1:15552">
              <div className="[word-break:break-word] flex flex-col font-['Douyin_Sans:Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--text-textquaternary3,white)] text-center whitespace-nowrap" data-node-id="1:15553">
                <p className="leading-[normal]">打开</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))] text-[length:var(--size-10,10px)] whitespace-nowrap" data-node-id="1:15554">
              242人在用
            </p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] items-center pl-[8px] pr-[12px] py-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:15555">
          <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="1:15556">
            <div className="border-[0.5px] border-[var(--line-linereverse2,rgba(22,24,35,0.12))] border-solid overflow-clip relative rounded-[10px] shrink-0 size-[70px]" data-node-id="1:15557">
              <div className="absolute left-[-0.5px] rounded-[10px] size-[70px] top-[-0.5px]" data-node-id="1:15558">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle2131355619} />
              </div>
              <Top className="absolute h-[18px] left-[-0.5px] top-[-0.5px] w-[34px]" property1="TOP2" />
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:15560">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px relative">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.3] not-italic relative shrink-0 w-full" data-node-id="1:15561">
                  <p className="font-['PingFang_SC:Medium'] max-h-[20px] overflow-hidden relative shrink-0 text-[15px] text-black text-ellipsis w-full" data-node-id="1:15562">
                    宝可梦对战计算
                  </p>
                  <p className="capitalize font-['PingFang_SC:Regular'] max-h-[16px] overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-ellipsis w-full" data-node-id="1:15563">
                    皮卡丘要打出最高伤害，你选哪一招？
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] h-[17px] items-center relative shrink-0" data-node-id="1:15564">
                  <div className="border-[0.5px] border-[var(--line-linereverse2,rgba(22,24,35,0.12))] border-solid relative rounded-[100px] shrink-0 size-[16px]" data-node-id="1:15565">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgRectangle11113578} />
                  </div>
                  <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[length:var(--size-12,12px)] text-[rgba(0,0,0,0.4)] whitespace-nowrap" data-node-id="1:15566">
                    山水妹妹
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0" data-node-id="1:15567">
            <div className="bg-black content-stretch flex h-[30px] items-center justify-center relative rounded-[100px] shrink-0 w-[54px]" data-node-id="1:15568">
              <div className="[word-break:break-word] flex flex-col font-['Douyin_Sans:Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--text-textquaternary3,white)] text-center whitespace-nowrap" data-node-id="1:15569">
                <p className="leading-[normal]">打开</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))] text-[length:var(--size-10,10px)] whitespace-nowrap" data-node-id="1:15570">
              242人在用
            </p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] items-center pl-[8px] pr-[12px] py-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:15571">
          <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="1:15572">
            <div className="border-[0.5px] border-[var(--line-linereverse2,rgba(22,24,35,0.12))] border-solid overflow-clip relative rounded-[10px] shrink-0 size-[70px]" data-node-id="1:15573">
              <div className="absolute left-[-0.5px] rounded-[10px] size-[70px] top-[-0.5px]" data-node-id="1:15574">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
                  <img alt="" className="absolute h-[158.22%] left-[-41.5%] max-w-none top-[-19.34%] w-[183%]" src={imgRectangle2131355620} />
                </div>
              </div>
              <Top className="absolute h-[18px] left-[-0.5px] top-[-0.5px] w-[34px]" property1="TOP3" />
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:15576">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px relative">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-node-id="1:15577">
                  <p className="font-['PingFang_SC:Medium'] leading-[0] max-h-[20px] overflow-hidden relative shrink-0 text-[15px] text-black text-ellipsis w-full" data-node-id="1:15578">
                    <span className="leading-[1.3]">{`花间集 `}</span>
                    <span className="leading-[1.3] text-[13px]">|</span>
                    <span className="leading-[1.3]">{` 插画模拟器`}</span>
                  </p>
                  <p className="capitalize font-['PingFang_SC:Regular'] leading-[1.3] max-h-[16px] overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-ellipsis w-full" data-node-id="1:15579">
                    指尖插花，生成你的东方花笺，太美丽了
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] h-[17px] items-center relative shrink-0" data-node-id="1:15580">
                  <div className="border-[0.5px] border-[var(--line-linereverse2,rgba(22,24,35,0.12))] border-solid relative rounded-[100px] shrink-0 size-[16px]" data-node-id="1:15581">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgRectangle11113579} />
                  </div>
                  <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[length:var(--size-12,12px)] text-[rgba(0,0,0,0.4)] whitespace-nowrap" data-node-id="1:15582">{`AI 捕梦集 `}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0" data-node-id="1:15583">
            <div className="bg-black content-stretch flex h-[30px] items-center justify-center relative rounded-[100px] shrink-0 w-[54px]" data-node-id="1:15584">
              <div className="[word-break:break-word] flex flex-col font-['Douyin_Sans:Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--text-textquaternary3,white)] text-center whitespace-nowrap" data-node-id="1:15585">
                <p className="leading-[normal]">打开</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))] text-[length:var(--size-10,10px)] whitespace-nowrap" data-node-id="1:15586">
              242人在用
            </p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] items-center pl-[8px] pr-[12px] py-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:15587">
          <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="1:15588">
            <div className="border-[0.5px] border-[var(--line-linereverse2,rgba(22,24,35,0.12))] border-solid relative rounded-[10px] shrink-0 size-[70px]" data-node-id="1:15589">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle2131355621} />
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:15590">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px relative">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.3] not-italic relative shrink-0 w-full" data-node-id="1:15591">
                  <p className="font-['PingFang_SC:Medium'] max-h-[20px] overflow-hidden relative shrink-0 text-[15px] text-black text-ellipsis w-full" data-node-id="1:15592">
                    手机放烟花 vibecoding
                  </p>
                  <p className="capitalize font-['PingFang_SC:Regular'] max-h-[16px] overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-ellipsis w-full" data-node-id="1:15593">
                    烟花绽放的瞬间 是整个宇宙在为你闪烁
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] h-[17px] items-center relative shrink-0" data-node-id="1:15594">
                  <div className="border-[0.5px] border-[var(--line-linereverse2,rgba(22,24,35,0.12))] border-solid relative rounded-[100px] shrink-0 size-[16px]" data-node-id="1:15595">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgRectangle11113580} />
                  </div>
                  <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[length:var(--size-12,12px)] text-[rgba(0,0,0,0.4)] whitespace-nowrap" data-node-id="1:15596">
                    造梦者
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0" data-node-id="1:15597">
            <div className="bg-black content-stretch flex h-[30px] items-center justify-center relative rounded-[100px] shrink-0 w-[54px]" data-node-id="1:15598">
              <div className="[word-break:break-word] flex flex-col font-['Douyin_Sans:Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--text-textquaternary3,white)] text-center whitespace-nowrap" data-node-id="1:15599">
                <p className="leading-[normal]">打开</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))] text-[length:var(--size-10,10px)] whitespace-nowrap" data-node-id="1:15600">
              242人在用
            </p>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[12px] items-center pl-[8px] pr-[12px] py-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:15601">
          <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="1:15602">
            <div className="border-[0.5px] border-[var(--line-linereverse2,rgba(22,24,35,0.12))] border-solid relative rounded-[10px] shrink-0 size-[70px]" data-node-id="1:15603">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle2131355622} />
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:15604">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px relative">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.3] not-italic relative shrink-0 w-full" data-node-id="1:15605">
                  <p className="font-['PingFang_SC:Medium'] max-h-[20px] overflow-hidden relative shrink-0 text-[15px] text-black text-ellipsis w-full" data-node-id="1:15606">
                    艺术画生成
                  </p>
                  <p className="capitalize font-['PingFang_SC:Regular'] max-h-[16px] overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-ellipsis w-full" data-node-id="1:15607">
                    烟花绽放的瞬间 是整个宇宙在为你闪烁么美
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] h-[17px] items-center relative shrink-0" data-node-id="1:15608">
                  <div className="border-[0.5px] border-[var(--line-linereverse2,rgba(22,24,35,0.12))] border-solid relative rounded-[100px] shrink-0 size-[16px]" data-node-id="1:15609">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgRectangle11113578} />
                  </div>
                  <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[length:var(--size-12,12px)] text-[rgba(0,0,0,0.4)] whitespace-nowrap" data-node-id="1:15610">
                    山水妹妹
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0" data-node-id="1:15611">
            <div className="bg-black content-stretch flex h-[30px] items-center justify-center relative rounded-[100px] shrink-0 w-[54px]" data-node-id="1:15612">
              <div className="[word-break:break-word] flex flex-col font-['Douyin_Sans:Bold'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--text-textquaternary3,white)] text-center whitespace-nowrap" data-node-id="1:15613">
                <p className="leading-[normal]">打开</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))] text-[length:var(--size-10,10px)] whitespace-nowrap" data-node-id="1:15614">
              242人在玩
            </p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[10px] bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(255,255,255,0)] items-center left-1/2 to-[rgba(255,255,255,0.3)] w-[390px]" data-node-id="1:15615" data-name="底bar">
        <div className="bg-white content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.05)] flex gap-[24px] items-center justify-center p-[4px] relative rounded-[50px] shrink-0 w-[250px]" data-node-id="1:15632">
          <div className="bg-[var(--bg-bgimbubble,#f3f3f4)] content-stretch flex flex-[1_0_0] flex-col gap-px items-center min-w-px p-[8px] relative rounded-[60px]" data-node-id="1:15633">
            <div className="relative shrink-0 size-[20px]" data-node-id="1:15634" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[color:var(--TextPrimary,#161823)] text-[length:var(--size-10,10px)] text-center whitespace-nowrap" data-node-id="1:15643">
              发现
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-center min-w-px p-[8px] relative rounded-[60px]" data-node-id="1:15644">
            <div className="relative shrink-0 size-[20px]" data-node-id="1:15646" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] min-w-full not-italic relative shrink-0 text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))] text-[length:var(--size-10,10px)] text-center w-[min-content]" data-node-id="1:15659">
              消息
            </p>
          </div>
        </div>
        <div className="h-[34px] relative shrink-0 w-full" data-node-id="1:15660" data-name="DuxHomeIndicator">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%-0.5px)] rounded-[100px] w-[133px]" data-node-id="I1:15660;9512:2639" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}
