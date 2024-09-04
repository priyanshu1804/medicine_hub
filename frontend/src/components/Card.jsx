import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Card({ name, salt ,id}) {
    const navigate = useNavigate();

    return (
        <div className="w-60 mb-3 bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <div className="text-lg font-medium text-gray-900 mb-2">{name}</div>
            <div className="text-lg font-medium text-gray-900">{salt}</div>
            <div className="w-full flex justify-end">
                <div className="w-24">
                    <Button label={"Read More"} onPress={() =>navigate("/info?id="+id)}></Button>
                </div>
            </div>
        </div>
    );
}

export function CardContainer({ med }) {

    return (
        <div className="flex flex-wrap justify-center">
            {med.map((card, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-2">
                    <Card name={card.name} salt={card.salt} id={card._id} />
                </div>
            ))}
        </div>
    );
}