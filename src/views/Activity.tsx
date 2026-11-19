const imgProperty1Property2Dark = "./assets/068f7cf7-5435-4668-b54b-09fbdcbebef5.svg";
const imgProperty1Property2Light = "./assets/91fd6c14-501c-437c-bffb-ef8cad8a229c.svg";
const imgLightDark = undefined;
const imgIcSSArrowleft = "./assets/88e153c5-696a-4fc2-9546-c2d177eaefab.svg";
const imgImage1636403168 = "./assets/b8dddab6-123d-4211-acd7-3d5adcebe905.png";
const imgImage1636403169 = "./assets/e88d321e-a84a-4ac1-a794-8ac9c62badfd.png";
const imgCap = "./assets/b53895e2-f699-40ad-a263-11061d666ef7.svg";
const imgWifi = "./assets/13da3ef7-dc87-486a-8b86-89d83b908cf8.svg";
const imgCellularConnection = "./assets/de92ea2a-a982-4083-8d9e-56a5f1ad1d69.svg";
const imgClose = "./assets/08ec03ab-6588-46ee-b476-b3a356f45f5e.svg";

type ComponentProps = {
  className?: string;
  property1?: "常态";
  property2?: "dark" | "light";
};

function Component({ className, property1 = "常态", property2 = "light" }: ComponentProps) {
  const isAndLight = property1 === "常态" && property2 === "light";
  return (
    <div className={className || "h-[32px] relative w-[76px]"} id={isAndLight ? "node-1_9783" : "node-1_9753"}>
      <div className="absolute inset-[-1.56%_-0.66%]">
        <img alt="" className="block max-w-none size-full" src={isAndLight ? imgProperty1Property2Light : imgProperty1Property2Dark} />
      </div>
    </div>
  );
}

type IconProps = {
  className?: string;
  propValue?: "品牌" | "返回";
  propValue1?: "dark" | "light&dark";
};

function Icon({ className, propValue = "品牌", propValue1 = "light&dark" }: IconProps) {
  const isAndDark = propValue === "返回" && propValue1 === "dark";
  return (
    <div className={className || `border-[0.5px] border-solid relative rounded-[16px] size-[32px] ${isAndDark ? "bg-[rgba(22,24,35,0.15)] border-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center" : "border-[var(--linecapsule,rgba(22,24,35,0.1))] overflow-clip"}`} id={isAndDark ? "node-1_9744" : "node-1_9740"}>
      {propValue === "品牌" && propValue1 === "light&dark" && <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgLightDark} />}
      {isAndDark && (
        <div className="relative shrink-0 size-[24px]" data-node-id="1:9745" data-name="返回">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="1:9746" data-name="ic_s_s_arrowleft">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSArrowleft} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Component1() {
  return (
    <div className="overflow-clip relative rounded-[24px] size-full" data-node-id="1:15876" style={{ backgroundImage: "linear-gradient(90deg, rgb(137, 160, 255) 0%, rgb(137, 160, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="活动页面 - 订阅组件">
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start justify-center left-1/2 top-0" data-node-id="1:15879" data-name="顶导">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:15880" data-name="导航">
          <div className="h-[44px] relative shrink-0 w-full" data-node-id="1:15881" data-name="DuxStatusBar">
            <div className="-translate-y-1/2 absolute contents right-[14.34px] top-[calc(50%+1px)]" data-node-id="I1:15881;9511:2557" data-name="Battery">
              <div className="-translate-y-1/2 absolute border border-black border-solid h-[11.333px] opacity-35 right-[16.67px] rounded-[2.667px] top-[calc(50%+1px)] w-[22px]" data-node-id="I1:15881;9511:2558" data-name="Border" />
              <div className="-translate-y-1/2 absolute h-[4px] right-[14.34px] top-[calc(50%+1px)] w-[1.328px]" data-node-id="I1:15881;9511:2559" data-name="Cap">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCap} />
              </div>
              <div className="-translate-y-1/2 absolute bg-black h-[7.333px] right-[18.67px] rounded-[1.333px] top-[calc(50%+1px)] w-[18px]" data-node-id="I1:15881;9511:2560" data-name="Capacity" />
            </div>
            <div className="-translate-y-1/2 absolute h-[11px] right-[43.67px] top-[calc(50%+0.83px)] w-[15.333px]" data-node-id="I1:15881;9511:2561" data-name="Wifi">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
            </div>
            <div className="-translate-y-1/2 absolute h-[10.667px] right-[64px] top-[calc(50%+1px)] w-[17px]" data-node-id="I1:15881;9511:2565" data-name="Cellular Connection">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
            </div>
            <div className="-translate-y-1/2 absolute h-[21px] left-[21px] top-[calc(50%-4.17px)] w-[54px]" data-node-id="I1:15881;9511:2570" data-name="Time Style">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] leading-[normal] left-[27px] not-italic text-[15px] text-black text-center top-[calc(50%-3.5px)] tracking-[-0.3px] w-[54px]" data-node-id="I1:15881;9511:2571">
                9:41
              </p>
            </div>
          </div>
          <div className="content-stretch flex h-[50px] items-center justify-between px-[12px] relative shrink-0 w-[390px]" data-node-id="1:15913" data-name="导航">
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="I1:15913;4824:65426" data-name="左侧">
              <Icon className="bg-[rgba(22,24,35,0.15)] border-[0.5px] border-[rgba(255,255,255,0.15)] border-solid content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" propValue="返回" propValue1="dark" />
              <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[normal] not-italic relative shrink-0 text-[17px] text-[color:var(--text-textprimary,white)] whitespace-nowrap" data-node-id="I1:15913;4824:65428">
                活动名称
              </p>
            </div>
            <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0" data-node-id="I1:15913;4824:65429" data-name="右侧">
              <Component className="h-[32px] relative shrink-0 w-[76px]" property2="dark" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--bg-bgpopoverdefault,white)] border-[0.5px] border-[var(--line-linereverse2,rgba(22,24,35,0.12))] border-solid bottom-[34px] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.15)] h-[88px] left-[12px] rounded-[12px] w-[366px]" data-node-id="1:15914" data-name="DuxBottomNotification">
        <div className="absolute right-[11.5px] size-[16px] top-[11.5px]" data-node-id="1:15915" data-name="Close">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClose} />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[99.5px] top-[17.5px]" data-node-id="1:15916">
          <p className="[word-break:break-word] font-['Douyin_Sans:Bold'] font-[var(--weight-medium,normal)] leading-[normal] relative shrink-0 text-[color:var(--TextPrimary,#161823)] text-[length:var(--size-18,18px)] whitespace-nowrap" data-node-id="1:15917">
            订阅兴趣卡官方通知
          </p>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:15918">
            <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[0] not-italic relative shrink-0 text-[0px] text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))] whitespace-nowrap" data-node-id="1:15919">
              <span className="font-['PingFang_SC:Regular'] leading-[normal] text-[14px]">订阅</span>
              <span className="leading-[normal] text-[14px]">后</span>
              <span className="font-['PingFang_SC:Regular'] leading-[normal] text-[14px]">, 及时获取</span>
              <span className="leading-[normal] text-[14px]">最</span>
              <span className="font-['PingFang_SC:Regular'] leading-[normal] text-[14px]">{`新动态 `}</span>
            </p>
            <div className="bg-[var(--system-primary,#fe2c55)] h-[26px] relative rounded-[100px] shrink-0 w-[52px]" data-node-id="1:15920" data-name="Button">
              <div className="-translate-y-1/2 absolute content-stretch flex gap-[2px] items-center justify-center left-[12px] right-[12px] top-1/2" data-node-id="I1:15920;16515:50050" data-name="Content">
                <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font-cn,'PingFang_SC:Medium')] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text-consttextinverse,white)] text-[length:var(--size-12,12px)] whitespace-nowrap" data-node-id="I1:15920;16515:50052">
                  <p className="leading-[normal]">订阅</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[9.5px] size-[84px] top-[-14.5px]" data-node-id="1:15928">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[77.25px] items-center justify-center left-[calc(50%+7.55px)] top-[calc(50%-3.39px)] w-[61.23px]" data-node-id="1:15929">
            <div className="flex-none rotate-6">
              <div className="border border-solid border-white h-[72px] relative rounded-[8px] w-[54px]" data-name="image 1636403168">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1636403168} />
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute border border-solid border-white h-[72.727px] left-[calc(50%-5.89px)] rounded-[8px] shadow-[0px_2.766px_13.829px_0px_rgba(86,68,56,0.12)] top-[calc(50%+2.08px)] w-[60px]" data-node-id="1:15930" data-name="image 1636403168">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
              <img alt="" className="absolute h-[109.77%] left-0 max-w-none top-0 w-full" src={imgImage1636403169} />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[10px] bottom-0 content-stretch flex flex-col items-center left-1/2 w-[390px]" data-node-id="1:15931" data-name="底bar">
        <div className="h-[34px] relative shrink-0 w-full" data-node-id="1:15976" data-name="DuxHomeIndicator">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%-0.5px)] rounded-[100px] w-[133px]" data-node-id="I1:15976;9512:2639" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}
