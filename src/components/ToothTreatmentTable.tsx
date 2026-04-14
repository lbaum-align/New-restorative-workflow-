import { useState, useMemo } from "react";

interface ToothTreatmentTableProps {
  toothTreatments: { [tooth: string]: string };
  toothSpecifications?: { [tooth: string]: { [key: string]: string } };
  onRowClick?: (tooth: string, treatment: string) => void;
}

type SortDirection = "asc" | "desc" | null;

// Sort arrow component matching Figma design
function SortArrow({ direction }: { direction: SortDirection }) {
  if (!direction) return null;
  
  return (
    <div className={`h-[12px] opacity-60 w-[16px] shrink-0 ${direction === "asc" ? "-scale-y-100" : ""}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <path d="M8 12L0 0L16 0L8 12Z" fill="black" fillOpacity="0.445" />
      </svg>
    </div>
  );
}

export default function ToothTreatmentTable({
  toothTreatments,
  toothSpecifications = {},
  onRowClick,
}: ToothTreatmentTableProps) {
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  // Convert tooth treatments to table rows
  const tableData = useMemo(() => {
    const rows = Object.entries(toothTreatments).map(([tooth, treatment]) => {
      const specs = toothSpecifications[tooth] || {};
      return {
        toothNo: tooth,
        treatment,
        specification: specs.Specification || "-",
        material: specs.Material || "-",
        shadeBody: specs.Body || "-",
      };
    });

    // Sort by tooth number
    if (sortDirection) {
      rows.sort((a, b) => {
        const numA = parseInt(a.toothNo);
        const numB = parseInt(b.toothNo);
        return sortDirection === "asc" ? numA - numB : numB - numA;
      });
    }

    return rows;
  }, [toothTreatments, toothSpecifications, sortDirection]);

  const handleSort = () => {
    setSortDirection((prev) => {
      if (prev === null) return "asc";
      if (prev === "asc") return "desc";
      return "asc";
    });
  };

  // Always show the table structure, even when empty
  return (
    <div className="bg-white relative rounded-[4px] w-full max-h-[348px] border border-[#e0e0e0] overflow-auto flex flex-col">
      <table className="w-full border-collapse">
        <thead className="sticky top-0 bg-white z-10">
          <tr className="bg-white border-b-2 border-[#ddd]">
            <th className="text-left py-[8px] px-[16px] min-w-[100px]">
              <button
                onClick={handleSort}
                className="flex items-center gap-[6px] cursor-pointer hover:opacity-70 transition-opacity"
              >
                <span className="font-['Roboto',sans-serif] text-[14px] text-[#3e3d40]">
                  Tooth No.
                </span>
                <SortArrow direction={sortDirection} />
              </button>
            </th>
            <th className="text-left py-[8px] px-[16px] min-w-[150px]">
              <span className="font-['Roboto',sans-serif] text-[14px] text-[#3e3d40]">
                Treatment
              </span>
            </th>
            <th className="text-left py-[8px] px-[16px] min-w-[150px]">
              <span className="font-['Roboto',sans-serif] text-[14px] text-[#3e3d40]">
                Specification
              </span>
            </th>
            <th className="text-left py-[8px] px-[16px] min-w-[150px]">
              <span className="font-['Roboto',sans-serif] text-[14px] text-[#3e3d40]">
                Material
              </span>
            </th>
            <th className="text-left py-[8px] px-[16px] min-w-[150px]">
              <span className="font-['Roboto',sans-serif] text-[14px] text-[#3e3d40]">
                Shade Body
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.length === 0 ? (
            <tr className="bg-white border-b border-[#ddd]">
              <td className="py-[12px] px-[16px]" colSpan={5}>
                <span className="font-['Roboto',sans-serif] text-[14px] text-[rgba(0,0,0,0.93)]">
                  -
                </span>
              </td>
            </tr>
          ) : (
            tableData.map((row, index) => (
              <tr
                key={row.toothNo}
                className={`${index % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"} border-b border-[#ddd] ${onRowClick ? "cursor-pointer hover:bg-[#e8f9fd] transition-colors" : ""}`}
                onClick={() => onRowClick && onRowClick(row.toothNo, row.treatment)}
              >
                <td className="py-[12px] px-[16px]">
                  <span className="font-['Roboto',sans-serif] text-[14px] text-[rgba(0,0,0,0.93)]">
                    {row.toothNo}
                  </span>
                </td>
                <td className="py-[12px] px-[16px]">
                  <span className="font-['Roboto',sans-serif] text-[14px] text-[rgba(0,0,0,0.93)]">
                    {row.treatment}
                  </span>
                </td>
                <td className="py-[12px] px-[16px]">
                  <span className="font-['Roboto',sans-serif] text-[14px] text-[rgba(0,0,0,0.93)]">
                    {row.specification}
                  </span>
                </td>
                <td className="py-[12px] px-[16px]">
                  <span className="font-['Roboto',sans-serif] text-[14px] text-[rgba(0,0,0,0.93)]">
                    {row.material}
                  </span>
                </td>
                <td className="py-[12px] px-[16px]">
                  <span className="font-['Roboto',sans-serif] text-[14px] text-[rgba(0,0,0,0.93)]">
                    {row.shadeBody}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}