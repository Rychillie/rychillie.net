import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const size = {
    width: 1200,
    height: 630
  };

  try {
    const { searchParams } = req.nextUrl;
    const postTitle = searchParams.get('title');

    return new ImageResponse(
      postTitle === null ? (
        <div
          style={{
            ...size,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundImage: `url(https://rychillie.net/assets/og-default.png)`,
            backgroundSize: '1200px 630px'
          }}
        />
      ) : (
        <div
          style={{
            ...size,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            paddingTop: 120,
            backgroundImage: `url(https://rychillie.net/assets/og-bg.png)`,
            backgroundSize: '1200px 630px'
          }}
        >
          <div
            style={{
              marginLeft: 120,
              marginRight: 96,
              display: 'flex',
              fontSize: 64,
              letterSpacing: '-0.05em',
              fontWeight: 700,
              fontStyle: 'normal',
              color: 'white',
              lineHeight: '72px',
              whiteSpace: 'pre-wrap'
            }}
          >
            {postTitle}
          </div>
        </div>
      ),
      {
        ...size
      }
    );
  } catch (e) {
    return new Response(`Error: ${e}`, {
      status: 500
    });
  }
}
