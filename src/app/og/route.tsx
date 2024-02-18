/* eslint-disable no-console */
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const postTitle = searchParams.get('title');
    const font = fetch(new URL('../../../public/fonts/geist-medium.ttf', import.meta.url)).then(
      (res) => res.arrayBuffer()
    );
    const fontData = await font;

    console.log('postTitle', postTitle);

    return new ImageResponse(
      postTitle === null ? (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundImage: `url(${process.env.URL}/assets/og-default.png)`
          }}
        />
      ) : (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            paddingTop: 190,
            backgroundImage: `url(${process.env.URL}/assets/og-bg.png)`
          }}
        >
          <div
            style={{
              marginLeft: 190,
              marginRight: 190,
              display: 'flex',
              fontSize: 130,
              fontFamily: 'Geist',
              letterSpacing: '-0.05em',
              fontStyle: 'normal',
              color: 'white',
              lineHeight: '120px',
              whiteSpace: 'pre-wrap'
            }}
          >
            {postTitle}
          </div>
        </div>
      ),
      {
        width: 1920,
        height: 1080,
        fonts: [
          {
            name: 'Geist',
            data: fontData,
            style: 'normal'
          }
        ]
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500
    });
  }
}