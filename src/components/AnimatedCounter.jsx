import { counterItems } from "../constants";

const AnimatedCounter = () => {
    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item, index) => (
                    <div key={counterItems.label} className="counter-number text-white text-5xl font-bold mt-2">
                        
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default AnimatedCounter;