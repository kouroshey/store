import React from 'react'

const Addresses = () => {
    return (
        <div className='flex flex-col gap-4'>
            <p className='text-white'>The following addresses will be used on the checkuot page by default.</p>
            <div className='flex'>
                <div className='flex flex-1 flex-col gap-4'>
                    <p className='text-white text-xl font-bold'>Billing Addresses</p>
                    <div className='flex flex-col gap-2 text-sm'>
                        <span>name</span>
                        <span>street</span>
                        <span>town</span>
                        <span>plate</span>
                    </div>
                </div>
                <div className='flex flex-1 flex-col gap-4'>
                    <p className='text-white text-xl font-bold'>Shipping Addresses</p>
                    <div className='flex flex-col gap-2 text-sm'>
                        <span>name</span>
                        <span>street</span>
                        <span>town</span>
                        <span>plate</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addresses