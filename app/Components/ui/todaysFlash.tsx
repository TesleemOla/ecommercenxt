import { LeftArrow, RightArrow } from "../icons";
import HeaDing from "./heading";
import RedDiv from "./redDiv";

export default function TodayFlash() {
    return <div>
       <RedDiv />
       <div className="flex justify-between">
       <div>
        <HeaDing item="Flash Sales" />
       </div>
       <div className="grid grid-flow-row">
        <span className="flex gap-4 justify-around">
            <span>Days</span>
            <span>Hours</span>
            <span>Minutes</span>
            <span>Seconds</span>
        </span>
        <span className="flex gap-2">
            <HeaDing item="00" />:
            <HeaDing item="00" />:
            <HeaDing item="00" />:
            <HeaDing item="00" />      
        </span>
       </div>
       <div className="flex gap-5">
        <LeftArrow/>
        <RightArrow/>
       </div>
        </div>
    </div>
}