import {
  MOCK_CLIENTS,
  MOCK_DELIVERABLES,
  MOCK_INVOICES,
  MOCK_PROJECTS,
  MOCK_REPORTS,
} from '@/lib/data';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<Response> {
  console.log(JSON.stringify({ route: '/api/search', method: 'GET', ts: Date.now() }));
  try {
    const { searchParams } = request.nextUrl;
    const query = searchParams.get('q') || '';
    const typeFilter = searchParams.get('type');

    const lowerCaseQuery = query.toLowerCase();

    let allSearchableItems: Array<any> = [];

    // Combine all mock data into a single searchable array with a 'type' field
    MOCK_PROJECTS.forEach(p => allSearchableItems.push({ ...p, type: 'project' }));
    MOCK_CLIENTS.forEach(c => allSearchableItems.push({ ...c, type: 'client' }));
    MOCK_DELIVERABLES.forEach(d => allSearchableItems.push({ ...d, type: 'deliverable' }));
    MOCK_REPORTS.forEach(r => allSearchableItems.push({ ...r, type: 'report' }));
    MOCK_INVOICES.forEach(i => allSearchableItems.push({ ...i, type: 'invoice' }));

    // Apply type filter if specified
    if (typeFilter) {
      allSearchableItems = allSearchableItems.filter(item => item.type === typeFilter);
    }

    let matchingItems = [];

    if (!query) {
      // If query is empty, return first 5 items from the type-filtered list
      matchingItems = allSearchableItems.slice(0, 5);
    } else {
      matchingItems = allSearchableItems.filter(item => {
        switch (item.type) {
          case 'project':
            return item.name.toLowerCase().includes(lowerCaseQuery) ||
                   item.description.toLowerCase().includes(lowerCaseQuery);
          case 'client':
            return item.name.toLowerCase().includes(lowerCaseQuery) ||
                   item.email.toLowerCase().includes(lowerCaseQuery);
          case 'deliverable':
            return item.name.toLowerCase().includes(lowerCaseQuery) ||
                   item.description.toLowerCase().includes(lowerCaseQuery);
          case 'report':
            return item.title.toLowerCase().includes(lowerCaseQuery) ||
                   item.content.toLowerCase().includes(lowerCaseQuery);
          case 'invoice':
            // For invoices, search by related client name or project name if available, or specific description
            const invoiceDescription = item.description || `Invoice for ${item.amount}`; // Fallback description
            return invoiceDescription.toLowerCase().includes(lowerCaseQuery) ||
                   MOCK_CLIENTS.find(c => c.id === item.clientId)?.name.toLowerCase().includes(lowerCaseQuery) ||
                   MOCK_PROJECTS.find(p => p.id === item.projectId)?.name.toLowerCase().includes(lowerCaseQuery);
          default:
            return false;
        }
      });
    }

    // Limit results to 20
    const results = matchingItems.slice(0, 20);

    return NextResponse.json({
      ok: true,
      data: { results, total: results.length, query },
    }, { status: 200 });
  } catch (e: unknown) {
    console.error(JSON.stringify({ route: '/api/search', error: String(e), ts: Date.now() }));
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}