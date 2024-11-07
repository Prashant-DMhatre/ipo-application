import React from 'react';

export default function TimelineEvent({ isCompleted, isFirstEvent, isLastEvent }) {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center">
                {isFirstEvent &&
                    <div className={`absolute top-0 sm:top-5 h-0.5 sm:w-full mx-2 bg-gray-300 rotate-90 sm:rotate-0`}></div>
                }
                <div className={`w-10 h-10 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-white border-2 border-gray-300'} flex items-center justify-center z-50`}>
                    {isCompleted && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </div>
                {!isLastEvent &&
                    <div className={`absolute top-16 sm:top-5 w-[50px] sm:left-1/2 h-0.5 sm:w-full mx-2 rotate-90 sm:rotate-0 ${true ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                }
            </div >
        </>
    );
}
