export function Emoji() {
    return (target: {[key:string]:any}, key: string)=>{
        let val=target[key]
        const getter = ()=>{
            return val
        }
        const setter =(value:string)=>{
            val=`😀 ${value}😀`
        }
        Object.defineProperty(target,key,{
            get:getter,
            set:setter,
            enumerable:true,
            configurable:true
        })
    }
}
export function Confirmable(message:string) {
    return (target: {[key:string]:any}, key: string,descriptor:PropertyDescriptor)=>{
        const original = descriptor.value
        descriptor.value = function(...args:any) {
            const allow = window.confirm(message)
            if(allow) {
                const result = original.apply(this,args)
                return result
            }
            return null
        }
        return descriptor
    }
}