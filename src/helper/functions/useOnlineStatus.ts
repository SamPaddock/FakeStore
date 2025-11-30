import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useOnlineStatus = () => {
        const [isOnline, setIsOnline] = useState<boolean | null>(null);

        useEffect(() => {
                if (!NetInfo) { return; }

                const unsubscribe = NetInfo.addEventListener(state => {
                        if (!state) { setIsOnline(null); return;}
                        const hasInternet = state.isConnected === true && state.isInternetReachable !== false;
                        setIsOnline(hasInternet);
                });

                return () => { unsubscribe && unsubscribe(); };
        }, []);

        return isOnline;
};
