import { useState } from 'react'
import MainContainer from '../../components/common/MainContainer'
import { dashboardTabs } from '../../data'
import BreadCrumb from '../../components/BreadCrumb'

const Dashboard = () => {
    const [shownTab, setShownTab] = useState(dashboardTabs[0])

    const showTabHandler = (tab) => {
        const tabId = tab.target.id
        const numberOfTabId = Number(tabId.charAt(tabId.length - 1))
        const targetElement = dashboardTabs.find(tab => tab.id === numberOfTabId)
        setShownTab(targetElement)
    }

    const items = dashboardTabs.map(tab => (
        <li
            key={tab.id}
            id={`dashboard-item-${tab.id}`}
            onClick={e => showTabHandler(e)}
            className={`p-3 cursor-pointer flex items-center justify-between text-sm
                ${shownTab.id === tab.id ? "bg-white-transparent" : ""}
                ${tab.id !== dashboardTabs.length ? "border-b border-b-border-1" : ""}
                `}
        >
            {tab.label}
            <img src={tab.icon} alt="icon" className='w-5' />
        </li>
    ))

    return (
        <main className=''>
            <div className='border-b border-b-border-1'>
                <MainContainer>
                    <div className='flex justify-between py-8'>
                        <h2 className='border-r border-border-1 pr-4 text-white text-2xl font-bold'>Dashboard</h2>
                        <BreadCrumb />
                    </div>
                </MainContainer>
            </div>
            <MainContainer>
                <div className='py-8 flex justify-center'>
                    <div className='flex flex-col lg:flex-row gap-4 bg-dark-1 max-w-[80%] lg:max-w-full lg:w-full rounded-md p-4'>
                        <div className='bg-dark-4 rounded-md flex-1 p-4'>
                            <ul className='text-white'>
                                {items}
                            </ul>
                        </div>
                        <div className='bg-dark-4 rounded-md flex-[2_2_0%] p-4 h-max overflow-x-scroll lg:overflow-x-visible'>
                            {shownTab.element}
                        </div>
                    </div>
                </div>
            </MainContainer>
        </main >
    )
}

export default Dashboard