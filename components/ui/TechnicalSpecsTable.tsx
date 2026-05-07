"use client";

import type { TechnicalSpec } from "@/types/site";
import { Reveal } from "@/components/ui/Reveal";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type TechnicalSpecsTableProps = {
  specs: readonly TechnicalSpec[];
  className?: string;
};

export function TechnicalSpecsTable({
  specs,
  className,
}: TechnicalSpecsTableProps) {
  const { t } = useI18n();

  return (
    <Reveal
      className={cn(
        "self-start overflow-hidden rounded-lg border border-white/10 bg-basalt-900/70 shadow-glass backdrop-blur-xl",
        className,
      )}
    >
      <div className="overflow-x-auto">
        <table className="min-w-[540px] table-fixed text-sm md:min-w-full">
          <colgroup>
            <col className="w-[42%]" />
            <col className="w-[58%]" />
          </colgroup>
          <caption className="sr-only">
            {t.common.technicalTableCaption}
          </caption>
          <thead className="border-b border-white/10 bg-white/[0.045] text-xs uppercase tracking-[0.22em] text-atlas-sand">
            <tr>
              <th scope="col" className="px-4 py-4 text-start font-semibold sm:px-5">
                {t.common.technicalTableColumns.parameter}
              </th>
              <th scope="col" className="px-4 py-4 text-start font-semibold sm:px-5">
                {t.common.technicalTableColumns.value}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {specs.map((spec) => (
              <tr key={spec.label} className="transition hover:bg-white/[0.035]">
                <th
                  scope="row"
                  className="whitespace-normal px-4 py-5 text-start font-medium leading-7 text-perlite-50 sm:px-5"
                >
                  {spec.label}
                </th>
                <td className="whitespace-normal break-words px-4 py-5 text-start leading-7 text-silver-100 sm:px-5">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}
