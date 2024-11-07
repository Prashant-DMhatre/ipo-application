import { formatDate } from "../helpers";

export default function Company({ companyDetails, style }) {
    return (
        <div className={`flex items-center gap-4 ${style}`}>
            <img src={companyDetails.image_url} alt="GoAir" className="w-10 h-10 rounded-full border p-[0.5px]" />
            <div className="flex flex-col">
                <span className="uppercase text-[#000000] font-bold text-lg">
                    {companyDetails.name}
                </span>
                <span className="text-sm text-gray-500">
                    {formatDate(companyDetails.issue_start_date, true)} - {formatDate(companyDetails.issue_end_date)}
                </span>
            </div>
        </div>);
};