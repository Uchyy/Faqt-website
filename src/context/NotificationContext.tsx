import { createContext, useContext, useState } from "react";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

type NotificationType = "success" | "error" | "info";

type Notification = {
    id:string;
    message:string;
    type:NotificationType;
};

type NotificationContextType = {
    showNotification:(notification:Omit<Notification,"id">)=>void;
};

const NotificationContext = createContext<NotificationContextType | null>(null);


export function NotificationProvider({children}:Readonly<{children:React.ReactNode}>){

    const [notifications,setNotifications]=useState<Notification[]>([]);
    
    const showNotification = (notification:Omit<Notification,"id">)=>{
        const id = crypto.randomUUID();
        setNotifications(prev=>[
            ...prev, { id, ...notification } ]);

        setTimeout(()=>{
            setNotifications(prev=>prev.filter(item=>item.id!==id));
        },4000);
    };

    const removeNotification=(id:string)=>{
        setNotifications(prev=>prev.filter(item=>item.id!==id));
    };


    return(
        <NotificationContext.Provider value={{showNotification}}>
            {children}

            <div className="fixed bg-white top-4 right-50 z-[200] space-y-3">
                {notifications.map(notification=>(
                    <NotificationToast
                        key={notification.id}
                        notification={notification}
                        onClose={()=>removeNotification(notification.id)}
                    />

                ))}

            </div>

        </NotificationContext.Provider>
    );
}



export function useNotification(){

    const context = useContext(NotificationContext);

    if(!context){
        throw new Error(
            "useNotification must be used inside NotificationProvider"
        );
    }
    return context;
}



function NotificationToast({ notification, onClose}:Readonly<{ notification:Notification; onClose:()=>void;}>){

    const icons = {
        success: <CheckCircle size={20} className="text-green-600" />,
        error: <AlertCircle size={20} className="text-red-600" />,
        info: <Info size={20} className="text-slate-700" />
    };

    const borderColors = {
        success: "border-green-500",
        error: "border-red-500",
        info: "border-slate-300"
    };

    return(

        <div className={`flex items-center gap-3 max-w-sm w-full rounded-2xl border bg-white p-4 shadow-xl transition-all   duration-300 animate-in slide-in-from-right ${borderColors[notification.type]}`}>
            <div className="text-accent">
                {icons[notification.type]}
            </div>

            <p className="flex-1 text-sm font-medium text-text">
                {notification.message}
            </p>


            <button onClick={onClose} className="rounded-full p-1 hover:bg-black/5" >
                <X size={16}/>
            </button>

        </div>

    );
}