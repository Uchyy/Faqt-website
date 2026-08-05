import { createContext, useContext, ReactNode, useMemo, useState } from "react";
import { demoPageBold } from "../demo/demoPage";
import { emptyPage, Page } from "../model/Page";


type DashboardDataContextType = {
    page: Page;
    loading: boolean;
    updatePage: (updates: Partial<Page>) => void;
};


const DashboardDataContext = createContext<DashboardDataContextType | undefined>(
    undefined
);


export function DashboardDataProvider({
    children,
}: Readonly<{ children: ReactNode }>) {


    const [page, setPage] = useState<Page>(
        demoPageBold ?? emptyPage
    );


    function updatePage(updates: Partial<Page>) {

        setPage((current) => ({
            ...current,
            ...updates,
            updatedAt: new Date(),
        }));

    }


    const value = useMemo(
        () => ({
            page,
            loading: false,
            updatePage,
        }),
        [page]
    );


    return (
        <DashboardDataContext.Provider value={value}>
            {children}
        </DashboardDataContext.Provider>
    );
}


export function useDashboardData() {

    const context = useContext(DashboardDataContext);

    if (!context) {
        throw new Error(
            "useDashboardData must be used inside DashboardDataProvider"
        );
    }

    return context;
}