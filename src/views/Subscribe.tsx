const imgLargeRoundDarkUnselectedDefault = "./assets/75130c78-86aa-456c-af80-f75b5d855845.svg";
const imgSmallRoundLightUnselectedDefault = "./assets/58b3eb3f-fc8f-441e-8da1-93f446ee2c7c.svg";
const imgLogo = "./assets/f18a295f-b0c1-40da-8eb0-92281fe7f6d1.png";
const imgVector4 = "./assets/bb1854d8-fb26-42d1-a895-b1773e6665bd.svg";
const img = "./assets/3d367a9f-cf04-4690-829f-c201b7a5a0b4.svg";
const img1 = "./assets/34f2ad69-4e1a-4a00-9bee-fc18f8263d87.svg";

type DuxCheckboxProps = {
  className?: string;
  propValue?: "Large" | "Small";
  propValue1?: "Round";
  propValue2?: "Light" | "Dark";
  propValue3?: boolean;
  propValue4?: "Default";
};

function DuxCheckbox({ className, propValue = "Large", propValue1 = "Round", propValue2 = "Dark", propValue3 = false, propValue4 = "Default" }: DuxCheckboxProps) {
  const isSmallAndRoundAndLightAndFalseAndDefault = propValue === "Small" && propValue1 === "Round" && propValue2 === "Light" && !propValue3 && propValue4 === "Default";
  return (
    <div className={className || `relative ${isSmallAndRoundAndLightAndFalseAndDefault ? "size-[16px]" : "size-[20px]"}`} id={isSmallAndRoundAndLightAndFalseAndDefault ? "node-1_4500" : "node-1_4464"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={isSmallAndRoundAndLightAndFalseAndDefault ? imgSmallRoundLightUnselectedDefault : imgLargeRoundDarkUnselectedDefault} />
    </div>
  );
}

export default function Group2147241549() {
  return (
    <div className="contents relative size-full" data-node-id="1:12059">
      <div className="absolute bg-[#161823] h-[844px] left-0 overflow-clip rounded-[24px] top-0 w-[390px]" data-node-id="1:12060" data-name="默认状态">
        <div className="absolute bg-[rgba(0,0,0,0.5)] h-[844px] left-0 top-0 w-[390px]" data-node-id="1:12061" />
        <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start left-0 rounded-tl-[20px] rounded-tr-[20px]" data-node-id="1:12068">
          <div className="content-stretch flex flex-col gap-[32px] items-start pt-[20px] relative shrink-0" data-node-id="1:12069">
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[390px]" data-node-id="1:12070">
              <div className="bg-white content-stretch flex flex-col gap-[12px] items-start px-[20px] relative shrink-0 w-full" data-node-id="1:12071" data-name="授权主体">
                <div className="content-stretch flex gap-[173px] items-center relative shrink-0 w-full" data-node-id="I1:12071;4763:29044" data-name="申请主体 + 管理路径">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1:12071;4733:29230" data-name="申请主体 + 管理路径">
                    <div className="border-[0.5px] border-[rgba(22,24,35,0.12)] border-solid relative rounded-[4px] shrink-0 size-[24px]" data-node-id="I1:12071;4733:29231" data-name="LOGO">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgLogo} />
                    </div>
                    <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[14px] text-center whitespace-nowrap" data-node-id="I1:12071;4733:29232">
                      兴趣卡官方助手
                    </p>
                    <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[14px] text-center whitespace-nowrap" data-node-id="I1:12071;4733:29233">
                      申请
                    </p>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-node-id="I1:12071;4733:29234" data-name="申请内容">
                  <p className="font-['PingFang_SC:Medium'] relative shrink-0 text-[#161823] text-[17px] w-full" data-node-id="I1:12071;4733:29235">
                    向你发送以下信息
                  </p>
                  <p className="font-['PingFang_SC:Regular'] relative shrink-0 text-[14px] text-[rgba(22,24,35,0.34)] w-full" data-node-id="I1:12071;4733:29236">
                    通过第三方服务助手发送
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-[350px]" data-node-id="1:12072">
                <div className="absolute inset-[-0.25px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[4px] items-start justify-center px-[20px] relative shrink-0 w-full" data-node-id="1:12073" data-name="常规授权项">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1:12074">
                  <div className="h-[24px] relative shrink-0 w-[16px]" data-node-id="1:12075" data-name="选择状态">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-node-id="1:12080" data-name="授权项">
                    <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[17px] w-full" data-node-id="1:12081">
                      创作进度提醒
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[4px] items-start justify-center px-[20px] relative shrink-0 w-full" data-node-id="1:12096" data-name="常规授权项">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1:12097">
                  <div className="h-[24px] relative shrink-0 w-[16px]" data-node-id="1:12098" data-name="选择状态">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-node-id="1:12103" data-name="授权项">
                    <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[17px] whitespace-nowrap" data-node-id="1:12104">
                      线上状态提醒
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex gap-[8px] items-center px-[20px] relative shrink-0 w-full" data-node-id="1:12119" data-name="常规授权项">
                <div className="h-[24px] relative shrink-0 w-[16px]" data-node-id="1:12120" data-name="选择状态">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={img1} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-node-id="1:12125" data-name="授权项">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[17px] w-full" data-node-id="1:12126">
                    官方活动提醒
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[20px] items-center justify-center p-[20px] relative shrink-0 w-[390px]" data-node-id="1:12146" data-name="授权操作">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:12147" data-name="主操作">
                <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:12148" data-name="关注">
                  <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0" data-node-id="1:12149" data-name="Check">
                    <DuxCheckbox className="relative shrink-0 size-[16px]" propValue="Small" propValue2="Light" />
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular'] leading-[normal] min-w-px not-italic relative text-[14px] text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))]" data-node-id="1:12151">
                    总是保持以上选择，不再询问
                  </p>
                </div>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:12152" data-name="按钮组">
                  <div className="bg-[rgba(22,24,35,0.05)] content-stretch flex flex-[1_0_0] h-[44px] items-center justify-center min-w-px px-[12px] relative rounded-[8px]" data-node-id="1:12153" data-name="拒绝">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic relative text-[#161823] text-[15px] text-center" data-node-id="I1:12153;9932:13927">
                      <p className="leading-[normal]">拒绝</p>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] h-[44px] min-w-px relative" data-node-id="1:12154" data-name="同意">
                    <div className="absolute bg-[#fe2c55] content-stretch flex inset-0 items-center justify-center px-[12px] rounded-[8px]" data-node-id="I1:12154;9932:13901" data-name="Button Default">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic relative text-[15px] text-center text-white" data-node-id="I1:12154;9932:13901;9931:10040">
                        <p className="leading-[normal]">同意</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[34px] relative shrink-0 w-full" data-node-id="1:12156" data-name="Home Indicator/on_Dark">
            <div className="absolute bottom-[9px] contents left-[121px] right-[120px]" data-node-id="I1:12156;3118:10749;8:453" data-name="Bars / Home Indicator / On Dark">
              <div className="absolute bg-black bottom-[9px] h-[5px] left-[121px] right-[120px] rounded-[100px]" data-node-id="I1:12156;3118:10749;8:454" data-name="Home Indicator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
