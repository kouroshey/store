import { Button } from "../common/Button"
const Orders = () => {
    return (
        <table className='w-full p-1 mx-auto'>
            <tr className='bg-white-transparent  text-white font-bold border-b border-b-white'>
                <th>Order</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Actions</th>
            </tr>
            <tr className=''>
                <td className=''>November0</td>
                <td>November1</td>
                <td>November2</td>
                <td>November3</td>
                <td className="flex justify-center"><Button text={"View"} buttonStyle={"transparent"} customStyle={"w-max"} /></td>
            </tr>
            <tr className=''>
                <td className=''>November0</td>
                <td>November1</td>
                <td>November2</td>
                <td>November3</td>
                <td className="flex justify-center"><Button text={"View"} buttonStyle={"transparent"} customStyle={"w-max"} /></td>
            </tr>
            <tr className=''>
                <td className=''>November0</td>
                <td>November1</td>
                <td>November2</td>
                <td>November3</td>
                <td className="flex justify-center"><Button text={"View"} buttonStyle={"transparent"} customStyle={"w-max"} /></td>
            </tr>
            <tr className=''>
                <td className=''>November0</td>
                <td>November1</td>
                <td>November2</td>
                <td>November3</td>
                <td className="flex justify-center"><Button text={"View"} buttonStyle={"transparent"} customStyle={"w-max"} /></td>
            </tr>
        </table>
    )
}

export default Orders