import { useEffect, useState } from "react";
import { socket } from "../socket";

const useSocket = () => {
    const [socketInstance] = useState(socket());
    const [isConnect, setIsConnect] = useState(socketInstance.connected)

    useEffect(()=>{
        socketInstance.on("connect", () => setIsConnect(true))
        socketInstance.on("disconnect", () => setIsConnect(false))
        return () => {
        socketInstance.off("connect");
        socketInstance.off("disconnect");
        }
    },[socketInstance])

    return { socketInstance, isConnect };
};

export default useSocket;