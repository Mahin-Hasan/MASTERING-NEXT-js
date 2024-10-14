// export const dynamic = 'force-dynamic' //solving cached behaviour

export async function GET() {
  return Response.json({
    currentTime: new Date().toLocaleTimeString(),
  });
}
