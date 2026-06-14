'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Check } from '@/components/icons';

interface Cell {
  text: string;
  highlight?: boolean;
  icon?: string;
}

interface Row {
  cells: Cell[];
  label?: string;
}

interface ComparisonTableProps {
  title: string;
  headers: string[];
  rows: Row[];
}

export function ComparisonTable({ title, headers, rows }: ComparisonTableProps) {
  return (
    <section className="py-8">
      <h2 className="text-text-primary mb-6 text-2xl font-bold">{title}</h2>
      <div className="border-border overflow-x-auto rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow className="bg-bg-secondary">
              {headers.map((header) => (
                <TableHead key={header} className="text-text-primary font-semibold">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.cells.map((cell, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    className={cell.highlight ? 'text-primary font-semibold' : ''}
                  >
                    <span className="flex items-center gap-2">
                      {cell.icon === 'check' && <Check className="h-4 w-4 text-green-600" />}
                      {cell.text}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
