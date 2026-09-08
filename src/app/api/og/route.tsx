/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { DATA } from '@/data/resume';

export const runtime = 'edge';

const avatarUrl = `${DATA.url}${DATA.avatarUrl}`;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title');

  if (title) {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '80px',
            backgroundColor: '#0a0a0a',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            borderBottom: '6px solid #ffffff',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src={avatarUrl}
                width="40"
                height="40"
                style={{ borderRadius: '50%' }}
              />
              <span style={{ color: '#ffffff', fontSize: '20px', fontWeight: 600 }}>
                {DATA.name}
              </span>
            </div>
            <h1
              style={{
                fontSize: title.length > 50 ? '50px' : '62px',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.1,
                margin: 0,
                maxWidth: '950px',
                letterSpacing: '-1.5px',
              }}
            >
              {title}
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: '#a1a1aa', fontSize: '20px' }}>
              {DATA.url.replace('https://', '')}
            </span>
            <span style={{ color: '#a1a1aa', fontSize: '20px' }}>
              Portfolio
            </span>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          backgroundColor: '#0a0a0a',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px',
            flex: 1,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h1
              style={{
                fontSize: '56px',
                fontWeight: 800,
                color: '#ffffff',
                margin: 0,
                letterSpacing: '-2px',
                lineHeight: 1.1,
              }}
            >
              {DATA.name}
            </h1>

            <p
              style={{
                fontSize: '26px',
                color: '#a1a1aa',
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              16-year-old developer & founder building Shiplog, YScroll, and modern web apps.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '12px',
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
              <span style={{ color: '#71717a', fontSize: '18px' }}>
                {DATA.url.replace('https://', '')}
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '400px',
            backgroundColor: '#18181b',
            borderLeft: '1px solid #27272a',
          }}
        >
          <img
            src={avatarUrl}
            width="180"
            height="180"
            style={{ borderRadius: '50%' }}
          />
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
