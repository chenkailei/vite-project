// 这个用的比较少
import {defineComponent} from 'vue'
export default defineComponent({
    data(){
        return {
            age:12
        }
    },

    render(){
        return(
            // 使用变量需要带有this
            <div>{this.age}</div>
        )
    }
})