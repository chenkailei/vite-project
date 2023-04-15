// 基本都用这种方法
import { ref } from 'vue'
import { defineComponent } from 'vue'
import type { Slot } from 'vue'

interface Props {
    // 加?代表可传可不传
    name?:String
}

const A = (_:any,{slots}:any) => (
    <>
        <div>{slots.default?  slots.default() : '没有插槽'}</div>
        <div>{slots.foo?.()}</div>
    </>
)

export default defineComponent({
    props:{
        name:String
    },
    emits:['kailei'],
    setup(props:Props,{emit}) {
        // 因为在template会自动解包.value 但在tsx里并不会，所以再用的时候要手动.value 
        const flag = ref(true)
        const data = [
            {
                name:'张一'
            },{
                name:'张二'
            },{
                name:'张三'
            }
        ]
        const fn = (val:any)=> {
            console.log('点击触发了');
            emit('kailei',val)
        }

        const slot = {
            default:()=>(
                <div>
                    我是默认插槽
                </div>
            ),
            foo:()=>(
                <>
                    多个foo插槽
                </>
            )
        }

        const input = ref<string>('v-model的值')
        return () => (
            <>
                <div>我是内桶</div>
                {/* 支持v-show */ }
                <div v-show={flag.value}>测试v-show</div>
                {/* 不支持v-if 可以用三目运算符 */}
                <div>{flag.value?  <div>true</div> : <div>false</div>}</div>
                {/* 不支持v-for 可以适用map */}
                <>
                    循环：
                    {
                        data.map((item)=>{
                            return (
                                // v-bind 绑定
                                <div name={item.name}>{item.name}</div> 
                            )
                        })
                    }
                </>
                {/* props传参 */}
                <>
                    props传参<br />
                    {props.name}
                </>
                {/* emit传参 */}
                <>
                    {/* 不能直接将fn()放进click里，因为这样在编译的时候就
                    会触发一次，如果需要传参就需要想这样调用，如果不需要传
                    参可以直接写fn */}
                    <div onClick={()=>fn('参数')}>点击emit传参</div>
                </>
                {/* 插槽 */}
                <>
                    插槽使用<br />
                    <A v-slots={slot}></A>
                </>
                {/* v-model */}
                <>
                    测试v-moddel
                    <input v-model={input.value} placeholder="Please input" />
                    <div>{input.value}</div>
                </>
            </>
        )
    }
})