
import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon } from "lucide-react";

interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Maximize Engagement",
        bodyText: "Elevate your content strategy with our cutting-edge Text-to-Video technology, designed to captivate audiences and boost engagement by up to 25%.",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "Streamlined Workflow",
        bodyText: "Experience seamless content creation as our AI-powered platform automates the process, saving valuable time and resources while ensuring consistent quality.",
        icon: AlarmClockOff,
        id: 2
    },
    {
        title: "Empower Your Message",
        bodyText: "Deliver impactful messages with visually stunning videos that convey complex concepts with clarity, enhancing communication and driving meaningful interactions.",
        icon: ArrowDownNarrowWide,
        id: 3
    },
]

export default infoCards