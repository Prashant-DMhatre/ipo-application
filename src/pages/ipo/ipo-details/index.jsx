import AboutCompany from "../../../components/about-company";
import IPOtimeline from "../../../components/ipo-timeline";
import IPODetails from "../../../components/ipo-details";
import IPOHeader from "../../../components/ipo-header";
import Oyo from '../../../assets/logos/oyo-rooms-seeklogo.svg'

export default function IPOInfo() {
    const ipoData = {
        name: 'oyo',
        image_url: Oyo,
        issue_start_size: 3600000000,
        issue_end_size: 3700000000,
        price_start: 100,
        price_end: 200,
        minimum_amount: 50000,
        lot_size: 150,
        issue_start_date: "12-10-2022",
        issue_end_date: "10-15-2022",
        listed_on: "10-15-2022",
        listed_price: 150,
        listing_gains_amount: 10,
        linsting_gains_percentage: 10,
        max_size: 15
    }
    return (
        <>
            <div className="bg-white shadow-lg rounded-xl p-6 space-y-6">
                <h3 className="font-semibold text-lg mb-4 sm:hidden">IPO Details</h3>

                <IPOHeader companyDetails={ipoData} />

                <div className="space-y-6">
                    <div className="bg-white rounded-xl sm:border sm:p-4">
                        <h3 className="font-semibold text-lg mb-4">IPO Details</h3>
                        <IPODetails ipoData={ipoData} />
                    </div>

                    <div className="bg-white rounded-xl border p-4">
                        <h3 className="font-semibold text-lg mb-4">IPO Timeline</h3>
                        <IPOtimeline />
                    </div>

                    <div className="bg-white rounded-xl border p-4">
                        <h3 className="font-semibold text-lg mb-4 block sm:hidden capitalize">{ipoData.name}</h3>

                        <h3 className="font-semibold text-lg mb-4 hidden sm:block">About the Company</h3>
                        <AboutCompany />
                    </div>
                </div>
            </div >
        </>
    )

}
