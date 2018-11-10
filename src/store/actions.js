import api from '@/util/api'
const actions = {
    randomChange: (context, payload = {max: 20}) => {
        return api.randomNumber(payload.max || 20).then(res => {
            context.commit({
                type: 'randomChange',
                count: res
            })
            return res
        })
    }
}

export default actions