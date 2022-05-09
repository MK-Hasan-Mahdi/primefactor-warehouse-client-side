import { useEffect, useState } from "react"

const useInventoryDetail = (inventoryId) => {
    const [inventory, setInventory] = useState([]);
    useEffect(() => {
        const url = `https://warm-island-25044.herokuapp.com/inventory/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    return [inventory, setInventory];
}
export default useInventoryDetail;