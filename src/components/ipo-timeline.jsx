import React from 'react';
import TimelineEvent from './timeline-event';

export default function IPOtimeline() {
    return (
        <div className="sm:p-4 space-y-4">
            <div className="bg-white rounded-md sm:p-4 grid grid-cols-1 gap-7 sm:gap-4 sm:grid-cols-6">
                <div className='flex gap-4 sm:block'>
                    <TimelineEvent isCompleted={true} isFirstEvent={true} isLastEvent={false} />
                    <div className=" mt-2 sm:text-center flex flex-col ">
                        <div className="text-sm font-bold">{"Bidding Start"}</div>
                        <div className="text-sm text-gray-500">{"2024-11-10"}</div>
                    </div>
                </div>
                <div className='flex gap-4 sm:block'>
                    <TimelineEvent isCompleted={true} isFirstEvent={false} isLastEvent={false} />
                    <div className=" mt-2 sm:text-center flex flex-col ">
                        <div className="text-sm font-bold">{"Bidding End"}</div>
                        <div className="text-sm text-gray-500">{"2024-11-14"}</div>
                    </div>
                </div>
                <div className='flex gap-4 sm:block'>
                    <TimelineEvent isCompleted={true} isFirstEvent={false} isLastEvent={false} />
                    <div className="mt-2 sm:text-center flex flex-col ">
                        <div className="text-sm font-bold">{"Allotment Finalization"}</div>
                        <div className="text-sm text-gray-500">{"2024-11-10"}</div>
                    </div>
                </div>
                <div className='flex gap-4 sm:block'>
                    <TimelineEvent isCompleted={true} isFirstEvent={false} isLastEvent={false} />
                    <div className=" mt-2 sm:text-center flex flex-col ">
                        <div className="text-sm font-bold">{"Refund Initiation"}</div>
                        <div className="text-sm text-gray-500">{"2024-11-10"}</div>
                    </div>
                </div>
                <div className='flex gap-4 sm:block'>
                    <TimelineEvent isCompleted={true} isFirstEvent={false} isLastEvent={false} />
                    <div className=" mt-2 sm:text-center flex flex-col ">
                        <div className="text-sm font-bold">{"Demat Transfer"}</div>
                        <div className="text-sm text-gray-500">{"2024-11-10"}</div>
                    </div>
                </div>
                <div className='flex gap-4 sm:block'>
                    <TimelineEvent isCompleted={true} isFirstEvent={false} isLastEvent={true} />
                    <div className=" mt-2 sm:text-center flex flex-col ">
                        <div className="text-sm font-bold">{"Listing Date"}</div>
                        <div className="text-sm text-gray-500">{"2024-11-10"}</div>
                    </div>
                </div>
            </div>
        </div >
    );
}
