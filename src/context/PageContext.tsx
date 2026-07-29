import { createContext, useState, useMemo, useCallback, type ReactNode } from "react";
import { emptyPage, type Page } from "../model/Page";
import { canPublish, getPageCompletion } from "../utils/pageCompletion";

type PageContextType = {
  page: Page;
  updatePage: (data: Partial<Page>) => Page;
  resetPage: () => void;
  completion: ReturnType<typeof getPageCompletion>;
  canPublish: boolean;
};

type PageProviderProps = {
  children: ReactNode;
  initialPage?: Page | null;
};

export const PageContext = createContext<PageContextType | null>(null);

export function PageProvider({ children, initialPage = null,}: Readonly<PageProviderProps>) {
  const [page, setPage] = useState<Page>(() => initialPage ?? emptyPage);

  const updatePage = useCallback((data: Partial<Page>): Page => {
    let updatedPage: Page;

    setPage((currentPage) => {
      updatedPage = {
        ...currentPage,
        ...data,
        updatedAt: new Date(),
      };

      return updatedPage;
    });

    return updatedPage!;
  }, []);

  const resetPage = useCallback(() => {
    setPage(emptyPage);
  }, []);

  const completion = useMemo(
    () => getPageCompletion(page),
    [page]
  );

  const publishable = useMemo(
    () => canPublish(page),
    [page]
  );

  const value = useMemo(
    () => ({
      page,
      updatePage,
      resetPage,
      completion,
      canPublish: publishable,
    }),
    [page, updatePage, resetPage, completion, publishable]
  );

  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  );
}