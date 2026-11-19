const imgIconArrowDownNarrowWide = "./assets/c233baa1-2843-44b2-a3fb-5200f758f5fe.svg";
const imgProperty1Property2Light = "./assets/91fd6c14-501c-437c-bffb-ef8cad8a229c.svg";
const imgImage = "./assets/865347da-261b-4aba-bb96-bb103482a266.svg";
const imgFrame = "./assets/aaae129f-f02d-47a7-97b8-2f5550bfa9c7.svg";
const imgFrame1 = "./assets/de52dedc-f3fe-4d74-b03d-aba9cf80e99f.svg";
const imgCap = "./assets/b53895e2-f699-40ad-a263-11061d666ef7.svg";
const imgWifi = "./assets/13da3ef7-dc87-486a-8b86-89d83b908cf8.svg";
const imgCellularConnection = "./assets/de92ea2a-a982-4083-8d9e-56a5f1ad1d69.svg";
const imgIcSSTrianglesdown = "./assets/ee2f6214-acca-4929-aab0-834dc6c758d9.svg";

function IconArrowDownNarrowWide({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="1:12003" data-name="Icon / ArrowDownNarrowWide">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArrowDownNarrowWide} />
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

export default function Component1() {
  return (
    <div className="overflow-clip relative rounded-[24px] size-full" data-node-id="1:12895" style={{ backgroundImage: "linear-gradient(90deg, rgb(244, 247, 251) 0%, rgb(244, 247, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="空态">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] h-[146px] items-center left-1/2 top-1/2 w-[240px]" data-node-id="1:12896" data-name="缺省态">
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-node-id="I1:12896;59:2758" data-name="Content">
          <div className="relative shrink-0 size-[80px]" data-node-id="I1:12896;59:2759" data-name="Image">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgImage} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[normal] not-italic relative shrink-0 text-center" data-node-id="I1:12896;59:2760" data-name="Label">
            <p className="font-[family-name:var(--font-cn,'PingFang_SC:Medium')] relative shrink-0 text-[color:var(--TextPrimary,#161823)] text-[length:var(--size-17,17px)] w-[240px]" data-node-id="I1:12896;59:2761">
              暂无消息
            </p>
            <p className="font-['PingFang_SC:Regular'] relative shrink-0 text-[14px] text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))] w-[240px]" data-node-id="I1:12896;59:2762">
              你暂未创建过任何兴趣卡
            </p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[6px] bottom-0 content-stretch flex flex-col items-center left-1/2 w-[390px]" data-node-id="1:12897" data-name="底bar">
        <div className="bg-white content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.05)] flex gap-[24px] items-center justify-center p-[4px] relative rounded-[50px] shrink-0 w-[250px]" data-node-id="1:12914">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-center min-w-px p-[8px] relative rounded-[60px]" data-node-id="1:12915">
            <div className="relative shrink-0 size-[20px]" data-node-id="1:12916" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))] text-[length:var(--size-10,10px)] text-center whitespace-nowrap" data-node-id="1:12925">
              发现
            </p>
          </div>
          <div className="bg-[var(--bg-bgimbubble,#f3f3f4)] content-stretch flex flex-[1_0_0] flex-col gap-px items-center min-w-px p-[8px] relative rounded-[60px]" data-node-id="1:12926">
            <div className="relative shrink-0 size-[20px]" data-node-id="1:12928" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] min-w-full not-italic relative shrink-0 text-[color:var(--TextPrimary,#161823)] text-[length:var(--size-10,10px)] text-center w-[min-content]" data-node-id="1:12937">
              消息
            </p>
          </div>
        </div>
        <div className="h-[34px] relative shrink-0 w-full" data-node-id="1:12938" data-name="DuxHomeIndicator">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%-0.5px)] rounded-[100px] w-[133px]" data-node-id="I1:12938;9512:2639" data-name="Home Indicator" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start justify-center left-1/2 top-0" data-node-id="1:12939" style={{ backgroundImage: "linear-gradient(180.00000000000023deg, rgba(244, 247, 251, 0) 0%, rgb(244, 247, 251) 79.014%), linear-gradient(152.69427771542922deg, rgba(207, 236, 255, 0.6) 12.749%, rgba(204, 243, 255, 0.6) 88.882%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="顶导">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:12940" data-name="导航">
          <div className="h-[44px] relative shrink-0 w-full" data-node-id="1:12941" data-name="DuxStatusBar">
            <div className="-translate-y-1/2 absolute contents right-[14.34px] top-[calc(50%+1px)]" data-node-id="I1:12941;9511:2557" data-name="Battery">
              <div className="-translate-y-1/2 absolute border border-black border-solid h-[11.333px] opacity-35 right-[16.67px] rounded-[2.667px] top-[calc(50%+1px)] w-[22px]" data-node-id="I1:12941;9511:2558" data-name="Border" />
              <div className="-translate-y-1/2 absolute h-[4px] right-[14.34px] top-[calc(50%+1px)] w-[1.328px]" data-node-id="I1:12941;9511:2559" data-name="Cap">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCap} />
              </div>
              <div className="-translate-y-1/2 absolute bg-black h-[7.333px] right-[18.67px] rounded-[1.333px] top-[calc(50%+1px)] w-[18px]" data-node-id="I1:12941;9511:2560" data-name="Capacity" />
            </div>
            <div className="-translate-y-1/2 absolute h-[11px] right-[43.67px] top-[calc(50%+0.83px)] w-[15.333px]" data-node-id="I1:12941;9511:2561" data-name="Wifi">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
            </div>
            <div className="-translate-y-1/2 absolute h-[10.667px] right-[64px] top-[calc(50%+1px)] w-[17px]" data-node-id="I1:12941;9511:2565" data-name="Cellular Connection">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
            </div>
            <div className="-translate-y-1/2 absolute h-[21px] left-[21px] top-[calc(50%-4.17px)] w-[54px]" data-node-id="I1:12941;9511:2570" data-name="Time Style">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] leading-[normal] left-[27px] not-italic text-[15px] text-black text-center top-[calc(50%-3.5px)] tracking-[-0.3px] w-[54px]" data-node-id="I1:12941;9511:2571">
                9:41
              </p>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[10px] relative shrink-0 w-[390px]" data-node-id="1:12942" data-name="导航">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:12952" data-name="logo">
              <p className="[word-break:break-word] font-['Douyin_Sans:Bold'] leading-[normal] not-italic relative shrink-0 text-[20px] text-[color:var(--text-textprimary,#161823)] whitespace-nowrap" data-node-id="1:12955">
                兴趣卡消息通知
              </p>
            </div>
            <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0" data-node-id="1:12968" data-name="右侧">
              <Component className="h-[32px] relative shrink-0 w-[76px]" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative shrink-0 w-[390px]" data-node-id="1:12989" data-name="筛选">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:12990">
            <div className="bg-[rgba(22,24,35,0.04)] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[16px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:12991" data-name="未选">
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[color:var(--TextPrimary,#161823)] text-[length:var(--size-14,14px)] text-center whitespace-nowrap" data-node-id="1:12992">
                全部
              </p>
            </div>
            <div className="bg-[rgba(22,24,35,0.04)] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[16px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:13000" data-name="未选">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))] text-center whitespace-nowrap" data-node-id="1:13001">
                名称
              </p>
              <div className="relative shrink-0 size-[12px]" data-node-id="1:13002" data-name="ic_s_s_trianglesdown">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSTrianglesdown} />
              </div>
            </div>
            <div className="bg-[rgba(22,24,35,0.04)] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[16px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:13004" data-name="未选">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))] text-center whitespace-nowrap" data-node-id="1:13005">
                类型
              </p>
              <div className="relative shrink-0 size-[12px]" data-node-id="1:13006" data-name="ic_s_s_trianglesdown">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSTrianglesdown} />
              </div>
            </div>
          </div>
          <div className="bg-[rgba(22,24,35,0.04)] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[16px] py-[9px] relative rounded-[50px] shrink-0 w-[48px]" data-node-id="1:13008" data-name="未选">
            <IconArrowDownNarrowWide className="relative shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
