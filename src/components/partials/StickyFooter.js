import React from 'react';

const StickyFooter = () => {
    return (
        <div className="md:hidden fixed bottom-0 z-50 w-full h-10">
            <div className="h-full bg-gray-400 rounded-t-2xl shadow-inner">
                Custom Footer
            </div>
        </div>
    )
}

export default StickyFooter;