import { createContext, useState, useMemo, useCallback, type ReactNode } from "react";
import { emptyPage, type Page } from "../model/Page";


type PageContextType = {
  page: Page;
  updatePage: (data: Partial<Page>) => Page;
  resetPage: () => void;
};


export const PageContext = createContext<PageContextType | null>(null);

export function PageProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [page, setPage] = useState<Page>(emptyPage);

  const updatePage = useCallback((data: Partial<Page>): Page => {
    const updatedPage: Page = { ...page, ...data, updatedAt: new Date() };
    setPage(updatedPage);
    return updatedPage;
  }, [page]);

  const resetPage = useCallback(() => {
    setPage(emptyPage);
  }, []);

  const value = useMemo(
    () => ({
      page,
      updatePage,
      resetPage,
    }),
    [page, updatePage, resetPage],
  );

  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  );
}