import { createContext, useContext, ReactNode, useMemo, useState, useCallback } from "react";
import { demoPageBold, demoPageMinimal } from "../demo/demoPage";
import { emptyPage, Page } from "../model/Page";
import { canPublish, getPageCompletionDetails } from "../utils/pageCompletion";


type DashboardDataContextType = {
    page: Page;
    loading: boolean;

    updatePage: (data: Partial<Page>) => Page;
    resetPage: () => void;
    publishPage: () => void;

    completion: ReturnType<typeof getPageCompletionDetails>;
    canPublish: boolean;
};


const DashboardDataContext = createContext<DashboardDataContextType | undefined>(
    undefined
);



export function DashboardDataProvider({ children,}: Readonly<{ children: ReactNode }>) {


    const [page, setPage] = useState<Page>(  () => demoPageMinimal ?? emptyPage);

    const updatePage = useCallback((data: Partial<Page>) => {
        let updatedPage!: Page;
        setPage((currentPage) => {

            updatedPage = {
                ...currentPage,
                ...data,
                status: "draft",
                updatedAt: new Date(),
            };
            return updatedPage;
        });
        return updatedPage;

    }, []);



    const resetPage = useCallback(() => {
        setPage(emptyPage);
    }, []);

    const completion = useMemo(
        () => getPageCompletionDetails(page),
        [page]
    );

    const publishable = useMemo(
        () => canPublish(page),
        [page]
    );

    const publishPage = useCallback(() => {
        setPage((currentPage) => ({
            ...currentPage,
            status: "published",
            publishing: {
                ...currentPage.publishing,
                lastPublishedAt: new Date(),
            },
        }));
    }, []);

    const value = useMemo(
        () => ({
            page,
            loading: false,
            updatePage,
            resetPage,
            publishPage,
            completion,
            canPublish: publishable,
        }),
        [
            page,
            updatePage,
            resetPage,
            completion,
            publishable,
        ]
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