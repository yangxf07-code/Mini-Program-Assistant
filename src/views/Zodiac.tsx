const img91611 = "./assets/07bd901e-c37a-4e8c-8e6e-a940afff5ffd.png";
const imgDuxAvatar = "./assets/fa26f741-82e9-408a-8e4e-9d81f531e53a.png";
const imgIcSSHeart = "./assets/1d5216fc-e939-4498-ba7a-a546ce47b863.svg";
const imgIcSSStar = "./assets/aaeec323-5e21-44d6-bec0-a835ba2a5a0d.svg";
const imgIcSSArrowdowntoright = "./assets/bdda62f4-0c8f-493e-95ae-b050a92f9888.svg";

export default function Component() {
  return (
    <div className="bg-[var(--bg-bgplaceholderdefault,rgba(22,24,35,0.05))] content-stretch flex flex-col items-start relative rounded-[20px] size-full" data-node-id="1:16502" data-name="星座">
      <div className="h-[650px] overflow-clip relative rounded-[20px] shrink-0 w-full" data-node-id="1:16503" data-name="卡片">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[650px] left-1/2 top-1/2 w-[366px]" data-node-id="1:16504" data-name="9_16 (1) 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[130.04%] left-[-3.35%] max-w-none top-[-15.23%] w-[106.57%]" src={img91611} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-[366px]" data-node-id="1:16586" data-name="互动区">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="1:16587" data-name="SoDesign 互动组件">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:16588" data-name="user">
            <div className="relative rounded-[12px] shrink-0 size-[24px]" data-node-id="1:16589" data-name="DUXAvatar">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="24" src={imgDuxAvatar} width="24" />
            </div>
            <p className="[word-break:break-word] font-['PingFang_SC:Semibold'] leading-[normal] not-italic relative shrink-0 text-[13px] text-[color:var(--TextPrimary,#161823)] whitespace-nowrap" data-node-id="1:16590">
              古希腊掌管冲…
            </p>
          </div>
          <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-node-id="1:16591" data-name="间距" />
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="1:16593">
            <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-[55px]" data-node-id="1:16594" data-name="点赞">
              <div className="relative shrink-0 size-[20px]" data-node-id="I1:16594;861:7913" data-name="ic_s_s_heart">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSHeart} />
              </div>
              <p className="[word-break:break-word] font-['PingFang_SC:Semibold'] leading-[normal] not-italic relative shrink-0 text-[13px] text-[color:var(--TextPrimary,#161823)] whitespace-nowrap" data-node-id="I1:16594;861:7914">
                21.1w
              </p>
            </div>
            <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-[55px]" data-node-id="1:16595" data-name="收藏">
              <div className="relative shrink-0 size-[20px]" data-node-id="I1:16595;866:7986" data-name="ic_s_s_star">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSStar} />
              </div>
              <p className="[word-break:break-word] font-['PingFang_SC:Semibold'] leading-[normal] not-italic relative shrink-0 text-[13px] text-[color:var(--TextPrimary,#161823)] whitespace-nowrap" data-node-id="I1:16595;866:7978">
                1.1w
              </p>
            </div>
            <div className="content-stretch flex gap-[6px] h-[24px] items-center justify-center relative shrink-0" data-node-id="1:16596" data-name="转发">
              <div className="relative shrink-0 size-[20px]" data-node-id="I1:16596;866:8014" data-name="ic_s_s_arrowdowntoright">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSArrowdowntoright} />
              </div>
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[color:var(--TextPrimary,#161823)] text-[length:var(--size-13,13px)] whitespace-nowrap" data-node-id="I1:16596;866:8008">
                分享
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
