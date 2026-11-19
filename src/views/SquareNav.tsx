const imgIcSSSearch = "./assets/8e6edc1c-80b2-4630-9405-586318cc84d4.svg";
const imgCap = "./assets/b53895e2-f699-40ad-a263-11061d666ef7.svg";
const imgWifi = "./assets/13da3ef7-dc87-486a-8b86-89d83b908cf8.svg";
const imgCellularConnection = "./assets/de92ea2a-a982-4083-8d9e-56a5f1ad1d69.svg";
const imgLeftButton1 = "./assets/9fd61562-b030-4438-9490-7309cd12e5ff.svg";

function Search({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex items-center justify-center relative rounded-[100px] size-[24px]"} data-node-id="1:3002" data-name="search">
      <div className="relative shrink-0 size-[24px]" data-node-id="1:3003" data-name="ic_s_s_search">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSSearch} />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="1:17122" data-name="导航">
      <div className="bg-white h-[44px] relative shrink-0 w-full" data-node-id="1:17123" data-name="DuxStatusBar">
        <div className="-translate-y-1/2 absolute contents right-[14.34px] top-[calc(50%+1px)]" data-node-id="I1:17123;9511:2557" data-name="Battery">
          <div className="-translate-y-1/2 absolute border border-black border-solid h-[11.333px] opacity-35 right-[16.67px] rounded-[2.667px] top-[calc(50%+1px)] w-[22px]" data-node-id="I1:17123;9511:2558" data-name="Border" />
          <div className="-translate-y-1/2 absolute h-[4px] right-[14.34px] top-[calc(50%+1px)] w-[1.328px]" data-node-id="I1:17123;9511:2559" data-name="Cap">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCap} />
          </div>
          <div className="-translate-y-1/2 absolute bg-black h-[7.333px] right-[18.67px] rounded-[1.333px] top-[calc(50%+1px)] w-[18px]" data-node-id="I1:17123;9511:2560" data-name="Capacity" />
        </div>
        <div className="-translate-y-1/2 absolute h-[11px] right-[43.67px] top-[calc(50%+0.83px)] w-[15.333px]" data-node-id="I1:17123;9511:2561" data-name="Wifi">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
        </div>
        <div className="-translate-y-1/2 absolute h-[10.667px] right-[64px] top-[calc(50%+1px)] w-[17px]" data-node-id="I1:17123;9511:2565" data-name="Cellular Connection">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
        </div>
        <div className="-translate-y-1/2 absolute h-[21px] left-[21px] top-[calc(50%-4.17px)] w-[54px]" data-node-id="I1:17123;9511:2570" data-name="Time Style">
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] leading-[normal] left-[27px] not-italic text-[15px] text-black text-center top-[calc(50%-3.5px)] tracking-[-0.3px] w-[54px]" data-node-id="I1:17123;9511:2571">
            9:41
          </p>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[16px] h-[44px] items-center px-[12px] relative shrink-0 w-[390px]" data-node-id="1:17124" data-name="导航">
        <div className="content-stretch flex gap-[20px] items-center justify-center relative rounded-[100px] shrink-0 size-[24px]" data-node-id="I1:17124;225:22426" data-name="back">
          <div className="relative shrink-0 size-[20px]" data-node-id="I1:17124;225:22426;224:18895" data-name="Left Button 1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeftButton1} />
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] font-[var(--weight-medium,normal)] h-[25px] leading-[normal] min-w-px relative text-[color:var(--text-textprimary,#161823)] text-[length:var(--size-18,18px)] text-center" data-node-id="I1:17124;266:3615">
          兴趣卡
        </p>
        <div className="content-stretch flex gap-[4px] items-center justify-end opacity-0 relative shrink-0" data-node-id="I1:17124;224:18871" data-name="右侧">
          <Search className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[24px]" />
        </div>
      </div>
    </div>
  );
}
