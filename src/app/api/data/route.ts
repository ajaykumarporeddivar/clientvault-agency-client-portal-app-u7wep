import {
  MOCK_AGENCIES,
  MOCK_CLIENTS,
  MOCK_DELIVERABLES,
  MOCK_INVOICES,
  MOCK_PROJECTS,
  MOCK_REPORTS,
  STATS,
} from '@/lib/data';
import { NextResponse } from 'next/server';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function GET(): Promise<Response> {
  console.log(JSON.stringify({ route: '/api/data', method: 'GET', ts: Date.now() }));
  try {
    const data = {
      agencies: MOCK_AGENCIES,
      clients: MOCK_CLIENTS,
      projects: MOCK_PROJECTS,
      deliverables: MOCK_DELIVERABLES,
      reports: MOCK_REPORTS,
      invoices: MOCK_INVOICES,
    };
    return NextResponse.json({
      ok: true,
      data,
      stats: STATS,
      total: Object.keys(data).reduce((acc, key) => acc + data[key as keyof typeof data].length, 0),
    }, {
      status: 200,
      headers: CORS_HEADERS,
    });
  } catch (e: unknown) {
    console.error(JSON.stringify({ route: '/api/data', error: String(e), ts: Date.now() }));
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500, headers: CORS_HEADERS });
  }
}

export async function POST(request: Request): Promise<Response> {
  console.log(JSON.stringify({ route: '/api/data', method: 'POST', ts: Date.now() }));
  try {
    const body = await request.json();
    return NextResponse.json({
      ok: true,
      message: 'Demo mode — data not persisted',
      received: body,
    }, {
      status: 200,
      headers: CORS_HEADERS,
    });
  } catch (e: unknown) {
    console.error(JSON.stringify({ route: '/api/data', error: String(e), ts: Date.now() }));
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500, headers: CORS_HEADERS });
  }
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, { status: 200, headers: CORS_HEADERS });
}