// 定义bus需包含的方法
type Busclass = {
    emit:(name:string)=>void

    on:(name:string,callback:Function)=>void
}
// 事件总线对象里key的类型约束
type paramsKey = string | number | symbol
// 事件总线类型约束
type List = {
    [key:paramsKey] : Array<Function>
}

class Bus implements Busclass {
    list:List
    constructor(){
        this.list = {}
    }
    emit(name:string,...args:Array<any>){
        let eventList:Array<Function> = this.list[name] || []
        eventList.map(fn=>{
            fn.apply(this,args)
        })
    }

    // 在组件里将on的callback回调push到list里，在另一个组件里执行emit的时候，就可以触发this.list[name]的callback，实现传参
    on(name:string,callback:Function){
        let fnList:Array<Function> = this.list[name] || []
        fnList.push(callback)
        this.list[name] = fnList
        
    }
}

export default new Bus()