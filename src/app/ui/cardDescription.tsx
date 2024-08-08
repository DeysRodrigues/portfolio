import { SquareX } from "lucide-react";

const CardDescription = () => {
    return (
        <div className="relative flex py-12 px-4 rounded-2xl border-[0.5px] border-secondary">
            <div className="absolute -top-8 -right-6 m-4">
                <SquareX size={32} color="#6574ff" strokeWidth={1.5} />
            </div>
            <p className="text-primary-text text-sm">
                Hi, I’m Deys, and I’m not your <br />
                typical front-end developer. With <br />
                a background in illustration and a <br />
                passion for bringing ideas to life, <br />
                I approach coding as an art form, <br />
                weaving together lines of code <br />
                like strokes on a canvas. As a <br />
                junior developer, I may be new to <br />
                the industry, but my imagination <br />
                knows no bounds. <br />
            </p>
        </div>
    );
}

export default CardDescription;