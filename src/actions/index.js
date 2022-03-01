import {Add_Card} from '../constant'
const itemData = (id) =>({
    type:Add_Card,
    payload:id,
})

export default itemData;