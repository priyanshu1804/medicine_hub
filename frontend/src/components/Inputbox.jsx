export default function Inputbox({label,placeholder,set}){
    return <div>
        <div className="font-medium text-sm text-left py-2">
            {label}
        </div>
        <input onChange = {(e)=>set(e.target.value)} type="text" placeholder ={placeholder} className="w-full px-2 py-1 border rounded border-slate-300" />
    </div>
}

