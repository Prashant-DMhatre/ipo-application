import { useNavigate } from "react-router-dom";

export default function LeftArrow() {
    const navigate = useNavigate();

    return (
        <span className="text-[#000] rounded-xl border-[#e5e7eb] border px-4 py-3 text-bold text-xl" onClick={() => navigate('/ipo')}>&lt;</span >
    );
};