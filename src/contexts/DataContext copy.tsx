import React, { createContext, useContext, useEffect, useState, useRef } from "react";
import { loadData, circulatingSupply } from "../data"; // Adjust path if needed

interface DataContextType {
    datas: any;
    cSupply: any;
    loading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [datas, setData] = useState<any>(null);
    const [cSupply, setSupply] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const isFetched = useRef(false); // Prevents multiple API calls

    useEffect(() => {
        if (isFetched.current) return; // ✅ Prevents duplicate fetch
        isFetched.current = true;

        const fetchAll = async () => {
            try {
                const [result, supply] = await Promise.all([loadData(), circulatingSupply()]);
                setData(result);
                setSupply(supply);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAll();
    }, []);

    return (
        <DataContext.Provider value={{ datas, cSupply, loading }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
};
