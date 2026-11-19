const imgDot = "./assets/0ec48411-e263-4d15-b7f4-d8bbcf65e485.svg";
const imgIconArrowDownNarrowWide = "./assets/c233baa1-2843-44b2-a3fb-5200f758f5fe.svg";
const imgProperty1Property2Light = "./assets/91fd6c14-501c-437c-bffb-ef8cad8a229c.svg";
const imgIcon = "./assets/46341f10-1bcd-4397-afdd-7f7b530a991a.png";
const imgRectangle346243411 = "./assets/7a819101-7179-408b-9e9c-b0d79c1a715e.png";
const imgIcSSArrowforwardOutlined12 = "./assets/7f984950-9b1f-4606-90a8-1a770323f216.svg";
const imgIcon1 = "./assets/d82671b7-61de-44bc-8fd3-a81e59231a0b.png";
const imgRectangle346243412 = "./assets/473541fc-f840-441e-8297-035fa135039c.png";
const imgIcon2 = "./assets/56351709-83be-46b6-9530-042f8a5a4dab.png";
const imgRectangle346243413 = "./assets/da74e31c-1942-48e1-9672-8582cccec076.png";
const imgCap = "./assets/b53895e2-f699-40ad-a263-11061d666ef7.svg";
const imgWifi = "./assets/13da3ef7-dc87-486a-8b86-89d83b908cf8.svg";
const imgCellularConnection = "./assets/de92ea2a-a982-4083-8d9e-56a5f1ad1d69.svg";
const imgIcSSTrianglesdown = "./assets/ee2f6214-acca-4929-aab0-834dc6c758d9.svg";
const imgFrame = "./assets/c5f4d45e-52e5-4d9c-a0e2-971ad129949c.svg";
const imgFrame1 = "./assets/9b06a37e-7836-4791-a6ad-593c39fa0445.svg";
const imgDuxGrabber = "./assets/830e0855-14fb-4776-acd8-8f92b41f2f0e.svg";

type DuxBadgesProps = {
  className?: string;
  propValue?: "Dot";
};

function DuxBadges({ className, propValue = "Dot" }: DuxBadgesProps) {
  return (
    <div className={className || "relative size-[8px]"} data-node-id="1:4007">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
    </div>
  );
}

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

type Component1Props = {
  className?: string;
  property1?: "有图";
};

function Component1({ className, property1 = "有图" }: Component1Props) {
  return (
    <div className={className || "bg-[var(--bg-bgcard,white)] content-stretch flex flex-col items-center relative rounded-[12px] w-[358px]"} data-node-id="1:4021">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="1:4022" data-name="info">
        <div className="content-stretch flex flex-col h-[52px] items-center overflow-clip relative shrink-0 w-full" data-node-id="1:4023" data-name="tittle">
          <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:4024" data-name="text">
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:4032" data-name="icon+名称">
              <div className="overflow-clip relative rounded-[100px] shrink-0 size-[28px]" data-node-id="1:4033" data-name="icon">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgIcon} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="1:4037" data-name="标题">
                <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-textprimary,#161823)] text-[length:var(--size-15,15px)] whitespace-nowrap" data-node-id="1:4038">
                  谜卡探案
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="1:4040">
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-13,13px)] whitespace-nowrap" data-node-id="1:4041">
                11月10日
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pb-[12px] px-[16px] relative shrink-0 w-full" data-node-id="1:4047">
          <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-node-id="1:4048">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-node-id="1:4049" data-name="标题部分">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="1:4050">
                <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[length:var(--size-17,17px)] whitespace-nowrap" data-node-id="1:4051">
                  发布审核通过
                </p>
                <DuxBadges className="relative shrink-0 size-[8px]" />
              </div>
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] h-[40px] leading-[normal] max-h-[40px] not-italic overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))] text-ellipsis w-full" data-node-id="1:4054">
                你提交的兴趣卡已审核通过并进入分发环节，平台会结合兴趣卡功能、内容以及平台推荐策略，向抖音用户进行兴趣卡推荐。
              </p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[60px]" data-node-id="1:4056" data-name="pic">
              <div className="-translate-y-1/2 absolute contents left-[14.76%] right-[1.67%] top-1/2" data-node-id="1:4057">
                <div className="-translate-y-1/2 absolute flex h-[60.158px] items-center justify-center left-[14.76%] right-[1.67%] top-1/2" data-node-id="1:4058" style={{ containerType: "size" }}>
                  <div className="flex-none h-[hypot(-21.9748cqw,86.1757cqh)] rotate-12 w-[hypot(78.0252cqw,13.8243cqh)]">
                    <div className="bg-[rgba(0,0,0,0.2)] border border-solid border-white opacity-40 relative rounded-[8px] size-full" />
                  </div>
                </div>
                <div className="-translate-y-1/2 absolute border border-solid border-white h-[53px] left-[14.76%] right-[18.58%] rounded-[8px] top-[calc(50%+3.5px)]" data-node-id="1:4059">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle346243411} />
                </div>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font-cn,'PingFang_SC:Regular')] gap-[6px] items-start leading-[normal] not-italic relative shrink-0 w-[250px]" data-node-id="1:4061" data-name="list">
            <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-node-id="1:4065" data-name="info">
              <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-14,14px)] w-[60px]" data-node-id="1:4066">
                卡片ID
              </p>
              <p className="flex-[1_0_0] max-h-[20px] min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))] text-ellipsis" data-node-id="1:4067">
                tt1fb4690981cbff4701
              </p>
            </div>
            <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-node-id="1:4068" data-name="info">
              <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-14,14px)] w-[60px]" data-node-id="1:4069">
                审核版本
              </p>
              <p className="flex-[1_0_0] max-h-[20px] min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))] text-ellipsis" data-node-id="1:4070">
                V2.0.0
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:4074" data-name="action">
        <div className="content-stretch flex flex-col items-center justify-center mb-[-0.5px] overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="1:4075" data-name="line">
          <div className="bg-[rgba(22,24,35,0.12)] h-[0.5px] relative shrink-0 w-full" data-node-id="1:4076" data-name="line" />
        </div>
        <div className="content-stretch flex gap-[24px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="1:4077" data-name="action">
          <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[length:var(--size-14,14px)] whitespace-nowrap" data-node-id="1:4078">
            查看详情
          </p>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-w-px relative" data-node-id="1:4079" data-name="行动点">
            <div className="relative shrink-0 size-[12px]" data-node-id="1:4081" data-name="icon 12">
              <div className="absolute left-0 size-[12px] top-[0.5px]" data-node-id="1:4082" data-name="ic_s_s_arrowforward_outlined_12">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSArrowforwardOutlined12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component2() {
  return (
    <div className="overflow-clip relative rounded-[24px] size-full" data-node-id="1:13293" style={{ backgroundImage: "linear-gradient(90deg, rgb(244, 247, 251) 0%, rgb(244, 247, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="查看详情">
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[152px] w-[358px]" data-node-id="1:13294" data-name="list">
        <Component1 className="bg-[var(--bg-bgcard,white)] content-stretch flex flex-col items-center relative rounded-[12px] shrink-0 w-[358px]" />
        <div className="bg-[var(--bg-bgcard,white)] content-stretch flex flex-col items-center relative rounded-[12px] shrink-0 w-[358px]" data-node-id="1:13296" data-name="消息模版">
          <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="I1:13296;2565:33286" data-name="info">
            <div className="content-stretch flex flex-col h-[52px] items-center overflow-clip relative shrink-0 w-full" data-node-id="I1:13296;2565:33287" data-name="tittle">
              <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="I1:13296;2565:33288" data-name="text">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1:13296;2565:33296" data-name="icon+名称">
                  <div className="overflow-clip relative rounded-[100px] shrink-0 size-[28px]" data-node-id="I1:13296;2565:33297" data-name="icon">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgIcon1} />
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:13296;2565:33301" data-name="标题">
                    <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-textprimary,#161823)] text-[length:var(--size-15,15px)] whitespace-nowrap" data-node-id="I1:13296;2565:33302">
                      国粹青衣全解
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:13296;2599:60736">
                  <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-13,13px)] whitespace-nowrap" data-node-id="I1:13296;2599:60737">
                    11月9日
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pb-[12px] px-[16px] relative shrink-0 w-full" data-node-id="I1:13296;2565:33309">
              <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-node-id="I1:13296;2565:33310">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-node-id="I1:13296;2565:33311" data-name="标题部分">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:13296;2565:33312">
                    <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[length:var(--size-17,17px)] whitespace-nowrap" data-node-id="I1:13296;2565:33313">
                      线上异常提醒
                    </p>
                    <DuxBadges className="relative shrink-0 size-[8px]" />
                  </div>
                  <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] h-[40px] leading-[normal] max-h-[40px] not-italic overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))] text-ellipsis w-full" data-node-id="I1:13296;2565:33316">
                    系统检测到你的兴趣卡存在性能质量问题，请登录「抖音创作者中心-AI工坊」查看详情，检查并修改卡片后重新提交发布
                  </p>
                </div>
                <div className="overflow-clip relative shrink-0 size-[60px]" data-node-id="I1:13296;2565:33318" data-name="pic">
                  <div className="-translate-y-1/2 absolute contents left-[14.76%] right-[1.67%] top-1/2" data-node-id="I1:13296;2565:33319">
                    <div className="-translate-y-1/2 absolute flex h-[60.158px] items-center justify-center left-[14.76%] right-[1.67%] top-1/2" data-node-id="I1:13296;2565:33320" style={{ containerType: "size" }}>
                      <div className="flex-none h-[hypot(-21.9748cqw,86.1757cqh)] rotate-12 w-[hypot(78.0252cqw,13.8243cqh)]">
                        <div className="bg-[rgba(0,0,0,0.2)] border border-solid border-white opacity-40 relative rounded-[8px] size-full" />
                      </div>
                    </div>
                    <div className="-translate-y-1/2 absolute border border-solid border-white h-[53px] left-[14.76%] right-[18.58%] rounded-[8px] top-[calc(50%+3.5px)]" data-node-id="I1:13296;2565:33321">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                        <img alt="" className="absolute h-full left-[-0.06%] max-w-none top-[-1.88%] w-[100.12%]" src={imgRectangle346243412} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font-cn,'PingFang_SC:Regular')] gap-[6px] items-start leading-[normal] not-italic relative shrink-0 w-[250px]" data-node-id="I1:13296;2565:33323" data-name="list">
                <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-node-id="I1:13296;2565:33327" data-name="info">
                  <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-14,14px)] w-[60px]" data-node-id="I1:13296;2565:33328">
                    卡片ID
                  </p>
                  <p className="flex-[1_0_0] max-h-[20px] min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))] text-ellipsis" data-node-id="I1:13296;2565:33329">
                    tt1fb4690981cbff4701
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-node-id="I1:13296;2565:33330" data-name="info">
                  <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-14,14px)] w-[60px]" data-node-id="I1:13296;2565:33331">
                    审核版本
                  </p>
                  <p className="flex-[1_0_0] max-h-[20px] min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))] text-ellipsis" data-node-id="I1:13296;2565:33332">
                    V2.0.0
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I1:13296;2565:33336" data-name="action">
            <div className="content-stretch flex flex-col items-center justify-center mb-[-0.5px] overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="I1:13296;2565:33337" data-name="line">
              <div className="bg-[rgba(22,24,35,0.12)] h-[0.5px] relative shrink-0 w-full" data-node-id="I1:13296;2565:33338" data-name="line" />
            </div>
            <div className="content-stretch flex gap-[24px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="I1:13296;2565:33339" data-name="action">
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[length:var(--size-14,14px)] whitespace-nowrap" data-node-id="I1:13296;2565:33340">
                查看详情
              </p>
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-w-px relative" data-node-id="I1:13296;2565:33341" data-name="行动点">
                <div className="relative shrink-0 size-[12px]" data-node-id="I1:13296;2565:33343" data-name="icon 12">
                  <div className="absolute left-0 size-[12px] top-[0.5px]" data-node-id="I1:13296;2565:33344" data-name="ic_s_s_arrowforward_outlined_12">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSArrowforwardOutlined12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--bg-bgcard,white)] content-stretch flex flex-col items-center relative rounded-[12px] shrink-0 w-[358px]" data-node-id="1:13297" data-name="消息模版">
          <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="I1:13297;2565:33286" data-name="info">
            <div className="content-stretch flex flex-col h-[52px] items-center overflow-clip relative shrink-0 w-full" data-node-id="I1:13297;2565:33287" data-name="tittle">
              <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="I1:13297;2565:33288" data-name="text">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1:13297;2565:33296" data-name="icon+名称">
                  <div className="overflow-clip relative rounded-[100px] shrink-0 size-[28px]" data-node-id="I1:13297;2565:33297" data-name="icon">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgIcon2} />
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:13297;2565:33301" data-name="标题">
                    <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-textprimary,#161823)] text-[length:var(--size-15,15px)] whitespace-nowrap" data-node-id="I1:13297;2565:33302">
                      日语短语跟读
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:13297;2599:60736">
                  <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-13,13px)] whitespace-nowrap" data-node-id="I1:13297;2599:60737">
                    11月8日
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pb-[12px] px-[16px] relative shrink-0 w-full" data-node-id="I1:13297;2565:33309">
              <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-node-id="I1:13297;2565:33310">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-node-id="I1:13297;2565:33311" data-name="标题部分">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:13297;2565:33312">
                    <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[length:var(--size-17,17px)] whitespace-nowrap" data-node-id="I1:13297;2565:33313">
                      线上异常提醒
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] h-[40px] leading-[normal] max-h-[40px] not-italic overflow-hidden relative shrink-0 text-[14px] text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))] text-ellipsis w-full" data-node-id="I1:13297;2565:33316">
                    你提交的兴趣卡已审核通过并进入分发环节，平台会结合兴趣卡功能、内容以及平台推荐策略，向抖音用户进行兴趣卡推荐。
                  </p>
                </div>
                <div className="overflow-clip relative shrink-0 size-[60px]" data-node-id="I1:13297;2565:33318" data-name="pic">
                  <div className="-translate-y-1/2 absolute contents left-[14.76%] right-[1.67%] top-1/2" data-node-id="I1:13297;2565:33319">
                    <div className="-translate-y-1/2 absolute flex h-[60.158px] items-center justify-center left-[14.76%] right-[1.67%] top-1/2" data-node-id="I1:13297;2565:33320" style={{ containerType: "size" }}>
                      <div className="flex-none h-[hypot(-21.9748cqw,86.1757cqh)] rotate-12 w-[hypot(78.0252cqw,13.8243cqh)]">
                        <div className="bg-[rgba(0,0,0,0.2)] border border-solid border-white opacity-40 relative rounded-[8px] size-full" />
                      </div>
                    </div>
                    <div className="-translate-y-1/2 absolute border border-solid border-white h-[53px] left-[14.76%] right-[18.58%] rounded-[8px] top-[calc(50%+3.5px)]" data-node-id="I1:13297;2565:33321">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle346243413} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font-cn,'PingFang_SC:Regular')] gap-[6px] items-start leading-[normal] not-italic relative shrink-0 w-[250px]" data-node-id="I1:13297;2565:33323" data-name="list">
                <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-node-id="I1:13297;2565:33327" data-name="info">
                  <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-14,14px)] w-[60px]" data-node-id="I1:13297;2565:33328">
                    卡片ID
                  </p>
                  <p className="flex-[1_0_0] max-h-[20px] min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))] text-ellipsis" data-node-id="I1:13297;2565:33329">
                    tt1fb4690981cbff4701
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-node-id="I1:13297;2565:33330" data-name="info">
                  <p className="relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-14,14px)] w-[60px]" data-node-id="I1:13297;2565:33331">
                    审核版本
                  </p>
                  <p className="flex-[1_0_0] max-h-[20px] min-w-px overflow-hidden relative text-[14px] text-[color:var(--text-textsecondary,rgba(22,24,35,0.75))] text-ellipsis" data-node-id="I1:13297;2565:33332">
                    V2.0.0
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I1:13297;2565:33336" data-name="action">
            <div className="content-stretch flex flex-col items-center justify-center mb-[-0.5px] overflow-clip px-[16px] relative shrink-0 w-full" data-node-id="I1:13297;2565:33337" data-name="line">
              <div className="bg-[rgba(22,24,35,0.12)] h-[0.5px] relative shrink-0 w-full" data-node-id="I1:13297;2565:33338" data-name="line" />
            </div>
            <div className="content-stretch flex gap-[24px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="I1:13297;2565:33339" data-name="action">
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[length:var(--size-14,14px)] whitespace-nowrap" data-node-id="I1:13297;2565:33340">
                查看详情
              </p>
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-w-px relative" data-node-id="I1:13297;2565:33341" data-name="行动点">
                <div className="relative shrink-0 size-[12px]" data-node-id="I1:13297;2565:33343" data-name="icon 12">
                  <div className="absolute left-0 size-[12px] top-[0.5px]" data-node-id="I1:13297;2565:33344" data-name="ic_s_s_arrowforward_outlined_12">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSArrowforwardOutlined12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start justify-center left-1/2 top-0" data-node-id="1:13298" style={{ backgroundImage: "linear-gradient(180.00000000000023deg, rgba(244, 247, 251, 0) 0%, rgb(244, 247, 251) 79.014%), linear-gradient(152.69427771542922deg, rgba(207, 236, 255, 0.6) 12.749%, rgba(204, 243, 255, 0.6) 88.882%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="顶导">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:13299" data-name="导航">
          <div className="h-[44px] relative shrink-0 w-full" data-node-id="1:13300" data-name="DuxStatusBar">
            <div className="-translate-y-1/2 absolute contents right-[14.34px] top-[calc(50%+1px)]" data-node-id="I1:13300;9511:2557" data-name="Battery">
              <div className="-translate-y-1/2 absolute border border-black border-solid h-[11.333px] opacity-35 right-[16.67px] rounded-[2.667px] top-[calc(50%+1px)] w-[22px]" data-node-id="I1:13300;9511:2558" data-name="Border" />
              <div className="-translate-y-1/2 absolute h-[4px] right-[14.34px] top-[calc(50%+1px)] w-[1.328px]" data-node-id="I1:13300;9511:2559" data-name="Cap">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCap} />
              </div>
              <div className="-translate-y-1/2 absolute bg-black h-[7.333px] right-[18.67px] rounded-[1.333px] top-[calc(50%+1px)] w-[18px]" data-node-id="I1:13300;9511:2560" data-name="Capacity" />
            </div>
            <div className="-translate-y-1/2 absolute h-[11px] right-[43.67px] top-[calc(50%+0.83px)] w-[15.333px]" data-node-id="I1:13300;9511:2561" data-name="Wifi">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
            </div>
            <div className="-translate-y-1/2 absolute h-[10.667px] right-[64px] top-[calc(50%+1px)] w-[17px]" data-node-id="I1:13300;9511:2565" data-name="Cellular Connection">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
            </div>
            <div className="-translate-y-1/2 absolute h-[21px] left-[21px] top-[calc(50%-4.17px)] w-[54px]" data-node-id="I1:13300;9511:2570" data-name="Time Style">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] leading-[normal] left-[27px] not-italic text-[15px] text-black text-center top-[calc(50%-3.5px)] tracking-[-0.3px] w-[54px]" data-node-id="I1:13300;9511:2571">
                9:41
              </p>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[10px] relative shrink-0 w-[390px]" data-node-id="1:13301" data-name="导航">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:13311" data-name="logo">
              <p className="[word-break:break-word] font-['Douyin_Sans:Bold'] leading-[normal] not-italic relative shrink-0 text-[20px] text-[color:var(--text-textprimary,#161823)] whitespace-nowrap" data-node-id="1:13314">
                兴趣卡消息通知
              </p>
            </div>
            <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0" data-node-id="1:13327" data-name="右侧">
              <Component className="h-[32px] relative shrink-0 w-[76px]" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative shrink-0 w-[390px]" data-node-id="1:13348" data-name="筛选">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:13349">
            <div className="bg-[rgba(22,24,35,0.04)] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[16px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:13350" data-name="未选">
              <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[color:var(--TextPrimary,#161823)] text-[length:var(--size-14,14px)] text-center whitespace-nowrap" data-node-id="1:13351">
                全部
              </p>
            </div>
            <div className="bg-[rgba(22,24,35,0.04)] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[16px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:13359" data-name="未选">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))] text-center whitespace-nowrap" data-node-id="1:13360">
                名称
              </p>
              <div className="relative shrink-0 size-[12px]" data-node-id="1:13361" data-name="ic_s_s_trianglesdown">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSTrianglesdown} />
              </div>
            </div>
            <div className="bg-[rgba(22,24,35,0.04)] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[16px] py-[9px] relative rounded-[50px] shrink-0" data-node-id="1:13363" data-name="未选">
              <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))] text-center whitespace-nowrap" data-node-id="1:13364">
                类型
              </p>
              <div className="relative shrink-0 size-[12px]" data-node-id="1:13365" data-name="ic_s_s_trianglesdown">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcSSTrianglesdown} />
              </div>
            </div>
          </div>
          <div className="bg-[rgba(22,24,35,0.04)] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[16px] py-[9px] relative rounded-[50px] shrink-0 w-[48px]" data-node-id="1:13367" data-name="未选">
            <IconArrowDownNarrowWide className="relative shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[6px] bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(255,255,255,0.7)] items-center left-1/2 to-white w-[390px]" data-node-id="1:13376" data-name="底bar">
        <div className="bg-white content-stretch drop-shadow-[0px_2px_6px_rgba(0,0,0,0.05)] flex gap-[24px] items-center justify-center p-[4px] relative rounded-[50px] shrink-0 w-[250px]" data-node-id="1:13393">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-center min-w-px p-[8px] relative rounded-[60px]" data-node-id="1:13394">
            <div className="relative shrink-0 size-[20px]" data-node-id="1:13395" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--text-texttertiary,rgba(22,24,35,0.6))] text-[length:var(--size-10,10px)] text-center whitespace-nowrap" data-node-id="1:13404">
              发现
            </p>
          </div>
          <div className="bg-[var(--bg-bgimbubble,#f3f3f4)] content-stretch flex flex-[1_0_0] flex-col gap-px items-center min-w-px p-[8px] relative rounded-[60px]" data-node-id="1:13405">
            <div className="relative shrink-0 size-[20px]" data-node-id="1:13407" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] min-w-full not-italic relative shrink-0 text-[color:var(--TextPrimary,#161823)] text-[length:var(--size-10,10px)] text-center w-[min-content]" data-node-id="1:13416">
              消息
            </p>
          </div>
        </div>
        <div className="h-[34px] relative shrink-0 w-full" data-node-id="1:13417" data-name="DuxHomeIndicator">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%-0.5px)] rounded-[100px] w-[133px]" data-node-id="I1:13417;9512:2639" data-name="Home Indicator" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.5)] h-[844px] left-1/2 top-0 w-[390px]" data-node-id="1:13418" />
      <div className="-translate-x-1/2 absolute bottom-0 contents left-1/2" data-node-id="1:13419">
        <div className="-translate-x-1/2 absolute bg-[var(--text-consttextinverse,white)] bottom-0 h-[312px] left-1/2 overflow-clip rounded-tl-[20px] rounded-tr-[20px] w-[390px]" data-node-id="1:13420" data-name="DuxBasicPanel">
          <div className="absolute inset-[16px_0_-0.2px_0]" data-node-id="I1:13420;10191:13528" data-name="Scrollable area" />
          <div className="absolute h-[16px] left-0 right-0 top-0" data-node-id="I1:13420;10191:13530" data-name="DuxGrabber">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDuxGrabber} />
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-[54px] content-stretch flex flex-col items-start justify-center left-1/2 overflow-clip rounded-[4px] w-[350px]" data-node-id="1:13421" data-name="info">
          <div className="content-stretch flex flex-col h-[52px] items-start overflow-clip relative shrink-0 w-full" data-node-id="1:13422" data-name="tittle">
            <div className="content-stretch flex gap-[12px] items-center overflow-clip py-[12px] relative shrink-0 w-full" data-node-id="1:13423" data-name="text">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:13431" data-name="icon+名称">
                <div className="overflow-clip relative rounded-[100px] shrink-0 size-[28px]" data-node-id="1:13432" data-name="icon">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgIcon1} />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-node-id="1:13436" data-name="标题">
                  <p className="font-[family-name:var(--font-cn,'PingFang_SC:Medium')] relative shrink-0 text-[color:var(--text-textprimary,#161823)] text-[length:var(--size-15,15px)]" data-node-id="1:13437">
                    国粹青衣全解
                  </p>
                  <p className="font-[family-name:var(--font-cn,'PingFang_SC:Regular')] relative shrink-0 text-[color:var(--text-textquaternary2,rgba(22,24,35,0.34))] text-[length:var(--size-10,10px)]" data-node-id="1:13438">
                    11月9日 10:12:08
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start justify-center py-[16px] relative shrink-0 w-full" data-node-id="1:13444">
            <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-node-id="1:13445">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-node-id="1:13446" data-name="标题部分">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="1:13447">
                  <p className="[word-break:break-word] font-[family-name:var(--font-cn,'PingFang_SC:Medium')] leading-[normal] not-italic relative shrink-0 text-[#161823] text-[length:var(--size-17,17px)] whitespace-nowrap" data-node-id="1:13448">
                    线上异常提醒
                  </p>
                  <DuxBadges className="relative shrink-0 size-[8px]" />
                </div>
                <p className="[word-break:break-word] font-['PingFang_SC:Regular'] h-[60px] leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#161823] text-[14px] text-ellipsis w-full" data-node-id="1:13451">
                  系统检测到你的兴趣卡存在性能质量问题，请登录「抖音创作者中心-AI工坊」查看详情，检查并修改卡片后重新提交发布
                </p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[60px]" data-node-id="1:13453" data-name="pic">
                <div className="-translate-y-1/2 absolute contents left-[11.42%] right-[1.67%] top-1/2" data-node-id="1:13454">
                  <div className="-translate-y-1/2 absolute flex h-[60.158px] items-center justify-center left-[14.76%] right-[1.67%] top-1/2" data-node-id="1:13455" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(-21.9748cqw,86.1757cqh)] rotate-12 w-[hypot(78.0252cqw,13.8243cqh)]">
                      <div className="bg-[rgba(0,0,0,0.2)] border border-solid border-white opacity-40 relative rounded-[8px] size-full" />
                    </div>
                  </div>
                  <div className="-translate-y-1/2 absolute border border-solid border-white h-[53px] left-[11.42%] right-[21.91%] rounded-[8px] top-[calc(50%+2.42px)]" data-node-id="1:13456">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                      <img alt="" className="absolute h-full left-[-0.06%] max-w-none top-[-1.88%] w-[100.12%]" src={imgRectangle346243412} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic relative shrink-0 w-[250px]" data-node-id="1:13458" data-name="list">
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-node-id="1:13462" data-name="info">
                <p className="font-[family-name:var(--font-cn,'PingFang_SC:Regular')] relative shrink-0 text-[length:var(--size-14,14px)] text-[rgba(22,24,35,0.6)] w-[60px]" data-node-id="1:13463">
                  卡片ID
                </p>
                <p className="flex-[1_0_0] font-['PingFang_SC:Regular'] max-h-[20px] min-w-px overflow-hidden relative text-[#161823] text-[14px] text-ellipsis" data-node-id="1:13464">
                  tt1fb4690981cbff4701
                </p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-node-id="1:13465" data-name="info">
                <p className="font-[family-name:var(--font-cn,'PingFang_SC:Regular')] relative shrink-0 text-[length:var(--size-14,14px)] text-[rgba(22,24,35,0.6)] w-[60px]" data-node-id="1:13466">
                  审核版本
                </p>
                <p className="flex-[1_0_0] font-['PingFang_SC:Regular'] max-h-[20px] min-w-px overflow-hidden relative text-[#161823] text-[14px] text-ellipsis" data-node-id="1:13467">
                  V1.0.0
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[390px]" data-node-id="1:13471" data-name="DuxHomeIndicator">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%-0.5px)] rounded-[100px] w-[133px]" data-node-id="I1:13471;9512:2639" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}
