const cache = new Map();

export default async function getBase64ImageUrl(image) {
  let url = cache.get(image);
  if (url) {
    return url;
  }
  const base64str = await fetch(
    `https://media.graphassets.com/resize=width:8/${image.handle}`
  ).then(async (response) =>
    Buffer.from(await response.arrayBuffer()).toString("base64")
  );

  const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='1' />
      </filter>

      <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%' 
      href='data:image/avif;base64,${base64str}' />
    </svg>
  `;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  url = `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
  cache.set(image, url);
  return url;
}
