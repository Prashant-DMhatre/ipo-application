import GoAir from '../../assets/logos/goair.png';
import Bajaj from '../../assets/logos/Bajaj Energy_300x118_Png.png';
import Oyo from '../../assets/logos/oyo-rooms-seeklogo.svg'
import { formatAmount, formatDate } from '../../helpers';
import Company from '../../components/compay';

export default function Ipo() {
    const ipoData = [{
        name: 'go air',
        image_url: GoAir,
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
        max_size: 55
    }, {
        name: 'bajaj energy',
        image_url: Bajaj,
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
        max_size: 5
    }, {
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
    }]
    return (
        <>
            <section className="border shadow-xl">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 bg-gray-50">
                            <tr className='p-5'>
                                <th scope="col" class="px-6 py-3 w-1/4">
                                    Company / Issue&nbsp;Date
                                </th>
                                <th scope="col" class="px-6 py-3 w-1/4 text-center">
                                    Issue Size
                                </th>
                                <th scope="col" class="px-6 py-3 w-1/4 text-center">
                                    Price range
                                </th>
                                <th scope="col" class="px-6 py-3 w-1/4 text-center">
                                    Min invest/qty
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ipoData?.map((companyDetails, index) => {
                                return (
                                    <tr class="bg-white border-b text-black" key={index}>
                                        <td className="px-6 py-4 font-medium whitespace-nowrap">
                                            {/* <div className="flex items-center gap-4">
                                                <img src={companyDetails.image_url} alt="GoAir" className="w-10 h-10 rounded-full border p-[0.5px]" />
                                                <div className="flex flex-col">
                                                    <span className="uppercase font-bold text-lg">
                                                        {companyDetails.name}
                                                    </span>
                                                    <span className="text-sm text-gray-500">
                                                        {formatDate(companyDetails.issue_start_date, true)} - {formatDate(companyDetails.issue_end_date)}
                                                    </span>
                                                </div>
                                            </div> */}
                                            <Company companyDetails={companyDetails} />
                                        </td>

                                        <td class="px-6 py-4 font-bold w-1/4 text-center text-lg">
                                            {formatAmount(companyDetails.issue_start_size)}
                                        </td>
                                        <td className="px-6 py-4 font-bold w-1/4 text-center text-lg">
                                            ₹{companyDetails.price_start} - ₹{companyDetails.price_end}
                                        </td>

                                        <td className="px-6 py-4 w-1/4 text-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <span className="font-bold text-lg">₹{companyDetails.minimum_amount}</span>

                                                <span className="text-sm text-gray-500">
                                                    {companyDetails.lot_size} Shares / {companyDetails.max_size} Lots
                                                </span>
                                            </div>
                                        </td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </section>
        </>
    )

}
