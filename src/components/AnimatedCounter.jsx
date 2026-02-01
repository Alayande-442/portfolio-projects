import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item, index) => (
                    <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">

                    
                    <div key={counterItems.label} className="counter-number text-white text-5xl font-bold mt-2">
                        {/* {item.value} ${item.suffix} */}
                        <CountUp end={item.value} suffix={item.suffix} />
                    </div>
                    <div className="text-gray-400 text-sm mt-2">
                        {item.label}
                    </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default AnimatedCounter;