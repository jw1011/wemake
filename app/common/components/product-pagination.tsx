import { useSearchParams } from "react-router";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

type ProductPaginationProps = {
  totalPages: number;
};

export default function ProductPagination({
  totalPages,
}: ProductPaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const onClick = (page: number) => {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams, {
      preventScrollReset: true,
      //preventScrollReset: true
      //스크롤 새로고침 막는 방법
    });
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(
        <PaginationItem key="first">
          <PaginationLink
            href={`?page=1`}
            onClick={(event) => {
              event.preventDefault();
              onClick(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );
      if (startPage > 2) {
        pages.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            href={`?page=${i}`}
            onClick={(event) => {
              event.preventDefault();
              onClick(i);
            }}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      pages.push(
        <PaginationItem key="last">
          <PaginationLink
            href={`?page=${totalPages}`}
            onClick={(event) => {
              event.preventDefault();
              onClick(totalPages);
            }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center">
      <Pagination>
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious
                href={`?page=${currentPage - 1}`}
                onClick={(event) => {
                  event.preventDefault();
                  onClick(currentPage - 1);
                }}
              />
            </PaginationItem>
          )}
          {renderPageNumbers()}
          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext
                href={`?page=${currentPage + 1}`}
                onClick={(event) => {
                  event.preventDefault();
                  onClick(currentPage + 1);
                }}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
